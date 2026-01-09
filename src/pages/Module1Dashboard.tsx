import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Flame, Trophy, TrendingUp, BookOpen } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProgressBar from '@/components/ProgressBar';
import LessonCard from '@/components/LessonCard';
import Badge from '@/components/Badge';
import UpsellModal from '@/components/UpsellModal';
import { getUser, getUserLevel, isAuthenticated, isOnboardingComplete } from '@/lib/storage';
import { lessons } from '@/data/lessons';

const Module1Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(getUser());
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

    // Check if should show upsell (80% progress = lesson 6 completed)
    const userData = getUser();
    if (userData && userData.modulo_1_progreso >= 80 && !userData.modulo_2_liberado) {
      const timer = setTimeout(() => {
        setShowUpsell(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [navigate]);

  if (!user) return null;

  const completedLessons = user.modulo_1_lecciones_completadas.length;
  const level = getUserLevel(user.modulo_1_progreso);

  const isLessonUnlocked = (lessonId: number) => {
    if (lessonId === 1) return true;
    return user.modulo_1_lecciones_completadas.includes(lessonId - 1);
  };

  const isLessonCompleted = (lessonId: number) => {
    return user.modulo_1_lecciones_completadas.includes(lessonId);
  };

  const allBadges = [
    'Maestro del Diagnóstico',
    'Activador de Gatillos',
    'Estratega del Primer Contacto',
    'Maestro de la Escalación',
    'Dominador del Quiebre',
    'Experto en Cierre',
    'Guardián del Futuro'
  ];

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
              ¡Bienvenido, {user.nombre}!
            </h1>
            <p className="text-muted-foreground text-lg">
              Tu progreso en PRP RECONQUISTA
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
                  <p className="text-2xl font-bold">{user.modulo_1_racha}</p>
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
                  <p className="text-2xl font-bold">{user.badges.length}</p>
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
              Tu Progreso en el Módulo 1
            </h2>
            <ProgressBar progress={user.modulo_1_progreso} size="lg" />
          </motion.div>

          {/* Badges Section */}
          {user.badges.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <h2 className="font-display text-xl font-semibold mb-4">
                Tus Badges 🏆
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {allBadges.map((badge, index) => (
                  <Badge
                    key={badge}
                    name={badge}
                    icon={lessons[index]?.icon}
                    isLocked={!user.badges.includes(badge)}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Lessons Grid */}
          <div>
            <h2 className="font-display text-xl font-semibold mb-4">
              Lecciones del Módulo 1
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {lessons.map((lesson) => (
                <LessonCard
                  key={lesson.id}
                  id={lesson.id}
                  title={lesson.title}
                  subtitle={lesson.subtitle}
                  icon={lesson.icon}
                  isCompleted={isLessonCompleted(lesson.id)}
                  isLocked={!isLessonUnlocked(lesson.id)}
                  onClick={() => navigate(`/lesson/${lesson.id}`)}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <UpsellModal 
        isOpen={showUpsell} 
        onClose={() => setShowUpsell(false)} 
      />
    </div>
  );
};

export default Module1Dashboard;
