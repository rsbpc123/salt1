import { ReactNode } from 'react';

interface StorySectionProps {
  title: string;
  children: ReactNode;
  bgColor?: 'default' | 'story' | 'scientific';
}

const StorySection = ({ title, children, bgColor = 'default' }: StorySectionProps) => {
  const bgClasses = {
    default: '',
    story: 'bg-story/30',
    scientific: 'bg-scientific/30'
  };

  return (
    <section className={`py-12 px-4 ${bgClasses[bgColor]}`}>
      <div className="container mx-auto max-w-3xl">
        <h2 className="headline-secondary mb-8 text-foreground">
          {title}
        </h2>
        <div className="prose prose-lg max-w-none space-y-4 text-foreground/80">
          {children}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
