import { useState } from "react";

// Import all images
import heroBackground from "@/assets/hero-background.webp";
import heroBackgroundMobile from "@/assets/hero-background-mobile.jpg";
import doctorQuote from "@/assets/doctor-quote.png";
import drElenaPopescu from "@/assets/dr-elena-popescu.png";
import saltHillsRomania from "@/assets/salt-hills-romania.jpg";
import harvardMedicalSchool from "@/assets/harvard-medical-school.png";
import universityTituMaiorescu from "@/assets/university-titu-maiorescu.jpeg";
import facultyGeographyBucharest from "@/assets/faculty-geography-bucharest.png";
import romanianVillage from "@/assets/romanian-village.jpg";

import drPopescuLungDiagram from "@/assets/dr-popescu-lung-diagram.jpg";
import saltCrystalsJar from "@/assets/salt-crystals-jar.jpg";
import osmoticHydration from "@/assets/osmotic-hydration.jpg";
import ionicRestructuring from "@/assets/ionic-restructuring.jpg";
import restoredClearance from "@/assets/restored-clearance.jpg";
import lindaSleepingPeaceful from "@/assets/linda-sleeping-peaceful.jpg";
import elderlyWomanGardening from "@/assets/elderly-woman-gardening.jpg";
import saltTherapyPouch from "@/assets/salt-therapy-pouch.jpg";
import elderlyManChoppingWood from "@/assets/elderly-man-chopping-wood.jpg";
import saltPouchProduct from "@/assets/salt-pouch-product.jpg";
import saltParticleVisualization from "@/assets/salt-particle-visualization.jpg";
import brainHippocampus from "@/assets/brain-hippocampus.png";
import lungsDiagram from "@/assets/lungs-diagram.png";
import ambulance911Scene from "@/assets/ambulance-911-scene.jpg";
import stressedSeniorsCollage from "@/assets/stressed-seniors-collage.png";
import lungCtScan from "@/assets/lung-ct-scan.jpg";
import coupleHospitalBench from "@/assets/couple-hospital-bench-new.jpg";
import medicationsPile from "@/assets/medications-pile.jpg";
import womanBathroomFloor from "@/assets/woman-bathroom-crying.jpg";
import manLaptopKitchen from "@/assets/robert-laptop-kitchen.jpg";
import saltMineInterior from "@/assets/salt-mine-interior.jpg";
import closedMineSign from "@/assets/inchis-closed-sign.jpg";
import coffeeShopCouple from "@/assets/coffee-shop-couple.jpg";
import ioanaConversation from "@/assets/ioana-conversation.jpg";
import phoneYoutubeVideo from "@/assets/phone-youtube-video.jpg";
import napkinElenaPopescu from "@/assets/napkin-elena-popescu.jpg";
import phoneEmailNotification from "@/assets/phone-email-notification.png";

import doctorPhoto from "@/assets/doctor-photo.png";
import productBundle from "@/assets/product-bundle.png";
import productDiscount from "@/assets/product-discount.png";
import bonusMemorySaver from "@/assets/bonus-memory-saver.png";
import bonusGroceryGuide from "@/assets/bonus-grocery-guide.png";
import bonusEnergyButton from "@/assets/bonus-energy-button.png";
import moneyBackGuarantee from "@/assets/money-back-guarantee.png";
import personalFavorPackage from "@/assets/personal-favor-package.jpg";
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

import coupleWalkingHope from "@/assets/robert-linda-walking.jpg";
import romanianVillageDrive from "@/assets/romanian-village-drive.jpg";
import coupleCryingHappy from "@/assets/couple-crying-happy.jpg";
import anaGardenCarrots from "@/assets/ana-garden-carrots.jpg";
import anaSaltVial from "@/assets/ana-salt-vial.jpg";
import coupleHiking from "@/assets/couple-hiking.jpg";
import product1Pouch from "@/assets/product-1-pouch.png";
import product3Pouches from "@/assets/product-3-pouches.png";
import product5Pouches from "@/assets/product-5-pouches.png";
import button1Gift from "@/assets/button-1-gift.png";
import button3Gifts from "@/assets/button-3-gifts.png";
import button5Gifts from "@/assets/button-5-gifts.png";
import oximeterPeakFlow from "@/assets/oximeter-peak-flow.jpg";
import spirometerScreen from "@/assets/spirometer-screen.jpg";

import testimonialMargaret from "@/assets/testimonial-margaret.jpg";
import testimonialPatricia from "@/assets/testimonial-patricia.jpg";
import testimonialJames from "@/assets/testimonial-james.jpg";
import testimonialCarol from "@/assets/testimonial-carol.jpg";
import manKneePain from "@/assets/man-knee-pain.jpg";
import saltHerbsPouch from "@/assets/salt-herbs-pouch.jpg";
import doctorSpirometryResults from "@/assets/doctor-spirometry-results.jpg";
import saltPouchWhite from "@/assets/salt-pouch-white.png";
import saltAmpule from "@/assets/salt-ampule.png";
import teaRecipesBonus from "@/assets/tea-recipes-bonus.jpg";
import respiratoryResetAudio from "@/assets/respiratory-reset-audio.jpg";
import customsReleasedPouch from "@/assets/customs-released-pouch.jpg";
import romaniaExportPaperwork from "@/assets/romania-export-paperwork.jpg";

