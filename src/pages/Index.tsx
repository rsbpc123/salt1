import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Shield, Lock } from "lucide-react";
import ScientificBadges from "@/components/ScientificBadges";
import StatBox from "@/components/StatBox";
import HeroSection from "@/components/HeroSection";
import HighlightBox from "@/components/HighlightBox";
import NumberedPoint from "@/components/NumberedPoint";
import StorySection from "@/components/StorySection";
import ImageWithText from "@/components/ImageWithText";
import saltHills from "@/assets/salt-hills-romania.jpg";
import romanianVillage from "@/assets/romanian-village.jpg";
import lungDiagram from "@/assets/lung-diagram.jpg";
import saltPouch from "@/assets/salt-pouch-product.jpg";
import elderlyWoman from "@/assets/elderly-woman-chopping-wood.jpg";
import inchisSign from "@/assets/inchis-closed-sign.png";
import romanianCoffeeShop from "@/assets/romanian-coffee-shop.png";
import saltCrystals from "@/assets/salt-crystals-closeup.jpg";
import elderlyCouple from "@/assets/elderly-couple-breathing.jpg";
import healthyLungs from "@/assets/healthy-lungs-diagram.jpg";
import saltTherapyPouch from "@/assets/salt-therapy-pouch.jpg";
import elderlyGardening from "@/assets/elderly-woman-gardening.jpg";
import saltParticles from "@/assets/salt-particle-visualization.jpg";

