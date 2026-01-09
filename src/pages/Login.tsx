import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, ArrowRight, Check, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { createUser, getUser, isOnboardingComplete } from '@/lib/storage';
import Footer from '@/components/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) return;
    
    setIsLoading(true);
    
    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Check if user already exists
    const existingUser = getUser();
    if (!existingUser || existingUser.email !== email) {
      createUser(email);
    }
    
    setIsSubmitted(true);
    
    // After showing success message, redirect
    setTimeout(() => {
      if (isOnboardingComplete()) {
        navigate('/dashboard');
      } else {
        navigate('/onboarding');
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-primary/5">
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <div className="text-center mb-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="w-20 h-20 mx-auto mb-6 rounded-2xl gradient-primary flex items-center justify-center shadow-xl"
            >
              <Heart className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">
              <span className="text-primary">PRP</span> RECONQUISTA
            </h1>
            <p className="text-muted-foreground text-lg">
              El método probado para recuperar a quien amas
            </p>
          </div>

          {/* Card */}
          <div className="card-premium">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="email">
                    Tu Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tu@email.com"
                      className="input-premium pl-12"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <span className="animate-pulse">Enviando...</span>
                  ) : (
                    <>
                      <span>Acceder al Programa</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-muted-foreground">
                  Te enviaremos un enlace seguro para acceder al programa.
                  <br />
                  Sin contraseñas, sin complicaciones.
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-success/10 flex items-center justify-center">
                  <Check className="w-8 h-8 text-success check-animation" />
                </div>
                <h2 className="font-display text-xl font-semibold mb-2">
                  ¡Revisa tu bandeja de entrada!
                </h2>
                <p className="text-muted-foreground">
                  Hemos enviado un enlace mágico para que accedas al instante.
                </p>
              </motion.div>
            )}
          </div>

          {/* Trust indicators */}
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="text-success">✓</span> Acceso inmediato
            </span>
            <span className="flex items-center gap-1">
              <span className="text-success">✓</span> 100% seguro
            </span>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
