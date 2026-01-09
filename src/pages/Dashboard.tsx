import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Unlock, CheckCircle, Star, Users, ShieldCheck, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProgressBar from '@/components/ProgressBar';
import { getUser, isAuthenticated, isOnboardingComplete } from '@/lib/storage';
import { useEffect } from 'react';

interface ModulePurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  moduleNumber: 2 | 3;
  title: string;
  description: string;
  price: string;
}

const HOTMART_LINKS = {
  2: 'https://pay.hotmart.com/D100233207O?off=hgjszxx1',
  3: 'https://pay.hotmart.com/N100448107A?off=fh6ck4c7',
};

const ModulePurchaseModal = ({ isOpen, onClose, moduleNumber, title, description, price }: ModulePurchaseModalProps) => {
  if (!isOpen) return null;

  const handlePurchase = () => {
    window.open(HOTMART_LINKS[moduleNumber], '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-card rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
            <Unlock className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="font-display text-2xl font-bold mb-2">
            🔓 {title}
          </h2>
          
          <p className="text-muted-foreground mb-6">
            {description}
          </p>

          <div className="bg-muted/50 rounded-xl p-4 mb-6">
            <p className="text-3xl font-bold text-primary">{price}</p>
            <p className="text-sm text-muted-foreground">Acceso de por vida</p>
          </div>

          <div className="space-y-3">
            <button
              onClick={handlePurchase}
              className="btn-primary w-full py-4 text-lg"
            >
              Desbloquear Ahora
            </button>
            
            <button
              onClick={onClose}
              className="btn-secondary w-full"
            >
              Después
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

interface ModuleCardProps {
  moduleNumber: number;
  title: string;
  description: string;
  isUnlocked: boolean;
  progress?: number;
  price?: string;
  socialProof?: { buyers: number; successRate: number };
  onClick: () => void;
  icon: React.ReactNode;
}

const ModuleCard = ({ 
  moduleNumber, 
  title, 
  description, 
  isUnlocked, 
  progress, 
  price, 
  socialProof,
  onClick,
  icon
}: ModuleCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: moduleNumber * 0.1 }}
      whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
      onClick={onClick}
      className={`
        relative p-6 rounded-2xl cursor-pointer transition-all duration-300
        ${isUnlocked 
          ? 'bg-card border-2 border-success shadow-lg' 
          : 'bg-muted/30 border-2 border-border opacity-90'
        }
      `}
    >
      {/* Status Badge */}
      <div className={`
        absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-semibold
        ${isUnlocked 
          ? 'bg-success text-success-foreground' 
          : 'bg-muted text-muted-foreground'
        }
      `}>
        {isUnlocked ? '✅ Desbloqueado' : '🔒 Bloqueado'}
      </div>

      {/* Module Header */}
      <div className="flex items-start gap-4 mt-2">
        <div className={`
          w-14 h-14 rounded-xl flex items-center justify-center shrink-0
          ${isUnlocked ? 'bg-success/10 text-success' : 'bg-muted text-muted-foreground'}
        `}>
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <p className={`text-sm font-medium ${isUnlocked ? 'text-success' : 'text-muted-foreground'}`}>
            MÓDULO {moduleNumber}
          </p>
          <h3 className="font-display text-xl font-bold truncate">{title}</h3>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>

      {/* Progress (only for unlocked modules with progress) */}
      {isUnlocked && progress !== undefined && progress > 0 && (
        <div className="mt-4">
          <ProgressBar progress={progress} size="sm" showPercentage />
        </div>
      )}

      {/* Price (only for locked modules) */}
      {!isUnlocked && price && (
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-primary">{price}</p>
            <p className="text-xs text-muted-foreground">Acceso de por vida</p>
          </div>
        </div>
      )}

      {/* Social Proof (only for locked modules) */}
      {!isUnlocked && socialProof && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              {socialProof.buyers} personas compraron hoy
            </span>
            <span className="flex items-center gap-1">
              <Star className="w-3 h-3 text-warning" />
              {socialProof.successRate}% de éxito
            </span>
          </div>
        </div>
      )}

      {/* CTA Button */}
      <div className="mt-6">
        <button
          className={`
            w-full py-3 rounded-xl font-semibold transition-all
            ${isUnlocked 
              ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }
          `}
        >
          {isUnlocked 
            ? (progress && progress > 0 ? 'Continuar' : 'Comenzar') 
            : 'Desbloquear Ahora'
          }
        </button>
      </div>
    </motion.div>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(getUser());
  const [purchaseModal, setPurchaseModal] = useState<{ isOpen: boolean; module: 2 | 3 } | null>(null);

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/');
      return;
    }
    
    if (!isOnboardingComplete()) {
      navigate('/onboarding');
      return;
    }
  }, [navigate]);

  if (!user) return null;

  const modules = [
    {
      number: 1,
      title: 'PRP RECONQUISTA',
      description: 'Aprende los fundamentos de la reconquista en 7 lecciones prácticas y efectivas.',
      isUnlocked: true,
      progress: user.modulo_1_progreso,
      icon: <Sparkles className="w-7 h-7" />,
    },
    {
      number: 2,
      title: 'Protocolo de Dominancia',
      description: 'Técnicas avanzadas que funcionan en 95% de casos. Domina el arte de la atracción.',
      isUnlocked: user.modulo_2_liberado,
      price: '$17',
      socialProof: { buyers: 15, successRate: 97 },
      icon: <ShieldCheck className="w-7 h-7" />,
    },
    {
      number: 3,
      title: 'Blindaje Emocional',
      description: 'Cómo mantener la obsesión por 30 días. Incluye acceso a comunidad exclusiva.',
      isUnlocked: user.modulo_3_liberado,
      price: '$37',
      socialProof: { buyers: 12, successRate: 98 },
      icon: <Lock className="w-7 h-7" />,
    },
  ];

  const handleModuleClick = (moduleNumber: number) => {
    if (moduleNumber === 1) {
      navigate('/modulo1');
    } else if (moduleNumber === 2) {
      if (user.modulo_2_liberado) {
        navigate('/modulo2');
      } else {
        setPurchaseModal({ isOpen: true, module: 2 });
      }
    } else if (moduleNumber === 3) {
      if (user.modulo_3_liberado) {
        navigate('/modulo3');
      } else {
        setPurchaseModal({ isOpen: true, module: 3 });
      }
    }
  };

  const features = [
    '7 lecciones por módulo',
    'Contenido científico y probado',
    'Acceso de por vida',
    'Comunidad exclusiva (Módulo 3)',
  ];

  const testimonials = [
    { 
      text: 'El Módulo 1 me dio esperanza, pero el Protocolo de Dominancia cambió todo. Ella ahora me busca a mí.', 
      author: 'Juan M.',
      highlight: 'Protocolo de Dominancia'
    },
    { 
      text: 'Reconquisté con el Módulo 1, pero casi la pierdo de nuevo. El Blindaje Emocional salvó mi relación.', 
      author: 'Carlos R.',
      highlight: 'Blindaje Emocional'
    },
    { 
      text: 'Hice los 3 módulos. Sin el Protocolo y el Blindaje, hubiera sido solo una reconciliación temporal.', 
      author: 'Roberto P.',
      highlight: 'Los 3 módulos'
    },
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
            className="mb-10 text-center md:text-left"
          >
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
              Bienvenido, {user.nombre}
            </h1>
            <p className="text-muted-foreground text-lg">
              Tu viaje hacia la reconquista
            </p>
          </motion.div>

          {/* Modules Section */}
          <section className="mb-12">
            <h2 className="font-display text-xl font-semibold mb-6">Tus Módulos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((module) => (
                <ModuleCard
                  key={module.number}
                  moduleNumber={module.number}
                  title={module.title}
                  description={module.description}
                  isUnlocked={module.isUnlocked}
                  progress={module.progress}
                  price={module.price}
                  socialProof={module.socialProof}
                  onClick={() => handleModuleClick(module.number)}
                  icon={module.icon}
                />
              ))}
            </div>
          </section>

          {/* Features Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="font-display text-xl font-semibold mb-6">¿Por qué este programa?</h2>
            <div className="card-premium">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Testimonials Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="font-display text-xl font-semibold mb-6">Testimonios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="card-premium">
                  <div className="flex items-start gap-3">
                    <div className="text-warning text-2xl">⭐</div>
                    <div>
                      <p className="text-sm mb-2 leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <p className="text-xs text-muted-foreground mb-2">— {testimonial.author}</p>
                      <span className="inline-block text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {testimonial.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />

      {/* Purchase Modal */}
      {purchaseModal && (
        <ModulePurchaseModal
          isOpen={purchaseModal.isOpen}
          onClose={() => setPurchaseModal(null)}
          moduleNumber={purchaseModal.module}
          title={purchaseModal.module === 2 ? 'Protocolo de Dominancia' : 'Blindaje Emocional'}
          description={
            purchaseModal.module === 2
              ? 'Técnicas avanzadas que funcionan en 95% de casos'
              : 'Cómo mantener la obsesión por 30 días'
          }
          price={purchaseModal.module === 2 ? '$17' : '$37'}
        />
      )}
    </div>
  );
};

export default Dashboard;
