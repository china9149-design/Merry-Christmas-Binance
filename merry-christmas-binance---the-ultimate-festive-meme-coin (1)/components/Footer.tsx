
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-20 pb-10 border-t border-white/5 bg-binance-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-2 mb-6">
             <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-0.5 glow-yellow overflow-hidden border-2 border-binance">
                <img 
                  src="/logoo.jpg" 
                  alt="Merry Christmas Binance Logo" 
                  className="w-full h-full object-cover scale-110"
                />
             </div>
             <span className="text-2xl font-bold tracking-tighter text-center">MERRY CHRISTMAS<br/><span className="text-binance text-sm">BINANCE</span></span>
          </div>
          
          <div className="flex gap-6 mb-8">
            <a href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-binance hover:text-binance-black transition-all transform hover:scale-110">
              <span className="font-bold">𝕏</span>
            </a>
            <a href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-binance hover:text-binance-black transition-all transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </a>
            <a href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-binance hover:text-binance-black transition-all transform hover:scale-110">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.53.26l.21-3.05 5.54-5.01c.24-.21-.054-.33-.37-.12l-6.85 4.31-2.96-.93c-.64-.2-.65-.64.13-.94l11.55-4.45c.54-.2.1.34.1.34z" />
               </svg>
            </a>
          </div>

          <div className="max-w-3xl text-center space-y-4">
            <p className="text-gray-500 text-sm leading-relaxed">
              Disclaimer: Merry Christmas Binance ($MCHB) is a meme coin created for entertainment purposes only. Investing in crypto assets involves significant risk. We make no financial guarantees. Please do your own research (DYOR) before participating. This website is informational and does not offer financial advice.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-gray-600 text-xs font-medium">
          <p>© 2024 Merry Christmas Binance. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-binance transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-binance transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
