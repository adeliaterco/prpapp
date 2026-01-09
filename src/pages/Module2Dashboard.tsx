import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Flame, Trophy, TrendingUp, BookOpen } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProgressBar from '@/components/ProgressBar';
import LessonCard from '@/components/LessonCard';
import Badge from '@/components/Badge';
import Module3UpsellModal from '@/components/Module3UpsellModal';
import { getUser, getUserLevel, isAuthenticated, isOnboardingComplete, UserData } from '@/lib/storage';
import { module2Lessons, module2Badges } from '@/data/module2Lessons';

const Module2Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserData | null>(getUser());
  const [showUpsell, setShowUpsell] = useState(false);

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/');
      return;
    }
    
    if (!isOnboardingComplete()) {
      navigate('/onboarding');
      return;
    }

    const userData = getUser();
    if (!userData?.modulo_2_liberado) {
      navigate('/dashboard');
      return;
    }

    // Check if should show upsell (80% progress = lesson 6 completed)
    if (userData && userData.modulo_2_progreso >= 80 && !userData.modulo_3_liberado) {
      const timer = setTimeout(() => {
        setShowUpsell(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [navigate]);

  if (!user || !user.modulo_2_liberado) return null;

  const completedLessons = user.modulo_2_lecciones_completadas?.length || 0;
  const progress = user.modulo_2_progreso || 0;
  const level = progress >= 100 ? 'Avanzado' : 'Intermedio';

  const isLessonUnlocked = (lessonId: number) => {
    if (lessonId === 1) return true;
    return (user.modulo_2_lecciones_completadas || []).includes(lessonId - 1);
  };

  const isLessonCompleted = (lessonId: number) => {
    return (user.modulo_2_lecciones_completadas || []).includes(lessonId);
  };

  // Get earned badges for Module 2
  const earnedModule2Badges = module2Badges.filter((_, index) => 
    (user.modulo_2_lecciones_completadas || []).includes(index + 1)
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
              Bienvenido de nuevo, {user.nombre}
            </h1>
            <p className="text-muted-foreground text-lg">
              Tu progreso en el Protocolo de Dominancia
            </p>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card-premium"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{completedLessons}/7</p>
                  <p className="text-sm text-muted-foreground">Lecciones</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card-premium"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                  <Flame className="w-5 h-5 text-warning" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{user.modulo_2_racha || 1}</p>
                  <p className="text-sm text-muted-foreground">Días racha</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="card-premium"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{level}</p>
                  <p className="text-sm text-muted-foreground">Nivel</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="card-premium"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{earnedModule2Badges.length}</p>
                  <p className="text-sm text-muted-foreground">Badges</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Progress Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="card-premium mb-8"
          >
            <h2 className="font-display text-xl font-semibold mb-4">
              Tu Progreso en el Módulo 2
            </h2>
            <ProgressBar progress={progress} size="lg" showPercentage />
          </motion.div>

          {/* Badges Section */}
          {earnedModule2Badges.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <h2 className="font-display text-xl font-semibold mb-4">
                Tus Badges del Módulo 2 🏆
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {module2Badges.map((badge, index) => (
                  <Badge
                    key={badge}
                    name={badge}
                    icon={module2Lessons[index]?.icon}
                    isLocked={!earnedModule2Badges.includes(badge)}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Lessons Grid */}
          <div>
            <h2 className="font-display text-xl font-semibold mb-4">
              Lecciones del Módulo 2
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {module2Lessons.map((lesson) => (
                <LessonCard
                  key={lesson.id}
                  id={lesson.id}
                  title={lesson.title}
                  subtitle={lesson.subtitle}
                  icon={lesson.icon}
                  isCompleted={isLessonCompleted(lesson.id)}
                  isLocked={!isLessonUnlocked(lesson.id)}
                  onClick={() => navigate(`/modulo2/lesson/${lesson.id}`)}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <Module3UpsellModal 
        isOpen={showUpsell} 
        onClose={() => setShowUpsell(false)} 
      />
    </div>
  );
};

export default Module2Dashboard;
