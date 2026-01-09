import { useEffect, useState } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
  onComplete?: () => void;
  className?: string;
}

const CountdownTimer = ({ targetDate, onComplete, className = '' }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        onComplete?.();
        return { hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <span className="counter-urgent">{formatNumber(timeLeft.hours)}</span>
      <span className="text-xl font-bold text-destructive">:</span>
      <span className="counter-urgent">{formatNumber(timeLeft.minutes)}</span>
      <span className="text-xl font-bold text-destructive">:</span>
      <span className="counter-urgent">{formatNumber(timeLeft.seconds)}</span>
    </div>
  );
};

export default CountdownTimer;
