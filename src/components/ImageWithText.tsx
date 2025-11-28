import { ReactNode } from 'react';

interface ImageWithTextProps {
  image: string;
  imageAlt: string;
  title: string;
  children: ReactNode;
  imagePosition?: 'left' | 'right' | 'top';
  bgColor?: 'default' | 'story' | 'scientific';
}

const ImageWithText = ({ 
  image, 
  imageAlt, 
  title, 
  children, 
  imagePosition = 'top',
  bgColor = 'default'
}: ImageWithTextProps) => {
  const bgClasses = {
    default: '',
    story: 'bg-story/30',
    scientific: 'bg-scientific/30'
  };

  if (imagePosition === 'top') {
    return (
      <section className={`py-12 px-4 ${bgClasses[bgColor]}`}>
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
            {title}
          </h2>
          <img 
            src={image} 
            alt={imageAlt} 
            className="w-full h-auto rounded-lg shadow-medium mb-8"
          />
          <div className="prose prose-lg max-w-3xl mx-auto space-y-4 text-foreground/80">
            {children}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-12 px-4 ${bgClasses[bgColor]}`}>
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
          {title}
        </h2>
        
        <div className={`grid md:grid-cols-2 gap-8 items-center ${imagePosition === 'right' ? 'md:flex-row-reverse' : ''}`}>
          <img 
            src={image} 
            alt={imageAlt} 
            className="w-full h-auto rounded-lg shadow-medium"
          />
          <div className="prose prose-lg space-y-4 text-foreground/80">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageWithText;
