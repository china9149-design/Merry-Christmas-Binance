
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-binance-black/50">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What is <span className="shimmer-text">Merry Christmas Binance</span>? <span className="text-3xl">🤔</span></h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-red-500 via-binance to-green-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white flex items-center gap-2">The Ultimate Holiday Token <span className="twinkle">🌟</span></h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              Merry Christmas Binance ($MCHB) is the festive heartbeat of the Binance Smart Chain! 🎄 We’ve created a token that captures the essence of the holidays—generosity, community, and excitement—on the world's most accessible blockchain.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              By combining high-speed BSC transactions with a mission to bring joy to every holder, $MCHB is more than just a meme; it's a holiday tradition in the making. 🍪🥛
            </p>
            <ul className="space-y-4">
              {[
                "100% Community-Focused Ticker $MCHB 💎",
                "Built for Festive Growth on BSC 📈",
                "Joyful Tokenomics, No Scars 🍬",
                "A Gift for the Whole Ecosystem 🎁"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-white font-medium group cursor-default">
                  <div className="w-6 h-6 rounded-full bg-binance/20 border border-binance flex items-center justify-center text-binance text-xs group-hover:scale-125 transition-transform">
                    ✓
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transform hover:-translate-y-2 transition-all hover:bg-red-500/5 hover:border-red-500/30">
              <div className="text-4xl mb-4">🎁</div>
              <h4 className="text-xl font-bold mb-2">Gift Model</h4>
              <p className="text-gray-400 text-sm">Our strategy is simple: give back to the community that holds $MCHB. Ho ho ho!</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transform translate-y-8 hover:-translate-y-2 transition-all hover:bg-binance/5 hover:border-binance/30">
              <div className="text-4xl mb-4">🎄</div>
              <h4 className="text-xl font-bold mb-2">BSC Legend</h4>
              <p className="text-gray-400 text-sm">Deeply rooted in the Binance Smart Chain infrastructure for instant joy.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transform hover:-translate-y-2 transition-all hover:bg-green-500/5 hover:border-green-500/30">
              <div className="text-4xl mb-4">🛡️</div>
              <h4 className="text-xl font-bold mb-2">Sleigh Safety</h4>
              <p className="text-gray-400 text-sm">Verified and secure contract for a safe ride to the moon with Santa.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transform translate-y-8 hover:-translate-y-2 transition-all hover:bg-yellow-500/5 hover:border-yellow-500/30">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-xl font-bold mb-2">MCHB Army</h4>
              <p className="text-gray-400 text-sm">Join the strongest festive community in the entire crypto world! 🎅</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
