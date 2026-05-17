import heroBackground from "@/assets/hero-background.webp";
import ScientificBadges from "./ScientificBadges";

import heroBackgroundMobile from "@/assets/hero-background-mobile.jpg";

const HeroSection = () => {
  return (
    <section className="text-white py-6 md:py-10 px-4 relative overflow-hidden">
      {/* Background Image - Blurred */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm scale-105"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      {/* Mobile background override */}
      <div 
        className="absolute inset-0 md:hidden bg-cover bg-center bg-no-repeat blur-sm scale-105"
        style={{ backgroundImage: `url(${heroBackgroundMobile})` }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="max-w-[970px] mx-auto relative z-10">
        <div className="text-center md:text-left">
          <p className="font-bold text-[28px] md:text-[50px] leading-[36px] md:leading-[64px]">
            I Watched My Wife Drown In Our Bedroom At Midnight.
          </p>
          <p className="font-bold text-[32px] md:text-[57px] leading-[44px] md:leading-[68px] mt-2">
            <span className="bg-[linear-gradient(to_bottom,transparent_60%,#ffd700_60%)] px-1.5">
              Then a Romanian Village Where 97-Year-Olds Chop Wood Showed Me Why Her "Permanently Damaged" Lungs Could Heal After All.
            </span>
          </p>
        </div>

        {/* Subtitle */}
        <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-6 text-center md:text-left">
          (We Live 200 Miles From the Ocean)
        </p>
        
        {/* Feature Box */}
        <div className="bg-white rounded-[14px] mt-7 p-5 md:p-7 text-black">
          <ul className="space-y-4">
            <li className="flex items-start gap-3 font-semibold text-[18px] md:text-[24px] leading-[24px] md:leading-[34px] pl-10 md:pl-14 relative">
              <span className="absolute left-0 top-0 w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-lg">✓</span>
              Retired Air Force veteran discovers ancient Romanian salt therapy that saved his wife's lungs after doctors gave up
            </li>
            <li className="flex items-start gap-3 font-semibold text-[18px] md:text-[24px] leading-[24px] md:leading-[34px] pt-4 border-t border-border pl-10 md:pl-14 relative">
              <span className="absolute left-0 top-4 w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-lg">✓</span>
              17,000+ Americans now breathing easier with this natural salt pouch you can use at home
            </li>
            <li className="flex items-start gap-3 font-semibold text-[18px] md:text-[24px] leading-[24px] md:leading-[34px] pt-4 border-t border-border pl-10 md:pl-14 relative">
              <span className="absolute left-0 top-4 w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-lg">✓</span>
              Backed by 15+ years of research from Dr. Elena Popescu at the University of Bucharest
            </li>
          </ul>
        </div>
        
        <ScientificBadges />
      </div>
    </section>
  );
};

export default HeroSection;