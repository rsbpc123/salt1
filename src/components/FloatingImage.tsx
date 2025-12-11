interface FloatingImageProps {
  image: string;
  imageAlt: string;
  position: 'left' | 'right';
  caption?: string;
  size?: 'small' | 'medium' | 'large';
}

const FloatingImage = ({ 
  image, 
  imageAlt, 
  position, 
  caption,
  size = 'medium' 
}: FloatingImageProps) => {
  const positionClasses = {
    left: 'float-left mr-6 md:mr-10 -ml-4 md:-ml-8',
    right: 'float-right ml-6 md:ml-10 -mr-4 md:-mr-8'
  };

  const sizeClasses = {
    small: 'w-44 md:w-56',
    medium: 'w-56 md:w-72',
    large: 'w-64 md:w-96'
  };

  return (
    <figure className={`${positionClasses[position]} ${sizeClasses[size]} mb-6 relative`}>
      {/* Outer container for the fade effect */}
      <div className="relative">
        {/* The image with mask for fading edges */}
        <div 
          className="relative overflow-visible"
          style={{
            maskImage: 'radial-gradient(ellipse 85% 80% at center, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 85% 80% at center, black 40%, transparent 100%)'
          }}
        >
          <img 
            src={image} 
            alt={imageAlt}
            className="w-full h-auto"
          />
        </div>
        
        {/* Subtle ambient glow behind */}
        <div 
          className="absolute inset-0 -z-10 blur-2xl opacity-30 scale-110"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </div>
      
      {caption && (
        <figcaption className="mt-3 text-sm text-muted-foreground italic text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default FloatingImage;
