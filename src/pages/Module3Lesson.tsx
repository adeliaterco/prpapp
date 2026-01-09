import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle, Download, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getUser, updateUser, isAuthenticated, UserData } from '@/lib/storage';
import { getModule3LessonById, getNextModule3LessonId, getPreviousModule3LessonId, module3Badges } from '@/data/module3Lessons';

const Module3Lesson = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const lessonId = parseInt(id || '1');
  
  const [user, setUser] = useState<UserData | null>(getUser());
  const [isCompleting, setIsCompleting] = useState(false);

  const lesson = getModule3LessonById(lessonId);
  const nextLessonId = getNextModule3LessonId(lessonId);
  const prevLessonId = getPreviousModule3LessonId(lessonId);

  useEffect(() => {
    if (!isAuthenticated()) { navigate('/'); return; }
    const userData = getUser();
    if (!userData?.modulo_3_liberado) { navigate('/dashboard'); return; }
    if (lessonId > 1) {
      const completedLessons = userData.modulo_3_lecciones_completadas || [];
      if (!completedLessons.includes(lessonId - 1)) { navigate('/modulo3'); return; }
    }
    window.scrollTo(0, 0);
  }, [lessonId, navigate]);

  if (!lesson || !user) return null;

  const isCompleted = (user.modulo_3_lecciones_completadas || []).includes(lessonId);

  const handleComplete = () => {
    setIsCompleting(true);
    const currentCompleted = user.modulo_3_lecciones_completadas || [];
    
    if (!currentCompleted.includes(lessonId)) {
      const newCompleted = [...currentCompleted, lessonId];
      const newProgress = Math.round((newCompleted.length / 7) * 100);
      
      const today = new Date().toDateString();
      const lastAccess = user.modulo_3_ultimo_acceso ? new Date(user.modulo_3_ultimo_acceso).toDateString() : today;
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      let newStreak = user.modulo_3_racha || 1;
      if (lastAccess === yesterday) newStreak += 1;
      else if (lastAccess !== today) newStreak = 1;
      
      const updatedUser = updateUser({
        modulo_3_lecciones_completadas: newCompleted,
        modulo_3_progreso: newProgress,
        modulo_3_racha: newStreak,
        modulo_3_ultimo_acceso: new Date().toISOString(),
        puntos: (user.puntos || 0) + 200,
        programa_completado: newProgress >= 100,
        fecha_certificado: newProgress >= 100 ? new Date().toISOString() : user.fecha_certificado,
      });
      if (updatedUser) setUser(updatedUser);
    }
    
    setTimeout(() => {
      setIsCompleting(false);
      if (nextLessonId) navigate(`/modulo3/lesson/${nextLessonId}`);
      else navigate('/modulo3');
    }, 1000);
  };

  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, idx) => {
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return <h4 key={idx} className="font-display font-bold text-lg mt-6 mb-3">{paragraph.replace(/\*\*/g, '')}</h4>;
      }
      if (paragraph.includes('\n- ') || paragraph.startsWith('- ')) {
        const items = paragraph.split('\n').filter(item => item.startsWith('- '));
        return <ul key={idx} className="list-disc list-inside space-y-2 my-4 ml-4">{items.map((item, i) => <li key={i} className="text-muted-foreground">{item.replace('- ', '')}</li>)}</ul>;
      }
      if (paragraph === '---') return <hr key={idx} className="my-6 border-border" />;
      if (paragraph.startsWith('❌') || paragraph.startsWith('✅')) {
        return <div key={idx} className={`p-4 rounded-lg my-4 ${paragraph.startsWith('❌') ? 'bg-destructive/5 border border-destructive/20' : 'bg-success/5 border border-success/20'}`}><p className="whitespace-pre-wrap">{paragraph}</p></div>;
      }
      const formattedText = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>');
      return <p key={idx} className="text-muted-foreground leading-relaxed my-4" dangerouslySetInnerHTML={{ __html: formattedText }} />;
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <div className="flex items-center gap-2 text-primary mb-4">
              <span className="text-sm font-medium">Módulo 3</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm font-medium">Lección {lessonId} de 7</span>
              {isCompleted && (<><span className="text-muted-foreground">•</span><span className="flex items-center gap-1 text-success text-sm"><CheckCircle className="w-4 h-4" />Completada</span></>)}
            </div>
            <div className="flex items-start gap-4">
              <span className="text-5xl">{lesson.icon}</span>
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">{lesson.title}</h1>
                <p className="text-muted-foreground text-lg">{lesson.subtitle}</p>
              </div>
            </div>
          </motion.div>

          {lesson.downloadables && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-muted/30 rounded-xl p-4 mb-8">
              <p className="font-semibold mb-3 flex items-center gap-2"><Download className="w-5 h-5 text-primary" />Materiales descargables</p>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => alert('Descargando PDF')} className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg hover:bg-muted transition-colors text-sm"><FileText className="w-4 h-4 text-primary" />Descargar PDF</button>
                <button onClick={() => alert('Descargando Checklist')} className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg hover:bg-muted transition-colors text-sm"><FileText className="w-4 h-4 text-success" />Descargar Checklist</button>
                {lesson.downloadables.protocol && <button onClick={() => alert('Descargando Protocolo')} className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg hover:bg-muted transition-colors text-sm"><FileText className="w-4 h-4 text-warning" />Protocolo 30 Días</button>}
              </div>
            </motion.div>
          )}

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="prose prose-lg max-w-none">
            {lesson.sections.map((section, index) => (
              <motion.section key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * (index + 1) }} className="mb-12">
                <h3 className="font-display text-2xl font-bold mb-4 text-foreground">{section.title}</h3>
                {renderContent(section.content)}
              </motion.section>
            ))}
            <div className="bg-muted/30 rounded-xl p-8 my-8 text-center border-2 border-dashed border-border">
              <p className="text-muted-foreground text-sm">{lesson.imagePlaceholder}</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t border-border">
            {prevLessonId && <button onClick={() => navigate(`/modulo3/lesson/${prevLessonId}`)} className="btn-secondary flex items-center justify-center gap-2 flex-1"><ArrowLeft className="w-4 h-4" />Lección Anterior</button>}
            <button onClick={handleComplete} disabled={isCompleting} className={`btn-primary flex items-center justify-center gap-2 flex-1 ${isCompleting ? 'opacity-75' : ''}`}>
              {isCompleting ? (<><motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" />Completando...</>) : isCompleted ? (<>{nextLessonId ? 'Siguiente Lección' : 'Volver al Dashboard'}<ArrowRight className="w-4 h-4" /></>) : (<>Marcar como Completada<CheckCircle className="w-4 h-4" /></>)}
            </button>
          </motion.div>

          {isCompleted && <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="mt-8 text-center"><div className="inline-flex items-center gap-3 bg-success/10 text-success px-6 py-3 rounded-full"><span className="text-2xl">🏆</span><span className="font-medium">Badge desbloqueado: {module3Badges[lessonId - 1]}</span></div></motion.div>}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Module3Lesson;
