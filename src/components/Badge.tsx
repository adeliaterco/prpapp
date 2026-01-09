import { motion } from 'framer-motion';

interface BadgeProps {
  name: string;
  icon?: string;
  isLocked?: boolean;
}

const Badge = ({ name, icon = '🏆', isLocked = false }: BadgeProps) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className={`
        flex flex-col items-center gap-2 p-4 rounded-xl border
        ${isLocked 
          ? 'bg-muted/50 border-border opacity-50' 
          : 'bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20'
        }
      `}
    >
      <span className="text-3xl">{icon}</span>
      <span className={`text-xs font-medium text-center ${isLocked ? 'text-muted-foreground' : 'text-foreground'}`}>
        {name}
      </span>
      {isLocked && (
        <span className="text-xs text-muted-foreground">🔒</span>
      )}
    </motion.div>
  );
};

export default Badge;
