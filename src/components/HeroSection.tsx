import heroBedroom from "@/assets/hero-bedroom-scene.jpg";
import ScientificBadges from "./ScientificBadges";

const HeroSection = () => {
  return (
    <>
      {/* Main Headline Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-background to-story/20">
        <div className="container mx-auto max-w-5xl text-center">
        <h1 className="headline-primary animate-fade-in mb-6">
            I Watched My Wife Drown in Our Bedroom at Midnight…
          </h1>
          
          <div className="max-w-3xl mx-auto mb-8">
            <p className="subheadline leading-tight animate-fade-in mb-6" style={{ animationDelay: "0.2s" }}>
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

      {/* Hero Image Section with Overlay */}
      <section className="relative px-4 mb-16">
        <div className="container mx-auto max-w-6xl">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
            
            {/* Hero Image */}
            <img 
              src={heroBedroom} 
              alt="The midnight moment that changed everything" 
              className="w-full h-auto"
            />
            
            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 z-20 text-white">
              <div className="max-w-3xl">
                <p className="text-xl md:text-3xl font-bold mb-2 drop-shadow-lg">
                  It was just past midnight when I heard that sound...
                </p>
                <p className="text-lg md:text-xl font-medium opacity-90 drop-shadow-lg">
                  Linda wasn't breathing right. Her chest heaving. Lips turning blue.
                </p>
              </div>
            </div>
            
            {/* Corner Badge */}
            <div className="absolute top-4 right-4 z-20 bg-emphasis/90 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
              TRUE STORY
            </div>
          </div>
          
          {/* Caption Below Image */}
          <div className="text-center mt-6 max-w-2xl mx-auto">
            <p className="text-muted-foreground italic">
              The moment I realized conventional medicine had given up on Linda... 
              and I had to find another way.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;