const Index = () => {
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
        {/* Mobile background override - using same bedroom scene */}
        <div 
          className="absolute inset-0 md:hidden bg-cover bg-center bg-no-repeat blur-sm scale-105"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="max-w-[970px] mx-auto relative z-10">
          <div className="text-center md:text-left">
            <p className="font-bold text-[28px] md:text-[50px] leading-[36px] md:leading-[64px]">
              I Watched My Wife Drown In Our Bedroom At Midnight.
            </p>
            <p className="font-bold text-[22px] md:text-[38px] leading-[30px] md:leading-[48px] mt-4">
              Then a Romanian Village Where 97-Year-Olds Chop Wood Showed Me Why Her "Permanently Damaged" Lungs Could Heal After All.
            </p>
            <p className="font-bold text-[22px] md:text-[38px] leading-[30px] md:leading-[48px] mt-4">
              (We Live 200 Miles From the Ocean)
            </p>
          </div>
          
          {/* Testimonial Box - s1txtbx2 */}
          <div className="relative mt-7 md:pl-[155px] md:w-[80%]">
            <div className="md:absolute md:left-[-5px] md:top-[-2px] w-[160px] mx-auto md:mx-0 mb-4 md:mb-0">
              <img 
                src={drElenaPopescu} 
                alt="Dr. Elena Popescu" 
                className="w-[120px] h-[120px] rounded-full mx-auto md:mx-0 object-cover"
              />
            </div>
            <p className="font-bold italic text-[18px] md:text-[24px] leading-[24px] md:leading-[34px] text-center md:text-left">
              "In 40 years of research, I've watched people support their breathing in ways their doctors said weren't possible. The secret isn't another medication. It's what surrounds them while they sleep."
            </p>
            <p className="text-[16px] md:text-[24px] leading-[22px] md:leading-[34px] mt-3 text-center md:text-left">
              <strong>— Dr. Elena Popescu, </strong><br className="md:hidden"/>Pulmonary Researcher
            </p>
          </div>
          
          {/* Feature Box - s1bx */}
          <div className="bg-white rounded-[14px] mt-7 p-5 md:p-7 text-black">
            <ul className="space-y-4">
              <li className="flex items-start gap-3 font-semibold text-[18px] md:text-[24px] leading-[24px] md:leading-[34px] pl-10 md:pl-14 relative">
                <span className="absolute left-0 top-0 w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-lg">✓</span>
                A desperate husband flies 5,000 miles to Romania, and discovers a forgotten village where 97-year-olds chop wood with the lungs of teenagers (and have never once touched an inhaler).
              </li>
              <li className="flex items-start gap-3 font-semibold text-[18px] md:text-[24px] leading-[24px] md:leading-[34px] pt-4 border-t border-border pl-10 md:pl-14 relative">
                <span className="absolute left-0 top-4 w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-lg">✓</span>
                A Romanian pulmonary researcher explains why "permanent" lung damage might not be so permanent after all, and reveals the 3-phase process that lets your airways finally clear.
              </li>
              <li className="flex items-start gap-3 font-semibold text-[18px] md:text-[24px] leading-[24px] md:leading-[34px] pt-4 border-t border-border pl-10 md:pl-14 relative">
                <span className="absolute left-0 top-4 w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-lg">✓</span>
                The real reason your medications stop working over time, and why breathing the air of one forgotten Eastern European village might be the missing piece nobody has told you about.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Scientific Strip */}
      <section className="bg-muted py-6 md:py-8 px-4">
        <div className="max-w-[970px] mx-auto">
          <p className="font-semibold text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] text-center">
            Scientific References:
          </p>
          <div className="flex justify-center items-center mt-5 gap-6 md:gap-12">
            <div className="flex-1 flex justify-center">
              <img 
                src={universityTituMaiorescu} 
                alt="Universitatea Titu Maiorescu" 
                className="h-12 md:h-16 w-auto mix-blend-multiply"
              />
            </div>
            <div className="flex-1 flex justify-center">
              <img 
                src={harvardMedicalSchool} 
                alt="Harvard Medical School" 
                className="h-12 md:h-16 w-auto mix-blend-multiply"
              />
            </div>
            <div className="flex-1 flex justify-center">
              <img 
                src={facultyGeographyBucharest} 
                alt="Universitatea din București - Facultatea de Geografie" 
                className="h-12 md:h-16 w-auto"
              />
            </div>
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
            I WATCHED MY WIFE DROWN.
          </p>
          
          <p className="text-[22px] md:text-[32px] leading-[30px] md:leading-[42px] font-bold">
            Sitting right next to me.
          </p>
          <p className="text-[22px] md:text-[32px] leading-[30px] md:leading-[42px] font-bold mb-8">
            In our bed.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">It was just past midnight when I heard it.</p>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">That sound.</p>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Linda wasn't breathing.</p>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Chest heaving.</p>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Lips turning blue.</p>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Clutching her throat like someone had their hands around it.</p>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">I grabbed her inhaler.</p>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Shook it.</p>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Jammed it into her mouth.</p>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">"Breathe, baby. Please."</p>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Two puffs.</p>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Nothing.</p>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Her wheezing got worse.</p>
          
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
                  src={ambulance911Scene} 
                  alt="Ambulance paramedics with elderly woman" 
                  className="w-[280px] md:w-[380px] mx-auto"
                />
              </div>
            </div>
            
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">The paramedics arrived in 8 minutes.</p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Felt like 8 hours.</p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">One of them looked at me and shook his head.</p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Not mean.</p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Just tired.</p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">Like he'd seen this three times already that week.</p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Two hours later, a doctor came out.</p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold italic">"She's stable. You can take her home."</p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">I asked the question I already knew the answer to.</p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">"What happens next time?"</p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">He looked at his clipboard.</p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">"Keep doing what you're doing. Come back if it gets worse."</p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">No solution.</p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">No plan.</p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Just... keep drowning.</p>
            <div className="clear-both" />
          </div>
          
          {/* Big Headline */}
          <h2 className="text-[24px] md:text-[38px] leading-[32px] md:leading-[48px] font-bold text-center text-primary-foreground pt-10 pb-2">
            Two Weeks Later, A Doctor Showed Us Linda's Lungs.
          </h2>

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
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">I asked the question that was choking me.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">"Can you reverse it?"</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">He shook his head.</p>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">"Once the scarring sets in... no. We can try to slow it down. That's it."</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">My stomach dropped.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">"How long does she have?"</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">He looked at Linda.</p>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Then at me.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">"If we can't control the inflammation... maybe 18 months before this gets really bad."</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">I swallowed.</p>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">"And after that?"</p>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">He didn't answer.</p>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Just closed her file.</p>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">That silence said everything.</p>
          
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
                  src={coupleHospitalBench} 
                  alt="Couple sitting on bench outside hospital" 
                  className="w-[260px] md:w-[340px]"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] italic">Linda started crying.</p>
              <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-6">We walked out without a word.</p>
              <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-6 font-bold text-destructive">For the first time in 40 years, I had nothing to say to her.</p>
              <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-6 font-bold text-destructive">Because I didn't know how to fix this.</p>
              <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-6 font-bold text-destructive">And watching her die slowly?</p>
              <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-6 font-bold text-destructive">That wasn't something I was willing to accept.</p>
            </div>
          </div>
          
        </div>
      </section>

      {/* Section 5 - We Did Everything */}
      <section className="py-10 px-4 bg-secondary">
        <div className="max-w-[970px] mx-auto relative">
          
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-2">
            We Did EVERYTHING They Told Us.
          </h2>
          <p className="text-[20px] md:text-[26px] leading-[30px] md:leading-[40px] font-bold text-center text-destructive mb-8">
            (And She Got Worse.)
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
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">
            Six different inhalers over three years.
          </p>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">
            Five medications just to breathe.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">
            $1,200 a month on prescriptions.
          </p>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">
            Even with insurance.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            Prednisone rounds that made her gain 15 pounds and stole her sleep.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            A $400 HEPA air purifier.
          </p>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            Ripped out the carpets.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            Hired a mold inspector. $800 later... no mold.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold italic">
            None of it made a difference.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            And every doctor said the same thing.
          </p>
          
          {/* Doctor Quote Box */}
          <div className="bg-primary rounded-[14px] p-5 md:p-6 mt-10 text-primary-foreground">
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] font-bold">
              "This is just something you'll have to manage."
            </p>
          </div>
          
          <p className="text-[28px] md:text-[40px] leading-[36px] md:leading-[50px] mt-10 font-bold text-center">
            Manage.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">
            Managing the oxygen concentrator humming all night.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">
            Managing the bills we couldn't pay.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold text-destructive">
            Managing our life shrinking smaller and smaller.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">
            That word started to feel like a death sentence.
          </p>
          
          <div className="clear-both" />
        </div>
      </section>

      {/* Section 6 - The Night in the Bathroom */}
      <section className="py-10 px-4 bg-card text-card-foreground">
        <div className="max-w-[970px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-8">
            The Night I Found Her On The Bathroom Floor.
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
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Linda's sister had invited us to Thanksgiving.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Linda said she had a cold.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">But she didn't.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">She just didn't want her family to see her like this.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">That night, I woke up around 2 AM.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Linda wasn't in bed.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">I found her in the bathroom.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Sitting on the floor.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Crying.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold italic">"I don't want to be that person anymore," she whispered.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">"What person?"</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold italic">"The one everyone feels sorry for."</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">Her voice cracked.</p>
          
          {/* Emotional Quote Box */}
          <div className="bg-primary rounded-[14px] p-5 md:p-6 mt-10 text-primary-foreground">
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px]">
              "I used to RUN, Robert. I used to play with the grandkids. And now I can't walk to the mailbox without feeling like I'm dying."
            </p>
          </div>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">I sat down next to her.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">Because what was I supposed to say?</p>
          
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
          </div>
          
          <div className="clear-both" />
        </div>
      </section>

      {/* Section 6.5 - What No Doctor Said */}
      <section className="py-10 px-4 bg-secondary">
        <div className="max-w-[970px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-8">
            Here's What No Doctor Ever Said Out Loud.
          </h2>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">
            I should have been angrier, sooner.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            Because here's what I figured out, sitting next to Linda on that bathroom floor.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            Every doctor we'd seen had treated Linda's lungs like a leaky pipe.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">
            Patch it.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">
            Tighten it.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">
            Slap another medication on it.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold italic">
            "Come back if it gets worse."
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            Not a single one of them had even tried to find out WHY her airways were closing in the first place.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold italic">
            Not one.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            Because finding the cause doesn't pay.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">
            Managing the symptoms does.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">
            A prescription pad pays.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">
            A $40 inhaler that she'd refill for the rest of her life pays.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">
            A $150 nebulizer canister, every month, forever, pays.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            But actually fixing what was broken inside her lungs?
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold italic">
            Nobody makes money on that.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            That's when I realized.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">
            Linda hadn't been failing the medical system.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold text-destructive">
            The medical system had been failing her.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold italic">
            And the only person who was going to fight for my wife now... was me.
          </p>
          
        </div>
      </section>

      {/* Section 7 - The Late Night Google Search */}
      <section className="py-10 px-4 bg-secondary">
        <div className="max-w-[970px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-8">
            The Late-Night Search That Changed Everything.
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
                src={manLaptopKitchen} 
                alt="Man searching on laptop late at night" 
                className="w-[260px] md:w-[340px] mx-auto"
              />
            </div>
          </div>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">It was 1 AM.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Linda was finally asleep upstairs.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">I was at the kitchen table.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Googling.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">"Natural asthma remedies." "COPD treatments." "How to reverse lung damage."</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Most of it was garbage.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Essential oils.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Breathing apps.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Supplements that did nothing.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">I was about to close the laptop.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">Then I saw it.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">A research paper from a Romanian medical institute.</p>
          
          <div className="bg-card rounded-[14px] p-5 md:p-6 mt-8 border-l-4 border-primary">
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] font-bold italic">
              "Long-term efficacy of halotherapy in chronic respiratory conditions."
            </p>
          </div>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8"><strong>Halotherapy.</strong></p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Breathing microscopic salt particles.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">Sounded weird.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">But the study had real results.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">I kept reading.</p>
          
          <div className="clear-both" />
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Halotherapy started in actual salt mines.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Deep underground in Eastern Europe.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">There's a place in Romania called the Praid Salt Mine.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">For over a century, people with severe lung problems traveled there from all over Europe.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">To go down into the mine and just... breathe.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">The studies described people whose oxygen levels improved.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">People who reduced their medications.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Some who stopped them entirely.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">I was reading about people who sounded exactly like Linda.</p>
          
          <div className="md:float-right md:ml-6 md:-mr-4 text-center my-4 relative">
            <div 
              className="relative overflow-visible"
              style={{
                maskImage: 'radial-gradient(ellipse 85% 80% at center, black 40%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 85% 80% at center, black 40%, transparent 100%)'
              }}
            >
              <img 
                src={saltMineInterior} 
                alt="Romanian salt mine interior" 
                className="w-[260px] md:w-[340px] mx-auto"
              />
            </div>
          </div>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Getting better.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Not managing.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Better.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">The next morning, I showed Linda everything.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">"Do you really think this could work?" she asked.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">"I don't know. But we need to find out."</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">She nodded.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">"Okay. Let's go."</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">But here's what I didn't know yet.</p>
          
          {/* Cliffhanger Box */}
          <div className="bg-foreground rounded-[10px] p-5 md:p-6 mt-10 text-background">
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] font-bold">
              The mine that had saved all those people had just collapsed.
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
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-8">
            We Flew 5,000 Miles To A Salt Mine That No Longer Existed.
          </h2>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            Three weeks later, we were on a plane to Bucharest.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            Then a rental car through the Carpathian Mountains.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">
            Heading to Praid.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            Home of the famous salt mine.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            I was nervous.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            But hopeful.
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
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold text-destructive">
            ÎNCHIS.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">
            Closed.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            I walked closer.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            Another sign in Romanian and English.
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
            We'd flown 5,000 miles.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            Spent money we didn't have.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold text-destructive">
            And now... nothing.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            Linda put her hand on my shoulder.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            "We tried. That's more than most people do."
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">
            But I could hear it in her voice.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold italic">
            The defeat.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            Like she'd already accepted this was how the rest of her life was going to be.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">
            And I wasn't ready to accept that.
          </p>
        </div>
      </section>

      {/* Section 9 - The Coffee Shop */}
      <section className="py-10 px-4 bg-secondary">
        <div className="max-w-[970px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-8">
            The Stranger In A Coffee Shop Who Saved Linda's Life.
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
                src={coffeeShopCouple} 
                alt="Couple having coffee in Romanian cafe" 
                className="w-[260px] md:w-[340px] mx-auto"
              />
            </div>
          </div>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">We drove into town.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Found a small cafe on the main street.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Linda looked tired.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Not physically.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">Defeated.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold italic">"What do we do now?" she whispered.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">I had no answer.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">That's when an older woman at the next table leaned over.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">"English?" she asked.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Her accent was thick. But clear.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">"American."</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">She smiled.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">"I'm Ioana. You came for the mine, yes?"</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">I nodded.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">"It collapsed."</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">She waved her hand.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">"The mine. Everyone comes for the mine. But the mine is not special. It's just... underground."</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">I frowned.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">"What do you mean?"</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">She leaned in closer.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">"You want salt for breathing, yes?"</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">"Yes. For my wife."</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">She studied Linda.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Then nodded.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">"There is a better place. Mânzălești. Small village. About four hours from here."</p>
          
          <div className="clear-both" />
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">She pulled out her phone.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Showed us a YouTube video.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">The thumbnail showed an old man.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Holding an axe.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Standing in front of freshly cut wood.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">The title was in Romanian.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">But I could make out the number.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">101 de ani.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">101 years old.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">She hit play.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">The old man was cutting wood with a chainsaw.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Moving like he was 50. Not 101.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">"This is Gică Baciu," she said. "He lives in Mânzălești. Many people there live very long. Very strong."</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">She swiped to another video.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">An old woman working in her garden.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Then a BBC news report.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">White hills rising from the valley.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">"That is salt. On the SURFACE. Not underground like the mine. The ground is full of salt. So much salt, it comes to the top. The river carries it. The wind blows it. The whole village breathes it. Their whole lives. That is why they live so long."</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Linda leaned forward.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">"Can we go there?"</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Ioana smiled.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">"You should email Dr. Popescu first. She knows everything about the salt."</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">She wrote a name and an email on a napkin.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Slid it across the table.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">"Tell her Ioana sent you."</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">"Why are you helping us?"</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">She smiled sadly.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">"My husband had lung problems. Like your wife. He is gone now. But before he died, he spent time in Mânzălești. It gave him ten more good years."</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Her eyes got watery.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold italic">"Go to Mânzălești. Breathe the air. You will see."</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">And then she left.</p>
          
        </div>
      </section>

      {/* Section 10 - Dr. Popescu Email */}
      <section className="py-10 px-4 bg-card">
        <div className="max-w-[970px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-8">
            The Email That Sent Us Into The Mountains.
          </h2>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">I emailed Dr. Popescu from the cafe.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">Two hours later, my phone buzzed.</p>
          
          {/* Email Box */}
          <div className="bg-secondary rounded-[14px] p-6 md:p-8 mt-10 border-l-4 border-primary">
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] italic">"Dear Robert and Linda,</p>
            
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-6">I'm glad you reached out.</p>
            
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-6 font-bold">I've been researching Mânzălești for over 15 years. I've documented over 40 residents who are over 90 years old. Out of just 2,000 people.</p>
            
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-6">What I've found there is far more powerful than anything that happened in the mine.</p>
            
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-6">The mine was therapeutic. But Mânzălești is natural. The salt is in the soil. The water. The air. The people don't just visit it. They live in it. Every breath. Every day. Their whole lives.</p>
            
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-6 font-bold">Meet me there tomorrow. I'll show you.</p>
            
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-6 font-bold">Dr. Elena Popescu"</p>
          </div>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">We left the next morning.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Four hours through villages that looked like they hadn't changed in 100 years.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Wooden houses.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Horse-drawn carts.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Fields worked by hand.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Then I saw them.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">White hills rising from the valley.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Coating the hillsides like powder.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Sparkling in the morning sun.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Linda came up beside me.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 italic">"Robert... is that...?"</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">"Yeah."</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">"That's salt."</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">We stood there. Just staring.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">A small car pulled up behind us.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">A woman in her late 50s got out.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Warm smile. Sharp eyes.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold italic">"Robert? Linda? I'm Dr. Elena Popescu. Welcome to Mânzălești."</p>
          
          <figure className="mt-10 relative">
            <div 
              className="relative overflow-visible mx-auto max-w-[400px]"
              style={{
                maskImage: 'radial-gradient(ellipse 85% 80% at center, black 40%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 85% 80% at center, black 40%, transparent 100%)'
              }}
            >
              <img 
                src={drElenaPopescu} 
                alt="Dr. Elena Popescu" 
                className="w-full h-auto"
              />
            </div>
          </figure>
          
        </div>
      </section>

      {/* Dr. Popescu's Office - Intro */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-4 text-primary">
            What Dr. Popescu Showed Us About Linda's Lungs.
          </h2>
          
          <div className="h-1 w-24 bg-primary mx-auto mb-10"></div>
          
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>The next morning, we walked to her research office on the edge of the village.</p>
            
            <p>A single room.</p>
            
            <p>Shelves lined with books and papers.</p>
            
            <p>Diagrams of lungs on the walls.</p>
            
            <p>She motioned us to sit.</p>
            
            <p>Pulled out a laminated diagram.</p>
            
            <p>A cross-section of human lungs.</p>
            
            <p>Airways branching like tree roots.</p>
            
            <p className="font-semibold">But some were clogged.</p>
            
            <p className="font-semibold">Thick white plugs blocking the passages.</p>
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
                src={drPopescuLungDiagram} 
                alt="Dr. Popescu showing a lung diagram with mucus cement plugs to Robert and Linda" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <figcaption className="text-center mt-4 text-muted-foreground italic text-[16px]">
              "This is what Linda's lungs look like right now"
            </figcaption>
          </figure>
        </div>
      </section>

      {/* The Diagnosis */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>Linda leaned forward.</p>
            
            <p className="text-[20px] md:text-[24px] italic text-muted-foreground border-l-4 border-primary pl-6 my-8">
              "Your lungs aren't just inflamed. They're drowning. The inflammation causes your body to produce excess mucus. Thick, sticky mucus that traps bacteria and irritants. And over time, that mucus doesn't just sit there. It hardens."
            </p>
            
            <p>She tapped the diagram.</p>
            
            <p className="text-[22px] md:text-[28px] font-bold text-primary">"What you're looking at are Mucus Cement Plugs."</p>
            
            <p className="italic">"Dense. Rubbery. Obstructive."</p>
            
            <p>"They can stay in the same airways for years if they're not cleared."</p>
            
            <p>Linda's hand went to her throat.</p>
            
            <p>"Your medications try to open the airways by relaxing the muscles around them. But they completely ignore the plug blocking them."</p>
            
            <p className="text-[20px] md:text-[24px] italic text-muted-foreground border-l-4 border-destructive pl-6 my-8">
              "You're essentially trying to inflate a balloon that's already full of glue."
            </p>
            
            <p className="font-bold text-[22px] md:text-[26px]">"That's why nothing works."</p>
            
            <p>I leaned forward.</p>
            
            <p>"So how do you get rid of them?"</p>
            
            <p className="text-primary font-semibold text-[20px] md:text-[24px]">She smiled.</p>
            
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
                src={saltCrystalsJar} 
                alt="Hand holding glass jar of ancient salt crystals up to light" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <figcaption className="text-center mt-4 text-muted-foreground italic text-[16px]">
              Mineral-dense salt from the hills outside the village
            </figcaption>
          </figure>
        </div>
      </section>

      {/* The Salt Explanation */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>She walked to a shelf.</p>
            
            <p>Pulled down a small glass jar filled with pinkish-white crystals.</p>
            
            <p>Held it up to the light.</p>
            
            <p className="text-[20px] md:text-[24px] italic text-muted-foreground border-l-4 border-primary pl-6 my-8">
              "This is salt from the hills outside. Not table salt. Mineral-dense salt laid down by an ancient sea, then concentrated by millions of years of pressure underground. Today it sits at the surface of this valley. And the people here breathe it. Every breath. Their whole lives."
            </p>
            
            <p>She poured a small amount onto a piece of paper.</p>
            
            <p>Faint rose and gray streaks ran through the crystals.</p>
            
            <p className="text-[20px] md:text-[24px] font-bold">"When microscopic particles of this salt are inhaled, three things happen."</p>
          </div>
        </div>
      </section>

      {/* The Three Phases */}
      <section className="py-10 md:py-16 px-4 bg-primary/5">
        <div className="max-w-[750px] mx-auto">
          {/* Phase 1 */}
          <div className="bg-card rounded-xl p-6 md:p-8 shadow-lg mb-8 overflow-hidden">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-12 md:w-16 md:h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl md:text-3xl font-bold shrink-0">1</span>
              <h3 className="text-[22px] md:text-[28px] font-bold text-primary">PHASE 1: OSMOTIC HYDRATION</h3>
            </div>
            <div className="md:flex md:gap-6">
              <div className="mb-6 md:mb-0 md:w-2/5 shrink-0">
                <img 
                  src={osmoticHydration} 
                  alt="Salt particles attracting water molecules to soften mucus plugs in airways" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div className="space-y-4 text-[17px] md:text-[20px] leading-relaxed text-foreground">
                <p>"Salt is hygroscopic. It pulls water molecules toward it. When salt particles land on those dense mucus plugs, they start pulling moisture from the surrounding tissue into the plug."</p>
                <p className="italic text-muted-foreground">"Like pouring water on dried rubber cement before you peel it off."</p>
                <p className="font-semibold">"Within 20 to 30 minutes, those plugs start to soften."</p>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="bg-card rounded-xl p-6 md:p-8 shadow-lg mb-8 overflow-hidden">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-12 md:w-16 md:h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl md:text-3xl font-bold shrink-0">2</span>
              <h3 className="text-[22px] md:text-[28px] font-bold text-primary">PHASE 2: IONIC RESTRUCTURING</h3>
            </div>
            <div className="md:flex md:flex-row-reverse md:gap-6">
              <div className="mb-6 md:mb-0 md:w-2/5 shrink-0">
                <img 
                  src={ionicRestructuring} 
                  alt="Mineral ions breaking apart mucus molecular structure" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div className="space-y-4 text-[17px] md:text-[20px] leading-relaxed text-foreground">
                <p>"Mucus is a charged hydrogel. The minerals in this salt, the magnesium sulfate, the polyhalite, the iron oxide, literally alter the structure of the mucus."</p>
                <p className="font-semibold">"Less sticky. Less rigid. Easier to move."</p>
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="bg-card rounded-xl p-6 md:p-8 shadow-lg overflow-hidden">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-12 md:w-16 md:h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl md:text-3xl font-bold shrink-0">3</span>
              <h3 className="text-[22px] md:text-[28px] font-bold text-primary">PHASE 3: RESTORED CLEARANCE</h3>
            </div>
            <div className="md:flex md:gap-6">
              <div className="mb-6 md:mb-0 md:w-2/5 shrink-0">
                <img 
                  src={restoredClearance} 
                  alt="Microscopic view of paralyzed vs active cilia in airways" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div className="space-y-4 text-[17px] md:text-[20px] leading-relaxed text-foreground">
                <p>"Your lungs have tiny hair-like structures called cilia that sweep mucus up and out. But chronic inflammation paralyzes them."</p>
                <p>"The salt reactivates them."</p>
                <p className="font-semibold">"So your body can finally clear plugs that have been stuck for months or years."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Doctors Don't Tell You */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>She set the jar down.</p>
            
            <p className="text-[20px] md:text-[24px] italic text-muted-foreground border-l-4 border-primary pl-6 my-8">
              "This is why the air here works when medications don't. Medications only mute the symptom. The salt addresses the root cause."
            </p>
            
            <p>I leaned back. Just... processing.</p>
            
            <p>"Why doesn't my doctor know about this?" Linda asked.</p>
            
            <p>Her smile turned a little sad.</p>
            
            <p className="text-[20px] md:text-[24px] italic text-muted-foreground border-l-4 border-destructive pl-6 my-8">
              "They know. They just don't care. You can't patent salt. No pharmaceutical company can build a $40 billion product on a mineral that exists in a Romanian valley. So they don't fund the research. They don't teach it in medical school. They don't recommend it. Instead, they push medications that cost you $40 to $150 per dose, that you'll need for the rest of your life, and that only mute the symptom."
            </p>
          </div>
        </div>
      </section>

      {/* The Gift */}
      <section className="py-10 md:py-16 px-4 bg-secondary/30">
        <div className="max-w-[750px] mx-auto">
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>She handed Linda a thermos.</p>
            
            <p className="italic">"Thyme. Rosemary. Eucalyptus. My grandmother's recipe. It helps thin the mucus from the inside while the salt works from the outside."</p>
            
            <p>Then a small audio device.</p>
            
            <p className="italic">"A guided breathing exercise. Five minutes. Every morning. It helps your body expel the trapped mucus and restore lung capacity."</p>
            
            <p>She closed her notebook.</p>
            
            <p className="font-semibold">"For the next two weeks... just breathe the air. Drink the tea. Do the exercise. That's it."</p>
          </div>
        </div>
      </section>

      {/* Soft CTA Section */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <div className="bg-card rounded-[14px] p-6 md:p-10 shadow-lg border-l-4 border-primary">
            <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
              <p>If everything Dr. Popescu just explained makes sense to you...</p>
              
              <p>If you can see exactly why nothing else has worked, and why the salt might be different...</p>
              
              <p className="font-bold text-primary text-[20px] md:text-[26px]">You can secure your Longevity Salt right now.</p>
              
              <p className="italic text-muted-foreground">Or keep reading to see what happened to Linda over the next 10 days.</p>
              
              <div className="text-center pt-4">
                <button
                  onClick={() => document.getElementById('order-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-[18px] md:text-[22px] px-10 md:px-14 py-4 md:py-5 rounded-[14px] shadow-lg transition-all hover:scale-105"
                >
                  Secure Yours Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Day 3 Breakthrough Section */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-8 text-primary">
            Day 3: The Morning Linda Woke Up Without Wheezing.
          </h2>
          
          <div className="h-1 w-24 bg-primary mx-auto mb-10"></div>
          
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>The first two days were... underwhelming.</p>
            
            <p>We walked around the village.</p>
            
            <p>Met some locals.</p>
            
            <p>Breathed.</p>
            
            <p className="italic">That was it.</p>
            
            <p className="text-[22px] md:text-[28px] font-bold text-primary mt-8">Then day 3.</p>
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
                src={lindaSleepingPeaceful} 
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
            <p>I woke up around 7 AM.</p>
            
            <p>Linda was still asleep next to me.</p>
            
            <p className="font-semibold">But something was different.</p>
            
            <p>I couldn't figure out what at first.</p>
            
            <p>Then I realized.</p>
            
            <p className="text-[22px] md:text-[28px] font-bold text-primary">I didn't hear the wheeze.</p>
            
            <p>That rattling sound that had been part of our mornings for three years.</p>
            
            <p>Gone.</p>
            
            <p>I sat up.</p>
            
            <p>Watched her chest rise and fall.</p>
            
            <p className="italic">Smooth. Steady. Quiet.</p>
          </div>
        </div>
      </section>

      {/* The Moment */}
      <section className="py-10 md:py-16 px-4 bg-primary/5">
        <div className="max-w-[750px] mx-auto">
          <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg">
            <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
              <p>She opened her eyes.</p>
              
              <p>"Morning."</p>
              
              <p>Her voice was clear.</p>
              
              <p>Not strained.</p>
              
              <p className="font-bold">Clear.</p>
              
              <p>"How do you feel?"</p>
              
              <p>She paused.</p>
              
              <p>Took a deep breath.</p>
              
              <p>All the way in.</p>
              
              <p>Held it.</p>
              
              <p>Let it out slowly.</p>
              
              <p className="font-semibold">Her eyes widened.</p>
              
              <p className="text-[24px] md:text-[32px] font-bold text-primary text-center my-8">"I can breathe," she whispered.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Conclusion */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>She started crying.</p>
            
            <p>Happy tears.</p>
            
            <p className="font-semibold italic">"I forgot what this felt like."</p>
            
            <p>I didn't say anything.</p>
            
            <p>Because I was crying too.</p>
            
            <div className="my-8">
              <img 
                src={coupleCryingHappy} 
                alt="Robert and Linda embracing with tears of joy" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 97-Year-Old Woman Section - Part 1 */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-8 text-primary">
            The 97-Year-Old Who Made Us Believe.
          </h2>
          
          <div className="h-1 w-24 bg-primary mx-auto mb-10"></div>
          
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>Later that morning, Dr. Popescu took us down a narrow dirt path.</p>
            
            <p>Through fields dotted with white salt formations.</p>
            
            <p>To a small garden behind a stone cottage.</p>
            
            <p>An older woman was kneeling in the dirt.</p>
            
            <p>Pulling weeds.</p>
            
            <p>Dr. Popescu called out to her in Romanian.</p>
            
            <p>The woman looked up.</p>
            
            <p className="font-semibold">Stood without using her hands.</p>
            
            <p className="text-[22px] md:text-[28px] font-bold text-primary">"This is Ana," Dr. Popescu said. "She's 97."</p>
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
                src={anaGardenCarrots} 
                alt="Ana, 97 years old, working in her garden holding carrots" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </figure>
        </div>
      </section>

      {/* Meeting Ana */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>Up close, I could see how old she was.</p>
            
            <p>Deeply lined face.</p>
            
            <p>Hands weathered from decades of work.</p>
            
            <p>But her eyes were bright.</p>
            
            <p className="font-semibold">Her grip was surprisingly strong.</p>
            
            <p>"Has anyone in your family ever had asthma?" Linda asked.</p>
            
            <p>Dr. Popescu translated.</p>
            
            <p>Ana looked confused.</p>
            
            <p>Said something back.</p>
            
            <p className="text-[20px] md:text-[24px] italic text-muted-foreground border-l-4 border-primary pl-6 my-6">
              Dr. Popescu smiled. "She says no. Not her. Not her mother. Not her grandmother. She says the salt protects our lungs."
            </p>
            
            <p>Ana gestured at a pile of freshly chopped firewood.</p>
            
            <p>Said something with a grin.</p>
            
            <p className="font-semibold">Dr. Popescu laughed. "She chopped that this morning."</p>
            
            <p>I stared at the pile.</p>
            
            <p>Then at Ana.</p>
          </div>
        </div>
      </section>

      {/* The Tiny Vial */}
      <section className="py-10 md:py-16 px-4 bg-primary/5">
        <div className="max-w-[750px] mx-auto">
          <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg">
            <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
              <p>Before we left, Ana went inside.</p>
              
              <p>Came back holding something small.</p>
              
              <p className="font-semibold">A tiny glass vial.</p>
              
              <p className="text-primary font-semibold">Filled with pinkish-white salt crystals.</p>
              
              <figure className="my-8">
                <img 
                  src={anaSaltVial} 
                  alt="Ana's weathered hands holding a tiny glass vial filled with salt crystals" 
                  className="w-full h-auto rounded-lg"
                />
              </figure>
              
              <p>She handed it to Linda.</p>
              
              <p>Said something quietly.</p>
              
              <p>Dr. Popescu translated.</p>
              
              <p className="text-[20px] md:text-[24px] italic text-muted-foreground border-l-4 border-primary pl-6 my-6">
                "It's a tradition here. In Mânzălești, grandmothers give their grandchildren a small ampule of salt. Husbands give it to their wives. A reminder that they come from this valley. From the air that keeps them strong."
              </p>
              
              <p>Linda held the vial in her palm.</p>
              
              <p className="text-[24px] md:text-[32px] font-bold text-primary text-center mt-8">"Thank you," she whispered.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Day 10 Transformation Section */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-8 text-primary">
            By Day 10, Linda Did Something She Hadn't Done In Five Years.
          </h2>
          
          <div className="h-1 w-24 bg-primary mx-auto mb-10"></div>
          
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p className="text-[22px] md:text-[28px] font-bold text-primary">She wanted to hike.</p>
            
            <p>There's a trail near the village.</p>
            
            <p>About 3 miles.</p>
            
            <p>Moderate incline.</p>
            
            <p className="italic">Six months earlier, she couldn't walk to the mailbox.</p>
            
            <figure className="mt-8">
              <img 
                src={coupleHiking} 
                alt="Linda and Robert hiking together through green hills at sunset" 
                className="w-full h-auto rounded-lg"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* The Hike */}
      <section className="py-10 md:py-16 px-4 bg-secondary/30">
        <div className="max-w-[750px] mx-auto">
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>"Are you sure?"</p>
            
            <p>She nodded.</p>
            
            <p>We started slow.</p>
            
            <p>I kept waiting for her to stop.</p>
            
            <p className="font-semibold text-primary">She didn't.</p>
            
            <p>She just kept going.</p>
            
            <p>One foot in front of the other.</p>
            
            <p className="italic">Breathing.</p>
          </div>
        </div>
      </section>

      {/* The View */}
      <section className="py-10 md:py-16 px-4 bg-primary/5">
        <div className="max-w-[750px] mx-auto">
          <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg">
            <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
              <p>About halfway up, she stopped.</p>
              
              <p>Not because she was tired.</p>
              
              <p className="font-semibold">Because she wanted to look at the view.</p>
              
              <p className="text-[20px] md:text-[24px] italic text-muted-foreground border-l-4 border-primary pl-6 my-6">
                "I never thought I'd be able to do this again," she said quietly.
              </p>
              
              <p>I didn't say anything.</p>
              
              <p className="font-semibold">Because I was crying.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Medical Results */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-[750px] mx-auto">
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>That afternoon, Dr. Popescu ran some basic respiratory measurements on Linda.</p>
            
            <p>Compared them to the readings Linda had brought from her pulmonologist back home.</p>
            
            <p className="font-semibold">The improvement was so significant that Dr. Popescu printed both reports and slid them across her desk.</p>
            
            <figure className="my-8">
              <img 
                src={oximeterPeakFlow} 
                alt="Pulse oximeter and peak flow meter on rustic wooden table" 
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </figure>
          </div>
          
          <div className="mt-8 bg-card rounded-xl p-6 md:p-8 shadow-lg max-w-[700px] mx-auto">
            <p className="text-[20px] md:text-[26px] italic text-center text-foreground leading-relaxed">
              "You've gone from severe restriction... to borderline normal. In 10 days."
            </p>
            <p className="text-center mt-4 text-primary font-semibold">— Dr. Elena Popescu</p>
          </div>
          
          <p className="text-[24px] md:text-[32px] font-bold text-primary text-center mt-10">
            Linda started crying again.
          </p>
        </div>
      </section>

      {/* Soft CTA Section 2 */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <div className="bg-card rounded-[14px] p-6 md:p-10 shadow-lg border-l-4 border-primary">
            <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
              <p>If you're reading this and you're nodding along...</p>
              
              <p>If you've been told what Linda was told, and you're tired of "just managing"...</p>
              
              <p className="font-bold text-primary text-[20px] md:text-[26px]">You can secure your Longevity Salt right now and start tonight.</p>
              
              <p className="italic text-muted-foreground">Or keep reading to see what happened when we got home.</p>
              
              <div className="text-center pt-4">
                <button
                  onClick={() => document.getElementById('order-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-[18px] md:text-[22px] px-10 md:px-14 py-4 md:py-5 rounded-[14px] shadow-lg transition-all hover:scale-105"
                >
                  Secure Yours Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem At Home */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-8 text-primary">
            The Problem We Discovered When We Got Home.
          </h2>
          
          <div className="h-1 w-24 bg-primary mx-auto mb-10"></div>
          
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>We flew home three weeks later.</p>
            
            <p className="italic">I was terrified.</p>
            
            <p>Terrified the effects would wear off.</p>
            
            <p>But for the first few weeks, Linda was fine.</p>
            
            <p>Better than fine.</p>
            
            <p className="text-[22px] md:text-[28px] font-bold">She was thriving.</p>
            
            <p>She reduced her inhaler use dramatically.</p>
            
            <p>Walked the neighborhood.</p>
            
            <p>Played with the grandkids.</p>
            
            <p className="font-semibold">I thought we'd won.</p>
            
            <p>Then about six weeks after we got home... I heard it.</p>
            
            <p>That sound.</p>
            
            <p>Faint at first.</p>
            
            <p>But unmistakable.</p>
            
            <p className="text-[24px] md:text-[32px] font-bold text-destructive">The wheeze.</p>
            
            <p>Linda coughed a few times.</p>
            
            <p>"Just dry air," she said.</p>
            
            <p className="font-semibold">But I knew better.</p>
            
            <p className="text-[20px] md:text-[24px] italic text-muted-foreground border-l-4 border-destructive pl-6 my-8">
              Within two weeks, it was like Romania never happened.
            </p>
            
            <p>The shortness of breath.</p>
            
            <p>The coughing fits.</p>
            
            <p>The sleepless nights.</p>
            
            <p>All of it. Back.</p>
            
            <p>One night, I found her in the bathroom again.</p>
            
            <p>Sitting on the floor.</p>
            
            <p>Crying.</p>
            
            <p>Just like before.</p>
            
            <p className="text-[20px] md:text-[24px] italic text-muted-foreground border-l-4 border-primary pl-6 my-8">
              "I thought we fixed it," she sobbed.
            </p>
            
            <p>I held her.</p>
            
            <p>And I made another promise.</p>
            
            <p className="text-[24px] md:text-[32px] font-bold text-primary text-center mt-8">"We're going to figure this out."</p>
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

      {/* The Call That Led To A Breakthrough */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-2 text-primary">
            The Call That Led To A Breakthrough.
          </h2>

          <div className="h-1 w-24 bg-primary mx-auto mb-10"></div>

          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>I emailed Dr. Popescu that night.</p>

            <p className="font-semibold">She responded within hours.</p>

            <p className="text-[20px] md:text-[24px] italic text-muted-foreground border-l-4 border-primary pl-6 my-8">
              "You're not the first person this has happened to. I've watched hundreds of patients transform in Mânzălești, only to relapse when they go home. I've been trying to solve this exact problem for 15 years."
            </p>
          </div>
        </div>
      </section>

      {/* What She Tried */}
      <section className="py-10 md:py-16 px-4 bg-secondary/30">
        <div className="max-w-[750px] mx-auto">
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>She'd tried everything.</p>

            <p>Salt lamps. (Decorative. Useless.)</p>

            <p>Dry salt inhalers. (Particles too large.)</p>

            <p>Nebulizers with saline. (Doesn't penetrate deep enough.)</p>

            <p className="italic">"Nothing worked the way the village air did."</p>

            <p className="text-[22px] md:text-[28px] font-bold text-primary">"Until about three years ago."</p>
          </div>
        </div>
      </section>

      {/* The Membrane */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>That's when she told me about her work with a material scientist at the University of Bucharest.</p>

            <p className="text-[22px] md:text-[28px] font-bold text-primary">A breathable membrane system.</p>

            <p className="text-[20px] md:text-[24px] italic text-muted-foreground border-l-4 border-primary pl-6 my-8">
              "The idea was to create a pouch that holds therapeutic salt from Mânzălești, infused with the same four herbs that grow wild on those hillsides. Mint. Sage. Basil. Lavender. The villagers have used these herbs for centuries."
            </p>

            <p className="font-semibold">"The pouch has a special membrane that lets microscopic salt particles pass through when you breathe near it. So you're inhaling the salt without it leaving the pouch."</p>
          </div>
        </div>
      </section>

      {/* Salt Pouch Product Image */}
      <section className="py-8 md:py-12 px-4 bg-primary/5">
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
                src={saltHerbsPouch}
                alt="The breathable salt therapy pouch with Mânzălești salt and healing herbs"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <figcaption className="text-center mt-4 text-muted-foreground italic text-[16px]">
              The breathable membrane pouch with Mânzălești salt and healing herbs
            </figcaption>
          </figure>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p className="text-[20px] md:text-[24px] italic text-muted-foreground border-l-4 border-primary pl-6 my-8">
              "It took us two years of testing. But it works."
            </p>

            <p className="font-semibold">"The pores are engineered at 1 to 5 microns. The membrane releases a steady stream of micro-particles into the air around your bed. When placed near your body heat, like under your pillow or on your nightstand, the salt ions become more active. A natural concentration effect."</p>

            <p className="text-primary font-bold">"No electricity. No machines. No setup."</p>

            <p>I was hopeful.</p>

            <p className="font-semibold">But I was also skeptical.</p>
          </div>
        </div>
      </section>

      {/* The Question I Knew You'd Ask */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-2 text-primary">
            The Question I Knew You'd Ask.
          </h2>

          <div className="h-1 w-24 bg-primary mx-auto mb-10"></div>

          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>I asked Dr. Popescu the question I knew you'd ask too.</p>

            <p className="text-[20px] md:text-[24px] italic text-muted-foreground border-l-4 border-primary pl-6 my-8">
              "How can one pouch in a bedroom do what an entire village does?"
            </p>

            <p>She smiled.</p>

            <p className="italic">Like she'd been waiting for it.</p>

            <p className="text-[20px] md:text-[24px] italic text-muted-foreground border-l-4 border-primary pl-6 my-8">
              "That's the question that confused me for years. Until I realized I had it backwards."
            </p>

            <p className="text-[20px] md:text-[24px] italic text-muted-foreground border-l-4 border-primary pl-6 my-8">
              "The villagers don't breathe HIGH concentrations of salt. They breathe LOW concentrations CONSTANTLY. Every breath, asleep or awake, for their entire lives. That's the actual secret."
            </p>

            <p className="text-[22px] md:text-[28px] font-bold text-primary">"It's not the intensity. It's the consistency."</p>
          </div>
        </div>
      </section>

      {/* The Air Quality Reading */}
      <section className="py-10 md:py-16 px-4 bg-secondary/30">
        <div className="max-w-[750px] mx-auto">
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>She pulled up an air quality reading on her laptop.</p>

            <p>Showed me the particle density in Linda's bedroom in Romania.</p>

            <p>Then in the bedroom of one of her early testers in Bucharest.</p>

            <p>Who had been using a prototype pouch for six weeks.</p>

            <p className="text-[20px] md:text-[24px] italic text-muted-foreground border-l-4 border-primary pl-6 my-8">
              "The tester's bedroom is at 73% of the village average. For eight hours. Every night."
            </p>

            <p className="text-[20px] md:text-[24px] italic text-muted-foreground border-l-4 border-primary pl-6 my-8">
              "That's what we built the pouch to do. You don't need to live in the village. You need to bring the air into the room where you sleep."
            </p>
          </div>
        </div>
      </section>

      {/* The Realization */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p className="font-semibold">That's when it clicked.</p>

            <p>The medications had been trying to force change in 20 minutes.</p>

            <p className="font-semibold">The salt was doing the opposite.</p>

            <p>Letting the body do what it already knew how to do.</p>

            <p className="italic">Slowly.</p>

            <p className="italic">Quietly.</p>

            <p className="italic">While Linda slept.</p>
          </div>
        </div>
      </section>

      {/* What Happened When The Pouch Arrived */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-8 text-primary">
            What Happened When The Pouch Arrived.
          </h2>

          <div className="h-1 w-24 bg-primary mx-auto mb-10"></div>

          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>Two weeks later, a small package arrived from Romania.</p>

            <p>Inside was a fabric pouch.</p>

            <p>About the size of a brick.</p>

            <p>It felt warm.</p>

            <p className="font-semibold">And when I held it up to my nose, I could smell it.</p>

            <p>That mineral-rich scent from Mânzălești.</p>

            <p>There was something else in the box too.</p>

            <p className="font-semibold text-primary">A small glass ampule.</p>

            <p>Filled with pinkish-white salt crystals.</p>

            <p className="italic">I recognized it immediately.</p>

            <p>The same kind Ana had given Linda.</p>

            <p>A note from Dr. Popescu.</p>

            <p className="text-[20px] md:text-[24px] italic text-muted-foreground border-l-4 border-primary pl-6 my-8">
              "A small keepsake from the village. Linda will know what to do with it."
            </p>
          </div>
        </div>
      </section>

      {/* Salt Vial Image */}
      <section className="py-8 md:py-12 px-4 bg-secondary/30">
        <div className="max-w-[400px] mx-auto">
          <figure className="relative">
            <div
              className="relative overflow-visible mx-auto"
              style={{
                maskImage: 'radial-gradient(ellipse 85% 80% at center, black 40%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 85% 80% at center, black 40%, transparent 100%)'
              }}
            >
              <img
                src={saltParticleVisualization}
                alt="Small glass vial filled with pink salt crystals"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </figure>
        </div>
      </section>

      {/* Giving Linda the Pouch */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>I brought the pouch to Linda.</p>

            <p>"Where do I put it?"</p>

            <p>"On your nightstand. Or on your chest while you sleep."</p>

            <p>That night, Linda placed the pouch on her nightstand.</p>

            <p className="italic">Slipped the ampule into her purse.</p>

            <p className="italic">The way Ana had carried hers.</p>
          </div>
        </div>
      </section>

      {/* The Results Timeline */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-secondary/30 via-primary/5 to-secondary/30">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[22px] md:text-[28px] italic text-muted-foreground">We didn't expect anything. Neither of us.</p>
            <p className="text-[32px] md:text-[44px] font-bold text-primary mt-4">But...</p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary/30 via-primary to-primary/30 h-full rounded-full" />

            {/* Timeline Items */}
            <div className="space-y-8 md:space-y-12">
              {/* Day 3 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 md:pr-12 text-right">
                  <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-[18px] md:text-[22px]">
                    3 DAYS
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg z-10" />
                <div className="w-1/2 pl-8 md:pl-12">
                  <div className="bg-card rounded-xl p-5 md:p-6 shadow-lg border-l-4 border-primary">
                    <p className="text-[18px] md:text-[22px] font-semibold">Her wheezing stopped.</p>
                  </div>
                </div>
              </div>

              {/* Week 1 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 md:pr-12 text-right">
                  <div className="bg-card rounded-xl p-5 md:p-6 shadow-lg border-r-4 border-primary">
                    <p className="text-[18px] md:text-[22px] font-semibold">Sleeping through the night again.</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg z-10" />
                <div className="w-1/2 pl-8 md:pl-12">
                  <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-[18px] md:text-[22px]">
                    1 WEEK
                  </div>
                </div>
              </div>

              {/* Week 2 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 md:pr-12 text-right">
                  <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-[18px] md:text-[22px]">
                    2 WEEKS
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg z-10" />
                <div className="w-1/2 pl-8 md:pl-12">
                  <div className="bg-card rounded-xl p-5 md:p-6 shadow-lg border-l-4 border-primary">
                    <p className="text-[18px] md:text-[22px] font-semibold">Walking the neighborhood without reaching for her inhaler.</p>
                  </div>
                </div>
              </div>

              {/* Month 1 - Featured */}
              <div className="relative flex items-center pt-4">
                <div className="w-full">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary rounded-full border-4 border-background shadow-xl z-10 flex items-center justify-center">
                    <span className="text-primary-foreground text-lg">★</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-r from-primary via-primary to-primary/80 rounded-2xl p-8 md:p-10 shadow-2xl text-center mx-4 md:mx-12">
                  <div className="inline-block bg-background/20 backdrop-blur-sm px-6 py-2 rounded-full font-bold text-[20px] md:text-[26px] text-primary-foreground mb-4">
                    1 MONTH
                  </div>
                  <p className="text-[22px] md:text-[32px] font-bold text-primary-foreground leading-tight">
                    Better than she'd been<br/>
                    <span className="text-[#ffd700]">even in Romania.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spirometry Test Section */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-2 text-primary">
            The Spirometry Test That Made Linda's Pulmonologist Recalibrate His Machine.
          </h2>

          <div className="h-1 w-24 bg-primary mx-auto mb-10 mt-8"></div>

          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p className="font-semibold">I needed independent proof.</p>

            <p>So I scheduled a follow-up with Linda's pulmonologist.</p>

            <p>The same doctor who'd told us Linda's lungs were "permanently damaged."</p>

            <p>We walked into his office on a Tuesday morning.</p>

            <p>The nurse ran the test.</p>

            <p>Linda blew into the tube.</p>

            <p>Once. Twice. Three times.</p>

            <p className="font-semibold">Then we waited.</p>
          </div>
        </div>
      </section>

      {/* The Doctor's Reaction */}
      <section className="py-10 md:py-16 px-4 bg-secondary/30">
        <div className="max-w-[900px] mx-auto">
          {/* Featured Image */}
          <div className="mb-10">
            <div
              className="relative overflow-hidden rounded-2xl shadow-2xl"
              style={{
                maskImage: 'radial-gradient(ellipse 95% 90% at center, black 60%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 95% 90% at center, black 60%, transparent 100%)'
              }}
            >
              <img
                src={doctorSpirometryResults}
                alt="Doctor reviewing spirometry test results with patient, showing dramatic before and after graphs"
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-muted-foreground italic mt-4 text-[16px]">
              The moment the pulmonologist saw Linda's results
            </p>
          </div>

          <div className="max-w-[750px] mx-auto space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>The doctor came in.</p>

            <p>Holding the printout.</p>

            <p>He stared at it for a long time.</p>

            <p>Then at Linda.</p>

            <p>Then back at the printout.</p>

            <p className="text-[20px] md:text-[24px] italic text-muted-foreground border-l-4 border-primary pl-6 my-8">
              "Did we recalibrate the machine this morning?" he asked the nurse.
            </p>

            <p>"Twice," she said.</p>

            <p>He pulled up the graphs on his computer.</p>

            <p>Two lines side by side.</p>

            <p>Linda's measurements from six months ago.</p>

            <p>And today.</p>
          </div>
        </div>
      </section>

      {/* The Results Comparison - Image */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[900px] mx-auto">
          <img
            src={spirometerScreen}
            alt="Doctor's computer showing spirometry results - Six months ago: 58% Stage 3 Obstruction vs Today: 81% Near Normal Function"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* The Doctor's Response */}
      <section className="py-10 md:py-16 px-4 bg-primary/5">
        <div className="max-w-[750px] mx-auto">
          <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg">
            <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
              <p>He stared at the screen.</p>

              <p>Didn't say anything for a long moment.</p>

              <p className="text-[20px] md:text-[24px] italic text-muted-foreground border-l-4 border-primary pl-6 my-8">
                "I've never seen numbers like this from a follow-up. What have you been doing differently?"
              </p>

              <p>Linda glanced at me.</p>

              <p>I didn't say anything.</p>

              <p>"I've been breathing salt air," she said. "From Romania."</p>

              <p>He raised an eyebrow.</p>

              <p>"I'm sorry?"</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Explanation */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>"There's a village in Romania where the air is saturated with salt particles. We went there. And when we came home, we got a system that recreates that air."</p>

            <p>He nodded slowly.</p>

            <p>He didn't change her chart that day.</p>

            <p>He just looked at the numbers and said, "Whatever you're doing, keep doing it."</p>
          </div>
        </div>
      </section>

      {/* The Undeniable Truth */}
      <section className="py-10 md:py-16 px-4 bg-secondary/30">
        <div className="max-w-[750px] mx-auto">
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>He didn't ask what we were using.</p>

            <p>He didn't ask how it worked.</p>

            <p className="font-semibold">He just... moved on.</p>

            <p>But the results were right there on his screen.</p>

            <p className="font-semibold">Undeniable.</p>
          </div>
        </div>
      </section>

      {/* Why We Had To Bring This Home */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-2 text-primary">
            Why We Had To Bring This Home.
          </h2>

          <div className="h-1 w-24 bg-primary mx-auto mb-10"></div>

          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>Over the next six months, Dr. Popescu and I worked together to make this available outside of Romania.</p>

            <p className="text-[22px] md:text-[28px] font-bold text-destructive">It was a nightmare.</p>

            <p>The salt comes from protected UNESCO Geopark land.</p>

            <p>Romanian export permits required mineral analysis. Geological reports. Wellness-purpose documentation.</p>

            <p>U.S. Customs almost seized the first shipment because the inspector flagged the mineral composition.</p>

            <p>We had to prove these were naturally occurring minerals.</p>

            <p>Not synthetic.</p>

            <p>Not pharmaceutical.</p>

            <p className="italic">Just ancient salt, formed by an ancient sea and millions of years of pressure.</p>

            <p>Months of paperwork.</p>

            <p className="font-semibold text-primary">But we fought through it.</p>
          </div>

          {/* Export Paperwork Image */}
          <div className="mt-10">
            <div
              className="relative overflow-hidden rounded-xl shadow-xl"
              style={{
                maskImage: 'radial-gradient(ellipse 100% 95% at center, black 70%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 100% 95% at center, black 70%, transparent 100%)'
              }}
            >
              <img
                src={romaniaExportPaperwork}
                alt="Desk covered with Romanian government export paperwork, UNESCO Geopark maps, mineral analysis reports, and pending approval stamps"
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-muted-foreground italic mt-4 text-[16px]">
              Months of bureaucracy: Romanian export permits, UNESCO Geopark documentation, and mineral analysis reports
            </p>
          </div>
        </div>
      </section>

      {/* Securing the Salt */}
      <section className="py-10 md:py-16 px-4 bg-secondary/30">
        <div className="max-w-[750px] mx-auto">
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p>We secured the salt from Mânzălești.</p>

            <p>Sourced the four herbs from the Carpathian hillsides.</p>

            <p>Refined the membrane pouch.</p>

            <p>Tested it on dozens of volunteers.</p>

            <p>All of whom reported meaningful changes within 4 to 6 weeks.</p>
          </div>

          {/* Customs Release Image */}
          <div className="mt-10">
            <div
              className="relative overflow-hidden rounded-xl shadow-xl"
              style={{
                maskImage: 'radial-gradient(ellipse 100% 95% at center, black 70%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 100% 95% at center, black 70%, transparent 100%)'
              }}
            >
              <img
                src={customsReleasedPouch}
                alt="Hands holding the first salt pouch from a package, with US Customs release forms stamped 'RELEASED' on the table"
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-muted-foreground italic mt-4 text-[16px]">
              The moment we finally received the first approved shipment
            </p>
          </div>
        </div>
      </section>

      {/* The Arrival */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <div className="space-y-6 text-[18px] md:text-[22px] leading-relaxed text-foreground">
            <p className="font-semibold">And finally, the first shipment arrived.</p>

            <p>I opened the first box myself.</p>

            <p>Held the pouch in my hands.</p>

            <p>And called Linda.</p>

            <p className="text-[20px] md:text-[24px] italic text-muted-foreground border-l-4 border-primary pl-6 my-8">
              "We did it. We actually did it."
            </p>

            <p className="text-[22px] md:text-[28px] font-bold text-primary">We call it Longevity Salt.</p>

            <p>Because that's what it gave Linda.</p>

            <p>Not just more years.</p>

            <p className="font-semibold">But the ability to live those years fully.</p>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-10 md:py-16 px-4 bg-secondary/30">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-10 text-primary">
            Real People. Real Lives. Real Change.
          </h2>
          
          <div className="space-y-8">
            {/* Testimonial 1 - Margaret */}
            <div className="bg-card rounded-xl p-6 md:p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={testimonialMargaret}
                  alt="Margaret T., 67, from Tulsa, OK"
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover flex-shrink-0 border-2 border-primary/20 shadow-md"
                />
                <div>
                  <p className="font-bold text-[18px] md:text-[22px] text-primary">Margaret T., 67</p>
                  <p className="text-muted-foreground text-[14px] md:text-[16px]">Tulsa, OK</p>
                </div>
              </div>
              <div className="space-y-4 text-[16px] md:text-[20px] leading-relaxed text-foreground italic">
                <p>"For 12 years I'd wake up at 3 in the morning, every morning, reaching for my inhaler in the dark. My husband stopped sleeping in the same room because he couldn't take watching me struggle. My daughter bought me one of these pouches as a Mother's Day gift. I honestly didn't expect anything. Three weeks in, I slept through to 8 AM for the first time I can remember. I cried when I called to tell my daughter. My husband is back in our bed."</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-[14px] md:text-[16px] font-semibold">✓ Sleeping through to 8 AM</span>
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-[14px] md:text-[16px] font-semibold">✓ Husband back in same room</span>
              </div>
            </div>

            {/* Testimonial 2 - Patricia */}
            <div className="bg-card rounded-xl p-6 md:p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={testimonialPatricia}
                  alt="Patricia H., 61, from Charleston, SC"
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover flex-shrink-0 border-2 border-primary/20 shadow-md"
                />
                <div>
                  <p className="font-bold text-[18px] md:text-[22px] text-primary">Patricia H., 61</p>
                  <p className="text-muted-foreground text-[14px] md:text-[16px]">Charleston, SC</p>
                </div>
              </div>
              <div className="space-y-4 text-[16px] md:text-[20px] leading-relaxed text-foreground italic">
                <p>"For five years I couldn't go anywhere without my portable oxygen tank. My daughter was getting married and I'd already told her I'd watch the ceremony from the back row so I wouldn't ruin the photos. A friend told me about Longevity Salt. I started using it eight weeks before the wedding. I walked her down that aisle. No tank. I still can't believe it happened."</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-[14px] md:text-[16px] font-semibold">✓ On oxygen for 5 years</span>
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-[14px] md:text-[16px] font-semibold">✓ Walked daughter down the aisle</span>
              </div>
            </div>

            {/* Testimonial 3 - James */}
            <div className="bg-card rounded-xl p-6 md:p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={testimonialJames}
                  alt="James R., 72, from Asheville, NC"
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover flex-shrink-0 border-2 border-primary/20 shadow-md"
                />
                <div>
                  <p className="font-bold text-[18px] md:text-[22px] text-primary">James R., 72</p>
                  <p className="text-muted-foreground text-[14px] md:text-[16px]">Asheville, NC</p>
                </div>
              </div>
              <div className="space-y-4 text-[16px] md:text-[20px] leading-relaxed text-foreground italic">
                <p>"I'd been told the damage was permanent. That I should expect to be on supplemental oxygen the rest of my life. My grandson kept asking me to take him hiking like I used to, and I kept telling him maybe next year. Two months after I started using the pouch on my nightstand, we did three miles up at Craggy Gardens. We took our time. He held my hand on the way down. That was the part that got me."</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-[14px] md:text-[16px] font-semibold">✓ Off supplemental oxygen after 8 weeks</span>
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-[14px] md:text-[16px] font-semibold">✓ Hiking again at Craggy Gardens</span>
              </div>
            </div>

            {/* Testimonial 4 - Carol */}
            <div className="bg-card rounded-xl p-6 md:p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={testimonialCarol}
                  alt="Carol D., 59, from Knoxville, TN"
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover flex-shrink-0 border-2 border-primary/20 shadow-md"
                />
                <div>
                  <p className="font-bold text-[18px] md:text-[22px] text-primary">Carol D., 59</p>
                  <p className="text-muted-foreground text-[14px] md:text-[16px]">Knoxville, TN</p>
                </div>
              </div>
              <div className="space-y-4 text-[16px] md:text-[20px] leading-relaxed text-foreground italic">
                <p>"Every morning at 4 AM I'd wake up coughing so hard I thought I was going to throw up. My husband had moved to the spare room two years earlier because he wasn't sleeping. I ordered the pouch not really believing it would do anything. Three weeks later I realized I'd slept through the entire night. My husband is back in our bedroom."</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-[14px] md:text-[16px] font-semibold">✓ Sleeping through the night</span>
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-[14px] md:text-[16px] font-semibold">✓ Husband back in bedroom</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You're Getting Section */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-10 text-primary">
            Here's Exactly What You Get Today.
          </h2>

          <p className="text-[18px] md:text-[22px] text-center text-foreground mb-12">
            When you order Longevity Salt today, here's what shows up at your door.
          </p>

          {/* Main Product - The Pouch */}
          <div className="bg-card rounded-xl p-6 md:p-10 shadow-lg mb-8 border-2 border-primary">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[28px] md:text-[36px]">→</span>
              <h3 className="text-[22px] md:text-[28px] font-bold text-primary">Your Longevity Salt Pouch</h3>
            </div>

            <div className="flex justify-center mb-8">
              <img
                src={saltPouchWhite}
                alt="Longevity Salt Pouch - authentic Romanian salt therapy"
                className="w-48 md:w-64 h-auto object-contain"
              />
            </div>

            <div className="space-y-4 text-[16px] md:text-[20px] leading-relaxed text-foreground">
              <p>Hand-filled with authentic salt from the Mânzălești region in Romania.</p>

              <p>The same salt that covers the hills where centenarians like Ana have lived their entire lives.</p>

              <p>Infused with the four ancient herbs that grow wild on those hillsides.</p>

              <p className="font-semibold">Mint. Sage. Basil. Lavender.</p>

              <p>Encased in a therapeutic-grade breathable membrane that releases microscopic salt particles when activated by your body heat.</p>

              <p className="font-semibold text-primary">No electricity.</p>

              <p className="font-semibold text-primary">No machines.</p>

              <p className="font-semibold text-primary">No setup.</p>

              <p>Place it on your nightstand. Or on your chest while you sleep.</p>

              <div className="bg-secondary/50 rounded-lg p-4 mt-6">
                <p className="font-semibold">Each pouch is calibrated to cover approximately 215 square feet, the size of a standard master bedroom.</p>
                <p className="text-muted-foreground mt-2">For larger spaces, you may want two.</p>
                <p className="text-muted-foreground mt-2">Each pouch maintains its therapeutic output for approximately 6 to 9 months under normal use, depending on room size and humidity. Most of our customers keep a fresh pouch in the bedroom and rotate older ones into less-used rooms before replacement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus 1 - The Ampule */}
      <section className="py-10 md:py-16 px-4 bg-primary/5">
        <div className="max-w-[800px] mx-auto">
          <div className="bg-card rounded-xl p-6 md:p-10 shadow-lg border-l-4 border-primary">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[28px] md:text-[36px]">→</span>
              <h3 className="text-[22px] md:text-[28px] font-bold text-primary">Bonus #1: Your Mânzălești Keepsake Ampule</h3>
            </div>

            <div className="flex justify-center mb-8">
              <img
                src={saltAmpule}
                alt="Longevity Salt Ampule - glass vial with sacred Romanian salt"
                className="w-32 md:w-40 h-auto object-contain"
              />
            </div>

            <div className="space-y-4 text-[16px] md:text-[20px] leading-relaxed text-foreground">
              <p>A small glass vial filled with the same authentic salt that covers the hills outside Ana's cottage.</p>

              <p>In Mânzălești, carrying a small ampule of salt is a tradition that goes back generations.</p>

              <p>Grandmothers give them to their grandchildren.</p>

              <p>Husbands give them to their wives.</p>

              <p>A small reminder that they come from this valley.</p>

              <p>That they're connected to the air that keeps them strong.</p>

              <p>Linda carries hers in her purse.</p>

              <p>I keep mine on my desk.</p>

              <p>When you order today, you'll get one too.</p>

              <p className="italic">A small piece of the village you can take with you.</p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span className="text-muted-foreground line-through text-[16px]">Retail Value: $47</span>
              <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold">Yours free with every order</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus 2 - Tea Recipe */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[800px] mx-auto">
          <div className="bg-card rounded-xl p-6 md:p-10 shadow-lg border-l-4 border-primary">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[28px] md:text-[36px]">→</span>
              <h3 className="text-[22px] md:text-[28px] font-bold text-primary">Bonus #2: Dr. Popescu's Traditional Longevity Tea Recipe</h3>
            </div>

            <div className="flex justify-center mb-8">
              <img
                src={teaRecipesBonus}
                alt="Traditional Longevity Tea Recipes book"
                className="w-32 md:w-40 h-auto object-contain"
              />
            </div>

            <div className="space-y-4 text-[16px] md:text-[20px] leading-relaxed text-foreground">
              <p>The same tea Dr. Popescu brought to our rental that first night in Romania.</p>

              <p>Thyme. Rosemary. Eucalyptus.</p>

              <p>Helps thin mucus from the inside while the salt works from the outside.</p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span className="text-muted-foreground line-through text-[16px]">Retail Value: $27</span>
              <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold">Yours free</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus 3 - Audio Guide */}
      <section className="py-10 md:py-16 px-4 bg-primary/5">
        <div className="max-w-[800px] mx-auto">
          <div className="bg-card rounded-xl p-6 md:p-10 shadow-lg border-l-4 border-primary">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[28px] md:text-[36px]">→</span>
              <h3 className="text-[22px] md:text-[28px] font-bold text-primary">Bonus #3: The 5-Minute Respiratory Reset Audio Guide</h3>
            </div>

            <div className="flex justify-center mb-8">
              <img
                src={respiratoryResetAudio}
                alt="5-Minute Respiratory Reset Audio Guide on phone with headphones"
                className="w-full max-w-md h-auto object-contain rounded-lg"
              />
            </div>

            <div className="space-y-4 text-[16px] md:text-[20px] leading-relaxed text-foreground">
              <p>A guided breathing exercise designed by Dr. Popescu.</p>

              <p>Used by over 10,000 people across Europe.</p>

              <p>Helps your body expel trapped mucus and restore lung capacity.</p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span className="text-muted-foreground line-through text-[16px]">Retail Value: $38</span>
              <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold">Yours free with 3-pouch and 5-pouch orders</span>
            </div>
          </div>
        </div>
      </section>

      {/* Total Bonus Value */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[600px] mx-auto text-center">
          <div className="bg-primary text-primary-foreground rounded-xl p-8 md:p-12 shadow-lg">
            <p className="text-[18px] md:text-[22px] mb-4">Total Bonus Value: $112</p>
            <p className="text-[20px] md:text-[24px] font-semibold">All yours free when you order today.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="order-section" className="py-10 md:py-16 px-4 bg-primary/5">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-4 text-primary">
            Here's How Much This Costs
          </h2>
          <div className="space-y-6 text-[16px] md:text-[20px] leading-relaxed text-foreground max-w-[750px] mx-auto mb-12 mt-6">
            <p>Linda's medications were costing us <span className="font-bold text-primary">$1,200 a month</span>.</p>

            <p><span className="font-bold">$14,400</span> a year.</p>

            <p><span className="font-bold">$72,000</span> over the five years she'd been "managing" a condition the doctors said couldn't be fixed.</p>

            <p className="font-semibold">And none of it was working.</p>

            <p>Longevity Salt is a <span className="font-bold text-primary">one-time purchase</span>.</p>

            <p>That you place in the rooms where you actually live.</p>

            <p>And use for as long as it keeps working.</p>

            <p>If I were running this like a typical health company, I'd charge $300 a pouch.</p>

            <p>And people would still buy it.</p>

            <p className="font-semibold">Because what's the alternative?</p>

            <p className="font-semibold text-primary">But I'm not pricing this for maximum profit.</p>

            <p className="font-bold">I'm pricing it so anyone who needs it can afford full coverage.</p>

            <p className="italic">That last phrase matters more than you think.</p>

            <p>Remember what Dr. Popescu said?</p>

            <p className="font-bold text-primary text-[20px] md:text-[24px]">It's not the intensity. It's the consistency.</p>

            <p>The villagers in Mânzălești don't breathe salt air in just one room.</p>

            <p>They breathe it everywhere. All day. Every day. For their entire lives.</p>

            <p>That's why their results compound over time.</p>

            <p>One pouch covers your bedroom for the eight hours you sleep.</p>

            <p>But you spend the other sixteen hours of your day somewhere.</p>

            <p>The living room. The kitchen. The chair where you read.</p>

            <p>If you're only treating one room, you're getting <span className="font-bold">one-third</span> of the exposure the villagers get.</p>

            <p className="font-semibold">Which is why we built our packages around full-home coverage, not one-room coverage.</p>

            <p className="font-bold text-primary text-[20px] md:text-[24px]">Here's what to consider.</p>
          </div>
        </div>
      </section>

      {/* Order Options */}
      <section className="py-10 md:py-16 px-4 bg-[#e8e8e8]">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 items-stretch">
            
            {/* Option 1 - Single Pouch */}
            <div id="pkg-1" className="scroll-mt-24 bg-white rounded-none shadow-lg p-6 md:p-8 flex flex-col items-center text-center">
              <h3 className="text-[16px] md:text-[18px] font-bold text-[#1a1a1a] uppercase tracking-wide mb-0">ONE LONGEVITY SALT</h3>
              <p className="text-[16px] md:text-[18px] font-bold text-[#1a1a1a] uppercase tracking-wide mb-2">POUCH</p>
              
              <p className="text-[#c9a227] font-bold text-[16px] md:text-[18px] mb-1">50.6% OFF</p>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="text-gray-400 line-through text-[14px]">$180$</span>
                <span className="text-[22px] md:text-[26px] font-bold text-[#1a1a1a]">89$</span>
              </div>
              
              {/* Product Image */}
              <div className="w-44 h-52 md:w-52 md:h-60 mb-4 flex items-center justify-center">
                <img 
                  src={product1Pouch} 
                  alt="Single Longevity Salt Pouch" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              
              {/* Button Section Image */}
              <div className="w-full mb-2">
                <img 
                  src={button1Gift} 
                  alt="1 Free Gift - Add to Cart" 
                  className="w-full max-w-[220px] mx-auto object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Option 2 - Best Value (5 Pouches) - Featured */}
            <div id="pkg-5" className="scroll-mt-24 bg-gradient-to-b from-[#5a1e9a] to-[#461682] rounded-none shadow-2xl p-6 md:p-8 flex flex-col items-center text-center relative">
              <div className="mb-3">
                <p className="text-[#c9a227] font-black italic text-[24px] md:text-[30px] leading-tight">BEST VALUE</p>
                <p className="text-[#c9a227] font-black italic text-[22px] md:text-[28px] leading-tight">BEST SELLING</p>
              </div>
              
              <h3 className="text-[13px] md:text-[15px] font-bold text-white uppercase tracking-wide mb-2">5 LONGEVITY SALT POUCHES</h3>
              
              <p className="text-[#c9a227] font-bold text-[18px] md:text-[22px] mb-1">65.6% OFF</p>
              
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-white/50 line-through text-[13px]">$180$</span>
                <span className="text-[20px] md:text-[24px] font-bold text-white">62$</span>
                <span className="text-white/70 text-[11px] italic">per pouch</span>
              </div>
              
              {/* Product Image */}
              <div className="w-56 h-56 md:w-68 md:h-68 mb-4 flex items-center justify-center">
                <img 
                  src={product5Pouches} 
                  alt="5 Longevity Salt Pouches Bundle" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              
              {/* Button Section Image */}
              <div className="w-full mb-2">
                <img 
                  src={button5Gifts} 
                  alt="5 Free Gifts, 2 Bonuses, Free Shipping - Add to Cart" 
                  className="w-full max-w-[260px] mx-auto object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <p className="text-white font-bold text-[18px] md:text-[22px] mt-2">TOTAL: 310$</p>
            </div>

            {/* Option 3 - 3 Pouches */}
            <div id="pkg-3" className="scroll-mt-24 bg-white rounded-none shadow-lg p-6 md:p-8 flex flex-col items-center text-center">
              <h3 className="text-[16px] md:text-[18px] font-bold text-[#1a1a1a] uppercase tracking-wide mb-0">3 LONGEVITY SALT</h3>
              <p className="text-[16px] md:text-[18px] font-bold text-[#1a1a1a] uppercase tracking-wide mb-2">POUCHES</p>
              
              <p className="text-[#c9a227] font-bold text-[16px] md:text-[18px] mb-1">56.6% OFF</p>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="text-gray-400 line-through text-[14px]">$180$</span>
                <span className="text-[22px] md:text-[26px] font-bold text-[#1a1a1a]">78$</span>
                <span className="text-gray-500 text-[11px] italic">per pouch</span>
              </div>
              
              {/* Product Image */}
              <div className="w-44 h-52 md:w-52 md:h-60 mb-4 flex items-center justify-center">
                <img 
                  src={product3Pouches} 
                  alt="3 Longevity Salt Pouches" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              
              {/* Button Section Image */}
              <div className="w-full mb-2">
                <img 
                  src={button3Gifts} 
                  alt="3 Free Gifts, 1 Bonus - Add to Cart" 
                  className="w-full max-w-[220px] mx-auto object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <p className="text-[#1a1a1a] font-bold text-[18px] md:text-[22px] mt-2">TOTAL: 234$</p>
            </div>
          </div>
          
          {/* Benefit Callouts */}
          <div className="mt-12 space-y-5 max-w-[750px] mx-auto">
            <p className="text-[20px] md:text-[26px] font-bold text-primary text-center mb-6">
              WHICH OPTION IS RIGHT FOR YOU?
            </p>

            <a href="#pkg-3" className="flex items-start gap-3 group">
              <span className="text-[24px] text-primary leading-snug shrink-0 group-hover:translate-x-1 transition-transform">→</span>
              <span className="text-[16px] md:text-[20px] text-foreground leading-snug">
                <span className="font-bold group-hover:underline">If you want what Linda has... get three pouches.</span> Bedroom. Living room. Wherever else you spend your day. This is the minimum that gets you the around-the-clock coverage that actually changes things.
              </span>
            </a>

            <a href="#pkg-5" className="flex items-start gap-3 group">
              <span className="text-[24px] text-primary leading-snug shrink-0 group-hover:translate-x-1 transition-transform">→</span>
              <span className="text-[16px] md:text-[20px] text-foreground leading-snug">
                <span className="font-bold group-hover:underline">If you want what Linda's sister got... get five pouches.</span> Full home coverage. Lowest per-pouch price we offer. Enough supply for the next 2 to 3 years, plus extras for any family member who needs it. <span className="italic">This is the smart play for almost everyone reading this.</span>
              </span>
            </a>

            <a href="#pkg-1" className="flex items-start gap-3 group">
              <span className="text-[24px] text-primary leading-snug shrink-0 group-hover:translate-x-1 transition-transform">→</span>
              <span className="text-[16px] md:text-[20px] text-foreground leading-snug">
                <span className="font-bold group-hover:underline">If you genuinely can't swing either today... one pouch in the bedroom is better than zero.</span> Start there. Feel the difference. Add more once you do.
              </span>
            </a>

            <p className="text-[20px] md:text-[24px] text-primary font-bold mt-8 text-center">
              And just so you know... you're taking ZERO risk here:
            </p>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-10 md:py-16 px-4 bg-primary/5">
        <div className="max-w-[800px] mx-auto">
          <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg border-4 border-primary text-center">
            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6">
              <img 
                src={moneyBackGuarantee} 
                alt="60-Day Money Back Guarantee" 
                className="w-full h-full object-contain"
              />
            </div>
            
            <h2 className="text-[24px] md:text-[36px] leading-[32px] md:leading-[46px] font-bold text-primary mb-6">
              You're Protected By Our 60-Day<br/>"Breathe Freely or It's Free" Guarantee
            </h2>
            
            <div className="space-y-6 text-[16px] md:text-[20px] leading-relaxed text-foreground text-left">
              <p className="font-semibold">Here's the deal.</p>

              <p>Use Longevity Salt for 60 days.</p>

              <p>If you don't feel a significant improvement in your breathing, your sleep, or your day-to-day energy...</p>

              <p className="font-bold text-primary">Just contact us.</p>

              <p className="font-bold">We'll refund every penny.</p>

              <p>You don't even need to return the pouches.</p>

              <p>Keep them. Keep the bonuses. Keep everything.</p>

              <p className="font-semibold text-primary">No hoops. No hassle. No questions.</p>

              <p>Because I'm not interested in keeping your money if this doesn't work for you.</p>

              <p className="font-bold">I only want it if Longevity Salt changes your life the way it changed Linda's.</p>

              <p className="text-[20px] md:text-[24px] font-bold text-primary text-center mt-8">Fair?</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 px-4 bg-[#e8e8e8]">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[24px] md:text-[36px] font-bold text-center text-primary mb-10">
            Choose Your Package Below
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 items-stretch">
            
            {/* Option 1 - Single Pouch */}
            <div className="bg-white rounded-none shadow-lg p-6 md:p-8 flex flex-col items-center text-center">
              <h3 className="text-[16px] md:text-[18px] font-bold text-[#1a1a1a] uppercase tracking-wide mb-0">ONE LONGEVITY SALT</h3>
              <p className="text-[16px] md:text-[18px] font-bold text-[#1a1a1a] uppercase tracking-wide mb-2">POUCH</p>
              
              <p className="text-[#c9a227] font-bold text-[16px] md:text-[18px] mb-1">50.6% OFF</p>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="text-gray-400 line-through text-[14px]">$180$</span>
                <span className="text-[22px] md:text-[26px] font-bold text-[#1a1a1a]">89$</span>
              </div>
              
              {/* Product Image */}
              <div className="w-44 h-52 md:w-52 md:h-60 mb-4 flex items-center justify-center">
                <img 
                  src={product1Pouch} 
                  alt="Single Longevity Salt Pouch" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              
              {/* Button Section Image */}
              <div className="w-full mb-2">
                <img 
                  src={button1Gift} 
                  alt="1 Free Gift - Add to Cart" 
                  className="w-full max-w-[220px] mx-auto object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Option 2 - Best Value (5 Pouches) - Featured */}
            <div className="bg-gradient-to-b from-[#5a1e9a] to-[#461682] rounded-none shadow-2xl p-6 md:p-8 flex flex-col items-center text-center relative">
              <div className="mb-3">
                <p className="text-[#c9a227] font-black italic text-[24px] md:text-[30px] leading-tight">BEST VALUE</p>
                <p className="text-[#c9a227] font-black italic text-[22px] md:text-[28px] leading-tight">BEST SELLING</p>
              </div>
              
              <h3 className="text-[13px] md:text-[15px] font-bold text-white uppercase tracking-wide mb-2">5 LONGEVITY SALT POUCHES</h3>
              
              <p className="text-[#c9a227] font-bold text-[18px] md:text-[22px] mb-1">65.6% OFF</p>
              
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-white/50 line-through text-[13px]">$180$</span>
                <span className="text-[20px] md:text-[24px] font-bold text-white">62$</span>
                <span className="text-white/70 text-[11px] italic">per pouch</span>
              </div>
              
              {/* Product Image */}
              <div className="w-56 h-56 md:w-68 md:h-68 mb-4 flex items-center justify-center">
                <img 
                  src={product5Pouches} 
                  alt="5 Longevity Salt Pouches Bundle" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              
              {/* Button Section Image */}
              <div className="w-full mb-2">
                <img 
                  src={button5Gifts} 
                  alt="5 Free Gifts, 2 Bonuses, Free Shipping - Add to Cart" 
                  className="w-full max-w-[260px] mx-auto object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <p className="text-white font-bold text-[18px] md:text-[22px] mt-2">TOTAL: 310$</p>
            </div>

            {/* Option 3 - 3 Pouches */}
            <div className="bg-white rounded-none shadow-lg p-6 md:p-8 flex flex-col items-center text-center">
              <h3 className="text-[16px] md:text-[18px] font-bold text-[#1a1a1a] uppercase tracking-wide mb-0">3 LONGEVITY SALT</h3>
              <p className="text-[16px] md:text-[18px] font-bold text-[#1a1a1a] uppercase tracking-wide mb-2">POUCHES</p>
              
              <p className="text-[#c9a227] font-bold text-[16px] md:text-[18px] mb-1">56.6% OFF</p>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="text-gray-400 line-through text-[14px]">$180$</span>
                <span className="text-[22px] md:text-[26px] font-bold text-[#1a1a1a]">78$</span>
                <span className="text-gray-500 text-[11px] italic">per pouch</span>
              </div>
              
              {/* Product Image */}
              <div className="w-44 h-52 md:w-52 md:h-60 mb-4 flex items-center justify-center">
                <img 
                  src={product3Pouches} 
                  alt="3 Longevity Salt Pouches" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              
              {/* Button Section Image */}
              <div className="w-full mb-2">
                <img 
                  src={button3Gifts} 
                  alt="3 Free Gifts, 1 Bonus - Add to Cart" 
                  className="w-full max-w-[220px] mx-auto object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <p className="text-[#1a1a1a] font-bold text-[18px] md:text-[22px] mt-2">TOTAL: 234$</p>
            </div>
          </div>
        </div>
      </section>

      {/* Linda's Message Section */}
      <section className="py-10 md:py-16 px-4 bg-primary/5">
        <div className="max-w-[750px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-8 text-primary">
            What Linda Wanted Me To Tell You.
          </h2>

          <div className="space-y-6 text-[16px] md:text-[20px] leading-relaxed text-foreground">
            <p>Linda doesn't like being the face of this.</p>

            <p>She's a private person.</p>

            <p>But when I told her I was writing this, she asked me to include something.</p>

            <p className="font-semibold">In her words.</p>
          </div>

          {/* Linda's Quote Box */}
          <div className="bg-card rounded-xl p-8 md:p-10 shadow-lg mt-8 border-l-4 border-primary">
            <div className="space-y-6 text-[16px] md:text-[20px] leading-relaxed text-foreground italic">
              <p>"If you're reading this, you probably feel the way I used to feel.</p>

              <p>Like your body is betraying you.</p>

              <p>Like you're not the person you used to be.</p>

              <p className="font-semibold">I know what it's like to cry in the bathroom because you don't want to be a burden.</p>

              <p className="font-semibold">I know what it's like to say no to things you desperately want to say yes to.</p>

              <p className="text-primary font-bold not-italic">But it doesn't have to be that way.</p>

              <p>I'm not special.</p>

              <p>If this worked for me, it can work for you.</p>

              <p>If you're on the fence, ask yourself this.</p>

              <p className="text-[20px] md:text-[24px] font-bold text-primary not-italic text-center">What would your life look like if you could breathe freely again?</p>

              <p className="font-semibold">What would you say yes to?</p>

              <p className="font-semibold">Who would you call?</p>

              <p className="font-semibold">Where would you go that you've been putting off because you weren't sure your body could handle it?</p>

              <p>That's what's on the other side of this.</p>

              <p className="font-semibold">That's worth trying for.</p>

              <p className="font-bold">Trust me."</p>
            </div>

            <p className="text-[18px] md:text-[22px] font-bold text-primary mt-6 text-right">— Linda</p>
          </div>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="max-w-[750px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-8 text-primary">
            Here's What Happens Next.
          </h2>

          <div className="space-y-6 text-[16px] md:text-[20px] leading-relaxed text-foreground">
            <p className="font-semibold">You're going to make a choice right now.</p>
          </div>

          {/* Choice 1 */}
          <div className="bg-muted/50 rounded-xl p-6 md:p-8 mt-8 border-l-4 border-destructive">
            <h3 className="text-[20px] md:text-[26px] font-bold text-destructive mb-4">Choice #1: Close this page.</h3>
            <div className="space-y-4 text-[16px] md:text-[20px] leading-relaxed text-foreground">
              <p>Go back to "managing."</p>
              <p>Keep the inhaler in your pocket. Keep saying no to the things you want to say yes to. Watch the next sixty days look exactly like the last sixty.</p>
            </div>
          </div>

          {/* Choice 2 */}
          <div className="bg-primary/10 rounded-xl p-6 md:p-8 mt-6 border-l-4 border-primary">
            <h3 className="text-[20px] md:text-[26px] font-bold text-primary mb-4">Choice #2: Click the button below.</h3>
            <div className="space-y-4 text-[16px] md:text-[20px] leading-relaxed text-foreground">
              <p>Secure your pouches. Try Longevity Salt for sixty days, risk-free.</p>
              <p className="font-bold text-primary">Give yourself a chance.</p>
            </div>
          </div>

          {/* Closing Message */}
          <div className="mt-10 space-y-6 text-[16px] md:text-[20px] leading-relaxed text-foreground">
            <p className="font-semibold">That's the whole decision.</p>

            <p>The first time I held Linda while she drowned in our own bedroom, I had no idea this was possible.</p>

            <p>I had no idea a Romanian village existed where 97-year-olds chopped wood.</p>

            <p>I had no idea what to do.</p>

            <p className="font-semibold text-primary">Now I do.</p>

            <p>And I'm telling you what I wish someone had told me three years ago.</p>
          </div>

          {/* Final Push */}
          <div className="bg-primary text-primary-foreground rounded-xl p-6 md:p-10 mt-10 text-center">
            <p className="text-[18px] md:text-[22px] font-bold mb-4">Don't waste another night drowning.</p>

            <p className="text-[18px] md:text-[22px] font-bold mb-4">Don't wait until your "18 months" run out.</p>

            <p className="text-[22px] md:text-[28px] font-bold mb-4">Click the button below.</p>

            <p className="text-[20px] md:text-[24px] font-bold mb-4">Secure your pouches now.</p>

            <p className="text-[16px] md:text-[20px]">Before this batch sells out.</p>
          </div>

          {/* Robert's Sign-off */}
          <div className="mt-8 text-left">
            <p className="text-[18px] md:text-[22px] text-foreground italic">I'm rooting for you.</p>
            <p className="text-[20px] md:text-[24px] font-bold text-primary mt-4">— Robert</p>
          </div>
          
          {/* P.S. Section */}
          <div className="mt-10 space-y-6 text-[14px] md:text-[18px] leading-relaxed text-foreground">
            <p>
              <span className="font-bold text-primary">P.S.</span> Remember, you're protected by our 60-day money-back guarantee. If Longevity Salt doesn't help you breathe easier, you get a full refund. No questions asked. Keep the pouches. Keep the bonuses. Keep everything. <span className="font-semibold">You have nothing to lose.</span>
            </p>

            <p>
              <span className="font-bold text-primary">P.P.S.</span> This batch won't last. Our last shipment sold out in 11 days. If you close this page now, you might end up on a waitlist for the next batch, which could be <span className="font-bold text-destructive">2 to 3 months</span> away. <span className="font-semibold">Don't let that happen.</span>
            </p>

            <p>
              <span className="font-bold text-primary">P.P.P.S.</span> Don't just take my word for it. Search <span className="font-semibold">"Mânzălești longevity village"</span> on YouTube. You'll find BBC reports. National Geographic features. Romanian news coverage. All documenting a village where people live past 100. <span className="font-bold">This is real.</span> And now you can bring a piece of it home.
            </p>
          </div>
        </div>
      </section>

      {/* Final Order Options */}
      <section className="py-10 md:py-16 px-4 bg-[#e8e8e8]">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[24px] md:text-[36px] font-bold text-center text-primary mb-10">
            Secure Your Longevity Salt Now
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 items-stretch">
            
            {/* Option 1 - Single Pouch */}
            <div className="bg-white rounded-none shadow-lg p-6 md:p-8 flex flex-col items-center text-center">
              <h3 className="text-[16px] md:text-[18px] font-bold text-[#1a1a1a] uppercase tracking-wide mb-0">ONE LONGEVITY SALT</h3>
              <p className="text-[16px] md:text-[18px] font-bold text-[#1a1a1a] uppercase tracking-wide mb-2">POUCH</p>
              
              <p className="text-[#c9a227] font-bold text-[16px] md:text-[18px] mb-1">50.6% OFF</p>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="text-gray-400 line-through text-[14px]">$180$</span>
                <span className="text-[22px] md:text-[26px] font-bold text-[#1a1a1a]">89$</span>
              </div>
              
              {/* Product Image */}
              <div className="w-44 h-52 md:w-52 md:h-60 mb-4 flex items-center justify-center">
                <img 
                  src={product1Pouch} 
                  alt="Single Longevity Salt Pouch" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              
              {/* Button Section Image */}
              <div className="w-full mb-2">
                <img 
                  src={button1Gift} 
                  alt="1 Free Gift - Add to Cart" 
                  className="w-full max-w-[220px] mx-auto object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Option 2 - Best Value (5 Pouches) - Featured */}
            <div className="bg-gradient-to-b from-[#5a1e9a] to-[#461682] rounded-none shadow-2xl p-6 md:p-8 flex flex-col items-center text-center relative">
              <div className="mb-3">
                <p className="text-[#c9a227] font-black italic text-[24px] md:text-[30px] leading-tight">BEST VALUE</p>
                <p className="text-[#c9a227] font-black italic text-[22px] md:text-[28px] leading-tight">BEST SELLING</p>
              </div>
              
              <h3 className="text-[13px] md:text-[15px] font-bold text-white uppercase tracking-wide mb-2">5 LONGEVITY SALT POUCHES</h3>
              
              <p className="text-[#c9a227] font-bold text-[18px] md:text-[22px] mb-1">65.6% OFF</p>
              
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-white/50 line-through text-[13px]">$180$</span>
                <span className="text-[20px] md:text-[24px] font-bold text-white">62$</span>
                <span className="text-white/70 text-[11px] italic">per pouch</span>
              </div>
              
              {/* Product Image */}
              <div className="w-56 h-56 md:w-68 md:h-68 mb-4 flex items-center justify-center">
                <img 
                  src={product5Pouches} 
                  alt="5 Longevity Salt Pouches Bundle" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              
              {/* Button Section Image */}
              <div className="w-full mb-2">
                <img 
                  src={button5Gifts} 
                  alt="5 Free Gifts, 2 Bonuses, Free Shipping - Add to Cart" 
                  className="w-full max-w-[260px] mx-auto object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <p className="text-white font-bold text-[18px] md:text-[22px] mt-2">TOTAL: 310$</p>
            </div>

            {/* Option 3 - 3 Pouches */}
            <div className="bg-white rounded-none shadow-lg p-6 md:p-8 flex flex-col items-center text-center">
              <h3 className="text-[16px] md:text-[18px] font-bold text-[#1a1a1a] uppercase tracking-wide mb-0">3 LONGEVITY SALT</h3>
              <p className="text-[16px] md:text-[18px] font-bold text-[#1a1a1a] uppercase tracking-wide mb-2">POUCHES</p>
              
              <p className="text-[#c9a227] font-bold text-[16px] md:text-[18px] mb-1">56.6% OFF</p>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="text-gray-400 line-through text-[14px]">$180$</span>
                <span className="text-[22px] md:text-[26px] font-bold text-[#1a1a1a]">78$</span>
                <span className="text-gray-500 text-[11px] italic">per pouch</span>
              </div>
              
              {/* Product Image */}
              <div className="w-44 h-52 md:w-52 md:h-60 mb-4 flex items-center justify-center">
                <img 
                  src={product3Pouches} 
                  alt="3 Longevity Salt Pouches" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              
              {/* Button Section Image */}
              <div className="w-full mb-2">
                <img 
                  src={button3Gifts} 
                  alt="3 Free Gifts, 1 Bonus - Add to Cart" 
                  className="w-full max-w-[220px] mx-auto object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <p className="text-[#1a1a1a] font-bold text-[18px] md:text-[22px] mt-2">TOTAL: 234$</p>
            </div>
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
            <span className="text-[14px] md:text-[20px] leading-[14px] md:leading-[20px] text-foreground px-3 md:px-4 border-r border-foreground">Privacy Policy</span>
            <span className="text-[14px] md:text-[20px] leading-[14px] md:leading-[20px] text-foreground px-3 md:px-4 border-r border-foreground">Terms & Conditions</span>
            <span className="text-[14px] md:text-[20px] leading-[14px] md:leading-[20px] text-foreground px-3 md:px-4">Contact Us</span>
          </div>
          <p className="text-[14px] md:text-[20px] leading-[24px] md:leading-[30px] text-foreground mt-3">
            Copyright © 2025 Longevity Salt. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
