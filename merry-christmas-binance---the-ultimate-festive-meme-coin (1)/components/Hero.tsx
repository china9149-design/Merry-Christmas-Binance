
import React from 'react';

const Hero: React.FC = () => {
  const contractAddress = "0xMerryChristmasBinanceMCHB123456789";

  const handleCopy = () => {
    // Visual feedback for the copy action
    const el = document.getElementById('ca-text');
    if (el) {
      el.classList.add('text-white');
      setTimeout(() => el.classList.remove('text-white'), 1000);
    }
    alert("Contract Address Copied! (UI Visual)");
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 font-medium text-sm backdrop-blur-sm animate-pulse flex items-center gap-2 w-fit mx-auto lg:mx-0">
              <span className="text-xl">🎅</span> Merry Christmas Binance! The Festive Season is Here! <span className="text-xl">❄️</span>
            </div>
            
            <div className="relative inline-block mb-6">
              {/* Sparkle Particles around the headline */}
              <div className="absolute -top-4 -left-4 text-binance text-xl twinkle animate-drift">✨</div>
              <div className="absolute -bottom-4 right-10 text-red-500 text-lg twinkle [animation-delay:0.5s]">🌟</div>
              <div className="absolute top-10 -right-8 text-white text-sm twinkle [animation-delay:1.2s] animate-pulse">⭐</div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] text-white">
                <span className="shimmer-text festive-pulse inline-block">Merry Christmas</span> <br/>
                <span className="text-binance">Binance</span> - <span className="text-glow-red">$MCHB</span> 🎁
              </h1>
            </div>

            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Celebrate the holidays with the $MCHB community! 🎄✨ We're bringing the ultimate festive spirit to the Binance Smart Chain. 🥂🔥
            </p>

            {/* ENHANCED & MOVED UP: Contract Address UI */}
            <div className="mb-10 w-full max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 mb-3 justify-center lg:justify-start">
                <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-binance font-black flex items-center gap-2">
                  <span className="twinkle text-lg">✨</span> OFFICIAL CONTRACT ADDRESS <span className="twinkle text-lg">✨</span>
                </span>
              </div>
              <div 
                onClick={handleCopy}
                className="group relative flex items-center gap-4 p-4 md:p-6 rounded-2xl bg-gradient-to-r from-binance/20 to-binance/5 border-2 border-binance/40 hover:border-binance transition-all cursor-pointer shadow-[0_0_30px_rgba(240,185,11,0.1)] hover:shadow-[0_0_50px_rgba(240,185,11,0.25)] overflow-hidden"
              >
                {/* Shine effect on the CA box */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="flex-1 min-w-0">
                  <code 
                    id="ca-text"
                    className="text-lg md:text-2xl font-black text-binance truncate font-mono block transition-colors leading-none"
                  >
                    {contractAddress}
                  </code>
                </div>
                
                <div className="flex flex-col items-center justify-center border-l border-binance/20 pl-4 md:pl-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-binance group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span className="text-[10px] font-bold text-binance/60 mt-1 uppercase tracking-tighter">Copy</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className="w-full sm:w-auto px-10 py-5 bg-binance hover:bg-binance-dark text-binance-black font-black text-lg rounded-2xl transition-all transform hover:scale-110 shadow-xl shadow-binance/25 flex items-center justify-center gap-3 group">
                BUY $MCHB NOW <span className="group-hover:translate-x-1 transition-transform">🥞</span>
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 text-white font-black text-lg rounded-2xl transition-all border border-white/10 backdrop-blur-sm flex items-center justify-center gap-3 group">
                TELEGRAM <span className="group-hover:scale-125 transition-transform">✈️</span>
              </button>
            </div>
          </div>

          {/* Mascot Image */}
          <div className="flex-1 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-binance/10 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
            <div className="animate-float animate-breathing relative z-10">
              <div className="bg-white p-4 rounded-[2.5rem] shadow-[0_35px_60px_-15px_rgba(240,185,11,0.3)] border-4 border-binance/20 overflow-hidden group animate-shine">
                <img 
                  src="/logooo.png" 
                  alt="Merry Christmas Binance Mascot" 
                  className="w-full h-auto max-w-[450px] mx-auto rounded-[1.5rem] group-hover:scale-105 transition-transform duration-500 relative z-10"
                />
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-binance-black border border-red-500/50 p-5 rounded-2xl shadow-2xl animate-drift hidden md:block z-20">
              <div className="text-red-500 font-bold text-2xl leading-none">Merry 🎅</div>
              <div className="text-white text-xs uppercase tracking-tighter">Christmas</div>
            </div>
            <div className="absolute bottom-10 -left-6 bg-binance-black border border-binance/50 p-5 rounded-2xl shadow-2xl animate-drift [animation-delay:2s] hidden md:block z-20">
              <div className="text-binance font-bold text-2xl leading-none">$MCHB 🚀</div>
              <div className="text-white text-xs uppercase tracking-tighter">Binance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
