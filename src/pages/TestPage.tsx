import { useState } from "react";

// Import all images
import heroBackground from "@/assets/hero-background.webp";
import heroBackgroundMobile from "@/assets/hero-background-mobile.jpg";
import doctorQuote from "@/assets/doctor-quote.png";
import drPopescu from "@/assets/dr-popescu.png";
import saltHillsRomania from "@/assets/salt-hills-romania.jpg";
import institutionLogos from "@/assets/institution-logos.png";
import romanianVillage from "@/assets/romanian-village.jpg";
import lungDiagram from "@/assets/lung-diagram.jpg";
import saltCrystalsCloseup from "@/assets/salt-crystals-closeup.jpg";
import eldernCoupleBreathing from "@/assets/elderly-couple-breathing.jpg";
import elderlyWomanGardening from "@/assets/elderly-woman-gardening.jpg";
import saltTherapyPouch from "@/assets/salt-therapy-pouch.jpg";
import elderlyManChoppingWood from "@/assets/elderly-man-chopping-wood.jpg";
import brainHippocampus from "@/assets/brain-hippocampus.png";
import lungsDiagram from "@/assets/lungs-diagram.png";
import oxygenMaskHospital from "@/assets/oxygen-mask-hospital.webp";
import stressedSeniorsCollage from "@/assets/stressed-seniors-collage.png";
import lungCtScan from "@/assets/lung-ct-scan.png";
import coupleHospitalHallway from "@/assets/couple-hospital-hallway.png";
import medicationsPile from "@/assets/medications-pile.png";
import womanBathroomFloor from "@/assets/woman-bathroom-crying.png";
import manLaptopNight from "@/assets/man-laptop-night.png";
import closedMineSign from "@/assets/closed-mine-sign.png";
import romanianCafeInterior from "@/assets/romanian-cafe-interior.png";
import ioanaRomanianWoman from "@/assets/ioana-romanian-woman.png";
import oldManChainsaw from "@/assets/old-man-chainsaw.png";
import phoneEmailNotification from "@/assets/phone-email-notification.png";
import doctorPhoto from "@/assets/doctor-photo.png";
import productBundle from "@/assets/product-bundle.png";
import productDiscount from "@/assets/product-discount.png";
import bonusMemorySaver from "@/assets/bonus-memory-saver.png";
import bonusGroceryGuide from "@/assets/bonus-grocery-guide.png";
import bonusEnergyButton from "@/assets/bonus-energy-button.png";
import moneyBackGuarantee from "@/assets/money-back-guarantee.png";
import arrowCurveRed from "@/assets/arrow-curve-red.png";
import arrowDownLeft from "@/assets/arrow-down-left.png";
import arrowDecorative from "@/assets/arrow-decorative.jpg";
import arrowLeft from "@/assets/arrow-left.png";
import arrowRight from "@/assets/arrow-right.png";
import clickbankLogo from "@/assets/clickbank-logo.png";
import bbbSeal from "@/assets/bbb-seal.png";
import sslEncryption from "@/assets/ssl-encryption.png";
import happySeniorsCollage from "@/assets/happy-seniors-collage.png";
import scientistLab from "@/assets/scientist-lab.png";
import womanHeadphones from "@/assets/woman-headphones.png";
import womanLaptopOrder from "@/assets/woman-laptop-order.png";
import stopwatch from "@/assets/stopwatch.png";
import questionCollage from "@/assets/question-collage.png";
import orderButton from "@/assets/order-button.png";
import customerSupport from "@/assets/customer-support.png";
import riskfreeSeal from "@/assets/riskfree-seal.png";

