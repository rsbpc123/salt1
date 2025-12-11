import { ReactNode } from 'react';

interface PullQuoteProps {
  children: ReactNode;
  align?: 'left' | 'right' | 'center';
  size?: 'medium' | 'large' | 'dramatic';
}

const PullQuote = ({ children, align = 'center', size = 'large' }: PullQuoteProps) => {
  const alignClasses = {
    left: 'text-left',
    right: 'text-right',
    center: 'text-center'
  };

  const sizeClasses = {
    medium: 'text-2xl md:text-3xl',
    large: 'text-3xl md:text-4xl',
    dramatic: 'text-4xl md:text-5xl lg:text-6xl'
  };

  return (
    <blockquote className={`
      ${alignClasses[align]} 
      ${sizeClasses[size]}
      font-display font-bold
      text-emphasis
      leading-tight
      py-8 md:py-12
      px-4 md:px-8
      my-8 md:my-12
      border-l-4 border-primary
      bg-gradient-to-r from-primary/5 to-transparent
      relative
    `}>
      <span className="absolute -top-4 left-4 text-8xl text-primary/20 font-serif">"</span>
      {children}
    </blockquote>
  );
};

export default PullQuote;
