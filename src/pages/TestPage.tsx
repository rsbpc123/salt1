import { useState } from "react";

const TestPage = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#1a1a2e] to-[#16213e] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-yellow-400 text-center mb-4">Top NYC Neuroscientist:</p>
          <h1 className="text-3xl md:text-5xl font-bold text-center leading-tight mb-8">
            <span className="text-yellow-300">Do This 8-Second Ear Trick</span>
            <br />
            For Better Memory..
          </h1>
          
          {/* Testimonial Box */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex-shrink-0" />
              <div>
                <p className="text-base md:text-lg italic mb-3">
                  "17,789 Americans have cleared away the brain fog, using this safe, science-backed 8-second daily ritual, including my parents and in-laws."
                </p>
                <p className="font-semibold">- Dr. James Rivers, <br className="md:hidden"/>NASA-Trained Neuroscientist</p>
              </div>
            </div>
          </div>
          
          {/* Feature List */}
          <div className="bg-[#0d1b2a] rounded-2xl p-6 md:p-8">
            <ul className="space-y-4 text-base md:text-lg">
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 mt-1">•</span>
                NASA-Trained Neuroscientist has discovered a new way to clear brain fog, boost brain power and improve memory
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 mt-1">•</span>
                Find out why 17,789 Americans say the secret is a safe, proven, 8-second daily ritual that starts working the very first time you try it..
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 mt-1">•</span>
                Breakthrough NASA study confirms there's a "brain invader" that's far more common than we thought..
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Scientific References Strip */}
      <section className="bg-[#2d3748] py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-white text-center text-sm md:text-base mb-4">Scientific References and Spiritual Studies:</p>
          <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap opacity-70">
            {["Harvard", "NASA", "Stanford", "MIT", "Yale"].map((name) => (
              <span key={name} className="text-white/80 text-sm font-medium">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section 1 */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-48 h-48 bg-gray-200 rounded-lg mx-auto mb-4" />
          </div>
          
          <p className="text-xl md:text-2xl font-bold text-center mb-6">
            <strong>YOUR MEMORIES</strong> are formed <u>right here</u>.
          </p>
          
          <p className="text-lg md:text-xl italic font-bold text-center mb-6">
            It's called your Hippocampus.
          </p>
          
          <p className="text-lg md:text-xl mb-4">
            <u>But if we know where they're formed, why do you have "senior moments"?</u>
          </p>
          
          <p className="text-lg md:text-xl mb-4">The root of a sluggish brain may come down to an odd invader..</p>
          <p className="text-lg md:text-xl mb-4">It's microscopic.</p>
          <p className="text-lg md:text-xl mb-4">NASA studied it.</p>
          <p className="text-lg md:text-xl font-bold mb-4">But you'd never know you had it because unlike other invaders..</p>
        </div>
      </section>

      {/* Highlight Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-[#f0f4f8] to-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[#1a1a2e]">
              A Tiny Invader..<br/>
              Scientifically Verified By 5 Studies..<br/>
              That Targets Brain Cells..
            </h2>
            
            <p className="text-lg font-bold mb-4">It attacks brain cells.</p>
            
            <ul className="space-y-2 text-lg mb-6 pl-6">
              <li className="list-disc">You get brain fog</li>
              <li className="list-disc">Your thinking is fuzzy</li>
              <li className="list-disc">Your brain even atrophies..</li>
            </ul>
            
            <p className="text-lg mb-4">We've missed the boat on cognitive decline..</p>
            <p className="text-lg mb-4">But neuroscience is changing that now..</p>
            <p className="text-lg font-bold mb-4">All it takes is an 8-second ritual at-home.</p>
            <p className="text-lg font-bold italic mb-4">It uses your ears.</p>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-bold text-center text-white bg-[#1a1a2e] rounded-2xl p-8 mb-8">
            A 8-Second Ear Ritual.. Scientifically Verified By 5 Different Studies.. For A Better Memory And Brain Power..
            <br/><span className="text-yellow-400">(do this from home!)</span>
          </h2>
        </div>
      </section>

      {/* Content Section with Image */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            How Your Memory<br/>Actually Works..
          </h2>
          
          <p className="text-lg font-bold mb-4">How does your memory work?</p>
          <p className="text-lg font-bold mb-4">You can think of your brain cells as tiny storage units.</p>
          <p className="text-lg font-bold italic mb-4">And memory is information stashed inside your brain cells.</p>
          
          <p className="text-lg mb-4">Now the truth is, these brain cells die for everyone.</p>
          
          <div className="bg-[#fff8e1] border-l-4 border-yellow-500 p-6 rounded-r-lg mb-6">
            <p className="text-lg">
              When we look at a healthy adult, <strong>they lose 50,000 brain cells a day…</strong>
            </p>
            <p className="text-lg mt-4 font-bold">
              This is okay, because you have 86 billion of them! <em>But there's a catch:</em>
            </p>
          </div>
        </div>
      </section>

      {/* NASA Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-[#1a1a2e] to-[#2d3748]">
        <div className="max-w-3xl mx-auto text-white">
          <p className="text-lg font-bold text-center mb-2">NASA Neuroscientist:</p>
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
            What Happens To Your<br/>Brain Cells After 50
          </h2>
          
          <div className="relative mb-8">
            <div className="absolute -left-4 top-0 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              Read This!
            </div>
          </div>
          
          <p className="text-lg font-bold mb-4">
            The area of your brain responsible for memory formation, called your hippocampus, is extra-small and fragile. <em>How small?</em>
          </p>
          
          <p className="text-lg mb-4">
            Imagine you're walking on a sandy beach that stretches for a mile. You bend down and pick up a few grains of sand. Those few grains of sand represent the entire area of your brain responsible for memory!
          </p>
          
          <p className="text-lg font-bold mb-4">
            Now if you've over 50 and you forget a name, or you misplace your keys or you just feel foggy, you can bet your brain cells, your storage units, are dying off faster than they should be, causing your brain to start shrinking.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#e8f5e9] border-l-4 border-green-500 p-6 rounded-r-lg mb-8">
            <p className="text-lg font-bold">
              As a scientist with training from NASA, I had to know why?
            </p>
          </div>
          
          <p className="text-xl font-bold text-center mb-4">The truth will surprise you..</p>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            The Surprising "Root Cause" Of Brain Fog..
          </h2>
          
          <div className="relative mb-8">
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              Important
            </span>
          </div>
          
          <p className="text-lg font-bold mb-4">
            Scientists have discovered a sub-group of tiny invaders in the brain that "clog up" healthy functioning while attacking the brain cells, including where your memories are stored..
          </p>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-[#f0f4f8] to-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-64 h-64 bg-gray-200 rounded-2xl mx-auto mb-8" />
          
          <div className="bg-[#1a1a2e] text-white rounded-2xl p-8 mb-8">
            <p className="text-lg font-bold mb-4">
              The Memory Wave soundwave is developed by neuroscientists that uses advanced brain entrainment to activate Gamma and the brain power for a better memory..
            </p>
            
            <p className="text-lg font-bold mb-4">It's simple, easy and you can do it at-home:</p>
            <p className="text-lg mb-4">Just pop on a pair of headphones and relax for an easy 12 minutes listening to the calming soundwave..</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 px-4 bg-[#16213e]">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-[#1a1a2e] to-[#2d3748] text-white p-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold">
                Claim Your Memory Wave
                <br/>(Money Back 90-Day Guaranteed)
              </h2>
            </div>
            
            <div className="p-8 text-center">
              <div className="w-48 h-48 bg-gray-200 rounded-lg mx-auto mb-6" />
              
              <div className="flex justify-center gap-8 mb-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-2" />
                  <p className="text-sm font-medium">Special<br/>Discount</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-2" />
                  <p className="text-sm font-medium">Instant<br/>Access</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full mx-auto mb-2" />
                  <p className="text-sm font-medium">Quick Start<br/>Bonuses</p>
                </div>
              </div>
              
              <p className="text-gray-500 mb-4">
                Regular Price: <span className="line-through">$200</span> <span className="line-through">$100</span> <span className="line-through">$49</span>
              </p>
              
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-xl p-4 mb-6 inline-block">
                <p className="text-sm font-medium">Today Just For</p>
                <p className="text-5xl font-bold">$39</p>
              </div>
              
              <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white text-xl font-bold py-4 px-8 rounded-xl hover:from-green-600 hover:to-green-700 transition-all shadow-lg">
                Click Here To Get The Memory Wave Now!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            JUST <em>Added!</em> Get $197.00 In Free Gifts And Bonuses When You Order Today..
          </h2>
          
          <p className="text-lg mb-8 text-center">
            For everyone who orders at the discount price today, I'm giving you 4 free bonuses that aren't available anywhere else.
          </p>
          
          {/* Bonus Cards */}
          {[
            { num: 1, title: 'Get The Best-Selling "1-Minute Memory Saver"', desc: "This 1-minute trick is simple and fun! You use it anytime you learn something new that you want stored permanently in your long-term memory." },
            { num: 2, title: "Get The Smart Grocery Shopping Guide", desc: "Including the 10 common American foods that actually trigger brain fog, plus our 5 simple shortcuts to help cut your monthly grocery bill." },
            { num: 3, title: 'Get The "Energy Button"', desc: "Discover our top tips for what to do with all that extra energy, including 7 at-home hobbies that make you happier, healthier and even sharper." },
          ].map((bonus) => (
            <div key={bonus.num} className="bg-[#f0f4f8] rounded-2xl overflow-hidden mb-6">
              <div className="bg-[#1a1a2e] text-white p-4">
                <p className="font-bold">
                  <span className="text-yellow-400">Your {bonus.num === 1 ? "1st" : bonus.num === 2 ? "2nd" : "3rd"} FREE Gift:</span> {bonus.title} <span className="text-yellow-400">FREE!</span>
                </p>
              </div>
              <div className="p-6 flex gap-4">
                <div className="relative flex-shrink-0">
                  <div className="w-24 h-32 bg-gray-300 rounded-lg" />
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    #{bonus.num}
                  </div>
                </div>
                <p className="text-base">{bonus.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 bg-[#f0f4f8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Frequently Asked Questions About The Memory Wave
          </h2>
          
          <div className="space-y-4">
            {[
              { q: "What makes the Memory Wave superior to brain supplements or brain exercises?", a: "There's 3 big problems with brain supplements: First is the blood-brain barrier. This is a locked door that stops nearly 99% of all treatments from reaching your brain." },
              { q: "Why is $39 such a good deal?", a: "A single bottle of a high quality brain supplement costs anywhere from $50 to $100 monthly. That comes out to $600 to $1,200 per year!" },
              { q: "Why is sound effective for the brain?", a: "Sound is able to pass the blood-brain barrier and reach your brain cells directly. This is why music can affect your mood instantly." },
              { q: "Is the Memory Wave safe?", a: "The Memory Wave has been used by thousands of Americans with zero reported side effects. It's not a drug or pill." },
              { q: "Do I need to change my diet?", a: "No, you do not. The Memory Wave works independently of your diet." },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <button
                  className="w-full p-4 text-left flex items-start gap-3 hover:bg-gray-50 transition-colors"
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                >
                  <span className="bg-[#1a1a2e] text-white text-sm font-bold px-2 py-1 rounded flex-shrink-0">
                    Q{index + 1}
                  </span>
                  <span className="text-lg font-medium">{faq.q}</span>
                </button>
                {activeAccordion === index && (
                  <div className="px-4 pb-4 pl-12">
                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 px-4 bg-[#16213e]">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Claim your copy of the Memory Wave now.
          </h2>
          <p className="text-lg mb-8">
            Go ahead, click the button below and complete your checkout to take advantage of today's discount. We'll email it to you immediately. You're always protected by our 100% satisfaction guarantee.
          </p>
          <button className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xl font-bold py-4 px-12 rounded-xl hover:from-green-600 hover:to-green-700 transition-all shadow-lg">
            Get The Memory Wave Now - $39
          </button>
        </div>
      </section>

      {/* Scientific References */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-center mb-6 text-[#1a1a2e]">Scientific References:</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="space-y-2">
              <p><span className="font-bold">1.</span> Murdock, M. H., et al. (2024). Multisensory gamma stimulation promotes glymphatic clearance of amyloid. Nature, 627(8002), 149-156.</p>
              <p><span className="font-bold">2.</span> Bhardwaj, A., & Nagandla, K. (2021). Intellectual engagement and cognitive ability in later life. ScienceDirect.</p>
              <p><span className="font-bold">3.</span> Livingston, G., et al. (2018). Dementia prevention, intervention, and care. BMJ, 363, k4925.</p>
            </div>
            <div className="space-y-2">
              <p><span className="font-bold">4.</span> Massachusetts Institute of Technology News. (2024). Evidence that gamma rhythm stimulation can treat neurological disorders.</p>
              <p><span className="font-bold">5.</span> The Picower Institute for Learning and Memory at NASA. 40Hz rhythms fight Alzheimer's at the cellular level.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#1a1a2e] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-6 mb-4">
            <a href="#" className="text-sm hover:underline">Privacy Policy</a>
            <a href="#" className="text-sm hover:underline">Terms & Conditions</a>
            <a href="#" className="text-sm hover:underline">Contact Us</a>
          </div>
          <p className="text-xs text-gray-400">
            Copyright © 2024 Memory Wave. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-400 mt-4 max-w-2xl mx-auto">
            The website's content and the product for sale is based upon the author's opinion and is provided solely on an "AS IS" and "AS AVAILABLE" basis. Statements on this website have not been evaluated by the Food and Drug Administration. Products are not intended to diagnose, treat, cure or prevent any disease.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TestPage;
