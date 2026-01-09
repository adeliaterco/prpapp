import { useEffect, useState } from 'react';

interface ProgressBarProps {
  progress: number;
  showPercentage?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const ProgressBar = ({ progress, showPercentage = true, size = 'md' }: ProgressBarProps) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(progress);
    }, 100);
    return () => clearTimeout(timer);
  }, [progress]);

  const heightClasses = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4'
  };

  return (
    <div className="w-full">
      <div className={`progress-bar ${heightClasses[size]}`}>
        <div 
          className="progress-fill"
          style={{ width: `${animatedProgress}%` }}
        />
      </div>
      {showPercentage && (
        <p className="text-sm text-muted-foreground mt-2">
          Has completado <span className="font-semibold text-foreground">{animatedProgress}%</span> del programa
        </p>
      )}
    </div>
  );
};

export default ProgressBar;