const Index = () => {
  const scrollToCTA = () => {
    document.getElementById("order-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Trust Header */}
      <header className="border-b border-border bg-trust/30 py-3 sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>SECURE CHECKOUT</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-primary" />
              <span>TRUSTED & VERIFIED</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Image */}
      <HeroSection />

      {/* Story Begins */}
      <StorySection title="I WATCHED MY WIFE DROWN" bgColor="story">
        <ImageWithText 
          image={saltCrystals}
          imageAlt="Close-up of pink healing salt crystals"
          imagePosition="float-right"
          imageSize="medium"
          imageShape="rounded"
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-foreground/90">
            Sitting Right Next to Me in Our Bed
          </h3>
          
          <p>It was just past midnight when I heard it.</p>
          <p>That sound.</p>
          <p>Linda wasn't breathing right.</p>
          
          <HighlightBox variant="warning">
            <p className="text-lg font-semibold mb-2">Her chest heaving. Lips turning blue. Sitting straight up. Clutching her throat.</p>
            <p className="text-2xl font-bold text-emphasis">Drowning.</p>
            <p className="mt-2">In our bedroom. In Warner Robins, Georgia. 200 miles from the nearest ocean.</p>
          </HighlightBox>
          
          <p>I grabbed her inhaler. Shook it. Jammed it into her mouth.</p>
          <p>"Breathe, baby."</p>
          <p>Two puffs. Nothing.</p>
          <p className="font-bold text-lg text-emphasis">Her wheezing got WORSE.</p>
          
          <p>I dialed 911.</p>
          <p>The paramedics arrived in 8 minutes. Felt like 8 hours.</p>
          <p>They strapped an oxygen mask to her face. Loaded her onto the stretcher.</p>
          <p>One of them looked at me and shook his head. Not mean. Just... tired.</p>
          <p>Like he'd seen us before.</p>
          <p>(He had. Three times that month.)</p>
          
          <div className="section-divider" />
          
          <p>Two hours later, a doctor came out.</p>
          <p>"She's stable. You can take her home in a few hours."</p>
          <p>"What happens next time?" I asked.</p>
          <p>He paused. "Keep doing what you're doing. Come back if it gets worse."</p>
          
          <HighlightBox variant="warning">
            <p className="font-bold text-lg">No solution. No plan.</p>
            <p>Just... keep doing what we're doing.</p>
            <p className="font-bold text-xl text-emphasis mt-2">Except what we were doing WASN'T WORKING.</p>
          </HighlightBox>
        </ImageWithText>
      </StorySection>

      {/* Problem Agitation */}
      <StorySection title="Her Lungs Were Turning to Cement (And Nobody Told Us Until It Was Almost Too Late)">
        <ImageWithText 
          image={healthyLungs}
          imageAlt="Medical illustration of healthy lungs"
          imagePosition="float-left"
          imageSize="medium"
          imageShape="circle"
        >
          <p>Two weeks later, Linda saw her pulmonologist.</p>
          <p>He pulled up a CT scan. White patches scattered throughout her lungs.</p>
          
          <HighlightBox>
            <p className="font-bold text-lg mb-2">"This is fibrosis," he said. "Scar tissue. Your airways are hardening."</p>
            <p>"Can you fix it?"</p>
            <p className="font-bold text-emphasis mt-2">He shook his head. "Once the scarring sets in... no. We can only try to slow it down."</p>
          </HighlightBox>
          
          <p>My stomach dropped.</p>
          <p>"How long do we have?"</p>
          <p>He looked at Linda. Then back at me.</p>
          
          <HighlightBox variant="warning">
            <p className="text-lg font-bold">"If we can't get the inflammation under control... maybe 18 to 24 months before the damage severely impacts her quality of life."</p>
          </HighlightBox>
          
          <p>Linda started crying.</p>
          <p>We walked out in silence.</p>
          <p>And for the first time in our 40-year marriage...</p>
          <p className="font-bold text-xl text-primary">I didn't know what to say to her.</p>
        </ImageWithText>
      </StorySection>

      <StorySection title="We Did EVERYTHING the Doctors Told Us (And She Got WORSE)" bgColor="scientific">
        <div className="vsl-content-box">
          <p>Linda wasn't reckless. She did EVERYTHING they told her.</p>
          
          <div className="callout-box">
            <NumberedPoint number={1}>
              <p className="font-semibold">Six different inhalers over three years</p>
              <p>Five medications just to breathe</p>
            </NumberedPoint>
            <NumberedPoint number={2}>
              <p className="font-semibold">$1,200 a month on prescriptions</p>
              <p>Even WITH insurance</p>
            </NumberedPoint>
            <NumberedPoint number={3}>
              <p className="font-semibold">Prednisone rounds</p>
              <p>That awful steroid that made her gain 15 pounds and gave her insomnia</p>
            </NumberedPoint>
          </div>
          
          <p className="font-bold text-lg">And she was still drowning.</p>
          
          <p>We did the breathing exercises. Bought a $400 HEPA air purifier. Ripped out the carpets.</p>
          <p>Hired a mold inspector. $800 later... no mold.</p>
          <p>None of it made a difference.</p>
          
          <HighlightBox variant="warning">
            <p className="text-xl font-bold mb-2">Every doctor said the same thing:</p>
            <p className="text-2xl font-black text-emphasis">"This is just something you'll have to MANAGE."</p>
          </HighlightBox>
          
          <p>Like we weren't already managing her not being able to walk upstairs.</p>
          <p>Managing the oxygen concentrator humming all night.</p>
          <p>Managing the stack of medical bills we couldn't pay.</p>
          <p className="font-bold text-lg">Managing our life shrinking smaller and smaller.</p>
          
          <div className="highlight-box">
            <p className="font-semibold text-lg text-foreground mb-3">Here's why they believe that:</p>
            <p>Medical schools teach from pulmonology textbooks written in the 1990s. BEFORE scientists discovered that lung cells can regenerate.</p>
            <p className="font-bold mt-3">Your doctor isn't lying to you. They genuinely don't KNOW.</p>
            <p className="mt-2">But researchers in Europe have been studying this for 20 years.</p>
            <p className="font-bold text-xl text-primary mt-3">And the results are undeniable.</p>
          </div>
        </div>
      </StorySection>

      {/* The Bathroom Scene */}
      <StorySection title="The Night I Found Her Crying in the Bathroom">
        <p>It was a Tuesday.</p>
        <p>Linda's sister invited us to Thanksgiving. Linda said she had a cold.</p>
        <p>But she didn't.</p>
        <p>She just didn't want her family to see her like this.</p>
        
        <p>That night, I woke up around 2 AM. Linda wasn't in bed.</p>
        <p>I found her in the bathroom. Sitting on the floor. Crying.</p>
        
        <HighlightBox variant="testimony">
          <p className="text-lg mb-2">"I don't want to be that person anymore," she whispered.</p>
          <p>"What person?"</p>
          <p className="font-bold text-xl text-primary mt-3">"The one everyone feels sorry for."</p>
        </HighlightBox>
        
        <p>Her voice cracked.</p>
        <p>"I used to RUN, Robert. I used to play with the grandkids. And now I can't even walk to the mailbox without feeling like I'm dying."</p>
        
        <p>I sat down next to her.</p>
        <p>Because what was I supposed to say?</p>
        
        <HighlightBox variant="warning">
          <p>Her lungs were getting WORSE. Not better.</p>
          <p>The medications weren't working.</p>
          <p>The doctors had given up.</p>
        </HighlightBox>
        
        <p>Right then, I made a promise.</p>
        
        <div className="callout-box text-center">
          <p className="text-2xl font-bold text-primary mb-3">I'm going to fix this.</p>
          <p className="text-lg">I don't care what it takes.</p>
          <p className="text-lg">I don't care if I have to fly to the other side of the world.</p>
          <p className="text-xl font-bold mt-3">I'm going to find a way.</p>
        </div>
      </StorySection>

      {/* Discovery Journey */}
      <StorySection title="The Late-Night Google Search That Changed Everything" bgColor="story">
        <ImageWithText 
          image={saltParticles}
          imageAlt="Visualization of salt particles being inhaled"
          imagePosition="float-right"
          imageSize="large"
          imageShape="rounded"
        >
          <p>It was 1 AM.</p>
          <p>Linda was finally asleep upstairs.</p>
          <p>I was at the kitchen table. Googling.</p>
          <p>"Natural asthma remedies." "COPD cure." "How to reverse lung fibrosis."</p>
          <p>Most of it was garbage.</p>
          <p>Essential oils. Breathing apps. Supplements that did nothing.</p>
          
          <p>I was about to close the laptop.</p>
          <p className="font-bold text-lg">Then I saw it.</p>
          
          <HighlightBox>
            <p className="italic text-lg font-semibold">"Long-term efficacy of halotherapy in chronic obstructive pulmonary disease."</p>
            <p className="mt-3">Halotherapy. Breathing microscopic salt particles.</p>
            <p>Sounded weird. But the study had REAL results.</p>
          </HighlightBox>
          
          <p>People with COPD seeing improvements in lung function. Reduced coughing. Better oxygen saturation.</p>
          <p>I kept reading.</p>
          
          <div className="callout-box">
            <p className="font-bold text-xl text-primary mb-3">Turns out, halotherapy started in actual salt MINES.</p>
            <p>Deep underground in Eastern Europe.</p>
            <p className="mt-3">There's this place in Romania. The Praid Salt Mine.</p>
            <p>For over a CENTURY, people with severe lung problems traveled there. From all over Europe. To go down into the mine and just... breathe.</p>
          </div>
          
          <div className="benefit-grid my-8">
            <div className="benefit-card">
              <p className="font-bold text-lg text-primary mb-2">📊 Oxygen Levels</p>
              <p>People with Stage 3 COPD seeing their oxygen levels jump from 88% to 96%</p>
            </div>
            <div className="benefit-card">
              <p className="font-bold text-lg text-primary mb-2">💊 Reduced Medications</p>
              <p>Over 50% reduced their medications. Some stopped entirely.</p>
            </div>
            <div className="benefit-card">
              <p className="font-bold text-lg text-primary mb-2">🫁 Breathing Freely</p>
              <p>People on oxygen tanks for YEARS... breathing freely</p>
            </div>
            <div className="benefit-card">
              <p className="font-bold text-lg text-primary mb-2">✨ Real Recovery</p>
              <p>Not managing. BETTER.</p>
            </div>
          </div>
          
          <p>I'm reading about people who sound EXACTLY like Linda.</p>
          <p className="font-bold text-2xl text-primary">Getting better. Not managing. BETTER.</p>
          
          <div className="section-divider" />
          
          <p>The next morning, I showed Linda everything.</p>
          <p>"Do you really think this could work?" she asked.</p>
          <p>I took a breath. "I don't know. But we need to find out."</p>
          <p>She nodded. "Okay. Let's go."</p>
          
          <HighlightBox variant="warning">
            <p className="font-bold text-lg mb-2">But here's what I didn't know yet...</p>
            <p>The mine that saved all those people?</p>
            <p className="text-xl font-bold text-emphasis mt-2">It was about to collapse.</p>
            <p className="mt-2">And we were about to fly 5,000 miles... for nothing.</p>
          </HighlightBox>
        </ImageWithText>
      </StorySection>

      {/* The Journey */}
      <StorySection title="We Flew 5,000 Miles to a Salt Mine...Only to Find THIS">
        <p>Three weeks later, we were on a plane to Bucharest. Then a rental car through the Carpathian Mountains.</p>
        <p>Heading to Praid. Home to the famous Praid Salt Mine.</p>
        
        <p>I was nervous. But hopeful.</p>
        <p>Linda squeezed my hand as we drove. "What if this actually works?"</p>
        <p>"Then we're about to get your life back," I said.</p>
        
        <div className="section-divider" />
        
        <p>We pulled into the parking lot.</p>
        <p>That's when I saw the sign.</p>
        
        <div className="max-w-2xl mx-auto my-8">
          <img 
            src={inchisSign} 
            alt="Închis (Closed) sign hanging in the dark tunnel entrance of the salt mine" 
            className="w-full h-auto rounded-lg shadow-dramatic"
          />
          <p className="text-center text-muted-foreground italic mt-4">(Romanian for "Closed")</p>
        </div>
        
        <p>I walked closer. Another sign. In Romanian and English.</p>
        
        <div className="callout-box bg-muted">
          <p className="italic text-center text-lg">"Due to severe flooding and structural collapse, the Praid Salt Mine has been permanently closed as of May 2025."</p>
        </div>
        
        <p>My heart sank.</p>
        <p>We'd flown 5,000 miles. Spent money we didn't have.</p>
        <p className="font-bold text-xl">And now... nothing.</p>
        
        <HighlightBox variant="testimony">
          <p>Linda put her hand on my shoulder. "We tried. That's more than most people do."</p>
          <p className="mt-3">But I could hear it in her voice.</p>
          <p className="font-bold text-emphasis">The defeat. The resignation.</p>
          <p className="mt-2">Like she'd already accepted this was how the rest of her life was going to be.</p>
        </HighlightBox>
        
        <p className="font-bold text-lg">And I wasn't ready to accept that.</p>
        <p>Not yet.</p>
      </StorySection>

      {/* The Village Discovery */}
      <StorySection title="The Coffee Shop Conversation That Saved Linda's Life" bgColor="scientific">
        <div className="max-w-4xl mx-auto my-8">
          <img 
            src={romanianCoffeeShop} 
            alt="Colorful historic buildings and outdoor cafe in a Romanian village street" 
            className="w-full h-auto rounded-lg shadow-dramatic"
          />
        </div>
        
        <div className="vsl-content-box">
          <p>We drove into town. Found a small cafe on the main street. Old wooden tables. The smell of strong coffee and fresh bread.</p>
          <p>We ordered and sat down.</p>
          <p>Linda looked tired. Not physically. Just... defeated.</p>
          
          <HighlightBox variant="testimony">
            <p>"What do we do now?" she whispered.</p>
            <p className="mt-2">I had no answer. Just that familiar crushing weight in my chest.</p>
          </HighlightBox>
          
          <p className="font-bold text-lg">That's when an older woman at the next table leaned over.</p>
          
          <p>"English?" she asked. Her accent thick. But clear.</p>
          <p>"American," I said.</p>
          <p>She smiled. "I'm Ioana."</p>
          <p>She gestured toward the window. "You came for the mine?"</p>
          <p>I nodded. "Yeah. But it collapsed."</p>
          
          <HighlightBox>
            <p className="font-bold text-lg">She waved her hand dismissively.</p>
            <p className="text-xl mt-2">"The mine. Everyone comes for the mine."</p>
            <p className="font-bold text-primary text-lg mt-2">"But the mine is not special. It's just... underground."</p>
          </HighlightBox>
          
          <p>I frowned. "What do you mean?"</p>
          <p>She leaned in closer. "You want salt for breathing, yes?"</p>
          <p>"Yeah. My wife has lung problems."</p>
          <p>Ioana looked at Linda. Studied her for a moment. Then nodded.</p>
          
          <div className="callout-box">
            <p className="text-2xl font-black text-primary text-center mb-3">"The mine was good. But there is a better place."</p>
            <p className="text-center">Linda sat up. "Where?"</p>
            <p className="text-3xl font-black text-emphasis text-center mt-4">Mânzălești.</p>
            <p className="text-center mt-2">Small village. About four hours from here.</p>
          </div>
          
          <p>She pulled out her phone. Scrolled for a minute. Then turned it toward us.</p>
          <p>It was a YouTube video. The thumbnail showed an old man. Holding an axe. Standing in front of a pile of freshly cut wood.</p>
          
          <HighlightBox>
            <p className="font-bold text-lg">The title was in Romanian. But I could make out the number:</p>
            <p className="text-3xl font-bold text-primary text-center my-3">101 de ani.</p>
            <p className="text-center">101 years old.</p>
          </HighlightBox>
          
          <p>She hit play. The video had 96,000 views.</p>
          <p>The old man was cutting wood. With a CHAINSAW. Moving like he was 50. Not 101.</p>
          
          <p>"This is Gică Baciu," Ioana said. "He lives in Mânzălești. Everyone there lives long like this."</p>
          <p>Linda's eyes widened. "Everyone?"</p>
          <p>Ioana nodded. "Many people. Very old. But still strong."</p>
          
          <p>She swiped to another video. An old woman. Working in her garden. Moving effortlessly.</p>
          <p>Then another. A news report. BBC. Showing the village. White hills rising from the valley.</p>
          
          <div className="my-8">
            <img 
              src={elderlyGardening}
              alt="Elderly woman working energetically in her vibrant flower garden"
              className="w-full max-w-2xl mx-auto h-auto rounded-lg shadow-medium hover-scale"
            />
          </div>
          
          <div className="highlight-box">
            <p className="font-bold text-lg text-primary mb-2">"That is salt," Ioana said.</p>
            <p className="text-xl font-bold">On the SURFACE. Not underground like the mine.</p>
          </div>
          
          <p>I stared at the screen. "How is that possible?"</p>
          <p>She shrugged. "The ground is full of salt. So much salt, it comes to the top. The river carries it. The wind blows it."</p>
          <p>"The whole village breathes it. Every day. Their whole lives."</p>
          
          <div className="callout-box text-center">
            <p className="text-2xl font-black text-emphasis">"That is why they live so long."</p>
          </div>
          
          <p>She showed us more videos. Multiple TV reports. Romanian news channels. National Geographic.</p>
          <p>All about Mânzălești. The village where people live past 100.</p>
          
          <HighlightBox>
            <p className="font-bold">"You can search for it yourself on YouTube," she said.</p>
            <p className="mt-2 italic">"Mânzălești longevity village. There are dozens of reports. This is real. Documented for years."</p>
          </HighlightBox>
          
          <p>I looked at Linda. Then back at Ioana.</p>
          <p>Linda leaned forward. "Can we go there?"</p>
          <p>Ioana smiled. "Of course. But..." She paused. "You should talk to Dr. Popescu first. She knows everything about the salt."</p>
          
          <p>"Who's Dr. Popescu?"</p>
          <p>"A researcher. From the university. She has been studying Mânzălești for many years."</p>
          <p>She pulled out a pen. Scribbled something on a napkin. Slid it across the table.</p>
          <p>"Her name. Her email. Tell her Ioana sent you."</p>
          
          <div className="section-divider" />
          
          <p>I looked at the napkin. Then at Ioana. "That's very kind of you. But... why are you going out of your way for us?"</p>
          
          <HighlightBox variant="testimony">
            <p>She smiled sadly. "My husband had lung problems. Like your wife."</p>
            <p className="mt-2">"He is gone now. But before he died... he spent time in Mânzălești."</p>
            <p className="font-bold text-primary text-lg mt-3">"It gave him ten more good years."</p>
            <p className="mt-3">Her eyes got a little watery. "So when I see people like you... looking for hope..."</p>
          </HighlightBox>
          
          <p>She trailed off. Then stood up. Patted Linda's hand.</p>
          <p className="font-bold text-xl text-primary">"Go to Mânzălești. Breathe the air. You will see."</p>
          <p>And then she left.</p>
          
          <p>I sat there holding the napkin. Staring at the name. Dr. Elena Popescu.</p>
          <p>Linda looked at me. "Robert... should we email her?"</p>
          <p className="font-bold text-lg">I pulled out my phone. "I'm doing it right now."</p>
        </div>
      </StorySection>

      {/* Email from Dr. Popescu */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
            What a Romanian Researcher Told Us Over Email (That Made Us Drive 4 Hours Into the Mountains)
          </h2>
          
          <div className="prose prose-lg max-w-none space-y-4 text-foreground/80">
            <p>I sent the email right then and there. Explained who we were. Why we came. What we were hoping to find.</p>
            <p>I didn't expect a response. At least not right away.</p>
            <p>But two hours later... my phone buzzed.</p>
            <p>An email from Dr. Elena Popescu.</p>
            
            <Card className="my-8 p-6 bg-primary/5 border-l-4 border-primary">
              <p className="italic">"Dear Robert and Linda,</p>
              <p className="italic">I'm so glad you reached out.</p>
              <p className="italic">The Praid mine was a wonderful therapeutic environment. But you're right to be disappointed it collapsed.</p>
              <p className="italic">I've been researching the Mânzălești village for over 15 years. I've documented over 40 residents over 90 years old. Out of just 2,000 people.</p>
              <p className="italic">And what I've found there is far more powerful than anything that happened in the mine.</p>
              <p className="italic">The mine was therapeutic. But Mânzălești? It's NATURAL. The salt is everywhere. In the soil. The water. The AIR.</p>
              <p className="italic">The people there don't just visit the salt for a few hours. They LIVE in it. Breathe it. Every day. For their entire lives.</p>
              <p className="italic">And the results speak for themselves.</p>
              <p className="italic">If you're willing to make the drive, I'd be happy to meet you there tomorrow. I can show you the village. Introduce you to some of the residents. And explain exactly why the air in Mânzălești might be able to help Linda.</p>
              <p className="italic">Let me know.</p>
              <p className="italic">– Dr. Elena Popescu"</p>
            </Card>

            <p>I read the email out loud to Linda.</p>
            <p>She looked at me and without hesitation said, "Let's go."</p>
          </div>
        </div>
      </section>

      <ImageWithText 
        image={saltHills}
        imageAlt="White salt hills in Romanian mountains"
        title="The 4-Hour Drive That Felt Like Traveling Back in Time"
        bgColor="story"
        imagePosition="top"
        imageSize="full"
      >
        <p>We left before sunrise. Dr. Popescu's directions sitting on the dashboard.</p>
        <p>For the first hour, everything looked normal. Small towns. Gas stations. Road signs.</p>
        
        <HighlightBox>
          <p>Then the road narrowed.</p>
          <p>The towns got smaller.</p>
          <p className="font-bold text-lg mt-2">And I started to feel it.</p>
          <p>That strange mix of hope and terror.</p>
        </HighlightBox>
        
        <p>We passed villages that looked like they hadn't changed in 100 years. Wooden houses. Horse-drawn carts. Fields worked by hand.</p>
        <p>"This feels like we're in a different century," Linda said.</p>
        <p>She wasn't wrong.</p>
        
        <p>Another hour passed. Then... I saw them.</p>
        <p className="font-bold text-xl text-primary">White hills rising from the valley.</p>
        
        <p>At first, I thought: snow.</p>
        <p>But it was May. Too warm.</p>
        <p>I pulled over. Got out. Walked closer.</p>
        
        <div className="callout-box text-center">
          <p className="text-sm mb-2">Not snow.</p>
          <p className="text-4xl font-black text-emphasis">Salt.</p>
          <p className="mt-3">Coating the hillsides like powder.</p>
          <p>Sparkling like crushed diamonds in the morning sun.</p>
        </div>
        
        <p>Linda came up beside me. "Robert... is that...?"</p>
        <p>"Yeah," I said quietly. "That's salt."</p>
        <p>We stood there for a minute. Just staring at these hills. Covered in salt. Out in the open. Not underground. Not in a mine. Just... there.</p>
        
        <p>Then I heard a car pull up behind us.</p>
        <p>I turned. A woman got out. Probably in her late 50s. Carrying a weathered leather bag. Warm smile.</p>
        <p>"Robert? Linda?"</p>
        <p>I nodded.</p>
        <p className="font-bold text-lg">She walked over. Extended her hand. "I'm Dr. Elena Popescu. Welcome to Mânzălești."</p>
      </ImageWithText>

      <ImageWithText 
        image={romanianVillage}
        imageAlt="Traditional Romanian village in the mountains"
        title="What We Found in the Village Where People Live Past 100"
        imagePosition="top"
        imageSize="full"
      >
        <p>Dr. Popescu shook our hands. Then looked back toward the white hills. "Beautiful, isn't it?"</p>
        <p>Linda nodded. "I've never seen anything like it."</p>
        
        <HighlightBox>
          <p className="font-semibold">"Most people haven't," Dr. Popescu said.</p>
          <p className="text-lg font-bold text-primary mt-2">"This is one of the only places on Earth where salt deposits rise to the surface like this."</p>
        </HighlightBox>
        
        <p>She gestured for us to follow her. "Come. Let me show you the village."</p>
        
        <p>We got back in our cars. Followed her down a winding dirt road.</p>
        <p>Through fields dotted with those white salt formations. Past wooden fences. Grazing sheep. Old women in headscarves tending gardens.</p>
        
        <p>Then we reached the village center.</p>
        <p>A small church. A general store. A handful of houses scattered around a dirt square.</p>
        <p className="font-bold">Simple. Quiet. Untouched by time.</p>
        
        <p>Dr. Popescu parked. We pulled up beside her. "This is Mânzălești," she said.</p>
        <p>I looked around. It felt like we'd stepped into a different era. No paved roads. No power lines. Just... simplicity.</p>
        
        <p>Linda grabbed my hand. "Robert... where are we going to stay?"</p>
        <p>Dr. Popescu smiled. "I've arranged something."</p>
        
        <p>She led us down a narrow path. Past a few more houses. Until we reached a small cottage. White walls. Blue shutters. Flowers in the window boxes.</p>
        <p>An older woman was standing outside. Probably in her 70s. Wearing a traditional Romanian dress. Smiling warmly.</p>
        
        <HighlightBox>
          <p>"This is Maria," Dr. Popescu said. "She's agreed to rent you her guest house for as long as you need."</p>
        </HighlightBox>
        
        <p>Maria said something in Romanian. Dr. Popescu translated. "She says welcome. And she's happy you're here."</p>
        <p>Maria walked over to Linda. Took both her hands. Said something else.</p>
        
        <HighlightBox variant="testimony">
          <p className="font-semibold">Dr. Popescu translated again:</p>
          <p className="mt-2">"She says her sister had breathing problems, too. The air here helped her.</p>
          <p className="mt-2">She also had terrible allergies every spring. Sneezing. Watery eyes. Couldn't go outside.</p>
          <p className="font-bold text-primary text-lg mt-3">After two months here, the allergies stopped completely."</p>
        </HighlightBox>
        
        <p>Linda's eyes welled up a little. "Thank you," she said.</p>
        <p>Maria squeezed her hands. Then led us around the side of the main house. To a smaller building in the back.</p>
        
        <p>Inside was simple. One bedroom. Small kitchen. Bathroom. But it was clean. Comfortable.</p>
        <p>And honestly? It felt... peaceful.</p>
        
        <p>Dr. Popescu stood in the doorway. "I'll let you get settled. Get some rest tonight."</p>
        <p>She paused. "Tomorrow morning, come by my office. It's just down the road. I want to show you something."</p>
        <p>"What?" I asked.</p>
        <p className="font-bold text-xl text-primary">She smiled. "Why this place actually works."</p>
      </ImageWithText>

      {/* Scientific Explanation */}
      <section className="py-12 px-4 bg-scientific/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
            Dr. Popescu Showed Us EXACTLY How This Works (And Why Your Doctor Will Never Tell You)
          </h2>
          
          <div className="vsl-content-box">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <img 
                src={lungDiagram} 
                alt="Medical diagram of human lungs" 
                className="w-full h-auto rounded-lg shadow-medium"
              />
              <div className="flex flex-col justify-center">
                <div className="prose prose-lg space-y-4 text-foreground/80">
                  <p>The next morning, we walked down the dirt road to a small building near the village center.</p>
                  <p>A hand-painted sign out front read: Dr. Elena Popescu - Research Office</p>
                  <p>She was waiting for us at the door. "Come in, come in."</p>
                  <p>Inside was a single room. Shelves lined with books. A desk covered in papers. And on the walls... diagrams. Charts. Photos of lungs.</p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-3xl mx-auto space-y-4 text-foreground/80">
              <p>She gestured toward two chairs. "Sit. I want to explain something."</p>
              <p>Linda and I sat down.</p>
              <p>Dr. Popescu pulled out a laminated diagram. Showed it to us.</p>
              <p>It was a cross-section of human lungs. Airways branching like tree roots.</p>
              <p>But some of them were... clogged. Thick white plugs blocking the passages.</p>
              <p>"This is what Linda's lungs look like right now," she said.</p>
              <p>Linda leaned forward. Staring at the image.</p>
              <p>"Your lungs aren't just inflamed," Dr. Popescu continued. "They're DROWNING."</p>
              <p>"The inflammation causes your body to produce excess mucus. Thick, sticky mucus that traps bacteria and irritants."</p>
              <p>"And that mucus forms a CEMENT-like plug in your airways."</p>
              <p>She pointed to the white blockages on the diagram.</p>
              <p>"Your medications try to open the airways. But they don't address the MUCUS."</p>
              <p>"So you're essentially trying to breathe through a straw that's clogged with glue."</p>
              <p>Linda's hand went to her throat. Like she could feel it.</p>
              <p>Dr. Popescu pulled out another diagram.</p>
              <p>"This is where the salt changes everything."</p>
              
              <div className="my-8 p-6 bg-primary/10 rounded-lg border-l-4 border-primary">
                <h3 className="font-display text-2xl font-bold mb-4 text-foreground">When you breathe in microscopic salt particles... four things happen:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">FIRST... the salt hydrates the mucus.</strong>
                      <p className="mt-1">"It draws water into the mucus proteins, making them thinner and easier to expel."</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">SECOND... it restores ciliary function.</strong>
                      <p className="mt-1">"Your lungs have tiny hair-like structures called cilia that sweep mucus up and out. But chronic inflammation paralyzes them."</p>
                      <p className="mt-1">"The salt reactivates those cilia. Gets them moving again."</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">THIRD... it reduces inflammation at a cellular level.</strong>
                      <p className="mt-1">"This isn't table salt. It was formed 22 million years ago under intense volcanic pressure and heat."</p>
                      <p className="mt-1">"The minerals got BAKED into the salt. Creating compounds that don't exist in regular sodium chloride."</p>
                      <p className="mt-1">"Kieserite. Polyhalite. Iron oxide. These minerals have documented anti-inflammatory and mucolytic properties."</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">FOURTH... the salt creates an osmotic effect that opens your airways.</strong>
                      <p className="mt-1">"As the salt particles settle on the airway walls, they pull fluid OUT of the swollen tissue."</p>
                      <p className="mt-1">"Like how salt draws water out of a vegetable when you're pickling it."</p>
                    </div>
                  </li>
                </ul>
              </div>

              <p>She pointed back to the lung diagram.</p>
              <p>"This is why the air here works when medications don't."</p>
              <p className="font-bold text-xl text-primary">"The medications only treat symptoms. The salt treats the ROOT CAUSE."</p>
              <p>"And it's not just lung problems," she added.</p>
              <p>"The same mechanism works for allergies."</p>
              <p>She walked over to the window. Pointed toward the fields outside.</p>
              <p>"Every spring, people come here from all over Romania. When the pollen count is at its highest."</p>
              <p>"They arrive with red, watery eyes. Sneezing fits. Can't go outside without feeling miserable."</p>
              <p>"Seasonal allergies are just inflammation in your nasal passages. Swollen tissue. Excess mucus."</p>
              <p>"The salt reduces that inflammation. Thins the mucus. Opens your sinuses."</p>
              <p>"After two weeks breathing this air? Most of them don't need their antihistamines anymore."</p>
              <p>She smiled.</p>
              <p>"Maria's sister used to be one of the worst cases I'd ever seen. Miserable every spring. Sneezing. Watery eyes. Couldn't even work in her garden."</p>
              <p>"After two months here? The allergies disappeared completely."</p>
              <p>"Now she spends her entire spring outside. No medication. No symptoms."</p>
              <p>"Just breathing."</p>
              <p>I leaned back in my chair. Just... processing.</p>
              <p>"Why doesn't my doctor know about this?" Linda asked.</p>
              <p>Dr. Popescu smiled sadly.</p>
              <p>"They DO know. They just don't CARE."</p>
              <p>"You can't patent salt. Big Pharma can't make billions off a natural mineral."</p>
              <p>"So they don't fund research on it. They don't teach it in medical school. They certainly don't recommend it."</p>
              <p>"Instead, they push medications that cost $40-$150 per dose... that you'll need for the rest of your life... and that only treat symptoms. Not the root cause."</p>
              <p>She walked back to her desk. Picked up a thermos and a small audio device.</p>
              <p>"This is what I give all my patients."</p>
              <p>She handed Linda the thermos.</p>
              <p>"Thyme, rosemary, eucalyptus. It helps thin the mucus from the INSIDE... while the salt works from the OUTSIDE."</p>
              <p>Linda unscrewed the top. Took a sip.</p>
              <p>"It's good."</p>
              <p>"My grandmother's recipe," Dr. Popescu said with a smile.</p>
              <p>Then she held up the audio device.</p>
              <p>"And this is a guided breathing exercise. Five minutes. Every morning."</p>
              <p>"It helps expel the trapped mucus and restore your lung capacity."</p>
              <p>"We use it with all our patients here. I want you to take it home with you."</p>
              <p>She handed it to Linda.</p>
              <p>"For the next few days... just breathe the air. Drink the tea. Do the exercise."</p>
              <p>"That's it."</p>
              <p>Linda looked at me. Then back at Dr. Popescu.</p>
              <p>"Thank you," she whispered.</p>
              <p>Dr. Popescu squeezed her hand.</p>
              <p>"You're going to be okay. I promise."</p>
              <p>We walked out of that office in a daze.</p>
              <p>Linda held the thermos in one hand. The audio device in the other.</p>
              <p>And for the first time in years...</p>
              <p>She had hope.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Transformation */}
      <StorySection title="Day 3: The Morning Linda Woke Up Without Wheezing (For the First Time in 3 Years)">
        <p>The first two days were... underwhelming.</p>
        <p>We walked around the village. Met some locals. (None of whom spoke English.)</p>
        <p>Looked at the salt-covered hills. Breathed.</p>
        <p>And that was it.</p>
        
        <p>Linda said she felt "okay." Not better. Not worse. Just... okay.</p>
        <p>I started to think we'd made a mistake.</p>
        
        <div className="callout-box text-center">
          <p className="text-3xl font-black text-emphasis">Then... day 3.</p>
        </div>
        
        <p>I woke up around 7 AM. Linda was still asleep next to me.</p>
        <p>But something was different.</p>
        <p>I couldn't figure out what it was at first.</p>
        <p>Then I realized.</p>
        
        <HighlightBox variant="warning">
          <p className="text-2xl font-bold text-emphasis text-center">I didn't hear the wheeze.</p>
          <p className="mt-3">That rattling sound that had been part of our mornings for YEARS.</p>
          <p className="font-bold text-lg mt-2">It was... gone.</p>
        </HighlightBox>
        
        <p>I sat up. Watched her chest rise and fall. Smooth. Steady. Quiet.</p>
        <p>No struggle. No gasping. Just... breathing.</p>
        
        <p>She opened her eyes. "Morning," she said.</p>
        <p>Her voice was clear. Not strained. Not tight. Clear.</p>
        <p>"How do you feel?" I asked.</p>
        
        <p>She paused. Took a deep breath. All the way in. Held it. Then let it out slowly.</p>
        <p>Her eyes widened.</p>
        
        <div className="callout-box text-center bg-primary/5">
          <p className="text-3xl font-black text-primary mb-3">"I can breathe," she whispered.</p>
          <p className="text-lg">Not "I'm breathing okay." Not "I'm managing."</p>
          <p className="text-2xl font-bold text-emphasis mt-3">"I can BREATHE."</p>
        </div>
        
        <p>She sat up. Took another breath. Deeper this time.</p>
        <p>"Robert, I don't feel like I'm suffocating."</p>
        <p>She started crying. Happy tears.</p>
        <p className="font-bold text-xl text-primary">"I forgot what this felt like."</p>
        
        <p>I didn't say anything. Because I was crying too.</p>
      </StorySection>

      <ImageWithText 
        image={elderlyWoman}
        imageAlt="97-year-old Romanian woman chopping wood in village"
        title="The 97-Year-Old Woman Chopping Wood (And What She Told Us About Living in This Valley)"
        bgColor="story"
        imagePosition="top"
        imageSize="full"
      >
        <p>Later that morning, Dr. Popescu came by.</p>
        <p>"How are you feeling?" she asked Linda.</p>
        <p>"Better. A lot better."</p>
        <p>Dr. Popescu smiled. "Good. Come with me. I want to show you something."</p>
        
        <p>We walked through the village. Down a narrow dirt path. Past a few scattered houses.</p>
        <p>Then we came to a small garden.</p>
        <p>An older woman was kneeling in the dirt. Pulling weeds. Moving with steady, practiced motions.</p>
        
        <HighlightBox>
          <p>Dr. Popescu called out to her in Romanian.</p>
          <p>The woman looked up. Smiled. Stood up without using her hands.</p>
          <p className="font-bold text-lg text-primary mt-2">Up close, I could see how old she was. Deeply lined face. Hands weathered from decades of work. But her eyes were bright. Alert.</p>
        </HighlightBox>
        
        <p>"This is Ana," Dr. Popescu said. "She's 97."</p>
        <p>We shook hands. Her grip was surprisingly strong.</p>
        
        <p>Dr. Popescu translated as we talked.</p>
        <p>"Have you always lived here?" I asked.</p>
        <p>Ana nodded. Said something in Romanian.</p>
        <p>Dr. Popescu translated: "She was born in this house. Her mother was born here, too. Four generations of her family have lived in this valley."</p>
        
        <p>Linda asked, "Have you had any lung problems? Asthma? Breathing issues?"</p>
        
        <HighlightBox variant="testimony">
          <p>Ana looked confused. Said something to Dr. Popescu.</p>
          <p className="mt-3">Dr. Popescu smiled. "She says no one in her family has ever had lung problems. Not her. Not her mother. Not her grandmother."</p>
          <p className="font-bold text-xl text-primary mt-3">"Never?"</p>
        </HighlightBox>
        
        <p>Ana shrugged. Said something else.</p>
        <p>Dr. Popescu translated: "She says the salt protects our lungs. We don't get the breathing sickness. We don't get the spring allergies either. Even the children here... no asthma. No hay fever."</p>
        
        <p>We talked for a few more minutes. Then Ana gestured toward a pile of freshly chopped firewood.</p>
        <p>Dr. Popescu laughed. Translated: "She says she chopped that this morning. For winter."</p>
        <p>I stared at the pile. Then at Ana. "You chopped all that? Today?"</p>
        
        <HighlightBox>
          <p>Ana nodded. Said something with a grin.</p>
          <p className="mt-2">Dr. Popescu translated: "She says her knees used to hurt. But not anymore.</p>
          <p className="font-bold text-primary text-lg mt-2">She uses warm salt bags on them at night. Old tradition here."</p>
        </HighlightBox>
        
        <p>Linda's eyes widened. "Salt bags?"</p>
        <p>Ana nodded again. Went inside her house. Came back with a small fabric pouch. Handed it to Linda.</p>
        <p>It was warm. Filled with coarse salt.</p>
        
        <p>Dr. Popescu explained: "The villagers heat these pouches and apply them to sore joints. Knees. Shoulders. Hips. It reduces inflammation. My own mother used them for arthritis."</p>
        
        <div className="my-6">
          <img 
            src={saltTherapyPouch}
            alt="Traditional salt therapy pouch with purple ribbon"
            className="w-full max-w-md mx-auto h-auto rounded-lg shadow-medium hover-scale"
          />
        </div>
        
        <p>Ana said something else.</p>
        <p>Dr. Popescu smiled. "She says you can keep that one. She has many."</p>
        <p>Linda held the pouch. "Thank you," she whispered.</p>
        
        <div className="section-divider" />
        
        <p>As we walked away, Dr. Popescu said, "There are dozens of people like her in this village. All in their 90s. Many over 100."</p>
        <p>"They don't take medication. They don't go to doctors. They just... live."</p>
        <p className="font-bold text-lg text-primary">"And breathe this air every single day."</p>
        
        <p>Linda turned to me. "Robert... what if this is real?"</p>
        <p>I looked back at Ana. Still working in her garden. At 97.</p>
        <p className="font-bold text-xl">"I think it is," I said.</p>
      </ImageWithText>

      {/* Day 10 Transformation */}
      <StorySection title="By Day 10, Linda Did Something She Hasn't Done in 5 Years (And I Cried Like a Baby Watching Her)" bgColor="scientific">
        <div className="my-8">
          <img 
            src={elderlyCouple}
            alt="Elderly couple walking together through misty forest breathing fresh air"
            className="w-full max-w-3xl mx-auto h-auto rounded-lg shadow-medium hover-scale"
          />
        </div>
        
        <div className="vsl-content-box">
          <p>Over the next week, Linda transformed.</p>
          <p>Not overnight. But steadily.</p>
          
          <div className="benefit-grid my-8">
            <div className="benefit-card">
              <p className="font-bold text-lg text-primary mb-2">Day 5</p>
              <p>Walking around the village without stopping to catch her breath</p>
            </div>
            <div className="benefit-card">
              <p className="font-bold text-lg text-primary mb-2">Day 7</p>
              <p>Sleeping through the night. No coughing fits. No waking up at 3 AM struggling to breathe.</p>
            </div>
          </div>
          
          <div className="callout-box text-center">
            <p className="text-2xl font-bold text-emphasis mb-2">By day 10...</p>
            <p className="text-xl">She wanted to hike.</p>
          </div>
          
          <p>There's this trail near the village. About 3 miles. Moderate incline. Nothing crazy.</p>
          <p>But for Linda? It might as well have been Everest.</p>
          <p>Six months earlier, she couldn't walk to the mailbox without stopping halfway.</p>
          <p className="font-bold text-xl text-primary">And now... she wanted to hike.</p>
          
          <p>"Are you sure?" I asked.</p>
          <p>She nodded. "I want to try."</p>
          
          <div className="section-divider" />
          
          <p>We started walking. Slowly at first.</p>
          <p>I kept waiting for her to stop. To catch her breath. To say she needed a break.</p>
          <p>But she didn't.</p>
          <p className="font-bold text-lg">She just... kept going. One foot in front of the other. Breathing. ACTUALLY breathing.</p>
          
          <HighlightBox>
            <p>About halfway up, she stopped. Not because she was tired. But because she wanted to look at the view.</p>
            <p className="mt-3">The mountains stretched out in front of us. Green and gold and endless. The white salt hills sparkling in the distance.</p>
            <p className="font-bold text-primary text-lg mt-3">"I never thought I'd be able to do this again," she said quietly.</p>
          </HighlightBox>
          
          <p>I didn't say anything.</p>
          <p>Because I was crying.</p>
          
          <div className="section-divider" />
          
          <p>That afternoon, Dr. Popescu came by with a portable oxygen monitor. "Let's see how you're doing," she said.</p>
          <p>She clipped it onto Linda's finger. We waited.</p>
          
          <div className="callout-box">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <StatBox 
                number="97%" 
                label="Oxygen Saturation" 
                description="Up from 88%"
              />
              <StatBox 
                number="420" 
                label="Peak Flow" 
                description="Up from 310"
              />
            </div>
            <p className="text-center font-bold text-xl text-primary">You've gone from severe obstruction to borderline normal. In 10 days.</p>
          </div>
          
          <p>Linda started crying. "I'm getting better."</p>
          <p>Dr. Popescu squeezed her hand. "Yes. You are."</p>
          
          <div className="section-divider" />
          
          <HighlightBox>
            <p className="font-semibold text-lg mb-2">But while Linda was getting better... that hike absolutely DESTROYED my knees.</p>
            <p>Twenty-two years in the Air Force had left them pretty shot.</p>
            <p>And by the time we got back to the cottage, I could barely walk.</p>
          </HighlightBox>
          
          <p>Then I remembered what Dr. Popescu said about the villagers using warm salt for joint pain.</p>
          <p>I grabbed one of the small pouches Maria had given us. Heated it on the stove for a few minutes. Pressed it against my right knee.</p>
          
          <div className="callout-box text-center">
            <p className="text-lg mb-2">Within 20 minutes, the throbbing stopped.</p>
            <p className="text-2xl font-bold text-primary">The next morning? No pain.</p>
            <p className="text-lg mt-2">First time in years.</p>
          </div>
        </div>
      </StorySection>

      {/* Coming Home Problem */}
      <StorySection title="The Problem We Discovered When We Got Home (And Why Everything Almost Fell Apart)">
        <p>We flew home three weeks later.</p>
        <p>I was terrified. Terrified the effects would wear off. That we'd get back to Georgia... and it would all come crashing down.</p>
        
        <p>But for the first few weeks... Linda was fine. Better than fine.</p>
        <p className="font-bold text-xl text-primary">She was THRIVING.</p>
        
        <div className="benefit-grid my-8">
          <div className="benefit-card">
            <CheckCircle2 className="h-8 w-8 text-primary mb-2" />
            <p>Reduced inhaler use by 80%</p>
          </div>
          <div className="benefit-card">
            <CheckCircle2 className="h-8 w-8 text-primary mb-2" />
            <p>Stopped taking steroids altogether</p>
          </div>
          <div className="benefit-card">
            <CheckCircle2 className="h-8 w-8 text-primary mb-2" />
            <p>Started going for walks</p>
          </div>
          <div className="benefit-card">
            <CheckCircle2 className="h-8 w-8 text-primary mb-2" />
            <p>Played with the grandkids</p>
          </div>
        </div>
        
        <p>I thought we'd won. I really did.</p>
        
        <div className="section-divider" />
        
        <p>Then... about six weeks after we got home... I heard it.</p>
        
        <HighlightBox variant="warning">
          <p className="text-lg mb-2">That sound. Faint at first. But unmistakable.</p>
          <p className="text-3xl font-black text-emphasis text-center my-4">The wheeze.</p>
        </HighlightBox>
        
        <p>Linda coughed a few times. "Just dry air," she said.</p>
        <p>But I knew better.</p>
        
        <p>By that afternoon, she was reaching for her inhaler again. And that night... the wheezing was back.</p>
        
        <HighlightBox variant="warning">
          <p className="font-bold text-lg text-emphasis">Within two weeks, it was like Romania never happened.</p>
          <p className="mt-3">The shortness of breath. The coughing fits. The sleepless nights.</p>
          <p className="font-bold text-xl mt-2">All of it. Came rushing back.</p>
        </HighlightBox>
        
        <p>One night, I found her in the bathroom again. Sitting on the floor. Crying. Just like before.</p>
        
        <HighlightBox variant="testimony">
          <p className="text-xl font-bold text-primary">"I thought we fixed it," she sobbed.</p>
        </HighlightBox>
        
        <p>I held her. And I made another promise.</p>
        <div className="callout-box text-center">
          <p className="text-2xl font-bold text-primary">"We're going to figure this out."</p>
        </div>
      </StorySection>

      {/* The Solution */}
      <section className="py-12 px-4 bg-story/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
            The Desperate Email That Led to a Scientific Breakthrough (And Changed Everything)
          </h2>
          
          <div className="prose prose-lg max-w-none space-y-4 text-foreground/80">
            <p>I emailed Dr. Popescu that night.</p>
            <p>Told her what was happening. How Linda had been doing great... and now she was relapsing.</p>
            <p>I probably sounded desperate. (Because I was.)</p>
            <p>She responded within hours.</p>
            <p>"You're not the first person this has happened to. I've been working on a solution for this exact problem. Let me call you."</p>
            <p>When she called, I could hear the frustration in her voice.</p>
            <p>"I've watched HUNDREDS of patients transform in Mânzălești... only to relapse when they go home."</p>
            <p>"I've been trying to solve this problem for 15 years."</p>
            <p>She explained that she'd tried everything. Salt lamps. (Decorative, but useless.) Dry salt inhalers. (Particles too large.) Nebulizers with saline. (Wet salt, doesn't penetrate deep enough.)</p>
            <p>"Nothing worked the way the village air did."</p>
            <p>"Until about 3 years ago."</p>
            <p>That's when she told me about a material scientist at the University of Bucharest. They'd been working together on something that honestly sounded like science fiction.</p>
            <p className="font-bold text-xl">A breathable membrane system.</p>
            <p>"The idea was to create a pouch that holds therapeutic salt from Mânzălești... infused with the same 4 herbs that grow wild on those hillsides. Mint. Sage. Basil. Lavender."</p>
            <p>"The villagers have been using these herbs for centuries. To soothe breathing and calm inflammation."</p>
            <p>"But here's the key: The pouch has a special membrane that allows MICROSCOPIC salt particles to pass through when you breathe."</p>
            <p>"So you're inhaling the salt... WITHOUT it leaving the pouch."</p>
            <p>I was skeptical. "Does it actually work?"</p>
            <p>She laughed. "It took us 2 years of testing to get it right. But yes. It works."</p>
            <p>"We finally landed on a medical-grade polymer membrane with microscopic pores. Engineered at 1 to 5 microns."</p>
            <p>"The pores let dry salt particles through when you inhale... but keep the salt itself contained."</p>
            <p>"And here's the key: Your body heat activates the process."</p>
            <p>"At 98.6 degrees Fahrenheit, the salt begins releasing particles through the membrane. Creating the same microscopic aerosol you'd breathe in Mânzălești."</p>
            <p>"You can place it in your bedroom and just breathe. Or... if you have a severe case... you can place it directly on your chest while you sleep. The heat makes it even more effective."</p>
            <p>"For joint pain or allergies, you can heat the pouch slightly and apply it directly to the affected area. Just like the villagers do. Warm for inflammation. Cold for sinus congestion."</p>
            <p>"No electricity. No machines. No setup."</p>
            <p>I couldn't believe what I was hearing. "Can you send me one?"</p>
            <p>She paused. "There's a problem."</p>
            <p>"The salt comes from the Mânzălești region. The deposits are on protected land. Getting export approval is... complicated."</p>
            <p>"But I can send you one. As a personal favor."</p>
          </div>
        </div>
      </section>

      {/* Product Image Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
            What Happened When Linda Used the Pouch (That Her Pulmonologist Still Can't Explain)
          </h2>
          
          <img 
            src={saltPouch} 
            alt="Longevity Salt therapeutic pouch" 
            className="w-full max-w-2xl mx-auto h-auto rounded-lg shadow-medium mb-8"
          />

          <div className="prose prose-lg max-w-3xl mx-auto space-y-4 text-foreground/80">
            <p>Two weeks later, a small package arrived from Romania.</p>
            <p>Inside was a fabric pouch. About the size of a brick. It felt warm to the touch.</p>
            <p>And when I held it up to my nose... I could smell it. That distinct, mineral-rich scent from Mânzălești.</p>
            <p>I brought it to Linda. "Dr. Popescu sent this. She says it'll work like the village air."</p>
            <p>Linda looked at me. Hopeful. But scared to hope.</p>
            <p>"Where do I put it?"</p>
            <p>"On your nightstand. Or on your chest while you sleep."</p>
            <p>That night, Linda placed it on her nightstand. About a foot from her pillow.</p>
            <p>We didn't expect anything. Neither of us.</p>
            <p>But within THREE DAYS... her wheezing stopped.</p>
            <p>Within a WEEK... she was sleeping through the night again.</p>
            <p>Within TWO WEEKS... she was walking around the neighborhood without her inhaler.</p>
            <p>Within a MONTH... she was better than she'd been even in Romania.</p>
          </div>
        </div>
      </section>

      {/* Doctor Verification */}
      <section className="py-12 px-4 bg-scientific/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
            The Spirometry Test That Made Her Pulmonologist Question His Own Equipment
          </h2>
          
          <div className="vsl-content-box">
            <div className="prose prose-lg max-w-none space-y-4 text-foreground/80">
              <p>I needed proof. Real, clinical proof.</p>
              <p>So I scheduled a follow-up with Linda's pulmonologist. The same doctor who'd told us Linda's lungs were "permanently damaged."</p>
              <p>We walked into his office on a Tuesday morning. Linda was nervous.</p>
              <p>"What if the numbers aren't as good as we think?" she whispered.</p>
              <p>I squeezed her hand. "They will be."</p>
              <p>The nurse ran the spirometry test. Linda blew into the tube. Once. Twice. Three times.</p>
              <p>Then we waited.</p>
              <p>The doctor came in a few minutes later. Holding a printout.</p>
              <p>He stared at it for a long time. Then looked at Linda. Then back at the printout.</p>
              <p>"Did we recalibrate the machine?" he asked the nurse.</p>
              <p>She nodded. "Twice this morning."</p>
              <p>He pulled up the graphs on his computer. Two lines. Side by side.</p>
              
              <div className="callout-box">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <StatBox 
                    number="58%" 
                    label="SIX MONTHS AGO" 
                    description="Stage 3 obstruction - Jagged red line"
                  />
                  <StatBox 
                    number="81%" 
                    label="TODAY" 
                    description="Nearly normal - Smooth green line"
                  />
                </div>
              </div>

              <p>He stared at the screen. Didn't say anything for a solid ten seconds.</p>
              <p className="font-bold text-xl text-primary">Then: "I've never seen improvement like this."</p>
              <p>He turned to Linda. "What have you been doing differently?"</p>
              <p>Linda glanced at me. I didn't say anything.</p>
              <p>She looked back at the doctor. "I've been breathing salt air. From Romania."</p>
              <p>He raised an eyebrow. "I'm sorry?"</p>
              <p>"There's a village in Romania. Mânzălești. The air is saturated with salt particles. We went there. And when we came home, we got a system that recreates that air."</p>
              <p>He nodded slowly. Like he was trying to process something that didn't fit into his worldview.</p>
              <p>"Well... whatever you're doing... keep doing it."</p>
              <p>He adjusted her chart. Reduced her steroid dose. Scheduled her next appointment for six months out instead of three.</p>
              <p>And sent us on our way.</p>
              <p>He didn't ask WHAT we were using. He didn't ask HOW it worked. He just... moved on.</p>
              <p>But the results were right there. On his screen. Undeniable.</p>
              <p className="font-bold text-emphasis text-xl">Linda's lungs were HEALING.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bringing It to America */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
            How We're Bringing Mânzălești to America (And Why It Took 6 MONTHS of Fighting Through Red Tape)
          </h2>
          
          <div className="prose prose-lg max-w-none space-y-4 text-foreground/80">
            <p>Over the next 6 months, Dr. Popescu and I worked together to make this happen.</p>
            <p>And it was a NIGHTMARE.</p>
            <p>The salt comes from the Mânzălești region. The deposits are on protected UNESCO Geopark land.</p>
            <p>Getting export approval meant navigating Romanian bureaucracy. Filing stacks of paperwork. Proving the salt was being used for wellness purposes. Not medical claims.</p>
            <p>Dr. Popescu leveraged her university connections. Worked with the local government.</p>
            <p>And after MONTHS of negotiating... they approved limited export permits. For wellness purposes only.</p>
            <p>Then came U.S. customs.</p>
            <p>The shipment almost got seized because the inspector flagged the mineral composition.</p>
            <p>"This isn't standard sodium chloride," he said. "What IS this?"</p>
            <p>We had to provide geological reports. Scientific papers proving these were naturally occurring volcanic minerals. Not synthetic additives. Not pharmaceutical compounds.</p>
            <p>Just ancient salt. Formed 20 million years ago under volcanic pressure.</p>
            <p>It took months. But we fought through it.</p>
            <p>We secured the salt from Mânzălești. Sourced the four herbs from the Carpathian hillsides. (Mint. Sage. Basil. Lavender. The same herbs that grow wild on those salt-covered hills.)</p>
            <p>Refined the breathable membrane pouch system. Tested it on dozens of volunteers. All of whom reported dramatic improvements within 4 to 6 weeks.</p>
            <p>And finally... after months of waiting... the first shipment arrived.</p>
            <p>I opened the first box myself. Held the pouch in my hands.</p>
            <p>And immediately called Linda. "We did it. We actually did it."</p>
            <p className="font-bold text-2xl text-primary">We call it Longevity Salt.</p>
            <p>Because that's what it gave Linda. Not just more years. But the ability to LIVE those years fully.</p>
            <p>Without fear. Without gasping. Without being a prisoner to her lungs.</p>
            <p>And now... for the first time... it's available in the United States.</p>
            <p>In limited quantities.</p>
            <p>Because this salt only exists in ONE place on Earth. The Mânzălești region.</p>
            <p>And the deposits are on protected land.</p>
            <p>We can only secure small batches through Dr. Popescu's university connections.</p>
            <p>When they're gone... we have to wait.</p>
            <p>But it's here. And it works.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-story/30" id="testimonials">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Here's What REAL People Are Saying
          </h2>
          
          <div className="space-y-8">
            <Card className="p-6 md:p-8 shadow-medium">
              <div className="mb-4">
                <h3 className="font-bold text-xl text-foreground">Margaret T., 67 | Tulsa, OK</h3>
                <p className="text-sm text-muted-foreground">Stage 3 COPD</p>
              </div>
              <p className="text-foreground/80 mb-6">
                "I've had COPD for 12 years. Stage 3. Five medications. Oxygen saturation at 84%. 
                My daughter bought me one of these pouches. Three weeks later, I was sleeping through the night. 
                My pulmonologist ran a spirometry test and said my lung function improved by 19%. 
                Oxygen saturation jumped to 93%. I'm down to TWO medications now."
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>FEV1: +19% improvement</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>O2: 84% → 93%</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Meds: 5 → 2</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 md:p-8 shadow-medium">
              <div className="mb-4">
                <h3 className="font-bold text-xl text-foreground">Patricia H., 61 | Charleston, SC</h3>
                <p className="text-sm text-muted-foreground">Oxygen-Dependent COPD</p>
              </div>
              <p className="text-foreground/80 mb-6">
                "For the last 5 years, I couldn't go ANYWHERE without my portable oxygen tank. 
                My daughter's wedding was coming up and I was terrified. A friend told me about Longevity Salt. 
                Six weeks later... I walked her down that aisle breathing on my own."
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>On oxygen for 5 years</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Off oxygen after 6 weeks</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 md:p-8 shadow-medium">
              <div className="mb-4">
                <h3 className="font-bold text-xl text-foreground">James R., 72 | Asheville, NC</h3>
                <p className="text-sm text-muted-foreground">Stage 3 COPD + Fibrosis</p>
              </div>
              <p className="text-foreground/80 mb-6">
                "Stage 3 COPD. Pulmonary fibrosis. The doctors told me my lungs were done. 
                That I'd be on oxygen for the rest of my life. Two months in, my oxygen saturation went from 88% to 94%. 
                Now I'm off oxygen completely. And I'm hiking again."
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>O2: 88% → 94%</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Off oxygen after 8 weeks</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 md:p-8 shadow-medium">
              <div className="mb-4">
                <h3 className="font-bold text-xl text-foreground">David S., 55 | Atlanta, GA</h3>
                <p className="text-sm text-muted-foreground">Severe Asthma</p>
              </div>
              <p className="text-foreground/80 mb-6">
                "I was using my rescue inhaler 6 to 8 times a day. EVERY day. For three years. 
                Eight weeks after getting the pouch, I'm down to using my inhaler maybe once or twice a WEEK. 
                My peak flow went from 280 to 450."
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Inhaler: 6-8x/day → 1-2x/week</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Peak flow: 280 → 450</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 md:p-8 shadow-medium">
              <div className="mb-4">
                <h3 className="font-bold text-xl text-foreground">Carol D., 59 | Knoxville, TN</h3>
                <p className="text-sm text-muted-foreground">Chronic Bronchitis</p>
              </div>
              <p className="text-foreground/80 mb-6">
                "I went to a salt cave therapy center near my house. For three weeks, I felt AMAZING. Then I stopped going. 
                Within a month, I was back where I started. Waking up at 4 AM coughing so hard I'd throw up. 
                I thought I'd imagined the whole thing. Then I found Longevity Salt. 
                Now I don't have to leave my house. The pouch sits on my nightstand. 
                And I'm FINALLY sleeping through the night again."
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Chronic bronchitis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Relapsed after treatment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Sleeping through night</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 px-4" id="product">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-center text-foreground">
            Here's Exactly What You're Getting Today
          </h2>
          
          <p className="text-lg text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
            When you order Longevity Salt today... here's what shows up at your door:
          </p>

          <Card className="p-8 md:p-12 shadow-medium mb-8">
            <h3 className="font-display text-2xl font-bold mb-6 text-primary">→ Your Longevity Salt Pouch</h3>
            <div className="prose prose-lg max-w-none text-foreground/80">
              <p>Hand-filled with authentic salt from the Mânzălești region in Romania. The SAME salt that covers the hills where centenarians live past 100.</p>
              <p>Infused with the exact same 4 ancient herbs that grow wild on those hillsides: <strong>Mint. Sage. Basil. Lavender.</strong></p>
              <p>Encased in a medical-grade breathable membrane that releases microscopic salt particles when activated by your body heat.</p>
              <p className="font-semibold text-foreground">No electricity. No machines. No setup.</p>
              <p>Just place it in your bedroom... or on your chest while you sleep... and breathe.</p>
              <p>Each pouch is calibrated to cover approximately 215 square feet.</p>
              <p>That's about the size of a standard master bedroom.</p>
              <p>For larger spaces, like a living room around 430 square feet, you'll want two pouches.</p>
              <p>Dr. Popescu measured this herself. Based on actual air quality readings from the village.</p>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6 shadow-medium bg-primary/5">
              <h4 className="font-bold text-xl mb-3 text-foreground">→ Traditional Longevity Tea Recipe</h4>
              <p className="text-foreground/80 mb-4">
                The same tea Dr. Popescu brought to our rental that first night in Romania. A blend of thyme, rosemary, and eucalyptus that helps thin mucus from the INSIDE while the salt works from the OUTSIDE.
              </p>
              <p className="text-sm text-muted-foreground line-through">Retail Value: $27</p>
              <p className="font-bold text-primary">✓ Yours FREE when you order today</p>
            </Card>

            <Card className="p-6 shadow-medium bg-primary/5">
              <h4 className="font-bold text-xl mb-3 text-foreground">→ 5-Minute Respiratory Reset Audio</h4>
              <p className="text-foreground/80 mb-4">
                A guided breathing exercise designed by Dr. Popescu. Used by over 10,000 respiratory patients across Europe. Helps expel trapped mucus and restore lung capacity.
              </p>
              <p className="text-sm text-muted-foreground line-through">Retail Value: $38</p>
              <p className="font-bold text-primary">✓ Yours FREE when you order today</p>
            </Card>
          </div>

          <div className="text-center p-8 bg-accent/10 rounded-lg">
            <p className="text-2xl font-bold text-foreground mb-2">Total Bonus Value: <span className="text-primary">$65</span></p>
            <p className="text-lg text-muted-foreground">All yours. Free. When you order today.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-scientific/30" id="order-section">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-center text-foreground">
            Here's How Much This Costs (And Why Most Companies Would Charge 3X More)
          </h2>
          
          <div className="vsl-content-box">
            <div className="prose prose-lg max-w-3xl mx-auto mb-12 text-center text-foreground/80">
              <p>If I were running this like a typical health company... I'd probably charge $300 per pouch.</p>
              <p>And people would still buy it.</p>
              <p>Because what's the alternative?</p>
              <p>Flying to Romania costs $1,500 round trip. Staying there for a month? Another $3,000 to $5,000.</p>
              <p>So you're looking at close to $10,000... just to TRY what Linda and I experienced.</p>
              <p>Compared to THAT... $300 per pouch would be a steal.</p>
              <p>But I'm not pricing this for maximum profit.</p>
              <p>I'm pricing it so ANYONE who needs it can afford it.</p>
              <p className="font-bold text-xl text-primary">Which is why your first Longevity Salt pouch is just $89.</p>
              <p>That's over 50% off the regular retail price of $180.</p>
              <p>Less than $3 per day.</p>
              <p>About what you'd spend on a latte.</p>
              <p>Except this might actually save your life.</p>
              <p>And if you want full coverage... bedroom, living room, office... you can save even MORE.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-8 shadow-medium border-2 border-border">
                <div className="text-center mb-6">
                  <h3 className="font-display text-2xl font-bold mb-2 text-foreground">ONE LONGEVITY SALT POUCH</h3>
                  <div className="mb-4">
                    <p className="text-lg font-bold text-accent mb-2">50.6% OFF</p>
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-2xl text-muted-foreground line-through">$180</span>
                      <span className="text-4xl font-bold text-foreground">$89</span>
                    </div>
                  </div>
                </div>
                <Button onClick={scrollToCTA} className="w-full" size="lg">
                  Get Started
                </Button>
              </Card>

              <Card className="p-8 shadow-medium border-2 border-border">
                <div className="text-center mb-6">
                  <h3 className="font-display text-2xl font-bold mb-2 text-foreground">3 LONGEVITY SALT POUCHES</h3>
                  <div className="mb-4">
                    <p className="text-lg font-bold text-accent mb-2">56.6% OFF</p>
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-2xl text-muted-foreground line-through">$180</span>
                      <span className="text-4xl font-bold text-foreground">$78</span>
                      <span className="text-xl text-muted-foreground">per pouch</span>
                    </div>
                    <p className="text-xl font-bold text-primary mt-3">TOTAL: $234</p>
                  </div>
                </div>
                <Button onClick={scrollToCTA} className="w-full" size="lg">
                  Order Now
                </Button>
              </Card>

              <Card className="p-8 shadow-medium border-4 border-primary relative transform md:scale-105">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold flex gap-2">
                  <span>BEST VALUE</span>
                  <span>•</span>
                  <span>BEST SELLING</span>
                </div>
                <div className="text-center mb-6">
                  <h3 className="font-display text-2xl font-bold mb-2 text-foreground">5 LONGEVITY SALT POUCHES</h3>
                  <div className="mb-4">
                    <p className="text-lg font-bold text-accent mb-2">65.6% OFF</p>
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-2xl text-muted-foreground line-through">$180</span>
                      <span className="text-4xl font-bold text-primary">$62</span>
                      <span className="text-xl text-muted-foreground">per pouch</span>
                    </div>
                    <p className="text-xl font-bold text-primary mt-3">TOTAL: $310</p>
                  </div>
                </div>
                <Button onClick={scrollToCTA} className="w-full" size="lg">
                  Best Value
                </Button>
              </Card>
            </div>

            <div className="text-center space-y-6">
              <Button onClick={scrollToCTA} size="lg" className="text-xl px-16 py-8 h-auto animate-pulse">
                YES, I WANT TO BREATHE FREELY AGAIN →
              </Button>
              <p className="text-sm text-muted-foreground">60-Day Money-Back Guarantee • Secure Checkout</p>
              <p className="text-sm text-foreground/80">That's less than $2 per day. To breathe easier. Sleep better. And get your life back.</p>
              <p className="text-sm text-foreground/80">And just so you know... you're taking ZERO risk here.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-center text-foreground">
            You're Protected By Our 60-Day "Breathe Freely or It's Free" Guarantee
          </h2>
          
          <Card className="p-8 md:p-12 shadow-medium bg-primary/5 border-2 border-primary">
            <div className="prose prose-lg max-w-none text-foreground/80">
              <p className="text-xl font-semibold text-foreground mb-6">Here's the deal.</p>
              <p>Use Longevity Salt for 60 days.</p>
              <p>If you don't feel a SIGNIFICANT improvement in your breathing... if you're not sleeping better... if you're not using your inhaler less...</p>
              <p className="font-bold text-foreground text-xl">Just contact us.</p>
              <p className="font-bold text-foreground text-xl">We'll refund every penny.</p>
              <p>You don't even need to return the pouches. Keep them. Keep the bonuses. Keep everything.</p>
              <p>If you don't feel a difference... just send one email and we'll process your refund.</p>
              <p className="font-bold text-primary text-2xl">No hoops. No hassle. No questions.</p>
              <p>Because I'm not interested in keeping your money if this doesn't work for you.</p>
              <p>I only want it if Longevity Salt changes your life the way it changed Linda's.</p>
              <p className="font-bold text-xl text-foreground">Fair?</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Linda's Message */}
      <section className="py-16 px-4 bg-story/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
            What Linda Wanted Me to Tell You
          </h2>
          
          <Card className="p-8 md:p-12 shadow-medium border-l-4 border-primary">
            <p className="text-muted-foreground mb-6">Linda doesn't like being the "face" of this. She's a private person.</p>
            <p className="text-muted-foreground mb-6">But when I told her I was writing this... she asked me to include something.</p>
            <p className="text-muted-foreground mb-8">So here it is. In her words:</p>
            
            <div className="prose prose-lg max-w-none text-foreground/80 italic border-l-2 border-primary pl-6">
              <p>"If you're reading this... you probably feel the way I used to feel.</p>
              <p>Like your body is betraying you. Like you're not the person you used to be.</p>
              <p>I know what it's like to cry in the bathroom because you don't want to be a burden.</p>
              <p>I know what it's like to say 'no' to things you desperately want to say 'yes' to.</p>
              <p>But it doesn't have to be that way.</p>
              <p>I'm not special. If this worked for me... it can work for you.</p>
              <p>And if you're on the fence about trying it... just ask yourself this:</p>
              <p className="font-bold text-3xl text-primary not-italic my-6">What would your life look like if you could breathe freely again?</p>
              <p>That's worth trying for.</p>
              <p>Trust me."</p>
              <p className="font-semibold not-italic text-foreground text-xl mt-6">– Linda</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-center text-foreground">
            Here's What Happens Next
          </h2>
          
          <p className="text-lg text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
            You're going to make a choice right now. And that choice is going to determine what the next 60 days... and the rest of your life... looks like.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 shadow-medium bg-muted/30 border-2 border-border">
              <h3 className="font-display text-2xl font-bold mb-4 text-foreground">CHOICE #1:</h3>
              <p className="text-foreground/80 leading-relaxed">
                You close this page. Go back to "managing." Keep using your inhaler 6 to 8 times a day. 
                Keep waking up at 3 AM gasping for air. Keep saying "no" to the things you want to say "yes" to. 
                Keep watching your life get smaller. And smaller.
              </p>
            </Card>

            <Card className="p-8 shadow-medium bg-primary/10 border-4 border-primary">
              <h3 className="font-display text-2xl font-bold mb-4 text-primary">CHOICE #2:</h3>
              <p className="text-foreground/80 leading-relaxed">
                You click the button below. Secure your pouches NOW. Before this batch sells out. 
                Try Longevity Salt for 60 days. Risk-free. And give yourself a chance at breathing freely again. 
                At sleeping through the night. At playing with your grandkids without needing a break. 
                At saying YES to life again.
              </p>
            </Card>
          </div>

          <div className="prose prose-lg max-w-none text-center mb-12 text-foreground/80 space-y-4">
            <p className="font-bold text-2xl text-emphasis">Right now, as you read this... your lungs are scarring.</p>
            <p className="text-xl">Tiny airways hardening. Cilia dying. Mucus cementing.</p>
            <p className="text-xl">Every hour you delay is permanent damage you can't reverse.</p>
            <p className="text-xl">Tomorrow morning, you'll wake up with slightly worse lungs than you have right now.</p>
            <p className="font-bold text-xl text-foreground">Unless you do something about it.</p>
            <p className="font-bold text-2xl text-primary">Today.</p>
            <p className="text-xl">How many more of those days are you willing to sacrifice?</p>
            <p className="text-lg">I know which choice Linda made.</p>
            <p className="text-lg">And I know which one you SHOULD make.</p>
            <p className="text-lg">But I can't make that decision for you.</p>
            <p className="font-bold text-xl text-foreground">So stop reading. Stop hesitating.</p>
            <p className="font-bold text-xl text-foreground">Click the button below. Secure your pouches NOW.</p>
            <p className="text-lg">Before this batch sells out. Before you spend another night gasping for air. Before you miss another moment with the people you love.</p>
            <p className="font-bold text-xl text-emphasis">You've already wasted enough time struggling to breathe.</p>
            <p className="font-bold text-xl text-emphasis">Don't waste another second.</p>
            <p className="text-lg italic">I'm rooting for you.</p>
            <p className="font-semibold text-lg">– Robert</p>
          </div>

          <div className="text-center space-y-6">
            <Button onClick={scrollToCTA} size="lg" className="cta-button text-2xl px-20 py-10">
              CLAIM YOUR LONGEVITY SALT POUCHES NOW →
            </Button>
            <p className="text-sm text-muted-foreground">60-Day Money-Back Guarantee • Secure Checkout • Limited Availability</p>
          </div>
        </div>
      </section>

      {/* PS Section */}
      <section className="py-12 px-4 bg-muted/20">
        <div className="container mx-auto max-w-3xl space-y-8 text-foreground/80">
          <div>
            <p className="font-bold text-lg mb-2">P.S.</p>
            <p>
              Remember... you're protected by our 60-day money-back guarantee. 
              If Longevity Salt doesn't help you breathe easier... you get a full refund. No questions asked. 
              Keep the pouches. Keep everything. You have nothing to lose... except the mucus drowning your lungs.
            </p>
          </div>
          <div>
            <p className="font-bold text-lg mb-2">P.P.S.</p>
            <p>
              This batch won't last. The last shipment sold out in 11 days. 
              If you close this page now, you might not see this offer again. The next time you check... 
              we might be SOLD OUT. And you'll be on a waitlist for 2 to 3 MONTHS. 
              Don't let that happen. Secure your spot NOW while we still have pouches available.
            </p>
          </div>
          <div>
            <p className="font-bold text-lg mb-2">P.P.P.S.</p>
            <p>
              Don't just take my word for it. Search "Mânzălești longevity village" on YouTube right now. 
              You'll find dozens of TV reports. BBC. National Geographic. Romanian news channels. 
              All documenting this village where people live past 100. This isn't made up. This is REAL. 
              And now you can bring it home.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-muted/10">
        <div className="container mx-auto text-center text-sm text-muted-foreground space-y-2">
          <p>© 2025 Longevity Salt. All rights reserved.</p>
          <p>Results may vary. Statements not evaluated by the FDA. Not intended to diagnose, treat, cure, or prevent any disease.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;