import { ReactNode } from 'react';

interface ImageWithTextProps {
  image: string;
  imageAlt: string;
  title?: string;
  children: ReactNode;
  imagePosition?: 'left' | 'right' | 'top' | 'float-left' | 'float-right';
  bgColor?: 'default' | 'story' | 'scientific';
  imageSize?: 'small' | 'medium' | 'large' | 'full';
  imageShape?: 'rectangle' | 'circle' | 'rounded';
  overlay?: boolean;
}

const ImageWithText = ({ 
  image, 
  imageAlt, 
  title, 
  children, 
  imagePosition = 'top',
  bgColor = 'default',
  imageSize = 'medium',
  imageShape = 'rounded',
  overlay = false
}: ImageWithTextProps) => {
  const bgClasses = {
    default: '',
    story: 'bg-story/30',
    scientific: 'bg-scientific/30'
  };

  const sizeClasses = {
    small: 'w-32 md:w-48',
    medium: 'w-48 md:w-64',
    large: 'w-64 md:w-96',
    full: 'w-full'
  };

  const shapeClasses = {
    rectangle: 'rounded-none',
    circle: 'rounded-full aspect-square object-cover',
    rounded: 'rounded-lg'
  };

  // Float layouts - magazine style with text wrapping
  if (imagePosition === 'float-left' || imagePosition === 'float-right') {
    const floatClass = imagePosition === 'float-left' ? 'float-left mr-6 mb-4' : 'float-right ml-6 mb-4';
    
    return (
      <section className={`py-12 px-4 ${bgClasses[bgColor]}`}>
        <div className="container mx-auto max-w-5xl">
          {title && (
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
              {title}
            </h2>
          )}
          <div className="prose prose-lg max-w-none space-y-4 text-foreground/80">
            <img 
              src={image} 
              alt={imageAlt}
              className={`${sizeClasses[imageSize]} ${shapeClasses[imageShape]} ${floatClass} shadow-medium hover-scale`}
            />
            {children}
            <div className="clear-both"></div>
          </div>
        </div>
      </section>
    );
  }

  // Overlay layout - content over image background
  if (overlay) {
    return (
      <section className="relative w-full min-h-[400px] md:min-h-[500px] overflow-hidden">
        <img 
          src={image} 
          alt={imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/60" />
        <div className="relative z-10 py-12 px-4">
          <div className="container mx-auto max-w-5xl">
            {title && (
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center text-white">
                {title}
              </h2>
            )}
            <div className="prose prose-lg max-w-3xl mx-auto space-y-4 text-white">
              {children}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Top position - image above text
  if (imagePosition === 'top') {
    return (
      <section className={`py-12 px-4 ${bgClasses[bgColor]}`}>
        <div className="container mx-auto max-w-5xl">
          {title && (
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
              {title}
            </h2>
          )}
          <img 
            src={image} 
            alt={imageAlt} 
            className={`${sizeClasses[imageSize]} ${shapeClasses[imageShape]} mx-auto shadow-medium mb-8 hover-scale`}
          />
          <div className="prose prose-lg max-w-3xl mx-auto space-y-4 text-foreground/80">
            {children}
          </div>
        </div>
      </section>
    );
  }

  // Side-by-side layouts (left/right)
  return (
    <section className={`py-12 px-4 ${bgClasses[bgColor]}`}>
      <div className="container mx-auto max-w-5xl">
        {title && (
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
            {title}
          </h2>
        )}
        
        <div className={`grid md:grid-cols-2 gap-8 items-center ${imagePosition === 'right' ? 'md:grid-flow-dense' : ''}`}>
          <img 
            src={image} 
            alt={imageAlt} 
            className={`${shapeClasses[imageShape]} w-full h-auto shadow-medium hover-scale ${imagePosition === 'right' ? 'md:col-start-2' : ''}`}
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
