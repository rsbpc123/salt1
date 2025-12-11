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
    left: 'float-left mr-6 md:mr-8 -ml-4 md:-ml-12',
    right: 'float-right ml-6 md:ml-8 -mr-4 md:-mr-12'
  };

  const sizeClasses = {
    small: 'w-40 md:w-48',
    medium: 'w-48 md:w-64',
    large: 'w-56 md:w-80'
  };

  return (
    <figure className={`${positionClasses[position]} ${sizeClasses[size]} mb-4 relative group`}>
      <div className="relative overflow-hidden rounded-lg shadow-dramatic">
        <img 
          src={image} 
          alt={imageAlt}
          className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      {caption && (
        <figcaption className="mt-2 text-sm text-muted-foreground italic text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default FloatingImage;
