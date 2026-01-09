import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, XCircle, Users, Clock, Sparkles } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import lesson7Image from '@/assets/lesson7.png';

interface Module3MidUpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Module3MidUpsellModal = ({ isOpen, onClose }: Module3MidUpsellModalProps) => {
  const handlePurchase = () => {
    window.open('https://pay.hotmart.com/N100448107A?off=fh6ck4c7', '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-card rounded-2xl max-w-lg w-full shadow-2xl my-8 overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-2 rounded-full hover:bg-muted transition-colors z-10 bg-background/80"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Preview Image */}
            <div className="relative">
              <img 
                src={lesson7Image} 
                alt="Lección 7 - Blindaje Emocional" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-flex items-center gap-2 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  <Sparkles className="w-4 h-4" />
                  OFERTA EXCLUSIVA
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Header */}
              <div className="text-center mb-5">
                <h2 className="font-display text-2xl font-bold mb-2">
                  🔥 Estás A Punto de Perder Tu Oportunidad
                </h2>
                <p className="text-muted-foreground">
                  El 87% de los hombres que llegan hasta aquí <span className="text-destructive font-semibold">pierden todo en 30 días</span>
                </p>
              </div>

              {/* What happens without */}
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-4 mb-5">
                <p className="font-semibold mb-2 text-sm">Sin el Blindaje Emocional:</p>
                <div className="space-y-1.5">
                  {[
                    'Ella se alejará cuando menos lo esperes',
                    'Otro hombre aprovechará tu trabajo',
                    'Volverás al punto cero'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <XCircle className="w-4 h-4 text-destructive shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What you get */}
              <div className="bg-success/5 border border-success/20 rounded-xl p-4 mb-5">
                <p className="font-semibold mb-2 text-sm">El Módulo 3 incluye:</p>
                <div className="space-y-1.5">
                  {[
                    'Protocolo de mantenimiento de 30 días',
                    'Los 5 gatillos que la mantienen obsesionada',
                    'Cómo blindar contra terceros',
                    'Acceso a comunidad exclusiva VIP'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-success shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="bg-muted/50 rounded-xl p-4 mb-4 text-center">
                <p className="text-xs text-muted-foreground mb-1">Precio especial (solo ahora)</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-lg text-muted-foreground line-through">$67</span>
                  <span className="text-3xl font-bold text-primary">$37</span>
                </div>
                <p className="text-xs text-success font-medium mt-1">Ahorras $30 si compras ahora</p>
              </div>

              {/* Social Proof */}
              <div className="flex items-center justify-center gap-4 mb-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  23 compraron hoy
                </span>
                <span className="text-success font-medium">98% de éxito</span>
              </div>

              {/* Urgency */}
              <div className="bg-warning/10 border border-warning/20 rounded-xl p-3 mb-5">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-warning" />
                  <span className="text-sm font-medium">Esta oferta expira en:</span>
                </div>
                <CountdownTimer targetDate={new Date(Date.now() + 15 * 60 * 1000)} />
                <p className="text-center text-xs text-muted-foreground mt-2">
                  Después el precio sube a $67
                </p>
              </div>

              {/* CTAs */}
              <div className="space-y-3">
                <button
                  onClick={handlePurchase}
                  className="w-full btn-primary py-4 text-lg font-bold animate-subtle-pulse"
                >
                  ¡BLINDAR MI RELACIÓN! ($37)
                </button>
                <button
                  onClick={onClose}
                  className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  Continuar sin protección...
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Module3MidUpsellModal;
