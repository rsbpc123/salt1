import { useState } from "react";

const TestPage = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white font-serif">
      {/* Hero Section - sec1 */}
      <section className="bg-[#09287a] text-white py-6 md:py-10 px-4">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center md:text-left">
            <p className="font-bold text-[28px] md:text-[50px] leading-[36px] md:leading-[64px]">
              Top NYC Neuroscientist:
            </p>
            <p className="font-bold text-[32px] md:text-[57px] leading-[44px] md:leading-[68px] mt-2">
              <span className="bg-[linear-gradient(to_bottom,transparent_60%,#ffd700_60%)] px-1">
                Do This 8-Second Ear Trick
              </span>
            </p>
            <p className="font-bold text-[32px] md:text-[57px] leading-[44px] md:leading-[68px]">
              <span className="bg-[linear-gradient(to_bottom,transparent_60%,#ffd700_60%)] px-1">
                For Better Memory..
              </span>
            </p>
          </div>
          
          {/* Testimonial Box - s1txtbx2 */}
          <div className="relative mt-7 md:pl-[155px] md:w-[80%]">
            <div className="md:absolute md:left-[-5px] md:top-[-2px] w-[160px] md:w-[150px] mx-auto md:mx-0 mb-4 md:mb-0">
              <div className="w-[120px] h-[120px] bg-gray-300 rounded-full mx-auto md:mx-0" />
            </div>
            <p className="font-bold italic text-[18px] md:text-[24px] leading-[24px] md:leading-[34px] text-center md:text-left">
              "17,789 Americans have cleared away the brain fog, using this safe, science-backed 8-second daily ritual, including my parents and in-laws."
            </p>
            <p className="text-[16px] md:text-[24px] leading-[22px] md:leading-[34px] mt-3 text-center md:text-left">
              <strong>- Dr. James Rivers, </strong><br className="md:hidden"/>NASA-Trained Neuroscientist
            </p>
          </div>
          
          {/* Feature Box - s1bx */}
          <div className="bg-white rounded-[14px] mt-7 p-5 md:p-7 text-black">
            <ul className="space-y-4">
              <li className="flex items-start gap-3 font-semibold text-[18px] md:text-[24px] leading-[24px] md:leading-[34px]">
                <span className="text-[#203d91] text-2xl mt-1">✓</span>
                NASA-Trained Neuroscientist has discovered a new way to clear brain fog, boost brain power and improve memory
              </li>
              <li className="flex items-start gap-3 font-semibold text-[18px] md:text-[24px] leading-[24px] md:leading-[34px] pt-4 border-t border-[#dddddd]">
                <span className="text-[#203d91] text-2xl mt-1">✓</span>
                Find out why 17,789 Americans say the secret is a safe, proven, 8-second daily ritual that starts working the very first time you try it..
              </li>
              <li className="flex items-start gap-3 font-semibold text-[18px] md:text-[24px] leading-[24px] md:leading-[34px] pt-4 border-t border-[#dddddd]">
                <span className="text-[#203d91] text-2xl mt-1">✓</span>
                Breakthrough NASA study confirms there's a "brain invader" that's far more common than we thought..
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Scientific Strip */}
      <section className="bg-[#e7eaf1] py-6 md:py-8 px-4">
        <div className="max-w-[1000px] mx-auto">
          <p className="font-semibold text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] text-center">
            Scientific References and Spiritual Studies:
          </p>
          <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap mt-4 opacity-60">
            {["Harvard", "NASA", "Stanford", "MIT", "Yale"].map((name) => (
              <span key={name} className="text-gray-600 text-sm md:text-base font-medium">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 - Body Content */}
      <section className="py-8 md:py-10 px-4 bg-white">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-8">
            <div className="w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-gray-200 rounded-lg mx-auto" />
          </div>
          
          <p className="text-[22px] md:text-[28px] leading-[30px] md:leading-[38px] text-center mb-6">
            <strong>YOUR MEMORIES</strong> are formed <u>right here</u>.
          </p>
          
          <p className="text-[20px] md:text-[26px] leading-[28px] md:leading-[36px] italic font-bold text-center mb-6">
            It's called your Hippocampus.
          </p>
          
          <div className="text-[18px] md:text-[24px] leading-[28px] md:leading-[36px] space-y-4">
            <p><u>But if we know where they're formed, why do you have "senior moments"?</u></p>
            <p>The root of a sluggish brain may come down to an odd invader..</p>
            <p>It's microscopic.</p>
            <p>NASA studied it.</p>
            <p className="font-bold">But you'd never know you had it because unlike other invaders..</p>
          </div>
        </div>
      </section>

      {/* Section 3 - Blue Background with White Box */}
      <section className="bg-[#203d91] py-8 md:py-12 px-4">
        <div className="max-w-[800px] mx-auto">
          {/* White Box */}
          <div className="bg-[#f1f6ff] rounded-[14px] shadow-lg p-6 md:p-8 mb-8">
            <h2 className="text-[24px] md:text-[36px] leading-[32px] md:leading-[46px] font-bold text-center text-[#203d91] mb-6">
              A Tiny Invader..<br/>
              Scientifically Verified By 5 Studies..<br/>
              That Targets Brain Cells..
            </h2>
            
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[36px] font-bold mb-4">It attacks brain cells.</p>
            
            <ul className="text-[18px] md:text-[24px] leading-[28px] md:leading-[36px] font-bold italic space-y-3 mb-6 ml-6">
              <li className="list-disc">You get brain fog</li>
              <li className="list-disc">Your thinking is fuzzy</li>
              <li className="list-disc">Your brain even atrophies..</li>
            </ul>
            
            <div className="text-[18px] md:text-[24px] leading-[28px] md:leading-[36px] space-y-4">
              <p>We've missed the boat on cognitive decline..</p>
              <p>But neuroscience is changing that now..</p>
              <p className="font-bold">All it takes is an 8-second ritual at-home.</p>
              <p className="font-bold italic">It uses your ears.</p>
            </div>
          </div>
          
          {/* Big Headline */}
          <h2 className="text-[24px] md:text-[36px] leading-[32px] md:leading-[46px] font-bold text-center text-white mb-8">
            A 8-Second Ear Ritual.. Scientifically Verified By 5 Different Studies.. For A Better Memory And Brain Power..<br/>
            <span className="text-yellow-300">(do this from home!)</span>
          </h2>

          <p className="text-[20px] md:text-[26px] font-bold text-white text-center">My name is Dr. James Rivers.</p>
        </div>
      </section>

      {/* Section 4 - How Memory Works */}
      <section className="py-8 md:py-10 px-4 bg-white">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[28px] md:text-[40px] leading-[36px] md:leading-[50px] font-bold text-center text-[#203d91] mb-8">
            How Your Memory<br/>Actually Works..
          </h2>
          
          <div className="text-[18px] md:text-[24px] leading-[28px] md:leading-[36px] space-y-4">
            <p className="font-bold">How does your memory work?</p>
            <p className="font-bold">You can think of your brain cells as tiny storage units.</p>
            <p className="font-bold italic">And memory is information stashed inside your brain cells.</p>
            <p>Now the truth is, these brain cells die for everyone.</p>
          </div>
          
          {/* Blue Box */}
          <div className="bg-[#203d91] rounded-[14px] p-5 md:p-6 mt-8 text-white">
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[36px]">
              When we look at a healthy adult, <strong>they lose 50,000 brain cells a day…</strong>
            </p>
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[36px] mt-4 font-bold">
              This is okay, because you have 86 billion of them! <em>But there's a catch:</em>
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 - Light Blue Background */}
      <section className="py-8 md:py-10 px-4 bg-[#edf4fe]">
        <div className="max-w-[800px] mx-auto">
          <p className="text-[20px] md:text-[26px] font-bold text-center mb-2">NASA Neuroscientist:</p>
          <h2 className="text-[28px] md:text-[40px] leading-[36px] md:leading-[50px] font-bold text-center text-[#203d91] mb-8">
            What Happens To Your<br/>Brain Cells After 50
          </h2>
          
          <div className="relative mb-4">
            <span className="bg-red-500 text-white px-3 py-1 rounded text-sm font-bold">Read This!</span>
          </div>
          
          <div className="text-[18px] md:text-[24px] leading-[28px] md:leading-[36px] space-y-4">
            <p className="font-bold">
              The area of your brain responsible for memory formation, called your hippocampus, is extra-small and fragile. <em>How small?</em>
            </p>
            <p>
              Imagine you're walking on a sandy beach that stretches for a mile. You bend down and pick up a few grains of sand. Those few grains of sand represent the entire area of your brain responsible for memory!
            </p>
            <p className="font-bold">
              Now if you've over 50 and you forget a name, or you misplace your keys or you just feel foggy, you can bet your brain cells, your storage units, are dying off faster than they should be, causing your brain to start shrinking.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 - Dark Background */}
      <section className="py-8 md:py-10 px-4 bg-[#203d91] text-white">
        <div className="max-w-[800px] mx-auto">
          <div className="bg-[#363636] rounded-[10px] p-5 md:p-6 mb-8">
            <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[36px] font-bold">
              As a scientist with training from NASA, I had to know why?
            </p>
          </div>
          
          <p className="text-[20px] md:text-[26px] font-bold text-center mb-4">The truth will surprise you..</p>
          <h2 className="text-[28px] md:text-[40px] leading-[36px] md:leading-[50px] font-bold text-center mb-8">
            The Surprising "Root Cause" Of Brain Fog..
          </h2>
          
          <div className="relative mb-4">
            <span className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-bold">Important</span>
          </div>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[36px] font-bold">
            Scientists have discovered a sub-group of tiny invaders in the brain that "clog up" healthy functioning while attacking the brain cells, including where your memories are stored..
          </p>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-10 md:py-16 px-4 bg-[#203d91]">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="w-[280px] md:w-[400px] h-[200px] md:h-[300px] bg-white/20 rounded-2xl mx-auto mb-8" />
          
          <div className="bg-[linear-gradient(to_bottom,transparent,#1a2f6f)] rounded-2xl p-8">
            <p className="text-[18px] md:text-[22px] leading-[28px] md:leading-[34px] font-bold text-white mb-6">
              The Memory Wave soundwave is developed by neuroscientists that uses advanced brain entrainment to activate Gamma and the brain power for a better memory..
            </p>
            
            <p className="text-[18px] md:text-[22px] leading-[28px] md:leading-[34px] font-bold text-white mb-4">It's simple, easy and you can do it at-home:</p>
            <p className="text-[18px] md:text-[22px] leading-[28px] md:leading-[34px] text-white">Just pop on a pair of headphones and relax for an easy 12 minutes listening to the calming soundwave..</p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-8 md:py-10 px-4 bg-[#203f94]">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-[24px] md:text-[36px] leading-[32px] md:leading-[46px] font-bold text-white mb-4">
            Go ahead and complete your checkout below and experience everything I've talked about <span className="text-yellow-300">100% risk free right now</span>.
          </h2>
          <div className="bg-[linear-gradient(to_right,transparent,rgba(48,79,171,1)_50%,transparent)] py-3 mx-auto max-w-[600px]">
            <p className="text-white font-bold text-[18px] md:text-[22px]">NASA Neuroscientist-Recommended…</p>
          </div>
        </div>
      </section>

      {/* Pricing Box - sec26 */}
      <section className="py-8 md:py-12 px-4 bg-white">
        <div className="max-w-[600px] mx-auto">
          <div className="bg-[#fffeec] border-2 border-[#e7e4b1] rounded-[14px] shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-[#ffebc3] p-5 text-center">
              <h2 className="text-[24px] md:text-[36px] leading-[32px] md:leading-[46px] font-bold text-[#203d91]">
                Claim Your Memory Wave<br/>
                (Money Back 90-Day Guaranteed)
              </h2>
            </div>
            
            {/* Body */}
            <div className="p-6 text-center">
              <div className="w-[200px] md:w-[280px] h-[150px] md:h-[200px] bg-gray-200 rounded-lg mx-auto mb-6" />
              
              {/* Feature Pills */}
              <div className="flex justify-center gap-0 mb-6">
                <div className="bg-[#8d5cc7] text-white px-4 py-3 rounded-l-[14px]">
                  <p className="font-bold text-[15px] md:text-[24px] leading-[19px] md:leading-[30px]">Special<br/>Discount</p>
                </div>
                <div className="bg-[#5590d8] text-white px-4 py-3">
                  <p className="font-bold text-[15px] md:text-[24px] leading-[19px] md:leading-[30px]">Instant<br/>Access</p>
                </div>
                <div className="bg-[#26afbd] text-white px-4 py-3 rounded-r-[14px]">
                  <p className="font-bold text-[15px] md:text-[24px] leading-[19px] md:leading-[30px]">Quick Start<br/>Bonuses</p>
                </div>
              </div>
              
              <p className="text-[#373737] text-[16px] md:text-[22px] leading-[26px] md:leading-[32px] mb-4">
                Regular Price: <span className="line-through px-1">$200</span> <span className="line-through px-1">$100</span> <span className="line-through px-1">$49</span>
              </p>
              
              <div className="relative inline-block mb-4">
                <p className="font-bold text-[20px] md:text-[24px]">Today Just For</p>
                <p className="font-bold text-[54px] md:text-[71px] leading-[54px] md:leading-[71px] text-[#1b2b61] mt-2">$39</p>
              </div>
              
              <button className="w-full bg-gradient-to-b from-[#4CAF50] to-[#2E7D32] text-white text-[18px] md:text-[22px] font-bold py-4 px-8 rounded-xl hover:from-[#43A047] hover:to-[#1B5E20] transition-all shadow-lg">
                Click Here To Get The Memory Wave Now!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section - sec30 */}
      <section className="py-8 md:py-10 px-4 bg-[#edf4ff]">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[24px] md:text-[36px] leading-[32px] md:leading-[46px] font-bold text-center text-[#203d91] mb-6">
            JUST <em>Added!</em> Get $197.00 In Free Gifts And Bonuses When You Order Today..
          </h2>
          
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[36px] mb-8 text-center">
            For everyone who orders at the discount price today, I'm giving you 4 free bonuses that aren't available anywhere else.
          </p>
          
          {/* Bonus Cards - giftbx */}
          {[
            { num: 1, title: 'Get The Best-Selling "1-Minute Memory Saver"', desc: "This 1-minute trick is simple and fun! You use it anytime you learn something new that you want stored permanently in your long-term memory. Do it from home, while waiting in line or anywhere else." },
            { num: 2, title: "Get The Smart Grocery Shopping Guide", desc: "Including the 10 common American foods that actually trigger brain fog, plus our 5 simple shortcuts to help cut your monthly grocery bill by $100 a month or more immediately." },
            { num: 3, title: 'Get The "Energy Button"', desc: "Discover our top tips for what to do with all that extra energy, including 7 at-home hobbies that make you happier, healthier and even sharper plus 5 forgotten travel discounts just for seniors." },
          ].map((bonus) => (
            <div key={bonus.num} className="bg-white border-2 border-[#203d91] rounded-[14px] overflow-hidden mb-8">
              <div className="bg-[#203d91] p-4">
                <p className="font-bold text-[20px] md:text-[34px] leading-[28px] md:leading-[44px] text-white text-center md:text-left">
                  <span className="text-yellow-300">Your {bonus.num === 1 ? "1st" : bonus.num === 2 ? "2nd" : "3rd"} FREE Gift:</span> {bonus.title} <span className="text-yellow-300">FREE!</span>
                </p>
              </div>
              <div className="p-6 flex flex-col md:flex-row gap-4">
                <div className="relative flex-shrink-0 mx-auto md:mx-0">
                  <div className="w-[180px] md:w-[220px] h-[220px] md:h-[280px] bg-gray-200 rounded-lg" />
                  <div className="absolute -top-2 -right-2 w-[80px] md:w-[100px] h-[80px] md:h-[100px] bg-red-600 rounded-full flex flex-col items-center justify-center text-white">
                    <span className="text-xs font-semibold">FREE</span>
                    <span className="text-xs">BONUS</span>
                    <span className="text-2xl md:text-3xl font-bold">#{bonus.num}</span>
                  </div>
                </div>
                <p className="text-[16px] md:text-[24px] leading-[24px] md:leading-[36px] text-center md:text-left">{bonus.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section - sec34 */}
      <section className="py-8 md:py-10 px-4 bg-white">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[24px] md:text-[36px] leading-[32px] md:leading-[46px] font-bold text-center text-[#203d91] mb-8">
            Frequently Asked Questions About The Memory Wave
          </h2>
          
          <div className="space-y-3">
            {[
              { q: '"What makes the Memory Wave superior to brain supplements or brain exercises?"', a: "There's 3 big problems with brain supplements: First is the blood-brain barrier. This is a locked door that stops nearly 99% of all treatments from reaching your brain. Second, many supplements are unproven and expensive. Third, you have to keep paying month after month." },
              { q: '"Why is $39 such a good deal?"', a: "A single bottle of a high quality brain supplement costs anywhere from $50 to $100 monthly. That comes out to $600 to $1,200 per year! The Memory Wave is a one-time investment that lasts forever." },
              { q: '"Is the Memory Wave safe?"', a: "The Memory Wave has been used by thousands of Americans with zero reported side effects. It's not a drug or pill. It's a special soundwave based on research from NASA and the University of Toronto." },
              { q: '"Do I need to change my diet?"', a: "No, you do not. The Memory Wave works independently of your diet. You may have seen videos telling you certain foods 'kill' your memory, but none of those solutions address the root cause." },
              { q: '"Is there a guarantee?"', a: "Of course! Your order is fully guaranteed. When you place your order from this website, you're backed by our 90-Day 100% Money Back Guarantee. It's a 100% Ironclad Money Back Guarantee based on your complete satisfaction." },
            ].map((faq, index) => (
              <div key={index} className={`border border-[#c4d4f0] rounded-[14px] overflow-hidden ${activeAccordion === index ? 'bg-[#edf4ff]' : 'bg-white'}`}>
                <button
                  className="w-full p-4 md:p-5 text-left flex items-start gap-3 hover:bg-gray-50 transition-colors"
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                >
                  <span className="bg-[#0da72f] text-white text-sm font-bold w-8 h-8 md:w-11 md:h-11 rounded-full flex items-center justify-center flex-shrink-0 italic">
                    Q{index + 1}
                  </span>
                  <span className="text-[16px] md:text-[24px] leading-[24px] md:leading-[36px]">{faq.q}</span>
                </button>
                {activeAccordion === index && (
                  <div className="px-4 md:px-6 pb-6 pl-12 md:pl-[72px]">
                    <p className="text-[16px] md:text-[24px] leading-[24px] md:leading-[36px] text-[#333]">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-8 md:py-10 px-4 bg-[#203f94]">
        <div className="max-w-[800px] mx-auto text-center text-white">
          <h2 className="text-[24px] md:text-[36px] leading-[32px] md:leading-[46px] font-bold mb-6">
            Claim your copy of the Memory Wave now.
          </h2>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[36px] mb-4">
            Go ahead, click the button below and complete your checkout to take advantage of today's discount. We'll email it to you immediately. You're always protected by our 100% satisfaction guarantee.
          </p>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[36px] mb-8">
            And let me be the first to welcome you to the Memory Wave family, and congratulate you on your wise decision to invest in your brighter, safer, healthier future. Thank you very much for watching and God bless.
          </p>
          
          <div className="bg-[linear-gradient(to_right,transparent,rgba(48,79,171,1)_50%,transparent)] py-3 mx-auto max-w-[600px]">
            <p className="text-white font-bold text-[18px] md:text-[22px]">NASA Neuroscientist-Recommended…</p>
          </div>
        </div>
      </section>

      {/* Scientific References */}
      <section className="py-8 md:py-12 px-4 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <h3 className="text-[20px] md:text-[24px] font-bold mb-6">Scientific References:</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-4">
              <li className="text-[12px] md:text-[14px] leading-[20px] md:leading-[22px] text-[#999999] pl-6 relative">
                <span className="absolute left-0 top-0">1.</span>
                Murdock, M. H., et al. (2024). Multisensory gamma stimulation promotes glymphatic clearance of amyloid. <em>Nature,</em> 627(8002), 149-156.
              </li>
              <li className="text-[12px] md:text-[14px] leading-[20px] md:leading-[22px] text-[#999999] pl-6 relative">
                <span className="absolute left-0 top-0">2.</span>
                Bhardwaj, A., & Nagandla, K. (2021). Intellectual engagement and cognitive ability in later life. <em>ScienceDirect.</em>
              </li>
              <li className="text-[12px] md:text-[14px] leading-[20px] md:leading-[22px] text-[#999999] pl-6 relative">
                <span className="absolute left-0 top-0">3.</span>
                Livingston, G., et al. (2018). Dementia prevention, intervention, and care. <em>BMJ,</em> 363, k4925.
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="text-[12px] md:text-[14px] leading-[20px] md:leading-[22px] text-[#999999] pl-6 relative">
                <span className="absolute left-0 top-0">4.</span>
                Massachusetts Institute of Technology News. (2024). Evidence that gamma rhythm stimulation can treat neurological disorders.
              </li>
              <li className="text-[12px] md:text-[14px] leading-[20px] md:leading-[22px] text-[#999999] pl-6 relative">
                <span className="absolute left-0 top-0">5.</span>
                The Picower Institute for Learning and Memory at NASA. 40Hz rhythms fight Alzheimer's at the cellular level.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#1a1a2e] text-white">
        <div className="max-w-[1000px] mx-auto text-center">
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
