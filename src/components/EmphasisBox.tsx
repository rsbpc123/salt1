import { ReactNode } from 'react';

interface EmphasisBoxProps {
  children: ReactNode;
  variant?: 'default' | 'dramatic' | 'subtle';
}

const EmphasisBox = ({ children, variant = 'default' }: EmphasisBoxProps) => {
  const variantClasses = {
    default: 'bg-primary/10 border-primary/30 text-foreground',
    dramatic: 'bg-emphasis/20 border-emphasis text-foreground shadow-lg',
    subtle: 'bg-muted/50 border-muted-foreground/20 text-foreground/90'
  };

  return (
    <div className={`
      ${variantClasses[variant]}
      border-l-4
      px-6 py-4
      my-6
      rounded-r-lg
      prose prose-lg max-w-none
    `}>
      {children}
    </div>
  );
};

export default EmphasisBox;
