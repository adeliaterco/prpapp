import { useState } from 'react';
import { X, AlertTriangle, Check, Clock, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CountdownTimer from './CountdownTimer';

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UpsellModal = ({ isOpen, onClose }: UpsellModalProps) => {
  const [dismissed, setDismissed] = useState(false);

  // Set countdown to 24 hours from now
  const targetDate = new Date(Date.now() + 24 * 60 * 60 * 1000);

  const handleDismiss = () => {
    setDismissed(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  const handlePurchase = () => {
    window.open('https://pay.hotmart.com/D100233207O?off=hgjszxx1', '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-overlay"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="modal-content relative"
          >
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>

            {dismissed ? (
              <div className="p-8 text-center">
                <p className="text-lg text-muted-foreground">
                  Esperamos que no te arrepientas...
                </p>
              </div>
            ) : (
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl md:text-2xl font-bold text-destructive">
                      ⚠️ ADVERTENCIA CRÍTICA
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      ¡Estás a punto de cometer un error fatal!
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-4 mb-6">
                  <p className="text-lg font-semibold text-center">
                    <span className="text-destructive">73%</span> de los hombres que llegan hasta aquí,{' '}
                    <span className="text-destructive">FRACASAN</span> en el largo plazo.
                  </p>
                </div>

                {/* Description */}
                <div className="space-y-4 mb-6">
                  <p className="text-foreground">
                    Has reconquistado, pero la reconquista es solo el <strong>50% de la batalla</strong>. 
                    Sin el conocimiento avanzado del Módulo 2, es casi seguro que:
                  </p>
                  
                  <ul className="space-y-2">
                    {[
                      'Volverás a caer en los mismos errores que causaron la ruptura.',
                      'Ella se aburrirá de nuevo y buscará a otro hombre.',
                      'Perderás todo lo que has ganado en cuestión de semanas.',
                      'Te quedarás estancado en un ciclo de rupturas y reconciliaciones.'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-destructive mt-1">❌</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution */}
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-6">
                  <h3 className="font-display font-semibold mb-3">
                    El Módulo 2: Protocolo de Dominancia revela:
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Los 7 Gatillos Avanzados que la mantendrán adicta a ti.',
                      'Scripts de Poder que la harán sentir que te necesita.',
                      'Técnicas de Dominancia Emocional (éticas) para liderar la relación.',
                      'La Psicología Profunda para entender su mente como nadie más.'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Proof */}
                <div className="flex items-center justify-between mb-6 p-4 bg-muted/50 rounded-xl">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-sm">
                      <strong>15 hombres</strong> ya desbloquearon hoy
                    </span>
                  </div>
                  <div className="badge-success">
                    97% éxito
                  </div>
                </div>

                {/* Urgency */}
                <div className="text-center mb-6 p-4 border border-warning/30 bg-warning/5 rounded-xl">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-warning" />
                    <span className="font-semibold text-warning">Esta oferta termina en:</span>
                  </div>
                  <CountdownTimer targetDate={targetDate} />
                  <p className="text-sm text-muted-foreground mt-2">
                    El precio de <span className="font-bold">$17</span> subirá a{' '}
                    <span className="line-through">$27</span> en 24 horas.
                  </p>
                  <p className="text-sm font-medium text-warning mt-1">
                    Solo quedan 7 cupos disponibles a este precio.
                  </p>
                </div>

                {/* CTAs */}
                <div className="space-y-3">
                  <button
                    onClick={handlePurchase}
                    className="w-full btn-primary text-lg py-4 pulse-subtle"
                  >
                    ¡DESBLOQUEAR MÓDULO 2 AHORA! ($17)
                  </button>
                  
                  <button
                    onClick={handleDismiss}
                    className="w-full btn-ghost text-sm py-2"
                  >
                    <span className="line-through opacity-60">
                      No, prefiero arriesgarme a perderla de nuevo
                    </span>
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UpsellModal;
