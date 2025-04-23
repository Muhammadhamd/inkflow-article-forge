
import { FC } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl',
  };
  
  return (
    <div className={`font-bold ${sizeClasses[size]} ${className}`}>
      <span className="text-primary">Ink</span>
      <span className="text-accent">Flow</span>
    </div>
  );
};

export default Logo;
