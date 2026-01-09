import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, X, CheckCircle, XCircle, Users, Clock, Shield } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

interface Module3UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Module3UpsellModal = ({ isOpen, onClose }: Module3UpsellModalProps) => {
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
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-card rounded-2xl max-w-lg w-full shadow-2xl my-8"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-2 rounded-full hover:bg-muted transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-success/10 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-success" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">
                  🔓 ÚLTIMA CARTA DESBLOQUEADA
                </h2>
                <p className="text-lg text-muted-foreground">
                  Cómo MANTENER la obsesión por 30 días
                </p>
              </div>

              {/* Warning */}
              <div className="bg-warning/10 border border-warning/20 rounded-xl p-4 mb-6">
                <div className="flex gap-3">
                  <AlertTriangle className="w-6 h-6 text-warning shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-warning-foreground">
                      Conquistaste. Ahora necesitas MANTENER.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      43% pierden la oportunidad en los primeros 30 días.
                    </p>
                  </div>
                </div>
              </div>

              {/* What happens without */}
              <div className="mb-6">
                <p className="font-semibold mb-3">Sin el Protocolo de Blindaje:</p>
                <div className="space-y-2">
                  {[
                    'Ella se alejará nuevamente',
                    'Otro hombre entrará en escena',
                    'Perderás todo lo que ganaste',
                    'Volverás al punto de partida'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <XCircle className="w-4 h-4 text-destructive shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What you get */}
              <div className="mb-6">
                <p className="font-semibold mb-3">El Módulo 3 (Blindaje Emocional) revela:</p>
                <div className="space-y-2">
                  {[
                    'Los 5 gatillos de mantenimiento',
                    'Protocolo de 30 días día a día',
                    'Cómo evitar que se aleje nuevamente',
                    'Cómo blindar contra terceros',
                    'Acceso a comunidad exclusiva'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-success shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="bg-muted/50 rounded-xl p-4 mb-6 text-center">
                <p className="text-sm text-muted-foreground mb-1">Acceso de por vida + Comunidad</p>
                <p className="text-4xl font-bold text-primary">$37</p>
              </div>

              {/* Social Proof */}
              <div className="flex items-center justify-center gap-4 mb-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  12 personas compraron hoy
                </span>
                <span className="text-success font-medium">98% de éxito</span>
              </div>

              {/* Urgency */}
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Oferta válida por:
                  </span>
                  <span className="text-xs text-muted-foreground">Solo 5 cupos/día</span>
                </div>
                <CountdownTimer targetDate={new Date(Date.now() + 24 * 60 * 60 * 1000)} />
              </div>

              {/* CTAs */}
              <div className="space-y-3">
                <button
                  onClick={handlePurchase}
                  className="w-full btn-primary py-4 text-lg font-bold animate-subtle-pulse"
                >
                  ¡DESBLOQUEAR AHORA! ($37)
                </button>
                <button
                  onClick={onClose}
                  className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  Después
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Module3UpsellModal;
