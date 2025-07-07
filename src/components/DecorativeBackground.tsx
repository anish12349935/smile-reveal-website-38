
import { Star, Circle, Triangle } from 'lucide-react';

interface DecorativeBackgroundProps {
  variant?: 'primary' | 'secondary' | 'subtle';
  className?: string;
}

const DecorativeBackground = ({ variant = 'subtle', className = '' }: DecorativeBackgroundProps) => {
  const opacity = variant === 'primary' ? 'opacity-10' : variant === 'secondary' ? 'opacity-5' : 'opacity-5';
  
  return (
    <div className={`absolute inset-0 ${opacity} pointer-events-none ${className}`}>
      <Star className="absolute top-20 left-10 w-6 h-6 text-primary animate-pulse" style={{ animationDelay: '0s' }} />
      <Circle className="absolute top-40 right-20 w-8 h-8 text-primary animate-pulse" style={{ animationDelay: '2s' }} />
      <Star className="absolute bottom-32 left-1/4 w-5 h-5 text-primary animate-pulse" style={{ animationDelay: '1s' }} />
      <Circle className="absolute bottom-20 right-1/3 w-7 h-7 text-primary animate-pulse" style={{ animationDelay: '3s' }} />
      <Star className="absolute top-1/2 left-1/2 w-4 h-4 text-primary animate-pulse" style={{ animationDelay: '1.5s' }} />
    </div>
  );
};

export default DecorativeBackground;
