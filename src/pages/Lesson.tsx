import { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Image as ImageIcon, Lock, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import UpsellModal from '@/components/UpsellModal';
import QuestionField, { Question } from '@/components/QuestionField';
import { getLessonById, getNextLessonId, getPreviousLessonId, lessonQuestions } from '@/data/lessons';
import { getUser, completeLesson, isAuthenticated, isOnboardingComplete, saveLessonResponses, getLessonResponses, LessonResponses } from '@/lib/storage';

const Lesson = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [showUpsell, setShowUpsell] = useState(false);
  const [isCompleting, setIsCompleting] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const [responses, setResponses] = useState<LessonResponses>({});
  
  const lessonId = parseInt(id || '1');
  const lesson = getLessonById(lessonId);
  const user = getUser();
  const questions = lessonQuestions[lessonId] || [];

  // Load saved responses
  useEffect(() => {
    const saved = getLessonResponses(1, lessonId);
    if (saved) {
      setResponses(saved);
    } else {
      setResponses({});
    }
    setShowErrors(false);
  }, [lessonId]);

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/');
      return;
    }
    
    if (!isOnboardingComplete()) {
      navigate('/onboarding');
      return;
    }

    // Check if lesson is unlocked
    if (lessonId > 1 && user && !user.modulo_1_lecciones_completadas.includes(lessonId - 1)) {
      navigate('/dashboard');
      return;
    }
  }, [lessonId, navigate, user]);

  // Calculate progress
  const questionsProgress = useMemo(() => {
    if (questions.length === 0) return 100;
    const answered = questions.filter(q => responses[q.id]?.trim()).length;
    return Math.round((answered / questions.length) * 100);
  }, [questions, responses]);

  const allQuestionsAnswered = useMemo(() => {
    if (questions.length === 0) return true;
    return questions.every(q => {
      if (q.required === false) return true;
      const answer = responses[q.id]?.trim() || '';
      if (q.minLength && answer.length < q.minLength) return false;
      return answer.length > 0;
    });
  }, [questions, responses]);

  if (!lesson || !user) {
    return null;
  }

  const previousLessonId = getPreviousLessonId(lessonId);
  const nextLessonId = getNextLessonId(lessonId);
  const isCompleted = user.modulo_1_lecciones_completadas.includes(lessonId);

  const handleResponseChange = (questionId: string, value: string) => {
    const newResponses = { ...responses, [questionId]: value };
    setResponses(newResponses);
    // Auto-save responses
    saveLessonResponses(1, lessonId, newResponses);
  };

  const handleComplete = async () => {
    // Validate all questions are answered
    if (!allQuestionsAnswered && questions.length > 0) {
      setShowErrors(true);
      // Scroll to first unanswered question
      const firstUnanswered = questions.find(q => !responses[q.id]?.trim());
      if (firstUnanswered) {
        const element = document.getElementById(`question-${firstUnanswered.id}`);
        element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsCompleting(true);
    
    // Save responses
    saveLessonResponses(1, lessonId, responses);
    
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const updatedUser = completeLesson(lessonId);
    
    // Check if should show upsell (after completing lesson 6)
    if (lessonId === 6 && updatedUser && !updatedUser.modulo_2_liberado) {
      setShowUpsell(true);
    } else if (nextLessonId) {
      navigate(`/lesson/${nextLessonId}`);
    } else {
      navigate('/dashboard');
    }
    
    setIsCompleting(false);
  };

  const formatContent = (content: string) => {
    // Split content into paragraphs and format markdown-like syntax
    return content.split('\n\n').map((paragraph, index) => {
      // Handle horizontal rules
      if (paragraph.trim() === '---') {
        return <hr key={index} className="my-8 border-border/50" />;
      }

      // Handle lists
      if (paragraph.includes('- ')) {
        const items = paragraph.split('\n').filter(line => line.startsWith('- '));
        return (
          <ul key={index} className="my-6 space-y-3">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span dangerouslySetInnerHTML={{ 
                  __html: item.substring(2).replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
                    .replace(/\*(.*?)\*/g, '<em class="text-accent">$1</em>')
                }} />
              </li>
            ))}
          </ul>
        );
      }

      // Handle checkmark lists
      if (paragraph.includes('✅ ') || paragraph.includes('❌ ')) {
        const items = paragraph.split('\n').filter(line => line.startsWith('✅') || line.startsWith('❌'));
        return (
          <ul key={index} className="my-6 space-y-3">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-3 rounded-xl bg-secondary/30">
                <span className="text-xl">{item.substring(0, 2)}</span>
                <span dangerouslySetInnerHTML={{ 
                  __html: item.substring(3).replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
                    .replace(/\*(.*?)\*/g, '<em class="text-accent">$1</em>')
                }} />
              </li>
            ))}
          </ul>
        );
      }

      // Regular paragraph with markdown formatting
      return (
        <p 
          key={index} 
          className="mb-5 leading-relaxed text-muted-foreground"
          dangerouslySetInnerHTML={{ 
            __html: paragraph
              .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
              .replace(/\*(.*?)\*/g, '<em class="text-accent">$1</em>')
              .replace(/`(.*?)`/g, '<code class="bg-secondary px-2 py-1 rounded-lg text-sm text-accent">$1</code>')
          }} 
        />
      );
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8 max-w-4xl">
          {/* Back button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/modulo1')}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4 sm:mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Volver al Dashboard</span>
          </motion.button>

          {/* Lesson Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 sm:mb-10"
          >
            <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="icon-container text-2xl sm:text-4xl shrink-0 w-10 h-10 sm:w-14 sm:h-14">
                {lesson.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1 sm:mb-2">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Lección {lesson.id} de 7
                  </span>
                  {isCompleted && (
                    <span className="badge-success text-xs">
                      <Check className="w-3 h-3" /> Completada
                    </span>
                  )}
                </div>
                <h1 className="font-display text-xl sm:text-3xl md:text-4xl font-bold text-gradient">
                  {lesson.title}
                </h1>
              </div>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground sm:pl-[72px]">
              {lesson.subtitle}
            </p>

            {/* Progress Bar for Questions */}
            {questions.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-xl bg-secondary/30 border border-border"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                    Progreso de preguntas
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-foreground">
                    {questionsProgress}%
                  </span>
                </div>
                <div className="progress-bar">
                  <motion.div 
                    className="progress-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${questionsProgress}%` }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            )}
          </motion.div>

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
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1), duration: 0.5 }}
                className="mb-12"
              >
                <h2 className="font-display text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <span className="w-1 h-8 rounded-full bg-gradient-to-b from-primary to-accent" />
                  {section.title}
                </h2>
                <div className="text-muted-foreground">
                  {formatContent(section.content)}
                </div>
              </motion.section>
            ))}

            {/* Lesson Image */}
            {lesson.image ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="my-10 rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-secondary/20"
              >
                <img 
                  src={lesson.image} 
                  alt={lesson.title}
                  className="w-full h-auto object-contain"
                  style={{ imageRendering: 'auto' }}
                  loading="lazy"
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="my-10 p-8 rounded-2xl border border-dashed border-border/50 flex flex-col items-center justify-center text-center bg-secondary/20"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-4">
                  <ImageIcon className="w-8 h-8 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground max-w-md">
                  {lesson.imagePlaceholder}
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Questions Section */}
          {questions.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 sm:mt-16 mb-8 sm:mb-12"
            >
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <h2 className="font-display text-lg sm:text-2xl font-bold text-foreground">
                    Preguntas de Reflexión
                  </h2>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Responde para continuar a la siguiente lección
                  </p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {questions.map((question, index) => (
                  <div key={question.id} id={`question-${question.id}`}>
                    <QuestionField
                      question={question}
                      value={responses[question.id] || ''}
                      onChange={(value) => handleResponseChange(question.id, value)}
                      showError={showErrors}
                      index={index}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="sticky bottom-0 bg-background/95 backdrop-blur-premium border-t border-border py-4 sm:py-6 mt-8 sm:mt-12 -mx-3 sm:-mx-4 px-3 sm:px-4"
          >
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 max-w-4xl mx-auto">
              {previousLessonId ? (
                <button
                  onClick={() => navigate(`/lesson/${previousLessonId}`)}
                  className="btn-secondary flex items-center justify-center gap-2 order-2 sm:order-1"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Anterior</span>
                </button>
              ) : (
                <div className="hidden sm:block" />
              )}

              <button
                onClick={handleComplete}
                disabled={isCompleting || (!allQuestionsAnswered && questions.length > 0 && !isCompleted)}
                className={`btn-primary flex items-center justify-center gap-2 order-1 sm:order-2 ${
                  allQuestionsAnswered || questions.length === 0 || isCompleted
                    ? 'pulse-subtle' 
                    : 'opacity-50 cursor-not-allowed'
                }`}
              >
                {isCompleting ? (
                  <span className="animate-pulse">Guardando...</span>
                ) : !allQuestionsAnswered && questions.length > 0 && !isCompleted ? (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Responde las Preguntas</span>
                  </>
                ) : (
                  <>
                    <Check className="w-4 h-4" />
                    <span>
                      {isCompleted 
                        ? 'Siguiente Lección' 
                        : 'Completar Lección'
                      }
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />

      <UpsellModal 
        isOpen={showUpsell} 
        onClose={() => {
          setShowUpsell(false);
          if (nextLessonId) {
            navigate(`/lesson/${nextLessonId}`);
          } else {
            navigate('/dashboard');
          }
        }} 
      />
    </div>
  );
};

export default Lesson;