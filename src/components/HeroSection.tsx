import heroBackground from "@/assets/hero-background.webp";
import ScientificBadges from "./ScientificBadges";

const HeroSection = () => {
  return (
    <section className="relative py-12 md:py-20 px-4 overflow-hidden">
      {/* Background Image - Blurred and Dimmed */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm scale-105"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <h1 className="headline-primary animate-fade-in mb-6 text-white drop-shadow-lg">
          I Watched My Wife Drown in Our Bedroom at Midnight…
        </h1>
        
        <div className="max-w-3xl mx-auto mb-8">
          <p className="subheadline leading-tight animate-fade-in mb-6 text-white/90 drop-shadow-md" style={{ animationDelay: "0.2s" }}>
            Then a Collapsed Salt Mine in Romania Led Me to a Village Where Nobody Gets Lung Disease… And Saved Her Life
          </p>
          
          {/* Hero Quote */}
          <div className="testimony-box text-left animate-fade-in p-4 md:p-6" style={{ animationDelay: "0.3s" }}>
            <p className="text-sm md:text-base not-italic font-semibold text-foreground mb-2">
              "I spent $50,000 trying to save my wife's lungs.
            </p>
            <p className="text-sm md:text-base not-italic text-foreground mb-2">
              Five different pulmonologists. Twelve medications. Three ER visits in one month.
            </p>
            <p className="text-sm md:text-base not-italic text-foreground mb-2">
              Nothing worked.
            </p>
            <p className="text-sm md:text-base not-italic text-foreground mb-2">
              Then I found a village in Romania where 97-year-olds chop wood… and nobody has asthma.
            </p>
            <p className="text-sm md:text-base not-italic font-semibold text-foreground mb-2">
              Now Linda's off oxygen. And I'm bringing that same air to America."
            </p>
            <p className="text-xs md:text-sm font-medium text-muted-foreground mt-3">
              — Robert Mitchell
            </p>
            <p className="text-xs text-muted-foreground">
              Retired Air Force | Warner Robins, Georgia
            </p>
          </div>
        </div>
        
        <ScientificBadges />
      </div>
    </section>
  );
};

export default HeroSection;