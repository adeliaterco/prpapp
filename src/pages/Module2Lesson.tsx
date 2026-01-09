import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle, Download, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Module3UpsellModal from '@/components/Module3UpsellModal';
import Module3MidUpsellModal from '@/components/Module3MidUpsellModal';
import { getUser, updateUser, isAuthenticated, UserData } from '@/lib/storage';
import { 
  getModule2LessonById, 
  getNextModule2LessonId, 
  getPreviousModule2LessonId,
  module2Badges 
} from '@/data/module2Lessons';

const Module2Lesson = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const lessonId = parseInt(id || '1');
  
  const [user, setUser] = useState<UserData | null>(getUser());
  const [showUpsell, setShowUpsell] = useState(false);
  const [showMidUpsell, setShowMidUpsell] = useState(false);
  const [isCompleting, setIsCompleting] = useState(false);

  const lesson = getModule2LessonById(lessonId);
  const nextLessonId = getNextModule2LessonId(lessonId);
  const prevLessonId = getPreviousModule2LessonId(lessonId);

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/');
      return;
    }

    const userData = getUser();
    if (!userData?.modulo_2_liberado) {
      navigate('/dashboard');
      return;
    }

    // Check if lesson is unlocked
    if (lessonId > 1) {
      const completedLessons = userData.modulo_2_lecciones_completadas || [];
      if (!completedLessons.includes(lessonId - 1)) {
        navigate('/modulo2');
        return;
      }
    }

    window.scrollTo(0, 0);
  }, [lessonId, navigate]);

  if (!lesson || !user) {
    return null;
  }

  const isCompleted = (user.modulo_2_lecciones_completadas || []).includes(lessonId);

  const handleComplete = () => {
    setIsCompleting(true);
    
    const currentCompleted = user.modulo_2_lecciones_completadas || [];
    
    if (!currentCompleted.includes(lessonId)) {
      const newCompleted = [...currentCompleted, lessonId];
      const newProgress = Math.round((newCompleted.length / 7) * 100);
      
      // Update streak
      const today = new Date().toDateString();
      const lastAccess = user.modulo_2_ultimo_acceso 
        ? new Date(user.modulo_2_ultimo_acceso).toDateString() 
        : today;
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      
      let newStreak = user.modulo_2_racha || 1;
      if (lastAccess === yesterday) {
        newStreak += 1;
      } else if (lastAccess !== today) {
        newStreak = 1;
      }
      
      const updatedUser = updateUser({
        modulo_2_lecciones_completadas: newCompleted,
        modulo_2_progreso: newProgress,
        modulo_2_racha: newStreak,
        modulo_2_ultimo_acceso: new Date().toISOString(),
        puntos: (user.puntos || 0) + 150, // More points for advanced module
      });
      
      if (updatedUser) {
        setUser(updatedUser);
      }
      
      // Show mid-upsell after lesson 5
      if (lessonId === 5 && !user.modulo_3_liberado) {
        setTimeout(() => {
          setShowMidUpsell(true);
        }, 1500);
      }
      
      // Show upsell after lesson 6 (80% progress)
      if (lessonId === 6 && !user.modulo_3_liberado) {
        setTimeout(() => {
          setShowUpsell(true);
        }, 1500);
      }
    }
    
    setTimeout(() => {
      setIsCompleting(false);
      if (nextLessonId) {
        navigate(`/modulo2/lesson/${nextLessonId}`);
      } else {
        navigate('/modulo2');
      }
    }, 1000);
  };

  const handleDownload = (type: string) => {
    // Placeholder for download functionality
    alert(`Descargando: ${type}`);
  };

  // Parse content for rich formatting
  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, idx) => {
      // Check for headers
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return (
          <h4 key={idx} className="font-display font-bold text-lg mt-6 mb-3">
            {paragraph.replace(/\*\*/g, '')}
          </h4>
        );
      }
      
      // Check for lists
      if (paragraph.includes('\n- ') || paragraph.startsWith('- ')) {
        const items = paragraph.split('\n').filter(item => item.startsWith('- '));
        return (
          <ul key={idx} className="list-disc list-inside space-y-2 my-4 ml-4">
            {items.map((item, i) => (
              <li key={i} className="text-muted-foreground">
                {item.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
              </li>
            ))}
          </ul>
        );
      }

      // Check for numbered lists
      if (/^\d+\./.test(paragraph)) {
        const items = paragraph.split('\n').filter(item => /^\d+\./.test(item) || item.startsWith('   '));
        return (
          <ol key={idx} className="list-decimal list-inside space-y-2 my-4 ml-4">
            {items.map((item, i) => (
              <li key={i} className="text-muted-foreground">
                {item.replace(/^\d+\.\s*/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
              </li>
            ))}
          </ol>
        );
      }

      // Check for horizontal rule
      if (paragraph === '---') {
        return <hr key={idx} className="my-6 border-border" />;
      }

      // Check for code blocks or examples
      if (paragraph.startsWith('❌') || paragraph.startsWith('✅')) {
        return (
          <div key={idx} className={`p-4 rounded-lg my-4 ${
            paragraph.startsWith('❌') ? 'bg-destructive/5 border border-destructive/20' : 'bg-success/5 border border-success/20'
          }`}>
            <p className="whitespace-pre-wrap">{paragraph}</p>
          </div>
        );
      }
      
      // Regular paragraph with bold text support
      const formattedText = paragraph
        .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');
      
      return (
        <p 
          key={idx} 
          className="text-muted-foreground leading-relaxed my-4"
          dangerouslySetInnerHTML={{ __html: formattedText }}
        />
      );
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Lesson Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 text-primary mb-4">
              <span className="text-sm font-medium">Módulo 2</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm font-medium">Lección {lessonId} de 7</span>
              {isCompleted && (
                <>
                  <span className="text-muted-foreground">•</span>
                  <span className="flex items-center gap-1 text-success text-sm">
                    <CheckCircle className="w-4 h-4" />
                    Completada
                  </span>
                </>
              )}
            </div>
            
            <div className="flex items-start gap-4">
              <span className="text-5xl">{lesson.icon}</span>
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
                  {lesson.title}
                </h1>
                <p className="text-muted-foreground text-lg">
                  {lesson.subtitle}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Downloadables */}
          {lesson.downloadables && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-muted/30 rounded-xl p-4 mb-8"
            >
              <p className="font-semibold mb-3 flex items-center gap-2">
                <Download className="w-5 h-5 text-primary" />
                Materiales descargables
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => handleDownload('PDF')}
                  className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg hover:bg-muted transition-colors text-sm"
                >
                  <FileText className="w-4 h-4 text-primary" />
                  Descargar PDF
                </button>
                <button
                  onClick={() => handleDownload('Checklist')}
                  className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg hover:bg-muted transition-colors text-sm"
                >
                  <FileText className="w-4 h-4 text-success" />
                  Descargar Checklist
                </button>
                {lesson.downloadables.scripts && (
                  <button
                    onClick={() => handleDownload('Scripts')}
                    className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg hover:bg-muted transition-colors text-sm"
                  >
                    <FileText className="w-4 h-4 text-warning" />
                    Templates de Scripts
                  </button>
                )}
              </div>
            </motion.div>
          )}

          {/* Lesson Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {lesson.sections.map((section, index) => (
              <motion.section
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
                className="mb-12"
              >
                <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
                  {section.title}
                </h3>
                {renderContent(section.content)}
              </motion.section>
            ))}

            {/* Image Placeholder */}
            <div className="bg-muted/30 rounded-xl p-8 my-8 text-center border-2 border-dashed border-border">
              <p className="text-muted-foreground text-sm">
                {lesson.imagePlaceholder}
              </p>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t border-border"
          >
            {prevLessonId && (
              <button
                onClick={() => navigate(`/modulo2/lesson/${prevLessonId}`)}
                className="btn-secondary flex items-center justify-center gap-2 flex-1"
              >
                <ArrowLeft className="w-4 h-4" />
                Lección Anterior
              </button>
            )}
            
            <button
              onClick={handleComplete}
              disabled={isCompleting}
              className={`btn-primary flex items-center justify-center gap-2 flex-1 ${
                isCompleting ? 'opacity-75' : ''
              }`}
            >
              {isCompleting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  Completando...
                </>
              ) : isCompleted ? (
                <>
                  {nextLessonId ? 'Siguiente Lección' : 'Volver al Dashboard'}
                  <ArrowRight className="w-4 h-4" />
                </>
              ) : (
                <>
                  Marcar como Completada
                  <CheckCircle className="w-4 h-4" />
                </>
              )}
            </button>
          </motion.div>

          {/* Badge Earned */}
          {isCompleted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 text-center"
            >
              <div className="inline-flex items-center gap-3 bg-success/10 text-success px-6 py-3 rounded-full">
                <span className="text-2xl">🏆</span>
                <span className="font-medium">
                  Badge desbloqueado: {module2Badges[lessonId - 1]}
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />

      <Module3UpsellModal 
        isOpen={showUpsell} 
        onClose={() => setShowUpsell(false)} 
      />

      <Module3MidUpsellModal
        isOpen={showMidUpsell}
        onClose={() => setShowMidUpsell(false)}
      />
    </div>
  );
};

export default Module2Lesson;
