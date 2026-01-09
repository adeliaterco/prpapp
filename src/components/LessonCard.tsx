import { Check, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

interface LessonCardProps {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  isCompleted: boolean;
  isLocked: boolean;
  onClick: () => void;
}

const LessonCard = ({ id, title, subtitle, icon, isCompleted, isLocked, onClick }: LessonCardProps) => {
  const getCardClass = () => {
    if (isCompleted) return 'lesson-card-completed';
    if (isLocked) return 'lesson-card-locked';
    return 'lesson-card';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: id * 0.1 }}
      className={getCardClass()}
      onClick={!isLocked ? onClick : undefined}
    >
      <div className="flex items-start gap-4">
        <div className={`
          w-14 h-14 rounded-xl flex items-center justify-center text-2xl
          ${isCompleted ? 'bg-success/10' : isLocked ? 'bg-muted' : 'bg-primary/10'}
        `}>
          {isLocked ? <Lock className="w-6 h-6 text-muted-foreground" /> : icon}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-medium text-muted-foreground">
              Lección {id}
            </span>
            {isCompleted && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="check-animation"
              >
                <Check className="w-5 h-5 text-success" />
              </motion.div>
            )}
          </div>
          <h3 className={`font-display font-semibold text-lg mb-1 ${isLocked ? 'text-muted-foreground' : 'text-foreground'}`}>
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {subtitle}
          </p>
        </div>
      </div>
      
      {!isLocked && !isCompleted && (
        <div className="mt-4 pt-4 border-t border-border">
          <span className="text-sm font-medium text-primary">
            Comenzar lección →
          </span>
        </div>
      )}
      
      {isCompleted && (
        <div className="mt-4 pt-4 border-t border-success/20">
          <span className="text-sm font-medium text-success">
            ✓ Completada
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default LessonCard;
