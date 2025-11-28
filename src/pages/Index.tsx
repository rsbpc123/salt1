import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Shield, Lock } from "lucide-react";

const Index = () => {
  const scrollToCTA = () => {
    document.getElementById("order-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Trust Header */}
      <header className="border-b border-border bg-trust/30 py-3">
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

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-foreground">
            I Watched My Wife Drown in Our Bedroom at Midnight…
          </h1>
          <p className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-8 leading-tight">
            Then a Collapsed Salt Mine in Romania Led Me to a Village Where Nobody Gets Lung Disease…And Saved Her Life
          </p>
        </div>
      </section>

      {/* Story Begins */}
      <section className="py-12 px-4 bg-story/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 text-foreground">
            I WATCHED MY WIFE DROWN
          </h2>
          <h3 className="font-display text-xl md:text-2xl font-semibold mb-6 text-foreground/90">
            Sitting Right Next to Me in Our Bed
          </h3>
          
          <div className="prose prose-lg max-w-none space-y-4 text-foreground/80">
            <p>It was just past midnight when I heard it.</p>
            <p>That sound.</p>
            <p>Linda wasn't breathing right.</p>
            <p>Her chest heaving. Lips turning blue. Sitting straight up. Clutching her throat.</p>
            <p className="font-semibold text-foreground">Drowning.</p>
            <p>In our bedroom. In Warner Robins, Georgia. 200 miles from the nearest ocean.</p>
            <p>I grabbed her inhaler. Shook it. Jammed it into her mouth.</p>
            <p>"Breathe, baby."</p>
            <p>Two puffs. Nothing.</p>
            <p>Her wheezing got WORSE.</p>
            <p>I dialed 911.</p>
            <p>The paramedics arrived in 8 minutes. Felt like 8 hours.</p>
            <p>They strapped an oxygen mask to her face. Loaded her onto the stretcher.</p>
            <p>One of them looked at me and shook his head. Not mean. Just... tired.</p>
            <p>Like he'd seen us before.</p>
            <p>(He had. Three times that month.)</p>
            <p>Two hours later, a doctor came out.</p>
            <p>"She's stable. You can take her home in a few hours."</p>
            <p>"What happens next time?" I asked.</p>
            <p>He paused. "Keep doing what you're doing. Come back if it gets worse."</p>
            <p>No solution. No plan.</p>
            <p>Just... keep doing what we're doing.</p>
            <p className="font-semibold text-emphasis">Except what we were doing WASN'T WORKING.</p>
          </div>
        </div>
      </section>

      {/* Problem Agitation */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Her Lungs Were Turning to Cement (And Nobody Told Us Until It Was Almost Too Late)
          </h2>
          
          <div className="prose prose-lg max-w-none space-y-4 text-foreground/80">
            <p>Two weeks later, Linda saw her pulmonologist.</p>
            <p>He pulled up a CT scan. White patches scattered throughout her lungs.</p>
            <p>"This is fibrosis," he said. "Scar tissue. Your airways are hardening."</p>
            <p>"Can you fix it?"</p>
            <p>He shook his head. "Once the scarring sets in... no. We can only try to slow it down."</p>
            <p>My stomach dropped.</p>
            <p>"How long do we have?"</p>
            <p>He looked at Linda. Then back at me.</p>
            <p>"If we can't get the inflammation under control... maybe 18 to 24 months before the damage severely impacts her quality of life."</p>
            <p>Linda started crying.</p>
            <p>We walked out in silence.</p>
            <p>And for the first time in our 40-year marriage...</p>
            <p>I didn't know what to say to her.</p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-scientific/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
            We Did EVERYTHING the Doctors Told Us (And She Got WORSE)
          </h2>
          
          <div className="prose prose-lg max-w-none space-y-4 text-foreground/80">
            <p>Linda wasn't reckless. She did EVERYTHING they told her.</p>
            <p>Six different inhalers over three years. Five medications just to breathe.</p>
            <p>We were spending $1,200 a month on prescriptions. Even WITH insurance.</p>
            <p>And she was still drowning.</p>
            <p>We did the Prednisone rounds. That awful steroid that made her gain 15 pounds and gave her insomnia.</p>
            <p>Bought a $400 HEPA air purifier. Ripped out the carpets. Tried breathing exercises.</p>
            <p>Hired a mold inspector. $800 later... no mold.</p>
            <p>None of it made a difference.</p>
            <p>Every doctor said the same thing: "This is just something you'll have to manage."</p>
            <p className="font-bold text-2xl text-foreground">MANAGE.</p>
            <p>Like we weren't already managing her not being able to walk upstairs.</p>
            <p>Managing the oxygen concentrator humming all night.</p>
            <p>Managing the stack of medical bills we couldn't pay.</p>
            <p>Managing our life shrinking smaller and smaller.</p>
          </div>
        </div>
      </section>

      {/* Discovery Journey */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
            The Late-Night Google Search That Changed Everything
          </h2>
          
          <div className="prose prose-lg max-w-none space-y-4 text-foreground/80">
            <p>It was 1 AM.</p>
            <p>Linda was finally asleep upstairs.</p>
            <p>I was at the kitchen table. Googling.</p>
            <p>"Natural asthma remedies." "COPD cure." "How to reverse lung fibrosis."</p>
            <p>Most of it was garbage.</p>
            <p>Essential oils. Breathing apps. Supplements that did nothing.</p>
            <p>I was about to close the laptop.</p>
            <p>Then I saw it. A research paper from some Romanian medical institute.</p>
            <p className="italic">"Long-term efficacy of halotherapy in chronic obstructive pulmonary disease."</p>
            <p>Halotherapy. Breathing microscopic salt particles.</p>
            <p>Sounded weird. But the study had REAL results.</p>
            <p>People with COPD seeing improvements in lung function. Reduced coughing. Better oxygen saturation.</p>
            <p>I kept reading.</p>
            <p>Turns out, halotherapy started in actual salt MINES. Deep underground in Eastern Europe.</p>
            <p>There's this place in Romania. The Praid Salt Mine.</p>
            <p>For over a CENTURY, people with severe lung problems traveled there. From all over Europe. To go down into the mine and just... breathe.</p>
            <p>People with Stage 3 COPD seeing their oxygen levels jump from 88% to 96%.</p>
            <p>People on oxygen tanks for YEARS... breathing freely.</p>
            <p>Over 50% reduced their medications. Some stopped entirely.</p>
            <p>I'm reading about people who sound EXACTLY like Linda.</p>
            <p>Getting better. Not managing.</p>
            <p className="font-bold text-xl text-primary">BETTER.</p>
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="py-12 px-4 bg-story/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
            We Flew 5,000 Miles to a Salt Mine...Only to Find THIS
          </h2>
          
          <div className="prose prose-lg max-w-none space-y-4 text-foreground/80">
            <p>Three weeks later, we were on a plane to Bucharest. Then a rental car through the Carpathian Mountains.</p>
            <p>Heading to Praid. Home to the famous Praid Salt Mine.</p>
            <p>I was nervous. But hopeful.</p>
            <p>Linda squeezed my hand as we drove. "What if this actually works?"</p>
            <p>"Then we're about to get your life back," I said.</p>
            <p>We pulled into the parking lot.</p>
            <p>That's when I saw the sign.</p>
            <p className="font-bold text-xl">ÎNCHIS</p>
            <p>Closed.</p>
            <p>I walked closer. Another sign. In Romanian and English.</p>
            <p className="italic">"Due to severe flooding and structural collapse, the Praid Salt Mine has been permanently closed as of May 2025."</p>
            <p>My heart sank.</p>
            <p>We'd flown 5,000 miles. Spent money we didn't have.</p>
            <p>And now... nothing.</p>
          </div>
        </div>
      </section>

      {/* The Village Discovery */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
            The Coffee Shop Conversation That Saved Linda's Life
          </h2>
          
          <div className="prose prose-lg max-w-none space-y-4 text-foreground/80">
            <p>We drove into town. Found a small cafe on the main street. Old wooden tables. The smell of strong coffee and fresh bread.</p>
            <p>We ordered and sat down.</p>
            <p>Linda looked tired. Not physically. Just... defeated.</p>
            <p>"What do we do now?" she whispered.</p>
            <p>I had no answer.</p>
            <p>Just that familiar crushing weight in my chest.</p>
            <p>That's when an older woman at the next table leaned over.</p>
            <p>"English?" she asked. Her accent thick. But clear.</p>
            <p>"American," I said.</p>
            <p>She smiled. "I'm Ioana."</p>
            <p>She gestured toward the window. "You came for the mine?"</p>
            <p>I nodded. "Yeah. But it collapsed."</p>
            <p>She waved her hand dismissively. "The mine. Everyone comes for the mine."</p>
            <p>She shook her head. "But the mine is not special. It's just... underground."</p>
            <p>I frowned. "What do you mean?"</p>
            <p>She leaned in closer. "You want salt for breathing, yes?"</p>
            <p>"Yeah. My wife has lung problems."</p>
            <p>Ioana looked at Linda. Studied her for a moment. Then nodded. "The mine was good. But there is a better place."</p>
            <p>Linda sat up. "Where?"</p>
            <p className="font-bold text-xl text-primary">Ioana smiled. "Mânzălești. Small village. About four hours from here."</p>
          </div>
        </div>
      </section>

      {/* The Village Explanation */}
      <section className="py-12 px-4 bg-scientific/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
            What We Found in the Village Where People Live Past 100
          </h2>
          
          <div className="prose prose-lg max-w-none space-y-4 text-foreground/80">
            <p>She pulled out her phone. Scrolled for a minute. Then turned it toward us.</p>
            <p>It was a YouTube video. The thumbnail showed an old man. Holding an axe. Standing in front of a pile of freshly cut wood.</p>
            <p>The title was in Romanian. But I could make out the number: <span className="font-bold">101 de ani.</span></p>
            <p>101 years old.</p>
            <p>She hit play. The video had 96,000 views.</p>
            <p>The old man was cutting wood. With a CHAINSAW. Moving like he was 50. Not 101.</p>
            <p>"This is Gică Baciu," Ioana said. "He lives in Mânzălești. Everyone there lives long like this."</p>
            <p>Linda's eyes widened. "Everyone?"</p>
            <p>Ioana nodded. "Many people. Very old. But still strong."</p>
            <p>She swiped to another video. An old woman. Working in her garden. Moving effortlessly.</p>
            <p>Then another. A news report. BBC. Showing the village. White hills rising from the valley.</p>
            <p>"That is salt," Ioana said. "On the SURFACE. Not underground like the mine."</p>
            <p>I stared at the screen. "How is that possible?"</p>
            <p>She shrugged. "The ground is full of salt. So much salt, it comes to the top. The river carries it. The wind blows it."</p>
            <p>"The whole village breathes it. Every day. Their whole lives."</p>
            <p className="font-bold text-xl text-primary">"That is why they live so long."</p>
          </div>
        </div>
      </section>

      {/* Scientific Explanation */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Dr. Popescu Showed Us EXACTLY How This Works (And Why Your Doctor Will Never Tell You)
          </h2>
          
          <div className="prose prose-lg max-w-none space-y-4 text-foreground/80">
            <p>The next morning, we met with Dr. Elena Popescu, a researcher who had been studying the village for over 15 years.</p>
            <p>She pulled out a diagram. A cross-section of human lungs.</p>
            <p>But some of the airways were... clogged. Thick white plugs blocking the passages.</p>
            <p>"This is what Linda's lungs look like right now," she said.</p>
            <p>"Your lungs aren't just inflamed," Dr. Popescu continued. "They're DROWNING."</p>
            <p>"The inflammation causes your body to produce excess mucus. Thick, sticky mucus that traps bacteria and irritants."</p>
            <p>"And that mucus forms a CEMENT-like plug in your airways."</p>
            <p>"Your medications try to open the airways. But they don't address the MUCUS."</p>
            <p>"So you're essentially trying to breathe through a straw that's clogged with glue."</p>
            
            <div className="my-8 p-6 bg-primary/10 rounded-lg border-l-4 border-primary">
              <h3 className="font-display text-2xl font-bold mb-4 text-foreground">When you breathe in microscopic salt particles... four things happen:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>FIRST...</strong> the salt hydrates the mucus. It draws water into the mucus proteins, making them thinner and easier to expel.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>SECOND...</strong> it restores ciliary function. Your lungs have tiny hair-like structures called cilia that sweep mucus up and out. The salt reactivates those cilia.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>THIRD...</strong> it reduces inflammation at a cellular level using minerals that don't exist in regular sodium chloride.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>FOURTH...</strong> the salt creates an osmotic effect that opens your airways by pulling fluid OUT of the swollen tissue.</span>
                </li>
              </ul>
            </div>

            <p>"This is why the air here works when medications don't."</p>
            <p className="font-bold text-xl text-primary">"The medications only treat symptoms. The salt treats the ROOT CAUSE."</p>
          </div>
        </div>
      </section>

      {/* The Transformation */}
      <section className="py-12 px-4 bg-story/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Day 3: The Morning Linda Woke Up Without Wheezing (For the First Time in 3 Years)
          </h2>
          
          <div className="prose prose-lg max-w-none space-y-4 text-foreground/80">
            <p>The first two days were... underwhelming.</p>
            <p>We walked around the village. Met some locals. Looked at the salt-covered hills. Breathed.</p>
            <p>And that was it.</p>
            <p>Linda said she felt "okay." Not better. Not worse. Just... okay.</p>
            <p>I started to think we'd made a mistake.</p>
            <p className="font-bold text-xl">Then... day 3.</p>
            <p>I woke up around 7 AM. Linda was still asleep next to me.</p>
            <p>But something was different.</p>
            <p>I couldn't figure out what it was at first.</p>
            <p>Then I realized.</p>
            <p className="font-bold text-emphasis">I didn't hear the wheeze.</p>
            <p>That rattling sound that had been part of our mornings for YEARS. It was... gone.</p>
            <p>I sat up. Watched her chest rise and fall. Smooth. Steady. Quiet.</p>
            <p>No struggle. No gasping. Just... breathing.</p>
            <p>She opened her eyes. "Morning," she said.</p>
            <p>Her voice was clear. Not strained. Not tight. Clear.</p>
            <p>"How do you feel?" I asked.</p>
            <p>She paused. Took a deep breath. All the way in. Held it. Then let it out slowly.</p>
            <p>Her eyes widened.</p>
            <p className="font-bold text-2xl text-primary">"I can breathe," she whispered.</p>
          </div>
        </div>
      </section>

      {/* More Results */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
            By Day 10, Linda Did Something She Hasn't Done in 5 Years (And I Cried Like a Baby Watching Her)
          </h2>
          
          <div className="prose prose-lg max-w-none space-y-4 text-foreground/80">
            <p>Over the next week, Linda transformed.</p>
            <p>By day 5, she was walking around the village without stopping to catch her breath.</p>
            <p>By day 7, she was sleeping through the night. No coughing fits. No waking up at 3 AM struggling to breathe.</p>
            <p>By day 10... she wanted to hike.</p>
            <p>There's this trail near the village. About 3 miles. Moderate incline.</p>
            <p>Six months earlier, she couldn't walk to the mailbox without stopping halfway.</p>
            <p>And now... she wanted to hike.</p>
            <p>We started walking. Slowly at first.</p>
            <p>I kept waiting for her to stop. To catch her breath. To say she needed a break.</p>
            <p>But she didn't.</p>
            <p>She just... kept going.</p>
            <p>About halfway up, she stopped. Not because she was tired. But because she wanted to look at the view.</p>
            <p>"I never thought I'd be able to do this again," she said quietly.</p>
            <p>That afternoon, Dr. Popescu tested Linda's oxygen levels:</p>
            <div className="my-6 p-6 bg-primary/10 rounded-lg">
              <p className="font-bold text-2xl text-primary mb-2">97% oxygen saturation</p>
              <p className="text-muted-foreground">(It was 88% before)</p>
              <p className="font-bold text-xl text-foreground mt-4">Peak flow: 420</p>
              <p className="text-muted-foreground">(It was 310 before)</p>
            </div>
            <p>Dr. Popescu nodded. "You've gone from severe obstruction to borderline normal. In 10 days."</p>
            <p>Linda started crying. "I'm getting better."</p>
            <p>Dr. Popescu squeezed her hand. "Yes. You are."</p>
          </div>
        </div>
      </section>

      {/* The Problem Coming Home */}
      <section className="py-12 px-4 bg-scientific/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
            The Problem We Discovered When We Got Home (And Why Everything Almost Fell Apart)
          </h2>
          
          <div className="prose prose-lg max-w-none space-y-4 text-foreground/80">
            <p>We flew home three weeks later.</p>
            <p>For the first few weeks... Linda was fine. Better than fine. She was THRIVING.</p>
            <p>She reduced her inhaler use by 80%. Stopped taking steroids altogether.</p>
            <p>I thought we'd won.</p>
            <p>Then... about six weeks after we got home... I heard it.</p>
            <p>That sound. Faint at first. But unmistakable.</p>
            <p className="font-bold text-emphasis">The wheeze.</p>
            <p>By that afternoon, she was reaching for her inhaler again.</p>
            <p>Within two weeks, it was like Romania never happened.</p>
            <p>The shortness of breath. The coughing fits. The sleepless nights. All of it. Came rushing back.</p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
            The Desperate Email That Led to a Scientific Breakthrough (And Changed Everything)
          </h2>
          
          <div className="prose prose-lg max-w-none space-y-4 text-foreground/80">
            <p>I emailed Dr. Popescu that night. Told her what was happening.</p>
            <p>She responded within hours.</p>
            <p>"You're not the first person this has happened to. I've been working on a solution for this exact problem."</p>
            <p>That's when she told me about something that honestly sounded like science fiction.</p>
            <p className="font-bold text-xl">A breathable membrane system.</p>
            <p>"The idea was to create a pouch that holds therapeutic salt from Mânzălești... infused with the same 4 herbs that grow wild on those hillsides. Mint. Sage. Basil. Lavender."</p>
            <p>"But here's the key: The pouch has a special membrane that allows MICROSCOPIC salt particles to pass through when you breathe."</p>
            <p>"So you're inhaling the salt... WITHOUT it leaving the pouch."</p>
            <p>"We finally landed on a medical-grade polymer membrane with microscopic pores. Engineered at 1 to 5 microns."</p>
            <p>"Your body heat activates the process."</p>
            <p>"At 98.6 degrees Fahrenheit, the salt begins releasing particles through the membrane. Creating the same microscopic aerosol you'd breathe in Mânzălești."</p>
            <p>"No electricity. No machines. No setup."</p>
          </div>
        </div>
      </section>

      {/* The Results */}
      <section className="py-12 px-4 bg-story/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
            What Happened When Linda Used the Pouch (That Her Pulmonologist Still Can't Explain)
          </h2>
          
          <div className="prose prose-lg max-w-none space-y-4 text-foreground/80">
            <p>Two weeks later, a small package arrived from Romania.</p>
            <p>Inside was a fabric pouch. About the size of a brick.</p>
            <p>Linda placed it on her nightstand. About a foot from her pillow.</p>
            <p>We didn't expect anything.</p>
            <p>But within THREE DAYS... her wheezing stopped.</p>
            <p>Within a WEEK... she was sleeping through the night again.</p>
            <p>Within TWO WEEKS... she was walking around the neighborhood without her inhaler.</p>
            <p>Within a MONTH... she was better than she'd been even in Romania.</p>
          </div>
        </div>
      </section>

      {/* Doctor Verification */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
            The Spirometry Test That Made Her Pulmonologist Question His Own Equipment
          </h2>
          
          <div className="prose prose-lg max-w-none space-y-4 text-foreground/80">
            <p>I scheduled a follow-up with Linda's pulmonologist.</p>
            <p>The nurse ran the spirometry test.</p>
            <p>The doctor came in holding a printout. He stared at it for a long time.</p>
            <p>"Did we recalibrate the machine?" he asked the nurse.</p>
            <p>She nodded. "Twice this morning."</p>
            <p>He pulled up the graphs. Two lines. Side by side.</p>
            
            <div className="my-6 p-6 bg-primary/10 rounded-lg">
              <p className="font-bold text-lg mb-2">SIX MONTHS AGO:</p>
              <p className="text-xl">Lung capacity: <span className="text-emphasis font-bold">58%</span></p>
              <p className="text-muted-foreground">Stage 3 obstruction</p>
              
              <p className="font-bold text-lg mt-6 mb-2">TODAY:</p>
              <p className="text-xl">Lung capacity: <span className="text-primary font-bold">81%</span></p>
              <p className="text-muted-foreground">Nearly normal</p>
            </div>

            <p>He stared at the screen. Didn't say anything for a solid ten seconds.</p>
            <p className="font-bold text-xl text-primary">Then: "I've never seen improvement like this."</p>
            <p>Linda told him about the salt air from Romania.</p>
            <p>He nodded slowly. "Well... whatever you're doing... keep doing it."</p>
            <p>But the results were right there. On his screen. Undeniable.</p>
            <p className="font-bold text-emphasis">Linda's lungs were HEALING.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-scientific/30" id="testimonials">
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
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 px-4" id="product">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-center text-foreground">
            Here's Exactly What You're Getting Today
          </h2>
          
          <Card className="p-8 md:p-12 shadow-medium mb-8">
            <h3 className="font-display text-2xl font-bold mb-6 text-primary">→ Your Longevity Salt Pouch</h3>
            <div className="prose prose-lg max-w-none text-foreground/80">
              <p>Hand-filled with authentic salt from the Mânzălești region in Romania. The SAME salt that covers the hills where centenarians live past 100.</p>
              <p>Infused with the exact same 4 ancient herbs that grow wild on those hillsides: Mint. Sage. Basil. Lavender.</p>
              <p>Encased in a medical-grade breathable membrane that releases microscopic salt particles when activated by your body heat.</p>
              <p className="font-semibold">No electricity. No machines. No setup.</p>
              <p>Just place it in your bedroom... or on your chest while you sleep... and breathe.</p>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6 shadow-medium bg-primary/5">
              <h4 className="font-bold text-xl mb-3 text-foreground">→ Traditional Longevity Tea Recipe</h4>
              <p className="text-foreground/80 mb-4">
                Dr. Popescu's traditional blend of thyme, rosemary, and eucalyptus. Helps thin mucus from the INSIDE while the salt works from the OUTSIDE.
              </p>
              <p className="text-sm text-muted-foreground line-through">Retail Value: $27</p>
              <p className="font-bold text-primary">✓ Yours FREE when you order today</p>
            </Card>

            <Card className="p-6 shadow-medium bg-primary/5">
              <h4 className="font-bold text-xl mb-3 text-foreground">→ 5-Minute Respiratory Reset Audio</h4>
              <p className="text-foreground/80 mb-4">
                Guided breathing exercise designed by Dr. Popescu. Used by over 10,000 respiratory patients across Europe.
              </p>
              <p className="text-sm text-muted-foreground line-through">Retail Value: $38</p>
              <p className="font-bold text-primary">✓ Yours FREE when you order today</p>
            </Card>
          </div>

          <div className="text-center p-6 bg-accent/10 rounded-lg">
            <p className="text-xl font-bold text-foreground">Total Bonus Value: <span className="text-primary">$65</span></p>
            <p className="text-muted-foreground mt-2">All yours. Free. When you order today.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-scientific/30" id="order-section">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-center text-foreground">
            Here's How Much This Costs (And Why Most Companies Would Charge 3X More)
          </h2>
          
          <div className="prose prose-lg max-w-3xl mx-auto mb-12 text-center text-foreground/80">
            <p>If I were running this like a typical health company... I'd probably charge $300 per pouch.</p>
            <p>Because what's the alternative? Flying to Romania costs $1,500 round trip. Staying there for a month? Another $3,000 to $5,000.</p>
            <p>But I'm not pricing this for maximum profit. I'm pricing it so ANYONE who needs it can afford it.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-8 shadow-medium border-2 border-border">
              <div className="text-center mb-6">
                <h3 className="font-display text-2xl font-bold mb-2 text-foreground">Single Pouch</h3>
                <p className="text-sm text-muted-foreground mb-4">Try it risk-free</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">$89</span>
                  <p className="text-sm text-muted-foreground line-through mt-1">Regular: $180</p>
                </div>
                <p className="text-sm text-muted-foreground">Less than $3/day</p>
              </div>
              <Button onClick={scrollToCTA} className="w-full" size="lg">
                Get Started
              </Button>
            </Card>

            <Card className="p-8 shadow-medium border-4 border-primary relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <div className="text-center mb-6">
                <h3 className="font-display text-2xl font-bold mb-2 text-foreground">3 Pouches</h3>
                <p className="text-sm text-muted-foreground mb-4">Full home coverage</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">$78</span>
                  <span className="text-xl text-muted-foreground"> each</span>
                  <p className="text-sm text-muted-foreground line-through mt-1">Regular: $180 each</p>
                  <p className="font-bold text-lg text-primary mt-2">Save $33 per pouch</p>
                </div>
              </div>
              <Button onClick={scrollToCTA} className="w-full" size="lg" variant="default">
                Best Value
              </Button>
            </Card>

            <Card className="p-8 shadow-medium border-2 border-primary/50">
              <div className="text-center mb-6">
                <h3 className="font-display text-2xl font-bold mb-2 text-foreground">5 Pouches</h3>
                <p className="text-sm text-muted-foreground mb-4">Maximum savings</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">$62</span>
                  <span className="text-xl text-muted-foreground"> each</span>
                  <p className="text-sm text-muted-foreground line-through mt-1">Regular: $180 each</p>
                  <p className="font-bold text-lg text-primary mt-2">Save $118 per pouch</p>
                </div>
                <p className="text-sm text-muted-foreground">Less than $2/day per pouch</p>
              </div>
              <Button onClick={scrollToCTA} className="w-full" size="lg" variant="secondary">
                Stock Up & Save
              </Button>
            </Card>
          </div>

          <div className="text-center">
            <Button onClick={scrollToCTA} size="lg" className="text-lg px-12 py-6 h-auto">
              YES, I WANT TO BREATHE FREELY AGAIN →
            </Button>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-center text-foreground">
            You're Protected By Our 60-Day "Breathe Freely or It's Free" Guarantee
          </h2>
          
          <Card className="p-8 md:p-12 shadow-medium bg-primary/5">
            <div className="prose prose-lg max-w-none text-foreground/80">
              <p className="text-xl font-semibold text-foreground mb-6">Here's the deal.</p>
              <p>Use Longevity Salt for 60 days.</p>
              <p>If you don't feel a SIGNIFICANT improvement in your breathing... if you're not sleeping better... if you're not using your inhaler less...</p>
              <p className="font-bold text-foreground">Just contact us. We'll refund every penny.</p>
              <p>You don't even need to return the pouches. Keep them. Keep the bonuses. Keep everything.</p>
              <p>If you don't feel a difference... just send one email and we'll process your refund.</p>
              <p className="font-bold text-primary text-xl">No hoops. No hassle. No questions.</p>
              <p>Because I'm not interested in keeping your money if this doesn't work for you.</p>
              <p>I only want it if Longevity Salt changes your life the way it changed Linda's.</p>
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
            <div className="prose prose-lg max-w-none text-foreground/80 italic">
              <p>"If you're reading this... you probably feel the way I used to feel.</p>
              <p>Like your body is betraying you. Like you're not the person you used to be.</p>
              <p>I know what it's like to cry in the bathroom because you don't want to be a burden.</p>
              <p>I know what it's like to say 'no' to things you desperately want to say 'yes' to.</p>
              <p>But it doesn't have to be.</p>
              <p>I'm not special. If this worked for me... it can work for you.</p>
              <p>And if you're on the fence about trying it... just ask yourself this:</p>
              <p className="font-bold text-2xl text-primary not-italic">What would your life look like if you could breathe freely again?</p>
              <p>That's worth trying for.</p>
              <p>Trust me."</p>
              <p className="font-semibold not-italic text-foreground">– Linda</p>
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
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 shadow-medium bg-muted/30">
              <h3 className="font-display text-2xl font-bold mb-4 text-foreground">CHOICE #1:</h3>
              <p className="text-foreground/80">
                You close this page. Go back to "managing." Keep using your inhaler 6 to 8 times a day. 
                Keep waking up at 3 AM gasping for air. Keep saying "no" to the things you want to say "yes" to. 
                Keep watching your life get smaller. And smaller.
              </p>
            </Card>

            <Card className="p-8 shadow-medium bg-primary/10 border-2 border-primary">
              <h3 className="font-display text-2xl font-bold mb-4 text-primary">CHOICE #2:</h3>
              <p className="text-foreground/80">
                You click the button below. Secure your pouches NOW. Before this batch sells out. 
                Try Longevity Salt for 60 days. Risk-free. And give yourself a chance at breathing freely again. 
                At sleeping through the night. At playing with your grandkids without needing a break. 
                At saying YES to life again.
              </p>
            </Card>
          </div>

          <div className="prose prose-lg max-w-none text-center mb-12 text-foreground/80">
            <p className="font-bold text-xl text-emphasis">Right now, as you read this... your lungs are scarring.</p>
            <p>Tiny airways hardening. Cilia dying. Mucus cementing.</p>
            <p>Every hour you delay is permanent damage you can't reverse.</p>
            <p>Tomorrow morning, you'll wake up with slightly worse lungs than you have right now.</p>
            <p className="font-bold text-foreground">Unless you do something about it. Today.</p>
            <p>How many more of those days are you willing to sacrifice?</p>
          </div>

          <div className="text-center space-y-6">
            <Button onClick={scrollToCTA} size="lg" className="text-xl px-16 py-8 h-auto">
              CLAIM YOUR LONGEVITY SALT POUCHES NOW →
            </Button>
            <p className="text-sm text-muted-foreground">60-Day Money-Back Guarantee • Secure Checkout</p>
          </div>
        </div>
      </section>

      {/* PS Section */}
      <section className="py-12 px-4 bg-muted/20">
        <div className="container mx-auto max-w-3xl space-y-6 text-foreground/80">
          <p>
            <strong>P.S.</strong> Remember... you're protected by our 60-day money-back guarantee. 
            If Longevity Salt doesn't help you breathe easier... you get a full refund. No questions asked. 
            Keep the pouches. Keep everything. You have nothing to lose... except the mucus drowning your lungs.
          </p>
          <p>
            <strong>P.P.S.</strong> This batch won't last. The last shipment sold out in 11 days. 
            If you close this page now, you might not see this offer again. The next time you check... 
            we might be SOLD OUT. And you'll be on a waitlist for 2 to 3 MONTHS. 
            Don't let that happen. Secure your spot NOW while we still have pouches available.
          </p>
          <p>
            <strong>P.P.P.S.</strong> Don't just take my word for it. Search "Mânzălești longevity village" on YouTube right now. 
            You'll find dozens of TV reports. BBC. National Geographic. Romanian news channels. 
            All documenting this village where people live past 100. This isn't made up. This is REAL. 
            And now you can bring it home.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 Longevity Salt. All rights reserved.</p>
          <p className="mt-2">Results may vary. Statements not evaluated by the FDA.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;