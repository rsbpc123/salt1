import { ReactNode } from 'react';

interface ImageOverlayProps {
  image: string;
  imageAlt: string;
  children: ReactNode;
  overlayOpacity?: 'light' | 'medium' | 'heavy';
  height?: 'short' | 'medium' | 'tall';
}

const ImageOverlay = ({ 
  image, 
  imageAlt, 
  children, 
  overlayOpacity = 'medium',
  height = 'medium'
}: ImageOverlayProps) => {
  const opacityClasses = {
    light: 'from-background/70 via-background/50 to-background/70',
    medium: 'from-background/85 via-background/70 to-background/85',
    heavy: 'from-background/95 via-background/85 to-background/95'
  };

  const heightClasses = {
    short: 'min-h-[250px] md:min-h-[300px]',
    medium: 'min-h-[350px] md:min-h-[450px]',
    tall: 'min-h-[450px] md:min-h-[550px]'
  };

  return (
    <section className={`relative w-full ${heightClasses[height]} overflow-hidden my-8 md:my-12 rounded-lg`}>
      <img 
        src={image} 
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className={`absolute inset-0 bg-gradient-to-b ${opacityClasses[overlayOpacity]}`} />
      <div className="relative z-10 h-full flex items-center justify-center p-6 md:p-12">
        <div className="max-w-3xl text-center">
          {children}
        </div>
      </div>
    </section>
  );
};

export default ImageOverlay;