const TestPage = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: '"Lora", serif' }}>
      {/* Hero Section - sec1 */}
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
              I Watched My Wife Drown in Our Bedroom at Midnight…
            </p>
            <p className="font-bold text-[22px] md:text-[38px] leading-[30px] md:leading-[48px] mt-4">
              Then a Collapsed Salt Mine in Romania Led Me to a Village Where Nobody Gets Lung Disease…And Saved Her Life
            </p>
          </div>
          
          {/* Testimonial Box - s1txtbx2 */}
          <div className="relative mt-7 md:pl-[155px] md:w-[80%]">
            <div className="md:absolute md:left-[-5px] md:top-[-2px] w-[160px] mx-auto md:mx-0 mb-4 md:mb-0">
              <img 
                src={drPopescu} 
                alt="Dr. Popescu" 
                className="w-[120px] h-[120px] rounded-full mx-auto md:mx-0 object-cover"
              />
            </div>
            <p className="font-bold italic text-[18px] md:text-[24px] leading-[24px] md:leading-[34px] text-center md:text-left">
              "In 40 years of research, I've watched hundreds of people reverse lung damage their doctors said was permanent. The secret isn't medication. It's what you breathe while you sleep."
            </p>
            <p className="text-[16px] md:text-[24px] leading-[22px] md:leading-[34px] mt-3 text-center md:text-left">
              <strong>– Dr. Popescu, </strong><br className="md:hidden"/>Pulmonologist
            </p>
          </div>
          
          {/* Feature Box - s1bx */}
          <div className="bg-white rounded-[14px] mt-7 p-5 md:p-7 text-black">
            <ul className="space-y-4">
              <li className="flex items-start gap-3 font-semibold text-[18px] md:text-[24px] leading-[24px] md:leading-[34px] pl-10 md:pl-14 relative">
                <span className="absolute left-0 top-0 w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-lg">✓</span>
                A desperate husband flies 5,000 miles to Romania... and discovers a hidden village where 97-year-olds chop wood with PERFECT lungs (and have never touched an inhaler).
              </li>
              <li className="flex items-start gap-3 font-semibold text-[18px] md:text-[24px] leading-[24px] md:leading-[34px] pt-4 border-t border-border pl-10 md:pl-14 relative">
                <span className="absolute left-0 top-4 w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-lg">✓</span>
                Romanian pulmonologist explains why your lung scarring might NOT be permanent... and reveals the 3-phase process that lets your airways finally HEAL.
              </li>
              <li className="flex items-start gap-3 font-semibold text-[18px] md:text-[24px] leading-[24px] md:leading-[34px] pt-4 border-t border-border pl-10 md:pl-14 relative">
                <span className="absolute left-0 top-4 w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-lg">✓</span>
                The real reason your COPD medications stop working (and why breathing the same air as a forgotten Eastern European village... might be the only thing that can reverse it).
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Scientific Strip */}
      <section className="bg-muted py-6 md:py-8 px-4">
        <div className="max-w-[970px] mx-auto">
          <p className="font-semibold text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] text-center">
            Scientific References and Spiritual Studies:
          </p>
          <div className="flex justify-center items-center mt-5">
            <img 
              src={institutionLogos} 
              alt="Nature Neuro, University of Toronto, JNeurosci" 
              className="max-w-full h-auto opacity-80"
            />
          </div>
        </div>
      </section>

      {/* Section 2 - Body Content */}
      <section className="py-10 px-4 bg-card">
        <div className="max-w-[970px] mx-auto">
          <div className="md:float-right md:ml-4 md:mb-4 text-center md:text-right mb-6">
            <div className="relative inline-block">
              <img 
                src={lungsDiagram} 
                alt="Lungs with inflamed airways" 
                className="w-[280px] md:w-[350px] rounded-lg mx-auto animate-[breathe_4s_ease-in-out_infinite]"
              />
              {/* Pulsing Glow on Airways */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[60%] h-[40%] bg-red-500/20 rounded-full blur-xl animate-[pulse_2s_ease-in-out_infinite]" />
              </div>
            </div>
          </div>
          
          <p className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold mb-4">
            I WATCHED MY WIFE DROWN
          </p>
          
          <p className="text-[22px] md:text-[32px] leading-[30px] md:leading-[42px] font-bold mb-8">
            Sitting Right Next to Me in Our Bed
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">It was just past midnight when I heard it.</p>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">That sound.</p>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Linda wasn't breathing right.</p>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Her chest heaving. Lips turning blue. Sitting straight up. Clutching her throat.</p>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold italic">Drowning.</p>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">In our bedroom. In Warner Robins, Georgia. 200 miles from the nearest ocean.</p>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">I grabbed her inhaler. Shook it. Jammed it into her mouth.</p>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">"Breathe, baby."</p>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Two puffs. Nothing.</p>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">Her wheezing got WORSE.</p>
          
          <div className="clear-both" />
        </div>
      </section>

      {/* Section 3 - Purple Background with White Box */}
      <section className="bg-primary py-0 px-4">
        <div className="max-w-[970px] mx-auto">
          {/* White Box - Overlapping into this section */}
          <div className="bg-secondary rounded-[14px] shadow-lg p-6 md:p-8 -mt-4 relative z-10">
            <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-2">
              I dialed 911.
            </h2>
            
            <div className="md:float-right md:ml-6 md:-mr-4 mb-4 text-center relative">
              <div 
                className="relative overflow-visible"
                style={{
                  maskImage: 'radial-gradient(ellipse 85% 80% at center, black 40%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 85% 80% at center, black 40%, transparent 100%)'
                }}
              >
                <img 
                  src={oxygenMaskHospital} 
                  alt="Oxygen mask on hospital bed" 
                  className="w-[280px] md:w-[380px] mx-auto"
                />
              </div>
            </div>
            
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">The paramedics arrived in 8 minutes. Felt like 8 hours.</p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">They strapped an oxygen mask to her face. Loaded her onto the stretcher.</p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">One of them looked at me and shook his head. Not mean. Just... tired.</p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">Like he'd seen us before.</p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">(He had. Three times that month.)</p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Two hours later, a doctor came out.</p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold italic">"She's stable. You can take her home in a few hours."</p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">"What happens next time?" I asked.</p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">He paused. "Keep doing what you're doing. Come back if it gets worse."</p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">No solution. No plan.</p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Just... keep doing what we're doing.</p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold text-destructive">Except what we were doing WASN'T WORKING.</p>
            
            <div className="clear-both" />
          </div>
          
          {/* Big Headline */}
          <h2 className="text-[24px] md:text-[38px] leading-[32px] md:leading-[48px] font-bold text-center text-primary-foreground pt-10 pb-2">
            Her Lungs Were Turning to Cement<br/>
            <span className="text-[#ffd700]">(And Nobody Told Us Until It Was Almost Too Late)</span>
          </h2>

          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] text-primary-foreground mt-4">
            Two weeks later, Linda saw her pulmonologist.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] text-primary-foreground mt-8">
            He pulled up a CT scan. White patches scattered throughout her lungs.
          </p>
          
          <div className="clear-both pb-10" />
        </div>
      </section>

      {/* Section 4 - The Diagnosis */}
      <section className="py-10 px-4 bg-card">
        <div className="max-w-[970px] mx-auto relative">
          
          <div className="md:float-right md:ml-6 md:-mr-4 text-center mb-4 relative">
            <div 
              className="relative overflow-visible"
              style={{
                maskImage: 'radial-gradient(ellipse 85% 80% at center, black 40%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 85% 80% at center, black 40%, transparent 100%)'
              }}
            >
              <img 
                src={lungCtScan} 
                alt="CT scan showing lung fibrosis" 
                className="w-[280px] md:w-[380px] mx-auto"
              />
            </div>
          </div>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">"This is fibrosis," he said. "Scar tissue. Your airways are hardening."</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">"Can you fix it?"</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">He shook his head. "Once the scarring sets in... no. We can only try to slow it down."</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">My stomach dropped.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">"How long do we have?"</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">He looked at Linda. Then back at me.</p>
          
          {/* Devastating Quote Box */}
          <div className="bg-primary rounded-[14px] p-5 md:p-6 mt-10 text-primary-foreground relative overflow-hidden">
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] font-bold">
              "If we can't get the inflammation under control... maybe 18 to 24 months before the damage severely impacts her quality of life."
            </p>
          </div>
          
          {/* Side by side layout */}
          <div className="flex flex-col md:flex-row gap-6 mt-8 items-start">
            <div className="flex-shrink-0 relative">
              <div 
                className="relative overflow-visible"
                style={{
                  maskImage: 'radial-gradient(ellipse 85% 80% at center, black 40%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 85% 80% at center, black 40%, transparent 100%)'
                }}
              >
                <img 
                  src={coupleHospitalHallway} 
                  alt="Couple walking silently through hospital hallway" 
                  className="w-[260px] md:w-[340px]"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] italic">Linda started crying.</p>
              <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-6">We walked out in silence.</p>
              <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-6 font-bold italic">And for the first time in our 40-year marriage...</p>
              <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-6 font-bold text-destructive">I didn't know what to say to her.</p>
            </div>
          </div>
          
          {/* Read This Callout - positioned at bottom right, pointing down to next section */}
          <div className="hidden md:flex flex-col items-center absolute right-10 -bottom-16">
            <p className="text-[#ff0000] text-[22px] md:text-[30px] leading-[22px] md:leading-[30px] text-center" style={{ fontFamily: "'Permanent Marker', cursive" }}>
              Read This!
            </p>
            <img 
              src={arrowCurveRed} 
              alt="" 
              className="w-[60px] md:w-[80px] mt-1 scale-x-[-1]"
            />
          </div>
        </div>
      </section>

      {/* Section 5 - We Did Everything */}
      <section className="py-10 px-4 bg-secondary">
        <div className="max-w-[970px] mx-auto relative">
          
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-2">
            We Did EVERYTHING the Doctors Told Us
          </h2>
          <p className="text-[20px] md:text-[26px] leading-[30px] md:leading-[40px] font-bold text-center text-destructive mb-8">
            (And She Got WORSE)
          </p>
          
          <div className="md:float-right md:ml-6 md:-mr-4 text-center mb-4 relative">
            <div 
              className="relative overflow-visible"
              style={{
                maskImage: 'radial-gradient(ellipse 85% 80% at center, black 40%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 85% 80% at center, black 40%, transparent 100%)'
              }}
            >
              <img 
                src={medicationsPile} 
                alt="Pile of prescription medications and medical bills" 
                className="w-[280px] md:w-[380px] mx-auto"
              />
            </div>
          </div>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            Linda wasn't reckless. She did EVERYTHING they told her.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">
            Six different inhalers over three years. Five medications just to breathe.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">
            We were spending $1,200 a month on prescriptions. Even WITH insurance.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold text-destructive">
            And she was still drowning.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            We did the Prednisone rounds. That awful steroid that made her gain 15 pounds and gave her insomnia.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            Bought a $400 HEPA air purifier. Ripped out the carpets. Tried breathing exercises.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            Hired a mold inspector. $800 later... no mold.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold italic">
            None of it made a difference.
          </p>
          
          {/* Doctor Quote Box */}
          <div className="bg-primary rounded-[14px] p-5 md:p-6 mt-10 text-primary-foreground">
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px]">
              Every doctor said the same thing: <strong>"This is just something you'll have to manage."</strong>
            </p>
          </div>
          
          <p className="text-[28px] md:text-[40px] leading-[36px] md:leading-[50px] mt-10 font-bold text-center">
            MANAGE.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">
            Like we weren't already managing her not being able to walk upstairs.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">
            Managing the oxygen concentrator humming all night.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">
            Managing the stack of medical bills we couldn't pay.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold text-destructive">
            Managing our life shrinking smaller and smaller.
          </p>
          
          <div className="clear-both" />
        </div>
      </section>

      {/* Section 6 - The Night in the Bathroom */}
      <section className="py-10 px-4 bg-card text-card-foreground">
        <div className="max-w-[970px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-8">
            The Night I Found Her Crying in the Bathroom
          </h2>
          
          <div className="md:float-right md:ml-6 md:-mr-4 text-center mb-4 relative">
            <div 
              className="relative overflow-visible"
              style={{
                maskImage: 'radial-gradient(ellipse 85% 80% at center, black 40%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 85% 80% at center, black 40%, transparent 100%)'
              }}
            >
              <img 
                src={womanBathroomFloor} 
                alt="Woman sitting alone in bathroom" 
                className="w-[260px] md:w-[340px] mx-auto"
              />
            </div>
          </div>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">It was a Tuesday.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Linda's sister invited us to Thanksgiving. Linda said she had a cold.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">But she didn't.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">She just didn't want her family to see her like this.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">That night, I woke up around 2 AM. Linda wasn't in bed.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">I found her in the bathroom. Sitting on the floor. Crying.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold italic">"I don't want to be that person anymore," she whispered.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">"What person?"</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold italic">"The one everyone feels sorry for."</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">Her voice cracked.</p>
          
          {/* Emotional Quote Box */}
          <div className="bg-primary rounded-[14px] p-5 md:p-6 mt-10 text-primary-foreground">
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px]">
              "I used to RUN, Robert. I used to play with the grandkids. And now I can't even walk to the mailbox without feeling like I'm dying."
            </p>
          </div>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">I sat down next to her.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">Because what was I supposed to say?</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Her lungs were getting WORSE. Not better.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">The medications weren't working.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold text-destructive">The doctors had given up.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">Right then, I made a promise.</p>
          
          {/* Promise Box */}
          <div className="bg-foreground rounded-[10px] p-5 md:p-6 mt-10 text-background">
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] font-bold">
              I'm going to fix this.
            </p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-4">
              I don't care what it takes.
            </p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-4">
              I don't care if I have to fly to the other side of the world.
            </p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-4 font-bold italic">
              I'm going to find a way.
            </p>
          </div>
          
          <div className="clear-both" />
        </div>
      </section>

      {/* Section 7 - The Late Night Google Search */}
      <section className="py-10 px-4 bg-secondary">
        <div className="max-w-[970px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-8">
            The Late-Night Google Search That Changed Everything
          </h2>
          
          <div className="md:float-left md:mr-6 md:-ml-4 text-center mb-4 relative">
            <div 
              className="relative overflow-visible"
              style={{
                maskImage: 'radial-gradient(ellipse 85% 80% at center, black 40%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 85% 80% at center, black 40%, transparent 100%)'
              }}
            >
              <img 
                src={manLaptopNight} 
                alt="Man searching on laptop late at night" 
                className="w-[260px] md:w-[340px] mx-auto"
              />
            </div>
          </div>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">It was 1 AM.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Linda was finally asleep upstairs.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">I was at the kitchen table. Googling.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">"Natural asthma remedies." "COPD cure." "How to reverse lung fibrosis."</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Most of it was garbage.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Essential oils. Breathing apps. Supplements that did nothing.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">I was about to close the laptop.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">Then I saw it. A research paper from some Romanian medical institute.</p>
          
          <div className="bg-card rounded-[14px] p-5 md:p-6 mt-8 border-l-4 border-primary">
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] font-bold italic">
              "Long-term efficacy of halotherapy in chronic obstructive pulmonary disease."
            </p>
          </div>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8"><strong>Halotherapy.</strong> Breathing microscopic salt particles.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">Sounded weird. But the study had REAL results.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">People with COPD seeing improvements in lung function. Reduced coughing. Better oxygen saturation.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">I kept reading.</p>
          
          <div className="clear-both" />
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Turns out, halotherapy started in actual salt MINES. Deep underground in Eastern Europe.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">There's this place in Romania. The Praid Salt Mine.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">For over a CENTURY, people with severe lung problems traveled there. From all over Europe. To go down into the mine and just... breathe.</p>
          
          {/* Results Box */}
          <div className="bg-primary rounded-[14px] p-5 md:p-6 mt-10 text-primary-foreground">
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px]">
              People with Stage 3 COPD seeing their oxygen levels jump from 88% to 96%.
            </p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-4">
              People on oxygen tanks for YEARS... breathing freely.
            </p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-4 font-bold">
              Over 50% reduced their medications. Some stopped entirely.
            </p>
          </div>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold italic">I'm reading about people who sound EXACTLY like Linda.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Getting better. Not managing.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold text-primary text-[24px] md:text-[32px]">BETTER.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">The next morning, I showed Linda everything.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">"Do you really think this could work?" she asked.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">I took a breath. "I don't know. But we need to find out."</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">She nodded. "Okay. Let's go."</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">But here's what I didn't know yet...</p>
          
          {/* Cliffhanger Box */}
          <div className="bg-foreground rounded-[10px] p-5 md:p-6 mt-10 text-background">
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px]">
              The mine that saved all those people?
            </p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-4 font-bold">
              It was about to collapse.
            </p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-4 font-bold italic">
              And we were about to fly 5,000 miles... for nothing.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8 - The Salt Mine Discovery */}
      <section className="py-10 px-4 bg-card">
        <div className="max-w-[970px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-2">
            We Flew 5,000 Miles to a Salt Mine...
          </h2>
          <p className="text-[20px] md:text-[26px] leading-[30px] md:leading-[40px] font-bold text-center text-destructive mb-8">
            Only to Find THIS
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            Three weeks later, we were on a plane to Bucharest. Then a rental car through the Carpathian Mountains.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">
            Heading to Praid. Home to the famous Praid Salt Mine.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            I was nervous. But hopeful.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">
            Linda squeezed my hand as we drove. "What if this actually works?"
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            "Then we're about to get your life back," I said.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">
            We pulled into the parking lot.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            That's when I saw the sign.
          </p>
          
          {/* Closed Sign Image */}
          <div className="my-10 text-center relative">
            <div 
              className="relative overflow-visible inline-block"
              style={{
                maskImage: 'radial-gradient(ellipse 85% 80% at center, black 40%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 85% 80% at center, black 40%, transparent 100%)'
              }}
            >
              <img 
                src={closedMineSign} 
                alt="ÎNCHIS - Closed sign at the salt mine" 
                className="w-[300px] md:w-[400px] mx-auto"
              />
            </div>
          </div>
          
          <p className="text-[28px] md:text-[40px] leading-[36px] md:leading-[50px] font-bold text-center text-destructive">
            ÎNCHIS
          </p>
          <p className="text-[20px] md:text-[26px] leading-[30px] md:leading-[40px] text-center italic mt-2 mb-8">
            Closed.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            I walked closer. Another sign. In Romanian and English.
          </p>
          
          <div className="bg-foreground rounded-[10px] p-5 md:p-6 mt-8 text-background">
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] italic">
              "Due to severe flooding and structural collapse, the Praid Salt Mine has been permanently closed as of May 2025."
            </p>
          </div>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">
            My heart sank.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            We'd flown 5,000 miles. Spent money we didn't have.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold text-destructive">
            And now... nothing.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            Linda put her hand on my shoulder. "We tried. That's more than most people do."
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">
            But I could hear it in her voice.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold italic">
            The defeat.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold italic">
            The resignation.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            Like she'd already accepted this was how the rest of her life was going to be.
          </p>
          
          {/* Determination Box */}
          <div className="bg-primary rounded-[14px] p-5 md:p-6 mt-10 text-primary-foreground">
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] font-bold">
              And I wasn't ready to accept that.
            </p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-4 font-bold italic">
              Not yet.
            </p>
          </div>
        </div>
      </section>

      {/* Section 9 - The Coffee Shop */}
      <section className="py-10 px-4 bg-secondary">
        <div className="max-w-[970px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-8">
            The Coffee Shop Conversation That Saved Linda's Life
          </h2>
          
          <div className="md:float-right md:ml-6 md:-mr-4 text-center mb-4 relative">
            <div 
              className="relative overflow-visible"
              style={{
                maskImage: 'radial-gradient(ellipse 85% 80% at center, black 40%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 85% 80% at center, black 40%, transparent 100%)'
              }}
            >
              <img 
                src={romanianCafeInterior} 
                alt="Romanian coffee shop interior" 
                className="w-[260px] md:w-[340px] mx-auto"
              />
            </div>
          </div>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">We drove into town. Found a small cafe on the main street. Old wooden tables. The smell of strong coffee and fresh bread.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">We ordered and sat down.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">Linda looked tired. Not physically. Just... defeated.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold italic">"What do we do now?" she whispered.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">I had no answer.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">Just that familiar crushing weight in my chest.</p>
          
          <div className="clear-both" />
        </div>
      </section>
      
      {/* Section 9b - Meeting Ioana */}
      <section className="py-10 px-4 bg-card">
        <div className="max-w-[970px] mx-auto">
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] font-bold">That's when an older woman at the next table leaned over.</p>
          
          <div className="md:float-left md:mr-6 md:-ml-4 text-center mb-4 mt-8 relative">
            <div 
              className="relative overflow-visible"
              style={{
                maskImage: 'radial-gradient(ellipse 85% 80% at center, black 40%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 85% 80% at center, black 40%, transparent 100%)'
              }}
            >
              <img 
                src={ioanaRomanianWoman} 
                alt="Ioana, the Romanian woman who helped us" 
                className="w-[240px] md:w-[300px] mx-auto"
              />
            </div>
          </div>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">"English?" she asked. Her accent thick. But clear.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">"American," I said.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">She smiled. "I'm Ioana."</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">She gestured toward the window. "You came for the mine?"</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">I nodded. "Yeah. But it collapsed."</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">She waved her hand dismissively. "The mine. Everyone comes for the mine."</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">She shook her head. "But the mine is not special. It's just... underground."</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">I frowned. "What do you mean?"</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">She leaned in closer. "You want salt for breathing, yes?"</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">"Yeah. My wife has lung problems."</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Ioana looked at Linda. Studied her for a moment. Then nodded. <strong>"The mine was good. But there is a better place."</strong></p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Linda sat up. "Where?"</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">Ioana smiled. "Mânzălești. Small village. About four hours from here."</p>
          
          <div className="clear-both" />
        </div>
      </section>
      
      {/* Section 9c - The YouTube Video */}
      <section className="py-10 px-4 bg-secondary">
        <div className="max-w-[970px] mx-auto">
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px]">She pulled out her phone. Scrolled for a minute. Then turned it toward us.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">It was a YouTube video. The thumbnail showed an old man. Holding an axe. Standing in front of a pile of freshly cut wood.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">The title was in Romanian. But I could make out the number: <strong>101 de ani.</strong></p>
          
          <p className="text-[28px] md:text-[40px] leading-[36px] md:leading-[50px] font-bold text-center my-8">101 years old.</p>
          
          <div className="my-10 text-center relative">
            <div 
              className="relative overflow-visible inline-block"
              style={{
                maskImage: 'radial-gradient(ellipse 85% 80% at center, black 40%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 85% 80% at center, black 40%, transparent 100%)'
              }}
            >
              <img 
                src={oldManChainsaw} 
                alt="101-year-old Gică Baciu cutting wood with a chainsaw" 
                className="w-[300px] md:w-[400px] mx-auto"
              />
            </div>
          </div>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">She hit play. The video had 96,000 views.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">The old man was cutting wood. With a CHAINSAW. Moving like he was 50. Not 101.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">"This is Gică Baciu," Ioana said. "He lives in Mânzălești. Everyone there lives long like this."</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Linda's eyes widened. "Everyone?"</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">Ioana nodded. "Many people. Very old. But still strong."</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">She swiped to another video. An old woman. Working in her garden. Moving effortlessly.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Then another. A news report. BBC. Showing the village. White hills rising from the valley.</p>
          
          <div className="bg-primary rounded-[14px] p-5 md:p-6 mt-10 text-primary-foreground">
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px]">"That is salt," Ioana said. "On the SURFACE. Not underground like the mine."</p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-4">I stared at the screen. "How is that possible?"</p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-4">She shrugged. "The ground is full of salt. So much salt, it comes to the top. The river carries it. The wind blows it."</p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-4 font-bold italic">"The whole village breathes it. Every day. Their whole lives."</p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-4 font-bold">"That is why they live so long."</p>
          </div>
        </div>
      </section>
      
      {/* Section 9d - The Evidence */}
      <section className="py-10 px-4 bg-card">
        <div className="max-w-[970px] mx-auto">
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px]">She showed us more videos. Multiple TV reports. Romanian news channels. National Geographic.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">All about Mânzălești. The village where people live past 100.</p>
          
          <div className="bg-foreground rounded-[10px] p-5 md:p-6 mt-8 text-background">
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] italic">
              "You can search for it yourself on YouTube," she said. "Mânzălești longevity village. There are dozens of reports. This is real. Documented for years."
            </p>
          </div>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">I looked at Linda. Then back at Ioana.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">Linda leaned forward. "Can we go there?"</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Ioana smiled. "Of course. But..." She paused. "You should talk to Dr. Popescu first. She knows everything about the salt."</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">"Who's Dr. Popescu?"</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">"A researcher. From the university. She has been studying Mânzălești for many years."</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">She pulled out a pen. Scribbled something on a napkin. Slid it across the table.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">"Her name. Her email. Tell her Ioana sent you."</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">I looked at the napkin. Then at Ioana. "That's very kind of you. But... why are you going out of your way for us?"</p>
        </div>
      </section>
      
      {/* Section 9e - Ioana's Story */}
      <section className="py-10 px-4 bg-secondary">
        <div className="max-w-[970px] mx-auto">
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] italic">She smiled sadly. "My husband had lung problems. Like your wife."</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">"He is gone now. But before he died... he spent time in Mânzălești."</p>
          
          <div className="bg-primary rounded-[14px] p-5 md:p-6 mt-10 text-primary-foreground">
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] font-bold italic">
              "It gave him ten more good years."
            </p>
          </div>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">Her eyes got a little watery. "So when I see people like you... looking for hope..."</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">She trailed off. Then stood up. Patted Linda's hand.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold italic">"Go to Mânzălești. Breathe the air. You will see."</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">And then she left.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">I sat there holding the napkin. Staring at the name. <strong>Dr. Elena Popescu.</strong></p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Linda looked at me. "Robert... should we email her?"</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">I pulled out my phone. "I'm doing it right now."</p>
        </div>
      </section>

      {/* Section 10 - Dr. Popescu Email */}
      <section className="py-10 px-4 bg-card">
        <div className="max-w-[970px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-2">
            What a Romanian Researcher Told Us Over Email
          </h2>
          <p className="text-[20px] md:text-[26px] leading-[30px] md:leading-[40px] font-bold text-center text-primary mb-8">
            (That Made Us Drive 4 Hours Into the Mountains)
          </p>
          
          <div className="md:float-right md:ml-6 md:-mr-4 text-center mb-4 relative">
            <div 
              className="relative overflow-visible"
              style={{
                maskImage: 'radial-gradient(ellipse 85% 80% at center, black 40%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 85% 80% at center, black 40%, transparent 100%)'
              }}
            >
              <img 
                src={phoneEmailNotification} 
                alt="Phone showing email notification" 
                className="w-[240px] md:w-[300px] mx-auto"
              />
            </div>
          </div>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">I sent the email right then and there. Explained who we were. Why we came. What we were hoping to find.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">I didn't expect a response. At least not right away.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">But two hours later... my phone buzzed.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">An email from Dr. Elena Popescu.</p>
          
          <div className="clear-both" />
          
          {/* Email Box */}
          <div className="bg-secondary rounded-[14px] p-6 md:p-8 mt-10 border-l-4 border-primary">
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] italic">"Dear Robert and Linda,</p>
            
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-6">I'm so glad you reached out.</p>
            
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-6">The Praid mine was a wonderful therapeutic environment. But you're right to be disappointed it collapsed.</p>
            
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-6 font-bold">I've been researching the Mânzălești village for over 15 years. I've documented over 40 residents over 90 years old. Out of just 2,000 people.</p>
            
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-6">And what I've found there is far more powerful than anything that happened in the mine.</p>
            
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-6">The mine was therapeutic. But Mânzălești? It's NATURAL. The salt is everywhere. In the soil. The water. The AIR.</p>
            
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-6 font-bold">The people there don't just visit the salt for a few hours. They LIVE in it. Breathe it. Every day. For their entire lives.</p>
            
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-6 italic">And the results speak for themselves.</p>
            
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-6">If you're willing to make the drive, I'd be happy to meet you there tomorrow. I can show you the village. Introduce you to some of the residents. And explain exactly why the air in Mânzălești might be able to help Linda.</p>
            
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-6">Let me know.</p>
            
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-6 font-bold">– Dr. Elena Popescu"</p>
          </div>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">I read the email out loud to Linda.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold italic">She looked at me and without hesitation said, "Let's go."</p>
        </div>
      </section>

      {/* The 4-Hour Drive Section */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-4 text-primary">
            The 4-Hour Drive That Felt Like Traveling Back in Time
          </h2>
          
          <div className="h-1 w-24 bg-primary mx-auto mb-10"></div>
          
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>We left before sunrise. Dr. Popescu's directions sitting on the dashboard.</p>
            
            <p>For the first hour, everything looked normal. Small towns. Gas stations. Road signs.</p>
            
            <p>Then the road narrowed.</p>
            
            <p>The towns got smaller.</p>
            
            <p className="font-semibold italic">And I started to feel it.</p>
            
            <p>That strange mix of hope and terror.</p>
            
            <p>We passed villages that looked like they hadn't changed in 100 years. Wooden houses. Horse-drawn carts. Fields worked by hand.</p>
            
            <p className="text-[20px] md:text-[24px] italic text-muted-foreground border-l-4 border-primary pl-6 my-8">
              "This feels like we're in a different century," Linda said.
            </p>
            
            <p>She wasn't wrong.</p>
            
            <p>Another hour passed. Then... I saw them.</p>
            
            <p className="text-[22px] md:text-[28px] font-bold text-primary">White hills rising from the valley.</p>
            
            <p>At first, I thought: snow.</p>
            
            <p>But it was May. Too warm.</p>
            
            <p>I pulled over. Got out.</p>
            
            <p>Walked closer.</p>
            
            <p className="text-[24px] md:text-[32px] font-bold">Not snow.</p>
            
            <p className="text-[24px] md:text-[32px] font-bold text-primary">Salt.</p>
          </div>
        </div>
      </section>

      {/* Salt Hills Image Section */}
      <section className="py-8 md:py-12 px-4 bg-secondary/30">
        <div className="max-w-[900px] mx-auto">
          <figure className="relative">
            <div 
              className="relative overflow-visible mx-auto max-w-[700px]"
              style={{
                maskImage: 'radial-gradient(ellipse 90% 85% at center, black 50%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 90% 85% at center, black 50%, transparent 100%)'
              }}
            >
              <img 
                src={saltHillsRomania} 
                alt="White salt hills rising from the Romanian valley" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <figcaption className="text-center mt-4 text-muted-foreground italic text-[16px]">
              The salt hills of Mânzălești - coating the hillsides like powder
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Salt Discovery Continuation */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>Coating the hillsides like powder. Sparkling like crushed diamonds in the morning sun.</p>
            
            <p>Linda came up beside me. "Robert... is that...?"</p>
            
            <p>"Yeah," I said quietly. "That's salt."</p>
            
            <p>We stood there for a minute. Just staring at these hills. Covered in salt. Out in the open. Not underground. Not in a mine. Just... there.</p>
            
            <p>Then I heard a car pull up behind us.</p>
            
            <p>I turned. A woman got out. Probably in her late 50s. Carrying a weathered leather bag. Warm smile.</p>
            
            <p className="text-[20px] md:text-[24px] italic text-muted-foreground border-l-4 border-primary pl-6 my-8">
              "Robert? Linda?"
            </p>
            
            <p>I nodded.</p>
            
            <p>She walked over. Extended her hand.</p>
            
            <p className="text-[22px] md:text-[28px] font-bold text-primary">"I'm Dr. Elena Popescu. Welcome to Mânzălești."</p>
          </div>
          
          {/* Dr. Popescu Image */}
          <figure className="mt-10 relative">
            <div 
              className="relative overflow-visible mx-auto max-w-[400px]"
              style={{
                maskImage: 'radial-gradient(ellipse 85% 80% at center, black 40%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 85% 80% at center, black 40%, transparent 100%)'
              }}
            >
              <img 
                src={drPopescu} 
                alt="Dr. Elena Popescu" 
                className="w-full h-auto"
              />
            </div>
            <figcaption className="text-center mt-4 text-muted-foreground italic text-[16px]">
              Dr. Elena Popescu - researcher who has studied Mânzălești for over 15 years
            </figcaption>
          </figure>
        </div>
      </section>

      {/* What We Found in the Village Section */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-4 text-primary">
            What We Found in the Village Where People Live Past 100
          </h2>
          
          <div className="h-1 w-24 bg-primary mx-auto mb-10"></div>
          
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>Dr. Popescu shook our hands. Then looked back toward the white hills. "Beautiful, isn't it?"</p>
            
            <p>Linda nodded. "I've never seen anything like it."</p>
            
            <p className="text-[20px] md:text-[24px] italic text-muted-foreground border-l-4 border-primary pl-6 my-8">
              "Most people haven't," Dr. Popescu said. "This is one of the only places on Earth where salt deposits rise to the surface like this."
            </p>
            
            <p>She gestured for us to follow her. "Come. Let me show you the village."</p>
            
            <p>We got back in our cars. Followed her down a winding dirt road.</p>
            
            <p>Through fields dotted with those white salt formations. Past wooden fences. Grazing sheep. Old women in headscarves tending gardens.</p>
            
            <p className="font-semibold">Then we reached the village center.</p>
          </div>
        </div>
      </section>

      {/* Village Image Section */}
      <section className="py-8 md:py-12 px-4 bg-secondary/30">
        <div className="max-w-[900px] mx-auto">
          <figure className="relative">
            <div 
              className="relative overflow-visible mx-auto max-w-[700px]"
              style={{
                maskImage: 'radial-gradient(ellipse 90% 85% at center, black 50%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 90% 85% at center, black 50%, transparent 100%)'
              }}
            >
              <img 
                src={romanianVillage} 
                alt="The village of Mânzălești - small church, dirt square, wooden fences" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <figcaption className="text-center mt-4 text-muted-foreground italic text-[16px]">
              Mânzălești - simple, quiet, untouched by time
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Village Story Continuation */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>A small church. A general store. A handful of houses scattered around a dirt square.</p>
            
            <p className="italic">Simple. Quiet. Untouched by time.</p>
            
            <p>Dr. Popescu parked. We pulled up beside her. "This is Mânzălești," she said.</p>
            
            <p>I looked around. It felt like we'd stepped into a different era. No paved roads. No power lines. Just... simplicity.</p>
            
            <p>Linda grabbed my hand. "Robert... where are we going to stay?"</p>
            
            <p>Dr. Popescu smiled. "I've arranged something."</p>
            
            <p>She led us down a narrow path. Past a few more houses. Until we reached a small cottage. White walls. Blue shutters. Flowers in the window boxes.</p>
            
            <p>An older woman was standing outside. Probably in her 70s. Wearing a traditional Romanian dress. Smiling warmly.</p>
            
            <p className="text-[20px] md:text-[24px] italic text-muted-foreground border-l-4 border-primary pl-6 my-8">
              "This is Maria," Dr. Popescu said. "She's agreed to rent you her guest house for as long as you need."
            </p>
            
            <p>Maria said something in Romanian. Dr. Popescu translated. "She says welcome. And she's happy you're here."</p>
            
            <p>Maria walked over to Linda. Took both her hands. Said something else.</p>
            
            <p>Dr. Popescu translated again. "She says her sister had breathing problems, too. The air here helped her."</p>
            
            <p>Linda's eyes welled up a little. "Thank you," she said.</p>
            
            <p>Maria squeezed her hands. Then led us around the side of the main house. To a smaller building in the back.</p>
            
            <p>Inside was simple. One bedroom. Small kitchen. Bathroom. But it was clean. Comfortable.</p>
            
            <p className="font-semibold italic">And honestly? It felt... peaceful.</p>
            
            <p>Dr. Popescu stood in the doorway. "I'll let you get settled. Get some rest tonight."</p>
            
            <p>She paused. "Tomorrow morning, come by my office. It's just down the road. I want to show you something."</p>
            
            <p>"What?" I asked.</p>
            
            <p className="text-[22px] md:text-[28px] font-bold text-primary">She smiled. "Why this place actually works."</p>
          </div>
        </div>
      </section>


      {/* Dr. Popescu Science Section - Part 1 */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-2 text-primary">
            Dr. Popescu Showed Us EXACTLY How This Works
          </h2>
          <p className="text-[20px] md:text-[28px] text-center text-muted-foreground italic mb-8">
            (And Why Your Doctor Will Never Tell You)
          </p>
          
          <div className="h-1 w-24 bg-primary mx-auto mb-10"></div>
          
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>The next morning, we walked down the dirt road to a small building near the village center.</p>
            
            <p className="italic">A hand-painted sign out front read: Dr. Elena Popescu - Research Office</p>
            
            <p>She was waiting for us at the door. "Come in, come in."</p>
            
            <p>Inside was a single room. Shelves lined with books. A desk covered in papers. And on the walls... diagrams. Charts. Photos of lungs.</p>
            
            <p>She gestured toward two chairs. "Sit. I want to explain something."</p>
            
            <p>Linda and I sat down.</p>
            
            <p>Dr. Popescu pulled out a laminated diagram. Showed it to us.</p>
            
            <p>It was a cross-section of human lungs. Airways branching like tree roots.</p>
            
            <p className="font-semibold">But some of them were... clogged. Thick white plugs blocking the passages.</p>
          </div>
        </div>
      </section>

      {/* Lung Diagram Image */}
      <section className="py-8 md:py-12 px-4 bg-secondary/30">
        <div className="max-w-[600px] mx-auto">
          <figure className="relative">
            <div 
              className="relative overflow-visible mx-auto"
              style={{
                maskImage: 'radial-gradient(ellipse 90% 85% at center, black 50%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 90% 85% at center, black 50%, transparent 100%)'
              }}
            >
              <img 
                src={lungDiagram} 
                alt="Cross-section of human lungs showing airways with mucus plugs" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <figcaption className="text-center mt-4 text-muted-foreground italic text-[16px]">
              "This is what Linda's lungs look like right now"
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Dr. Popescu Science Section - Part 2: The Problem */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>Linda leaned forward. Staring at the image.</p>
            
            <p className="text-[20px] md:text-[24px] italic text-muted-foreground border-l-4 border-primary pl-6 my-8">
              "Your lungs aren't just inflamed," Dr. Popescu continued. "They're DROWNING."
            </p>
            
            <p>"The inflammation causes your body to produce excess mucus. Thick, sticky mucus that traps bacteria and irritants."</p>
            
            <p className="font-semibold">"And over time... that mucus doesn't just sit there. It HARDENS."</p>
            
            <p>She tapped the diagram.</p>
            
            <p className="text-[22px] md:text-[28px] font-bold text-primary">"What you're looking at are what I call Mucus Cement Plugs."</p>
            
            <p className="italic">"Dense. Rubbery. Obstructive."</p>
            
            <p>"They can persist in the same airways for YEARS if they're not cleared."</p>
            
            <p>Linda's hand went to her throat. Like she could feel it.</p>
            
            <p>"Your medications try to open the airways by relaxing the muscles around them. But they completely ignore the PLUG blocking them."</p>
            
            <p>Dr. Popescu looked at us.</p>
            
            <p className="text-[20px] md:text-[24px] italic text-muted-foreground border-l-4 border-destructive pl-6 my-8">
              "So you're essentially trying to inflate a balloon that's already full of thick, sticky glue."
            </p>
            
            <p className="font-bold text-[22px] md:text-[26px]">"That's why nothing works."</p>
            
            <p>I leaned forward. "So how do you get rid of them?"</p>
            
            <p className="text-primary font-semibold text-[20px] md:text-[24px]">Dr. Popescu smiled.</p>
            
            <p className="text-[24px] md:text-[32px] font-bold text-primary">"That's where the salt comes in."</p>
          </div>
        </div>
      </section>

      {/* Salt Crystals Image */}
      <section className="py-8 md:py-12 px-4 bg-secondary/30">
        <div className="max-w-[500px] mx-auto">
          <figure className="relative">
            <div 
              className="relative overflow-visible mx-auto"
              style={{
                maskImage: 'radial-gradient(ellipse 85% 80% at center, black 40%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 85% 80% at center, black 40%, transparent 100%)'
              }}
            >
              <img 
                src={saltCrystalsCloseup} 
                alt="Pink salt crystals in a glass jar" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <figcaption className="text-center mt-4 text-muted-foreground italic text-[16px]">
              Ancient salt crystals formed 22 million years ago
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Dr. Popescu Science Section - Part 3: The Salt */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>She walked over to a shelf. Pulled down a small glass jar filled with pinkish-white crystals.</p>
            
            <p className="font-semibold">"This isn't table salt."</p>
            
            <p>She held the jar up to the light.</p>
            
            <p className="italic">"It was formed 22 million years ago under intense volcanic pressure and heat."</p>
            
            <p>"The minerals got BAKED into the salt."</p>
            
            <p>"Creating compounds that don't exist in regular sodium chloride."</p>
            
            <p>She unscrewed the lid. Poured a small amount onto a piece of paper.</p>
            
            <p className="font-semibold text-primary">"Kieserite. Polyhalite. Iron oxide."</p>
            
            <p>She pointed to the faint rose and gray streaks running through the crystals.</p>
            
            <p className="text-[20px] md:text-[24px] font-bold">"When you breathe in microscopic particles of THIS salt... three things happen."</p>
          </div>
        </div>
      </section>

      {/* The Three Steps */}
      <section className="py-10 md:py-16 px-4 bg-primary/5">
        <div className="max-w-[750px] mx-auto">
          {/* Step 1 */}
          <div className="bg-card rounded-xl p-6 md:p-8 shadow-lg mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-12 md:w-16 md:h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl md:text-3xl font-bold">1</span>
              <h3 className="text-[22px] md:text-[28px] font-bold text-primary">FIRST... Osmotic Hydration</h3>
            </div>
            <div className="space-y-4 text-[17px] md:text-[20px] leading-relaxed text-foreground pl-0 md:pl-20">
              <p>"Salt is hygroscopic. It naturally attracts and pulls water molecules toward it."</p>
              <p>"When salt particles land on those dense mucus plugs, they immediately start pulling moisture FROM your surrounding lung tissue INTO the plug."</p>
              <p className="italic text-muted-foreground">"Think of it like pouring water on dried rubber cement before you try to peel it off."</p>
              <p className="font-semibold">"Within 20-30 minutes, those plugs start to soften and rehydrate."</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-card rounded-xl p-6 md:p-8 shadow-lg mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-12 md:w-16 md:h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl md:text-3xl font-bold">2</span>
              <h3 className="text-[22px] md:text-[28px] font-bold text-primary">SECOND... Ionic Restructuring</h3>
            </div>
            <div className="space-y-4 text-[17px] md:text-[20px] leading-relaxed text-foreground pl-0 md:pl-20">
              <p>"Mucus is a complex structure. A charged hydrogel where the ionic environment dramatically affects its viscosity and elasticity."</p>
              <p>"The mineral salts in THIS salt—magnesium sulfate, polyhalite, iron oxide—literally alter the STRUCTURE of the mucus."</p>
              <p className="font-semibold">"Making it less sticky. Less rigid. Easier to move."</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-card rounded-xl p-6 md:p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-12 md:w-16 md:h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl md:text-3xl font-bold">3</span>
              <h3 className="text-[22px] md:text-[28px] font-bold text-primary">THIRD... Restored Clearance</h3>
            </div>
            <div className="space-y-4 text-[17px] md:text-[20px] leading-relaxed text-foreground pl-0 md:pl-20">
              <p>"Your lungs have tiny hair-like structures called cilia that sweep mucus UP and OUT of your airways."</p>
              <p>"But chronic inflammation paralyzes them."</p>
              <p className="italic text-muted-foreground">She showed us a microscopic image. Tiny hairs. Frozen in place.</p>
              <p>"The salt reactivates those cilia. Gets them moving again."</p>
              <p className="font-semibold">"So within weeks of consistent exposure, your body can begin clearing plugs that have been stuck for months or years."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Popescu Science Section - Part 4: Why Doctors Don't Tell You */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>She set the jar down.</p>
            
            <p className="text-[20px] md:text-[24px] italic text-muted-foreground border-l-4 border-primary pl-6 my-8">
              "This is why the air here works when medications don't."
            </p>
            
            <p className="font-bold">"The medications only treat symptoms. The salt treats the ROOT CAUSE."</p>
            
            <p>I leaned back in my chair. Just... processing.</p>
            
            <p>"Why doesn't my doctor know about this?" Linda asked.</p>
            
            <p>Dr. Popescu smiled sadly.</p>
            
            <p className="text-[22px] md:text-[28px] font-bold text-destructive">"They DO know. They just don't CARE."</p>
            
            <p>"You can't patent salt. Big Pharma can't make billions off a natural mineral."</p>
            
            <p>"So they don't fund research on it. They don't teach it in medical school. They certainly don't recommend it."</p>
            
            <p className="text-[20px] md:text-[24px] italic text-muted-foreground border-l-4 border-destructive pl-6 my-8">
              "Instead, they push medications that cost $40–$150 per dose... that you'll need for the rest of your life... and that only treat symptoms. Not the root cause."
            </p>
          </div>
        </div>
      </section>

      {/* Dr. Popescu Science Section - Part 5: The Gift */}
      <section className="py-10 md:py-16 px-4 bg-secondary/30">
        <div className="max-w-[750px] mx-auto">
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>She walked back to her desk. Picked up a thermos and a small audio device.</p>
            
            <p className="font-semibold">"This is what I give all my patients."</p>
            
            <p>She handed Linda the thermos.</p>
            
            <p className="italic">"Thyme, rosemary, eucalyptus. It helps thin the mucus from the INSIDE... while the salt works from the OUTSIDE."</p>
            
            <p>Linda unscrewed the top. Took a sip.</p>
            
            <p>"It's good."</p>
            
            <p>"My grandmother's recipe," Dr. Popescu said with a smile.</p>
            
            <p>Then she held up the audio device.</p>
            
            <p className="font-semibold">"And this is a guided breathing exercise. Five minutes. Every morning."</p>
            
            <p>"It helps expel the trapped mucus and restore your lung capacity."</p>
            
            <p>"We use it with all our patients here. I want you to take it home with you."</p>
            
            <p>She handed it to Linda.</p>
            
            <p className="italic">"For the next few days... just breathe the air. Drink the tea. Do the exercise."</p>
            
            <p className="font-bold">"That's it."</p>
            
            <p>Linda looked at me. Then back at Dr. Popescu.</p>
            
            <p>"Thank you," she whispered.</p>
            
            <p>Dr. Popescu squeezed her hand.</p>
            
            <p className="text-[22px] md:text-[28px] font-bold text-primary">"You're going to be okay. I promise."</p>
          </div>
        </div>
      </section>

      {/* Hope Section */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto text-center">
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>We walked out of that office in a daze.</p>
            
            <p>Linda held the thermos in one hand. The audio device in the other.</p>
            
            <p className="text-[24px] md:text-[32px] font-bold text-primary mt-8">And for the first time in years...</p>
            
            <p className="text-[28px] md:text-[36px] font-bold">She had hope.</p>
          </div>
        </div>
      </section>

      {/* Day 3 Breakthrough Section */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-2 text-primary">
            Day 3: The Morning Linda Woke Up Without Wheezing
          </h2>
          <p className="text-[20px] md:text-[28px] text-center text-muted-foreground italic mb-8">
            (For the First Time in 3 Years)
          </p>
          
          <div className="h-1 w-24 bg-primary mx-auto mb-10"></div>
          
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>The first two days were... underwhelming.</p>
            
            <p>We walked around the village. Met some locals. (None of whom spoke English.)</p>
            
            <p>Looked at the salt-covered hills. Breathed.</p>
            
            <p className="italic">And that was it.</p>
            
            <p>Linda said she felt "okay." Not better. Not worse. Just... okay.</p>
            
            <p className="font-semibold">I started to think we'd made a mistake.</p>
            
            <p className="text-[22px] md:text-[28px] font-bold text-primary mt-8">Then... day 3.</p>
          </div>
        </div>
      </section>

      {/* Morning Scene Image */}
      <section className="py-8 md:py-12 px-4 bg-secondary/30">
        <div className="max-w-[600px] mx-auto">
          <figure className="relative">
            <div 
              className="relative overflow-visible mx-auto"
              style={{
                maskImage: 'radial-gradient(ellipse 90% 85% at center, black 50%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 90% 85% at center, black 50%, transparent 100%)'
              }}
            >
              <img 
                src={eldernCoupleBreathing} 
                alt="Linda waking up peacefully, breathing clearly" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </figure>
        </div>
      </section>

      {/* Day 3 Continuation - The Realization */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>I woke up around 7 AM. Linda was still asleep next to me.</p>
            
            <p className="font-semibold">But something was different.</p>
            
            <p>I couldn't figure out what it was at first.</p>
            
            <p>Then I realized.</p>
            
            <p className="text-[22px] md:text-[28px] font-bold text-primary">I didn't hear the wheeze.</p>
            
            <p>That rattling sound that had been part of our mornings for YEARS. It was... gone.</p>
            
            <p>I sat up. Watched her chest rise and fall. Smooth. Steady. Quiet.</p>
            
            <p className="italic">No struggle. No gasping. Just... breathing.</p>
          </div>
        </div>
      </section>

      {/* The Moment */}
      <section className="py-10 md:py-16 px-4 bg-primary/5">
        <div className="max-w-[750px] mx-auto">
          <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg">
            <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
              <p>She opened her eyes. "Morning," she said.</p>
              
              <p>Her voice was clear. Not strained. Not tight. <span className="font-bold">Clear.</span></p>
              
              <p>"How do you feel?" I asked.</p>
              
              <p>She paused. Took a deep breath. All the way in. Held it. Then let it out slowly.</p>
              
              <p className="font-semibold">Her eyes widened.</p>
              
              <p className="text-[24px] md:text-[32px] font-bold text-primary text-center my-8">"I can breathe," she whispered.</p>
              
              <p>Not "I'm breathing okay." Not "I'm managing."</p>
              
              <p className="text-[26px] md:text-[34px] font-bold text-center">"I can BREATHE."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Conclusion */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>She sat up. Took another breath. Deeper this time.</p>
            
            <p className="text-[20px] md:text-[24px] italic text-muted-foreground border-l-4 border-primary pl-6 my-8">
              "Robert, I don't feel like I'm suffocating."
            </p>
            
            <p>She started crying. Happy tears.</p>
            
            <p className="font-semibold italic">"I forgot what this felt like."</p>
            
            <p>I didn't say anything. Because I was crying too.</p>
          </div>
        </div>
      </section>

      {/* 97-Year-Old Woman Section - Part 1 */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-2 text-primary">
            The 97-Year-Old Woman Chopping Wood
          </h2>
          <p className="text-[20px] md:text-[28px] text-center text-muted-foreground italic mb-8">
            (And What She Told Us About the Salt)
          </p>
          
          <div className="h-1 w-24 bg-primary mx-auto mb-10"></div>
          
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>Later that morning, Dr. Popescu came by.</p>
            
            <p>"How are you feeling?" she asked Linda.</p>
            
            <p>"Better. A lot better."</p>
            
            <p>Dr. Popescu smiled. "Good. Come with me. I want to show you something."</p>
            
            <p>We walked through the village. Down a narrow dirt path. Past a few scattered houses.</p>
            
            <p className="font-semibold">Then we came to a small garden.</p>
          </div>
        </div>
      </section>

      {/* Elderly Woman Gardening Image */}
      <section className="py-8 md:py-12 px-4 bg-secondary/30">
        <div className="max-w-[600px] mx-auto">
          <figure className="relative">
            <div 
              className="relative overflow-visible mx-auto"
              style={{
                maskImage: 'radial-gradient(ellipse 90% 85% at center, black 50%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 90% 85% at center, black 50%, transparent 100%)'
              }}
            >
              <img 
                src={elderlyWomanGardening} 
                alt="Ana, 97 years old, working in her garden" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <figcaption className="text-center mt-4 text-muted-foreground italic text-[16px]">
              Ana - 97 years old, still working in her garden every morning
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Meeting Ana */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>An older woman was kneeling in the dirt. Pulling weeds. Moving with steady, practiced motions.</p>
            
            <p>Dr. Popescu called out to her in Romanian.</p>
            
            <p>The woman looked up. Smiled. Stood up without using her hands.</p>
            
            <p>Up close, I could see how old she was. Deeply lined face. Hands weathered from decades of work. But her eyes were bright. Alert.</p>
            
            <p className="text-[22px] md:text-[28px] font-bold text-primary">"This is Ana," Dr. Popescu said. "She's 97."</p>
            
            <p>We shook hands. Her grip was surprisingly strong.</p>
            
            <p>Dr. Popescu translated as we talked.</p>
            
            <p>"Have you always lived here?" I asked.</p>
            
            <p>Ana nodded. Said something in Romanian.</p>
            
            <p className="italic">Dr. Popescu translated: "She was born in this house. Her mother was born here, too. Four generations of her family have lived in this valley."</p>
          </div>
        </div>
      </section>

      {/* The Breathing Question */}
      <section className="py-10 md:py-16 px-4 bg-primary/5">
        <div className="max-w-[750px] mx-auto">
          <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg">
            <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
              <p>Linda asked, "Have you had any lung problems? Asthma? Breathing issues?"</p>
              
              <p>Ana looked confused. Said something to Dr. Popescu.</p>
              
              <p>Dr. Popescu smiled. "She says no one in her family has ever had lung problems. Not her. Not her mother. Not her grandmother."</p>
              
              <p className="font-semibold">"Never?"</p>
              
              <p>Ana shrugged. Said something else.</p>
              
              <p className="text-[20px] md:text-[24px] italic text-muted-foreground border-l-4 border-primary pl-6 my-6">
                Dr. Popescu translated: "She says the salt protects our lungs. We don't get the breathing sickness."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Firewood */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>We talked for a few more minutes. Then Ana gestured toward a pile of freshly chopped firewood.</p>
            
            <p>Dr. Popescu laughed. Translated: "She says she chopped that this morning. For winter."</p>
            
            <p>I stared at the pile. Then at Ana. "You chopped all that? Today?"</p>
            
            <p>Ana nodded. Said something with a grin.</p>
            
            <p className="italic">Dr. Popescu translated: "She says her knees used to hurt. But not anymore. She uses warm salt bags on them at night. Old tradition here."</p>
            
            <p className="font-semibold text-primary">Linda's eyes widened. "Salt bags?"</p>
          </div>
        </div>
      </section>

      {/* Salt Pouch Image */}
      <section className="py-8 md:py-12 px-4 bg-secondary/30">
        <div className="max-w-[500px] mx-auto">
          <figure className="relative">
            <div 
              className="relative overflow-visible mx-auto"
              style={{
                maskImage: 'radial-gradient(ellipse 85% 80% at center, black 40%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 85% 80% at center, black 40%, transparent 100%)'
              }}
            >
              <img 
                src={saltTherapyPouch} 
                alt="Traditional salt therapy pouch filled with pink salt crystals" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <figcaption className="text-center mt-4 text-muted-foreground italic text-[16px]">
              Traditional salt pouch - used for generations to reduce inflammation
            </figcaption>
          </figure>
        </div>
      </section>

      {/* The Salt Pouch Gift */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>Ana nodded again. Went inside her house. Came back with a small fabric pouch. Handed it to Linda.</p>
            
            <p>It was warm. Filled with coarse salt.</p>
            
            <p>Dr. Popescu explained: "The villagers heat these pouches and apply them to sore joints. Knees. Shoulders. Hips. It reduces inflammation."</p>
            
            <p>Ana said something else.</p>
            
            <p className="italic">Dr. Popescu smiled. "She says you can keep that one. She has many."</p>
            
            <p>Linda held the pouch. "Thank you," she whispered.</p>
          </div>
        </div>
      </section>

      {/* The Tiny Vial */}
      <section className="py-10 md:py-16 px-4 bg-primary/5">
        <div className="max-w-[750px] mx-auto">
          <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg">
            <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
              <p>Then Ana reached into her apron.</p>
              
              <p>Pulled out something smaller.</p>
              
              <p className="font-semibold">A tiny glass vial. No bigger than her thumb.</p>
              
              <p className="text-primary font-semibold">Filled with pinkish-white salt crystals.</p>
              
              <p>She held it up to the light. Said something in Romanian.</p>
              
              <p className="text-[20px] md:text-[24px] italic text-muted-foreground border-l-4 border-primary pl-6 my-6">
                Dr. Popescu translated: "She says this is different. She doesn't USE this salt. She CARRIES it."
              </p>
              
              <p>"Everywhere she goes. In her pocket. Around her neck. Always."</p>
              
              <p>Linda looked confused. "Why?"</p>
              
              <p>Ana tapped the vial. Said something else.</p>
              
              <p className="font-semibold">Dr. Popescu smiled. "She says it protects her. Keeps the bad energy away. Gives her strength."</p>
              
              <p>"It's a tradition here. The villagers have been doing this for generations."</p>
              
              <p className="text-[20px] md:text-[24px] italic">"They believe the salt doesn't just heal the body. It protects the SPIRIT."</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Gift and Realization */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>Ana handed the vial to Linda.</p>
            
            <p>Said something softly.</p>
            
            <p className="italic">Dr. Popescu translated: "She says you should carry one too. To keep you strong. To remind you that you're healing."</p>
            
            <p>Linda held the vial in her palm. Staring at it.</p>
            
            <p>"Thank you," she whispered again.</p>
          </div>
        </div>
      </section>

      {/* Walking Away */}
      <section className="py-10 md:py-16 px-4 bg-secondary/30">
        <div className="max-w-[750px] mx-auto">
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>As we walked away, Dr. Popescu said, "There are dozens of people like her in this village. All in their 90s. Many over 100."</p>
            
            <p className="font-semibold">"They don't take medication. They don't go to doctors. They just... live."</p>
            
            <p>"And breathe this air every single day."</p>
            
            <p>Linda turned to me. "Robert... what if this is real?"</p>
            
            <p>I looked back at Ana. Still working in her garden. At 97.</p>
            
            <p className="text-[24px] md:text-[32px] font-bold text-primary text-center mt-8">"I think it is," I said.</p>
          </div>
        </div>
      </section>

      {/* Day 10 Transformation Section */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-2 text-primary">
            By Day 10, Linda Did Something She Hasn't Done in 5 Years
          </h2>
          <p className="text-[20px] md:text-[28px] text-center text-muted-foreground italic mb-8">
            (And I Cried Like a Baby Watching Her)
          </p>
          
          <div className="h-1 w-24 bg-primary mx-auto mb-10"></div>
          
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p className="font-semibold">Over the next week, Linda transformed.</p>
            
            <p>Not overnight. But steadily.</p>
            
            <p>By day 5, she was walking around the village without stopping to catch her breath.</p>
            
            <p>By day 7, she was sleeping through the night. No coughing fits. No waking up at 3 AM struggling to breathe.</p>
            
            <p className="text-[22px] md:text-[28px] font-bold text-primary">By day 10... she wanted to hike.</p>
          </div>
        </div>
      </section>

      {/* The Hike */}
      <section className="py-10 md:py-16 px-4 bg-secondary/30">
        <div className="max-w-[750px] mx-auto">
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>There's this trail near the village. About 3 miles. Moderate incline. Nothing crazy.</p>
            
            <p>But for Linda? It might as well have been Everest.</p>
            
            <p className="italic">Six months earlier, she couldn't walk to the mailbox without stopping halfway.</p>
            
            <p className="font-semibold">And now... she wanted to hike.</p>
            
            <p>"Are you sure?" I asked.</p>
            
            <p>She nodded. "I want to try."</p>
            
            <p>We started walking. Slowly at first.</p>
            
            <p>I kept waiting for her to stop. To catch her breath. To say she needed a break.</p>
            
            <p className="font-semibold text-primary">But she didn't.</p>
            
            <p>She just... kept going. One foot in front of the other. Breathing. ACTUALLY breathing.</p>
          </div>
        </div>
      </section>

      {/* The View */}
      <section className="py-10 md:py-16 px-4 bg-primary/5">
        <div className="max-w-[750px] mx-auto">
          <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg">
            <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
              <p>About halfway up, she stopped. Not because she was tired. But because she wanted to look at the view.</p>
              
              <p className="italic">The mountains stretched out in front of us. Green and gold and endless. The white salt hills sparkling in the distance.</p>
              
              <p className="text-[20px] md:text-[24px] italic text-muted-foreground border-l-4 border-primary pl-6 my-6">
                "I never thought I'd be able to do this again," she said quietly.
              </p>
              
              <p>I didn't say anything.</p>
              
              <p className="font-semibold">Because I was crying.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Medical Check */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>That afternoon, Dr. Popescu came by with a portable oxygen monitor. "Let's see how you're doing," she said.</p>
            
            <p>She clipped it onto Linda's finger. We waited.</p>
            
            <p className="text-[32px] md:text-[44px] font-bold text-primary text-center my-6">97%</p>
            
            <p>Dr. Popescu smiled. "Excellent."</p>
            
            <p>Linda looked at me. "What was it before?"</p>
            
            <p className="font-semibold">"88%," I said quietly.</p>
          </div>
        </div>
      </section>

      {/* The Peak Flow Test */}
      <section className="py-10 md:py-16 px-4 bg-primary/5">
        <div className="max-w-[750px] mx-auto">
          <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg">
            <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
              <p>Dr. Popescu pulled out a peak flow meter. "Blow into this. As hard as you can."</p>
              
              <p>Linda did.</p>
              
              <p className="text-[32px] md:text-[44px] font-bold text-primary text-center my-6">420</p>
              
              <p>"What was it before?" Dr. Popescu asked.</p>
              
              <p className="font-semibold">"310," Linda whispered.</p>
              
              <p className="text-[20px] md:text-[24px] italic text-muted-foreground border-l-4 border-primary pl-6 my-6">
                Dr. Popescu nodded. "You've gone from severe obstruction to borderline normal. In 10 days."
              </p>
              
              <p>Linda started crying. "I'm getting better."</p>
              
              <p>Dr. Popescu squeezed her hand. <span className="font-bold text-primary">"Yes. You are."</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Robert's Knee Pain */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p className="font-semibold">But while Linda was getting better... that hike absolutely DESTROYED my knees.</p>
            
            <p>Twenty-two years in the Air Force had left them pretty shot.</p>
            
            <p>And by the time we got back to the cottage, I could barely walk.</p>
            
            <p className="italic">Then I remembered what Ana said about the warm salt bags.</p>
          </div>
        </div>
      </section>

      {/* Salt Bag Solution Image */}
      <section className="py-8 md:py-12 px-4 bg-secondary/30">
        <div className="max-w-[600px] mx-auto">
          <figure className="relative">
            <div 
              className="relative overflow-visible mx-auto"
              style={{
                maskImage: 'radial-gradient(ellipse 90% 85% at center, black 50%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 90% 85% at center, black 50%, transparent 100%)'
              }}
            >
              <img 
                src={elderlyManChoppingWood} 
                alt="Healthy elderly man chopping wood" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <figcaption className="text-center mt-4 text-muted-foreground italic text-[16px]">
              The villagers stay active well into their 90s
            </figcaption>
          </figure>
        </div>
      </section>

      {/* The Salt Bag Miracle */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>I grabbed one of the small pouches Maria had given us. Heated it on the stove for a few minutes. Pressed it against my right knee.</p>
            
            <p className="font-semibold">Within 20 minutes, the throbbing stopped.</p>
            
            <p>The next morning? No pain.</p>
            
            <p className="text-[24px] md:text-[32px] font-bold text-primary text-center mt-8">First time in years.</p>
          </div>
        </div>
      </section>

      {/* The Problem At Home - Part 1 */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-2 text-primary">
            The Problem We Discovered When We Got Home
          </h2>
          <p className="text-[20px] md:text-[28px] text-center text-muted-foreground italic mb-8">
            (And Why Everything Almost Fell Apart)
          </p>
          
          <div className="h-1 w-24 bg-primary mx-auto mb-10"></div>
          
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>We flew home three weeks later.</p>
            
            <p className="italic">I was terrified. Terrified the effects would wear off. That we'd get back to Georgia... and it would all come crashing down.</p>
            
            <p className="font-semibold text-primary">But for the first few weeks... Linda was fine. Better than fine.</p>
            
            <p className="text-[22px] md:text-[28px] font-bold">She was THRIVING.</p>
          </div>
        </div>
      </section>

      {/* The Thriving Period */}
      <section className="py-10 md:py-16 px-4 bg-primary/5">
        <div className="max-w-[750px] mx-auto">
          <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg">
            <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
              <p>She reduced her inhaler use by <span className="font-bold text-primary">80%</span>.</p>
              
              <p>Stopped taking steroids altogether.</p>
              
              <p>Started going for walks around the neighborhood.</p>
              
              <p>Even played with the grandkids in the backyard.</p>
              
              <p className="font-semibold mt-6">I thought we'd won. I really did.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Return of Symptoms */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>Then... about six weeks after we got home... I heard it.</p>
            
            <p>That sound. Faint at first. But unmistakable.</p>
            
            <p className="text-[24px] md:text-[32px] font-bold text-destructive">The wheeze.</p>
            
            <p>Linda coughed a few times. "Just dry air," she said.</p>
            
            <p className="font-semibold">But I knew better.</p>
            
            <p>By that afternoon, she was reaching for her inhaler again. And that night... the wheezing was back.</p>
            
            <p className="text-[20px] md:text-[24px] italic text-muted-foreground border-l-4 border-destructive pl-6 my-8">
              Within two weeks, it was like Romania never happened.
            </p>
            
            <p>The shortness of breath. The coughing fits. The sleepless nights. All of it. Came rushing back.</p>
          </div>
        </div>
      </section>

      {/* Bathroom Scene Image */}
      <section className="py-8 md:py-12 px-4 bg-secondary/30">
        <div className="max-w-[500px] mx-auto">
          <figure className="relative">
            <div 
              className="relative overflow-visible mx-auto"
              style={{
                maskImage: 'radial-gradient(ellipse 85% 80% at center, black 40%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 85% 80% at center, black 40%, transparent 100%)'
              }}
            >
              <img 
                src={womanBathroomFloor} 
                alt="Linda sitting on bathroom floor, crying" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </figure>
        </div>
      </section>

      {/* The Breakdown */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>One night, I found her in the bathroom again. Sitting on the floor. Crying. Just like before.</p>
            
            <p className="text-[20px] md:text-[24px] italic text-muted-foreground border-l-4 border-primary pl-6 my-8">
              "I thought we fixed it," she sobbed.
            </p>
            
            <p>I held her. And I made another promise.</p>
            
            <p className="text-[24px] md:text-[32px] font-bold text-primary text-center mt-8">"We're going to figure this out."</p>
          </div>
        </div>
      </section>

      {/* Scientific References */}
      <section className="py-8 md:py-12 px-4 bg-card">
        <div className="max-w-[970px] mx-auto">
          <h3 className="text-[20px] md:text-[24px] leading-[30px] md:leading-[34px] font-bold mb-6 mt-10">Scientific References:</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-4 pl-2">
              <li className="text-[12px] md:text-[14px] leading-[20px] md:leading-[22px] text-muted-foreground pl-6 relative">
                <span className="absolute left-0 top-0 w-[25px]">1.</span>
                Murdock, M. H., Yang, C.-Y., Sun, N., et al. (2024). Multisensory gamma stimulation promotes glymphatic clearance of amyloid. <em>Nature,</em> 627(8002), 149-156.
              </li>
              <li className="text-[12px] md:text-[14px] leading-[20px] md:leading-[22px] text-muted-foreground pl-6 relative">
                <span className="absolute left-0 top-0 w-[25px]">2.</span>
                Bhardwaj, A., & Nagandla, K. (2021). Intellectual engagement and cognitive ability in later life: a longitudinal study. <em>ScienceDirect.</em>
              </li>
              <li className="text-[12px] md:text-[14px] leading-[20px] md:leading-[22px] text-muted-foreground pl-6 relative">
                <span className="absolute left-0 top-0 w-[25px]">3.</span>
                Livingston, G., Sommerlad, A., Orgeta, V., et al. (2018). Dementia prevention, intervention, and care. <em>BMJ,</em> 363, k4925.
              </li>
            </ul>
            <ul className="space-y-4 pr-2">
              <li className="text-[12px] md:text-[14px] leading-[20px] md:leading-[22px] text-muted-foreground pl-6 relative">
                <span className="absolute left-0 top-0 w-[25px]">4.</span>
                Massachusetts Institute of Technology News. (2024). Evidence that gamma rhythm stimulation can treat neurological disorders emerging.
              </li>
              <li className="text-[12px] md:text-[14px] leading-[20px] md:leading-[22px] text-muted-foreground pl-6 relative">
                <span className="absolute left-0 top-0 w-[25px]">5.</span>
                The Picower Institute for Learning and Memory at NASA. 40Hz rhythms fight Alzheimer's at the cellular and molecular level.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* P.S. Section */}
      <section className="py-8 md:py-10 px-4 bg-background">
        <div className="max-w-[970px] mx-auto">
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mb-6">
            <strong>P.S.</strong> Remember, the Memory Wave is backed by our iron-clad 90-day money-back guarantee. If you&apos;re not completely satisfied, simply email us for a full refund. No questions asked. You have absolutely nothing to lose.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mb-6">
            <strong>P.P.S.</strong> The special discount price of just $39 (down from $200) is only available for a limited time. Once this page is taken down, the price will return to normal. Don&apos;t miss your chance to clear your brain fog and sharpen your memory.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px]">
            <strong>P.P.P.S.</strong> Think about where you&apos;ll be 90 days from now. You could still be struggling with brain fog, forgetting names and misplacing your keys... or you could be enjoying crystal-clear thinking and a razor-sharp memory. The choice is yours. Click the button below to get started.
          </p>
          
          <div className="text-center mt-8">
            <a href="#" className="block">
              <img 
                src={orderButton} 
                alt="Order Now" 
                className="w-full max-w-[400px] mx-auto hover:opacity-90 transition-opacity"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-11 px-4 border-t border-border">
        <div className="max-w-[970px] mx-auto text-center">
          {/* Trust Badges */}
          <div className="flex justify-center items-center gap-6 mb-6 flex-wrap">
            <img src={clickbankLogo} alt="ClickBank Trusted & Secure" className="h-[25px] md:h-[30px] opacity-60" />
            <img src={bbbSeal} alt="BBB Accredited Business" className="h-[50px] md:h-[60px]" />
          </div>
          
          <div className="flex justify-center gap-0">
            <a href="#" className="text-[14px] md:text-[20px] leading-[14px] md:leading-[20px] text-foreground px-3 md:px-4 border-r border-foreground last:border-r-0 hover:underline">Privacy Policy</a>
            <a href="#" className="text-[14px] md:text-[20px] leading-[14px] md:leading-[20px] text-foreground px-3 md:px-4 border-r border-foreground last:border-r-0 hover:underline">Terms & Conditions</a>
            <a href="#" className="text-[14px] md:text-[20px] leading-[14px] md:leading-[20px] text-foreground px-3 md:px-4 hover:underline">Contact Us</a>
          </div>
          <p className="text-[14px] md:text-[20px] leading-[24px] md:leading-[30px] text-foreground mt-3">
            Copyright © 2024 Memory Wave. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TestPage;
