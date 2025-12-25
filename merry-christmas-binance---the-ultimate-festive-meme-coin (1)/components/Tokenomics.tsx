
import React from 'react';

const Tokenomics: React.FC = () => {
  const stats = [
    { label: "Total Supply", value: "1,000,000,000", sub: "$MCHB 🍪" },
    { label: "Liquidity", value: "Locked", sub: "12 Months 🔒" },
    { label: "Tax", value: "0% / 0%", sub: "Buy / Sell ✨" },
    { label: "Network", value: "BSC", sub: "BEP-20 ⚡" },
  ];

  const allocations = [
    { name: "Liquidity Pool", percent: "80%", color: "#F0B90B", icon: "💰" },
    { name: "Marketing", percent: "5%", color: "#E0A800", icon: "📢" },
    { name: "Burn", percent: "5%", color: "#C09000", icon: "🔥" },
    { name: "Community", percent: "10%", color: "#A07800", icon: "🎁" },
  ];

  return (
    <section id="tokenomics" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tokenomics <span className="twinkle">📊</span></h2>
          <div className="w-20 h-1.5 bg-binance mx-auto rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-binance-black border border-white/5 text-center glow-yellow transition-all hover:border-binance/50 hover:scale-105">
              <p className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-2">{stat.label}</p>
              <div className="text-3xl font-bold text-binance mb-1">{stat.value}</div>
              <p className="text-gray-400 text-xs font-medium">{stat.sub}</p>
            </div>
          ))}
        </div>

        <div className="bg-binance-black/40 border border-white/10 rounded-[3rem] p-8 md:p-12 relative overflow-hidden">
          {/* Decorative Emojis Background */}
          <div className="absolute top-4 right-4 text-4xl opacity-10 rotate-12">🍬</div>
          <div className="absolute bottom-4 left-4 text-4xl opacity-10 -rotate-12">🔔</div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square max-w-[400px] mx-auto group">
                <div className="absolute inset-0 rounded-full border-[20px] border-binance/5 shadow-[0_0_50px_rgba(240,185,11,0.1)] group-hover:border-binance/20 transition-all"></div>
                <div className="absolute inset-[30px] rounded-full bg-binance animate-pulse opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <div className="text-6xl font-bold text-white mb-2 shimmer-text">100%</div>
                        <div className="text-binance font-bold tracking-widest text-sm uppercase">Merry Cheer 🎄</div>
                    </div>
                </div>
                {[0, 60, 120, 180, 240, 300].map((deg) => (
                   <div key={deg} className="absolute top-1/2 left-1/2 w-4 h-4 bg-red-500 rounded-full animate-twinkle" style={{ transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-200px)`, animationDelay: `${deg/100}s` }}></div>
                ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold mb-8">Allocation Strategy 🗺️</h3>
              {allocations.map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl group-hover:scale-125 transition-transform">{item.icon}</span>
                      <span className="font-bold text-lg text-white group-hover:text-binance transition-colors">{item.name}</span>
                    </div>
                    <span className="text-binance font-bold text-xl">{item.percent}</span>
                  </div>
                  <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-gradient-to-r from-binance to-red-500 transition-all duration-1000 group-hover:from-white group-hover:to-binance" 
                        style={{ width: item.percent }}
                    ></div>
                  </div>
                </div>
              ))}
              <div className="mt-8 p-4 bg-red-500/5 border border-red-500/20 rounded-2xl text-sm text-gray-400 italic flex items-center gap-3">
                <span className="text-xl">🦌</span>
                * Merry Christmas Binance ($MCHB) is built for the community. Your holiday gifts are safe under the Sleigh.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
