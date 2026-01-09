import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Flame, Trophy, TrendingUp, BookOpen, Users, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProgressBar from '@/components/ProgressBar';
import LessonCard from '@/components/LessonCard';
import Badge from '@/components/Badge';
import { getUser, isAuthenticated, isOnboardingComplete, UserData, updateUser } from '@/lib/storage';
import { module3Lessons, module3Badges } from '@/data/module3Lessons';

const Module3Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserData | null>(getUser());
  const [showCertificate, setShowCertificate] = useState(false);

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
    if (!userData?.modulo_3_liberado) {
      navigate('/dashboard');
      return;
    }

    // Check if program is complete
    if (userData && userData.modulo_3_progreso >= 100 && !userData.programa_completado) {
      updateUser({
        programa_completado: true,
        fecha_certificado: new Date().toISOString()
      });
      setShowCertificate(true);
    }
  }, [navigate]);

  if (!user || !user.modulo_3_liberado) return null;

  const completedLessons = user.modulo_3_lecciones_completadas?.length || 0;
  const progress = user.modulo_3_progreso || 0;

  const isLessonUnlocked = (lessonId: number) => {
    if (lessonId === 1) return true;
    return (user.modulo_3_lecciones_completadas || []).includes(lessonId - 1);
  };

  const isLessonCompleted = (lessonId: number) => {
    return (user.modulo_3_lecciones_completadas || []).includes(lessonId);
  };

  const earnedModule3Badges = module3Badges.filter((_, index) => 
    (user.modulo_3_lecciones_completadas || []).includes(index + 1)
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
              Tu progreso en Blindaje Emocional
            </p>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="card-premium">
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

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="card-premium">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                  <Flame className="w-5 h-5 text-warning" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{user.modulo_3_racha || 1}</p>
                  <p className="text-sm text-muted-foreground">Días racha</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="card-premium">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">Experto</p>
                  <p className="text-sm text-muted-foreground">Nivel</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="card-premium">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{earnedModule3Badges.length}</p>
                  <p className="text-sm text-muted-foreground">Badges</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Community Access Banner */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-gradient-to-r from-primary/10 to-success/10 rounded-2xl p-6 mb-8 border border-primary/20">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-display text-xl font-bold mb-1">Comunidad Exclusiva</h3>
                <p className="text-muted-foreground">Acceso a nuestra comunidad de élite con soporte, webinars y networking</p>
              </div>
              <button onClick={() => alert('Link a comunidad Discord/Telegram')} className="btn-primary">
                Entrar a la Comunidad
              </button>
            </div>
          </motion.div>

          {/* Progress Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="card-premium mb-8">
            <h2 className="font-display text-xl font-semibold mb-4">Tu Progreso en el Módulo 3</h2>
            <ProgressBar progress={progress} size="lg" showPercentage />
            {progress >= 100 && (
              <div className="mt-4 flex items-center gap-3 text-success">
                <Award className="w-6 h-6" />
                <span className="font-semibold">¡Has completado el programa! Tu certificado está disponible.</span>
              </div>
            )}
          </motion.div>

          {/* Badges Section */}
          {earnedModule3Badges.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mb-8">
              <h2 className="font-display text-xl font-semibold mb-4">Tus Badges del Módulo 3 🏆</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {module3Badges.map((badge, index) => (
                  <Badge key={badge} name={badge} icon={module3Lessons[index]?.icon} isLocked={!earnedModule3Badges.includes(badge)} />
                ))}
              </div>
            </motion.div>
          )}

          {/* Lessons Grid */}
          <div>
            <h2 className="font-display text-xl font-semibold mb-4">Lecciones del Módulo 3</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {module3Lessons.map((lesson) => (
                <LessonCard
                  key={lesson.id}
                  id={lesson.id}
                  title={lesson.title}
                  subtitle={lesson.subtitle}
                  icon={lesson.icon}
                  isCompleted={isLessonCompleted(lesson.id)}
                  isLocked={!isLessonUnlocked(lesson.id)}
                  onClick={() => navigate(`/modulo3/lesson/${lesson.id}`)}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Module3Dashboard;
