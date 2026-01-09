import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, User, Calendar, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { updateUser, getUser } from '@/lib/storage';
import Footer from '@/components/Footer';

const Onboarding = () => {
  const navigate = useNavigate();
  const user = getUser();
  
  const [formData, setFormData] = useState({
    nombre: '',
    dias_desde_ruptura: '',
    objetivo: '' as 'reconquistar' | 'entender' | 'mejorar' | ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.dias_desde_ruptura || !formData.objetivo) return;
    
    setIsLoading(true);
    
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    updateUser({
      nombre: formData.nombre,
      dias_desde_ruptura: parseInt(formData.dias_desde_ruptura),
      objetivo: formData.objetivo as 'reconquistar' | 'entender' | 'mejorar'
    });
    
    navigate('/dashboard');
  };

  const objetivos = [
    { value: 'reconquistar', label: 'Reconquistar a mi ex', icon: '💕' },
    { value: 'entender', label: 'Entender la situación', icon: '🧠' },
    { value: 'mejorar', label: 'Mejorar como persona', icon: '⭐' }
  ];

  if (!user) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-primary/5">
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-lg"
        >
          {/* Header */}
          <div className="text-center mb-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center"
            >
              <span className="text-3xl">🚀</span>
            </motion.div>
            <h1 className="font-display text-3xl font-bold mb-3">
              Antes de empezar...
            </h1>
            <p className="text-muted-foreground">
              Cuéntanos un poco sobre ti para personalizar tu experiencia
            </p>
          </div>

          {/* Form */}
          <div className="card-premium">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  ¿Cuál es tu nombre?
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    placeholder="Tu nombre"
                    className="input-premium pl-12"
                    required
                  />
                </div>
              </div>

              {/* Days since breakup */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  ¿Cuántos días han pasado desde la ruptura?
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="number"
                    min="0"
                    value={formData.dias_desde_ruptura}
                    onChange={(e) => setFormData({ ...formData, dias_desde_ruptura: e.target.value })}
                    placeholder="Ej: 7"
                    className="input-premium pl-12"
                    required
                  />
                </div>
              </div>

              {/* Objective */}
              <div>
                <label className="block text-sm font-medium mb-3">
                  ¿Cuál es tu objetivo principal con este programa?
                </label>
                <div className="space-y-3">
                  {objetivos.map((obj) => (
                    <label
                      key={obj.value}
                      className={`
                        flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all
                        ${formData.objetivo === obj.value 
                          ? 'border-primary bg-primary/5 ring-2 ring-primary/20' 
                          : 'border-border hover:border-primary/30'
                        }
                      `}
                    >
                      <input
                        type="radio"
                        name="objetivo"
                        value={obj.value}
                        checked={formData.objetivo === obj.value}
                        onChange={(e) => setFormData({ ...formData, objetivo: e.target.value as any })}
                        className="sr-only"
                      />
                      <span className="text-2xl">{obj.icon}</span>
                      <span className="font-medium">{obj.label}</span>
                      {formData.objetivo === obj.value && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="ml-auto"
                        >
                          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                            <span className="text-white text-sm">✓</span>
                          </div>
                        </motion.div>
                      )}
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading || !formData.nombre || !formData.dias_desde_ruptura || !formData.objetivo}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="animate-pulse">Preparando tu programa...</span>
                ) : (
                  <>
                    <span>Comenzar mi Transformación</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Onboarding;
