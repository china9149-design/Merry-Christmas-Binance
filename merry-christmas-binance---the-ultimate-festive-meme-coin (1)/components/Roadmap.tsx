
import React from 'react';

const Roadmap: React.FC = () => {
  const phases = [
    {
      title: "Phase 1: Christmas Launch 🎄",
      items: [
        "Project Concept & Mascot Design",
        "Social Media Launch",
        "Website V1 Release",
        "Fair Launch on PancakeSwap",
        "Community Building"
      ],
      current: true
    },
    {
      title: "Phase 2: Community & Memes ❄️",
      items: [
        "Influencer Marketing Campaign",
        "CEX Listings Applications",
        "Santa's Gift Community Rewards",
        "Festive Meme Contests",
        "Partnership with Charity"
      ],
      current: false
    },
    {
      title: "Phase 3: Just Vibes & Fun 🚀",
      items: [
        "Major CEX Listings",
        "NFT Collection Drop",
        "Exclusive Merch Store",
        "North Pole Metaverse Sneak Peek",
        "To the Moon!"
      ],
      current: false
    }
  ];

  return (
    <section id="roadmap" className="py-24 bg-binance-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow-yellow">The Festive Path</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Our clear, achievable plan to bring $MCHB to the forefront of the meme economy.</p>
          <div className="w-20 h-1.5 bg-binance mx-auto rounded-full mt-4"></div>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-binance to-binance-bg -translate-x-1/2"></div>

          <div className="space-y-12 relative">
            {phases.map((phase, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Marker */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex w-10 h-10 rounded-full bg-binance-black border-4 border-binance items-center justify-center z-10 shadow-[0_0_20px_rgba(240,185,11,0.5)]">
                    <div className={`w-3 h-3 rounded-full ${phase.current ? 'bg-white animate-ping' : 'bg-binance'}`}></div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <div className={`p-8 rounded-[2rem] border transition-all duration-300 ${phase.current ? 'bg-binance/10 border-binance shadow-xl shadow-binance/5' : 'bg-white/5 border-white/10 opacity-70 hover:opacity-100'}`}>
                    <h3 className={`text-2xl font-bold mb-6 ${phase.current ? 'text-binance' : 'text-white'}`}>{phase.title}</h3>
                    <ul className="space-y-3">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-400 group">
                          <span className="text-binance mt-1">•</span>
                          <span className="group-hover:text-white transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Placeholder for spacing on the other side */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
