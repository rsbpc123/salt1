import { useState } from "react";

// Import all images
import heroBackground from "@/assets/hero-background.webp";
import heroBackgroundMobile from "@/assets/hero-background-mobile.jpg";
import doctorQuote from "@/assets/doctor-quote.png";
import drPopescu from "@/assets/dr-popescu.png";
import institutionLogos from "@/assets/institution-logos.png";
import brainHippocampus from "@/assets/brain-hippocampus.png";
import lungsDiagram from "@/assets/lungs-diagram.png";
import stressedSeniorsCollage from "@/assets/stressed-seniors-collage.png";
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
            <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-6">
              A Tiny Invader..<br/>
              Scientifically Verified By 5 Studies..<br/>
              That Targets Brain Cells..
            </h2>
            
            <div className="md:float-right md:ml-4 md:-mr-4 text-center mb-4">
              <img 
                src={stressedSeniorsCollage} 
                alt="Seniors experiencing memory difficulties" 
                className="w-[200px] md:w-[280px] rounded-lg mx-auto"
              />
            </div>
            
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] font-bold mt-8">It attacks brain cells.</p>
            
            <ul className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] font-bold italic space-y-3 mt-8 ml-6 md:ml-10">
              <li className="list-disc">You get brain fog</li>
              <li className="list-disc">Your thinking is fuzzy</li>
              <li className="list-disc">Your brain even atrophies..</li>
            </ul>
            
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">We've missed the boat on cognitive decline..</p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">But neuroscience is changing that now..</p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">All it takes is an 8-second ritual at-home.</p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold italic">It uses your ears.</p>
            
            <div className="clear-both" />
          </div>
          
          {/* Big Headline */}
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center text-primary-foreground py-10">
            A 8-Second Ear Ritual.. Scientifically Verified By 5 Different Studies.. For A Better Memory And Brain Power..<br/>
            <span className="text-[#ffd700]">(do this from home!)</span>
          </h2>

          <div className="md:float-left md:mr-6 md:-ml-5 mb-4 text-center">
            <img 
              src={doctorPhoto} 
              alt="Dr. James Rivers" 
              className="w-[280px] md:w-[340px] rounded-lg mx-auto"
            />
          </div>
          
          <p className="text-[20px] md:text-[26px] leading-[30px] md:leading-[40px] font-bold text-primary-foreground mt-8">My name is Dr. James Rivers.</p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] text-primary-foreground mt-8">
            The breakthrough came to light when a colleague handed me a stunning report from NASA.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] text-primary-foreground mt-8">
            And stay with me - this gets good.
          </p>
          
          <div className="clear-both pb-10" />
        </div>
      </section>

      {/* Section 4 - How Memory Works */}
      <section className="py-10 px-4 bg-card">
        <div className="max-w-[970px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-10">
            How Your Memory<br/>Actually Works..
          </h2>
          
          <div className="md:float-right md:ml-4 md:-mr-5 text-center mb-4">
            <img 
              src={scientistLab} 
              alt="Scientist in laboratory" 
              className="w-[250px] md:w-[320px] rounded-lg mx-auto"
            />
          </div>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">How does your memory work?</p>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">You can think of your brain cells as tiny storage units.</p>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold italic">And memory is information stashed inside your brain cells.</p>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Now the truth is, these brain cells die for everyone.</p>
          
          {/* Purple Box */}
          <div className="bg-primary rounded-[14px] p-5 md:p-6 mt-10 text-primary-foreground relative overflow-hidden">
            <div className="md:absolute md:right-4 md:bottom-4">
              <img 
                src={questionCollage} 
                alt="People with questions about memory" 
                className="w-[200px] md:w-[250px] rounded-lg mx-auto md:mx-0"
              />
            </div>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] md:pr-[280px]">
              When we look at a healthy adult, <strong>they lose 50,000 brain cells a day…</strong>
            </p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold md:pr-[280px]">
              This is okay, because you have 86 billion of them! <em>But there's a catch:</em>
            </p>
          </div>
          
          <div className="clear-both" />
        </div>
      </section>

      {/* Section 5 - Light Purple Background */}
      <section className="py-10 px-4 bg-secondary">
        <div className="max-w-[970px] mx-auto">
          <p className="text-[20px] md:text-[26px] leading-[30px] md:leading-[40px] font-bold text-center">NASA Neuroscientist:</p>
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mt-2 mb-8">
            What Happens To Your<br/>Brain Cells After 50
          </h2>
          
          <div className="md:float-left md:mr-5 md:-ml-4 text-center mb-4 relative">
            <img 
              src={womanHeadphones} 
              alt="Woman using Memory Wave with headphones" 
              className="w-[280px] md:w-[350px] rounded-lg mx-auto"
            />
            {/* Red Callout */}
            <div className="absolute -top-10 md:-top-16 right-0 md:-right-10">
              <p className="text-[#ff0000] text-[22px] md:text-[30px] leading-[22px] md:leading-[30px] text-center" style={{ fontFamily: "'Permanent Marker', cursive" }}>
                Read This!
              </p>
              <img 
                src={arrowLeft} 
                alt="" 
                className="w-[60px] md:w-[80px] mt-1"
              />
            </div>
          </div>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">
            The area of your brain responsible for memory formation, called your hippocampus, is extra-small and fragile. <em>How small?</em>
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            Imagine you're walking on a sandy beach that stretches for a mile. You bend down and pick up a few grains of sand. Those few grains of sand represent the entire area of your brain responsible for memory!
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">
            Now if you've over 50 and you forget a name, or you misplace your keys or you just feel foggy, you can bet your brain cells, your storage units, are dying off faster than they should be, causing your brain to start shrinking.
          </p>
          
          <div className="clear-both" />
        </div>
      </section>

      {/* Section 6 - Root Cause */}
      <section className="py-10 px-4 bg-card text-card-foreground">
        <div className="max-w-[970px] mx-auto">
          {/* Dark Box */}
          <div className="bg-foreground rounded-[10px] p-5 md:p-6 mb-10 text-background">
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] font-bold">
              As a scientist with training from NASA, I had to know why?
            </p>
          </div>
          
          <p className="text-[20px] md:text-[30px] leading-[30px] md:leading-[40px] font-bold text-center">The truth will surprise you..</p>
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mt-2 mb-8">
            The Surprising "Root Cause" Of Brain Fog..
          </h2>
          
          <div className="md:float-right md:ml-4 md:-mr-20 text-center mb-4 relative">
            <img 
              src={happySeniorsCollage} 
              alt="Happy seniors with improved memory" 
              className="w-[280px] md:w-[350px] rounded-lg mx-auto"
            />
            {/* Red Callout */}
            <div className="absolute -top-10 md:-top-12 left-0 md:-left-24">
              <p className="text-[#ff0000] text-[22px] md:text-[30px] leading-[22px] md:leading-[30px] text-center" style={{ fontFamily: "'Permanent Marker', cursive" }}>
                Important
              </p>
              <img 
                src={arrowRight} 
                alt="" 
                className="w-[60px] md:w-[80px] mt-1"
              />
            </div>
          </div>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">
            Scientists have discovered a sub-group of tiny invaders in the brain that "clog up" healthy functioning while attacking the brain cells, including where your memories are stored..
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            <strong>It's like an infestation,</strong> let me show you..
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            Normally when a brain cell dies, your brain's neural guardians quickly arrive, using enzymes to clear away the "toxic waste"...
          </p>
          
          <div className="clear-both" />
        </div>
      </section>

      {/* Section 7 - The Brain Invader Explained */}
      <section className="py-10 px-4 bg-secondary">
        <div className="max-w-[970px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-8">
            The Tiny Invader That<br/>NASA Scientists Found..
          </h2>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            When NASA sends astronauts into space, they don&apos;t just monitor their bodies..
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">
            They monitor their brains.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            And what they discovered shocked the scientific community..
          </p>
          
          <div className="bg-card rounded-[14px] p-5 md:p-6 mt-8 border-l-4 border-primary">
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] font-bold italic">
              &ldquo;After 6 months in space, astronauts showed significant brain shrinkage. Their hippocampus - the memory center - had shrunk by up to 4%.&rdquo;
            </p>
            <p className="text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] mt-4 text-gray-600">
              - NASA Brain Study, 2019
            </p>
          </div>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            But here&apos;s what surprised them even more..
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">
            The same brain shrinkage is happening to millions of Americans over 50 - right here on Earth.
          </p>
        </div>
      </section>

      {/* Section 8 - The Solution Discovery */}
      <section className="py-10 px-4 bg-card">
        <div className="max-w-[970px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-8">
            The 8-Second Discovery<br/>That Changed Everything..
          </h2>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            That&apos;s when I stumbled on a breakthrough study from the University of Toronto..
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">
            Scientists had discovered a special brainwave called &ldquo;Gamma&rdquo; that activates your brain&apos;s natural cleaning system.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            Think of it like a power washer for your brain..
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            When Gamma is activated, your brain&apos;s neural guardians spring into action, clearing away the toxic buildup that causes brain fog and memory problems.
          </p>
          
          <div className="bg-primary rounded-[14px] p-5 md:p-6 mt-8 text-primary-foreground">
            <p className="text-[20px] md:text-[26px] leading-[30px] md:leading-[40px] font-bold text-center">
              The problem? Most people&apos;s Gamma waves are dormant after age 50.
            </p>
          </div>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">
            That&apos;s where the 8-second ear ritual comes in..
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            By listening to a specially designed soundwave through your ears, you can reactivate your dormant Gamma waves in just 8 seconds.
          </p>
        </div>
      </section>

      {/* Section 9 - Testimonial */}
      <section className="py-10 px-4 bg-secondary">
        <div className="max-w-[970px] mx-auto">
          <div className="bg-card rounded-[14px] p-6 md:p-8 shadow-lg">
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] italic">
              &ldquo;I was skeptical at first, but after just one week of using the Memory Wave, I noticed I could remember names at parties again. After a month, the brain fog that had plagued me for years was completely gone. I feel 20 years younger!&rdquo;
            </p>
            <p className="text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] mt-4 font-bold">
              - Margaret T., 67, Tampa, FL
            </p>
          </div>
          
          <div className="bg-card rounded-[14px] p-6 md:p-8 shadow-lg mt-6">
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] italic">
              &ldquo;My doctor couldn&apos;t believe the change. I went from forgetting where I put my keys every day to remembering entire conversations word for word. The Memory Wave is the real deal.&rdquo;
            </p>
            <p className="text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] mt-4 font-bold">
              - Robert J., 72, Phoenix, AZ
            </p>
          </div>
        </div>
      </section>

      {/* Section 10 - How It Works */}
      <section className="py-10 px-4 bg-card">
        <div className="max-w-[970px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-8">
            How The Memory Wave<br/>Works In Just 8 Seconds..
          </h2>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <span className="bg-primary text-primary-foreground font-bold text-[20px] md:text-[24px] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0">1</span>
              <div>
                <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] font-bold">Put on any pair of headphones</p>
                <p className="text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-muted-foreground mt-2">Regular earbuds or over-ear headphones work perfectly fine.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <span className="bg-primary text-primary-foreground font-bold text-[20px] md:text-[24px] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0">2</span>
              <div>
                <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] font-bold">Press play on the Memory Wave audio</p>
                <p className="text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-muted-foreground mt-2">Within 8 seconds, the special soundwave begins activating your Gamma brainwaves.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <span className="bg-primary text-primary-foreground font-bold text-[20px] md:text-[24px] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0">3</span>
              <div>
                <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] font-bold">Relax for 12 minutes</p>
                <p className="text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-muted-foreground mt-2">That&apos;s it! Your brain&apos;s natural cleaning system kicks in, clearing away toxic buildup.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11 - The Science */}
      <section className="py-10 px-4 bg-primary">
        <div className="max-w-[970px] mx-auto text-primary-foreground">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-8">
            The Science Behind<br/>The Memory Wave..
          </h2>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            The Memory Wave isn&apos;t some &ldquo;snake oil&rdquo; remedy..
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 font-bold">
            It&apos;s based on over 47 peer-reviewed scientific studies.
          </p>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            Studies from institutions like MIT, Harvard, and the University of Toronto have all confirmed the power of Gamma brainwaves for memory and cognitive function.
          </p>
          
          <div className="bg-white/10 rounded-[14px] p-5 md:p-6 mt-8">
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] font-bold italic">
              &ldquo;Gamma oscillations are associated with higher cognitive functions including attention, learning, and memory.&rdquo;
            </p>
            <p className="text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] mt-4 opacity-80">
              - Journal of Neuroscience
            </p>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-10 px-4 bg-primary">
        <div className="max-w-[970px] mx-auto text-center">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-primary-foreground text-center mb-8">
            Introducing The Memory Wave..
          </h2>
          
          <img 
            src={productBundle} 
            alt="The Memory Wave Product Bundle" 
            className="w-[280px] md:w-[500px] mx-auto mb-8"
          />
          
          <div className="rounded-2xl p-6 md:p-8 text-primary-foreground">
            <p className="text-[18px] md:text-[28px] leading-[28px] md:leading-[38px] font-bold text-center mb-6">
              The Memory Wave soundwave is developed by neuroscientists that uses advanced brain entrainment to activate Gamma and the brain power for a better memory..
            </p>
            
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] font-bold mt-8">It&apos;s simple, easy and you can do it at-home:</p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">Just pop on a pair of headphones and relax for an easy 12 minutes listening to the calming soundwave..</p>
          </div>
        </div>
      </section>

      {/* How To Order Section */}
      <section className="py-8 md:py-10 px-4 bg-secondary">
        <div className="max-w-[970px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-8">
            How To Order
          </h2>
          
          <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
            <div className="text-center">
              <img 
                src={womanLaptopOrder} 
                alt="Order on your computer" 
                className="w-[200px] md:w-[280px] rounded-lg mx-auto mb-4"
              />
              <p className="text-[16px] md:text-[20px] font-bold">Order on your computer</p>
            </div>
            <div className="text-center">
              <img 
                src={stopwatch} 
                alt="Takes less than 60 seconds" 
                className="w-[100px] md:w-[140px] mx-auto mb-4"
              />
              <p className="text-[16px] md:text-[20px] font-bold">Takes less than 60 seconds</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-8 md:py-10 px-4 bg-primary">
        <div className="max-w-[970px] mx-auto text-center">
          <h2 className="text-[24px] md:text-[44px] leading-[32px] md:leading-[54px] font-bold text-primary-foreground mb-4">
            Go ahead and complete your checkout below and experience everything I've talked about <span className="text-[#ffd700]">100% risk free right now</span>.
          </h2>
          <div className="bg-[linear-gradient(to_right,transparent,hsl(var(--primary)/0.8)_49%,transparent)] py-3 mx-auto max-w-[700px] mt-8">
            <p className="text-primary-foreground font-bold text-[18px] md:text-[24px]">NASA Neuroscientist-Recommended…</p>
          </div>
        </div>
      </section>

      {/* Pricing Box - sec26 */}
      <section className="py-8 md:py-10 px-4 bg-card">
        <div className="max-w-[600px] mx-auto relative z-10">
          <div className="bg-[#fffeec] border-2 border-[#e7e4b1] rounded-[14px] shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-secondary rounded-t-[12px] p-4 md:p-5 text-center">
              <h2 className="text-[24px] md:text-[44px] leading-[32px] md:leading-[54px] font-bold text-primary">
                Claim Your Memory Wave<br/>
                (Money Back 90-Day Guaranteed)
              </h2>
            </div>
            
            {/* Decorative Arrow */}
            <img 
              src={arrowDecorative} 
              alt="" 
              className="w-full h-[30px] md:h-[40px] object-cover"
            />
            
            {/* Body */}
            <div className="p-4 md:p-6 text-center">
              <img 
                src={productDiscount} 
                alt="Memory Wave with 40% off discount" 
                className="w-[200px] md:w-[320px] mx-auto mb-6"
              />
              
              {/* Feature Pills */}
              <div className="flex justify-center mb-6 w-[90%] mx-auto">
                <div className="bg-primary text-primary-foreground px-3 md:px-5 py-2 md:py-3 rounded-l-[14px] flex-1 relative">
                  <p className="font-bold text-[14px] md:text-[20px] leading-[18px] md:leading-[26px] text-left pl-[40px] md:pl-[55px]">Special<br/>Discount</p>
                  <div className="absolute left-[10px] md:left-[15px] top-[8px] md:top-[10px] w-[28px] md:w-[38px] h-[28px] md:h-[38px] bg-white/30 rounded-full" />
                </div>
                <div className="bg-primary/80 text-primary-foreground px-3 md:px-5 py-2 md:py-3 flex-1 relative">
                  <p className="font-bold text-[14px] md:text-[20px] leading-[18px] md:leading-[26px] text-left pl-[40px] md:pl-[55px]">Instant<br/>Access</p>
                  <div className="absolute left-[10px] md:left-[15px] top-[8px] md:top-[10px] w-[28px] md:w-[38px] h-[28px] md:h-[38px] bg-white/30 rounded-full" />
                </div>
                <div className="bg-primary/60 text-primary-foreground px-3 md:px-5 py-2 md:py-3 rounded-r-[14px] flex-1 relative">
                  <p className="font-bold text-[14px] md:text-[20px] leading-[18px] md:leading-[26px] text-left pl-[40px] md:pl-[55px]">Quick Start<br/>Bonuses</p>
                  <div className="absolute left-[10px] md:left-[15px] top-[8px] md:top-[10px] w-[28px] md:w-[38px] h-[28px] md:h-[38px] bg-white/30 rounded-full" />
                </div>
              </div>
              
              <p className="text-[#373737] text-[16px] md:text-[22px] leading-[26px] md:leading-[32px] mb-4">
                Regular Price: <span className="line-through text-red-500">$200</span> <span className="line-through text-red-500">$100</span> <span className="line-through text-red-500">$49</span>
              </p>
              
              <div className="relative inline-block mb-4">
                <p className="font-bold text-[20px] md:text-[24px] leading-[28px] md:leading-[34px]">Today Just For</p>
                <p className="font-bold text-[54px] md:text-[71px] leading-[54px] md:leading-[71px] text-primary mt-2">$39</p>
              </div>
              
              {/* Green arrows pointing to button */}
              <div className="flex justify-center items-center gap-2 md:gap-4 mb-2">
                <img src={arrowRight} alt="" className="w-[40px] md:w-[60px]" />
                <img src={arrowLeft} alt="" className="w-[40px] md:w-[60px]" />
              </div>
              
              <a href="#" className="block">
                <img 
                  src={orderButton} 
                  alt="Order Now" 
                  className="w-full max-w-[450px] mx-auto hover:opacity-90 transition-opacity"
                />
              </a>
              
              {/* Trust badges */}
              <div className="flex justify-center items-center gap-4 mt-6 flex-wrap">
                <img src={sslEncryption} alt="256 Bit SSL Encryption" className="h-[40px] md:h-[50px]" />
                <img src={moneyBackGuarantee} alt="90 Day Money Back Guarantee" className="h-[70px] md:h-[100px]" />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Guarantee Section */}
      <section className="py-8 md:py-10 px-4 bg-white">
        <div className="max-w-[970px] mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <img 
              src={moneyBackGuarantee} 
              alt="90 Day Money Back Guarantee" 
              className="w-[150px] md:w-[200px]"
            />
            <div>
              <h3 className="text-[24px] md:text-[34px] leading-[32px] md:leading-[44px] font-bold mb-4">
                Your Purchase Is Backed By Our Iron-Clad 90-Day 100% Money-Back Guarantee
              </h3>
              <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px]">
                Try the Memory Wave for a full 90 days. If you're not completely satisfied with your results, simply contact our friendly customer support team for a full refund. No questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section - sec30 */}
      <section className="py-8 md:py-10 px-4 bg-[#edf4ff]">
        <div className="max-w-[970px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-6">
            JUST <em>Added!</em> Get $197.00 In Free Gifts And Bonuses When You Order Today..
          </h2>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8 text-center">
            For everyone who orders at the discount price today, I'm giving you 4 free bonuses that aren't available anywhere else.
          </p>
          
          {/* Bonus Cards - giftbx */}
          {[
            { num: 1, title: 'Get The Best-Selling "1-Minute Memory Saver"', desc: "This 1-minute trick is simple and fun! You use it anytime you learn something new that you want stored permanently in your long-term memory. Do it from home, while waiting in line or anywhere else, and it's scientifically-proven to lock your new lesson into your memory the very first time you try it.", img: bonusMemorySaver },
            { num: 2, title: "Get The Smart Grocery Shopping Guide", desc: "Second is the Smart Grocery Shopping Guide, including the 10 common American foods that actually trigger brain fog, plus our 5 simple shortcuts to help cut your monthly grocery bill by $100 a month or more immediately, whether you shop at Walmart, Amazon, Costco, Target, Publix, Whole Foods or anywhere else!", img: bonusGroceryGuide },
            { num: 3, title: 'Get The "Energy Button"', desc: "Your 3rd free bonus for checking out today is a new report called The Energy Button! Customers often say the energy boost they get from the Memory Wave is like getting an extra day a week. So you'll discover our top tips for what to do with all that extra energy.", img: bonusEnergyButton },
          ].map((bonus) => (
            <div key={bonus.num} className="bg-card border-2 border-primary rounded-[14px] overflow-hidden mt-8 md:mt-10">
              <div className="bg-primary p-3 md:p-4">
                <p className="font-bold text-[20px] md:text-[34px] leading-[28px] md:leading-[44px] text-primary-foreground text-center md:text-left">
                  <span className="text-[#ffd700]">Your {bonus.num === 1 ? "1st" : bonus.num === 2 ? "2nd" : "3rd"} FREE Gift:</span> {bonus.title} <span className="text-[#ffd700]">FREE!</span>
                </p>
              </div>
              <div className="p-5 md:p-6 flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="relative flex-shrink-0 mx-auto md:mx-0">
                  <img 
                    src={bonus.img} 
                    alt={bonus.title} 
                    className="w-[180px] md:w-[220px] rounded-lg"
                  />
                  {/* Badge */}
                  <div className="absolute -top-2 -right-2 md:right-[5px] md:top-[25px] w-[80px] md:w-[100px] h-[80px] md:h-[100px] bg-red-600 rounded-full flex flex-col items-center justify-center text-white">
                    <span className="text-[13px] md:text-[17px] font-semibold leading-tight">FREE</span>
                    <span className="text-[11px] md:text-[14px] leading-tight">BONUS</span>
                    <span className="text-[28px] md:text-[40px] font-bold leading-none">#{bonus.num}</span>
                  </div>
                </div>
                <p className="text-[16px] md:text-[24px] leading-[24px] md:leading-[34px] text-center md:text-left">{bonus.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Support Section */}
      <section className="py-8 md:py-10 px-4 bg-card">
        <div className="max-w-[970px] mx-auto">
          <div className="bg-secondary rounded-[14px] p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
            <img 
              src={customerSupport} 
              alt="Customer Support" 
              className="w-[120px] md:w-[150px]"
            />
            <div>
              <h3 className="text-[22px] md:text-[30px] leading-[30px] md:leading-[40px] font-bold mb-3 text-center md:text-left">
                Questions? Our Friendly Customer Support Is Here To Help
              </h3>
              <p className="text-[16px] md:text-[22px] leading-[24px] md:leading-[32px] text-center md:text-left">
                Email us at support@memorywaveofficial.com and we'll get back to you within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - sec34 */}
      <section className="py-8 md:py-10 px-4 bg-card">
        <div className="max-w-[970px] mx-auto">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold text-center mb-8 md:mb-10">
            Frequently Asked Questions About The Memory Wave
          </h2>
          
          <div className="space-y-3">
            {[
              { q: 'The first question is from Melissa Ward in Hartford, Connecticut who asks, "What makes the Memory Wave superior to brain supplements or brain exercises?"', a: "There's 3 big problems with brain supplements: First is the blood-brain barrier. This is a locked door that stops nearly 99% of all treatments from reaching your brain. Second, many supplements are unproven and expensive. Third, you have to keep paying month after month." },
              { q: '"Why is $39 such a good deal?"', a: "A single bottle of a high quality brain supplement costs anywhere from $50 to $100 monthly. That comes out to $600 to $1,200 per year! The Memory Wave is a one-time investment that lasts forever." },
              { q: '"Why is sound effective for the brain?"', a: "Sound is able to pass the blood-brain barrier and reach your brain cells directly. This is why music can affect your mood instantly." },
              { q: '"Is the Memory Wave safe?"', a: "The Memory Wave has been used by thousands of Americans with zero reported side effects. It's not a drug or pill. It's a special soundwave based on research from NASA and the University of Toronto, that helps clear away the brain-rotting toxins by activating Gamma and healthy Brain Clearance." },
              { q: '"Do I need to change my diet or eat special foods to get the benefits?"', a: "No, you do not. The Memory Wave works independently of your diet. You may have seen videos telling you certain foods 'kill' your memory, but none of those solutions address the root cause." },
            ].map((faq, index) => (
              <div key={index} className={`border border-border rounded-[14px] overflow-hidden ${activeAccordion === index ? 'rounded-b-[14px]' : ''}`}>
                <button
                  className={`w-full p-4 md:p-5 text-left flex items-start gap-3 transition-colors relative ${activeAccordion === index ? 'bg-secondary rounded-t-[14px]' : 'bg-card hover:bg-muted'}`}
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                >
                  <span className="bg-primary text-primary-foreground text-[14px] md:text-[16px] font-bold w-8 h-8 md:w-11 md:h-11 rounded-full flex items-center justify-center flex-shrink-0 italic uppercase">
                    Q{index + 1}
                  </span>
                  <span className="text-[16px] md:text-[24px] leading-[24px] md:leading-[34px] pr-8 md:pr-12">{faq.q}</span>
                </button>
                {activeAccordion === index && (
                  <div className="px-4 md:px-6 pb-6 pl-14 md:pl-20 bg-card border-t-0">
                    <p className="text-[16px] md:text-[24px] leading-[24px] md:leading-[34px] text-foreground">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-8 md:py-10 px-4 bg-primary">
        <div className="max-w-[970px] mx-auto text-center text-primary-foreground">
          <h2 className="text-[28px] md:text-[44px] leading-[36px] md:leading-[54px] font-bold mb-6">
            Claim your copy of the Memory Wave now.
          </h2>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            Go ahead, click the button below and complete your checkout to take advantage of today's discount. We'll email it to you immediately. You're always protected by our 100% satisfaction guarantee. So there's really nothing to lose.
          </p>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] mt-8">
            And let me be the first to welcome you to the Memory Wave family, and congratulate you on your wise decision to invest in your brighter, safer, healthier future. Thank you very much for watching and God bless.
          </p>
          
          <a href="#" className="block mt-8">
            <img 
              src={orderButton} 
              alt="Order Now" 
              className="w-full max-w-[400px] mx-auto hover:opacity-90 transition-opacity"
            />
          </a>
          
          <div className="bg-[linear-gradient(to_right,transparent,hsl(var(--primary)/0.8)_49%,transparent)] py-3 mx-auto max-w-[700px] mt-8">
            <p className="text-primary-foreground font-bold text-[18px] md:text-[24px]">NASA Neuroscientist-Recommended…</p>
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
