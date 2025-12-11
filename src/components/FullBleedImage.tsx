interface FullBleedImageProps {
  image: string;
  imageAlt: string;
  caption?: string;
  captionPosition?: 'bottom-left' | 'bottom-center' | 'center';
}

const FullBleedImage = ({ 
  image, 
  imageAlt, 
  caption,
  captionPosition = 'bottom-left'
}: FullBleedImageProps) => {
  const captionClasses = {
    'bottom-left': 'bottom-8 left-8 text-left',
    'bottom-center': 'bottom-8 left-1/2 -translate-x-1/2 text-center',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'
  };

  return (
    <figure className="relative w-full my-12 md:my-16 -mx-4 md:-mx-8 lg:-mx-16" style={{ width: 'calc(100% + 2rem)', maxWidth: 'none' }}>
      <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
        <img 
          src={image} 
          alt={imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dramatic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>
      
      {caption && (
        <figcaption className={`absolute ${captionClasses[captionPosition]} max-w-xl px-4`}>
          <p className="text-xl md:text-2xl lg:text-3xl font-serif text-foreground italic leading-relaxed">
            "{caption}"
          </p>
        </figcaption>
      )}
    </figure>
  );
};

export default FullBleedImage;
