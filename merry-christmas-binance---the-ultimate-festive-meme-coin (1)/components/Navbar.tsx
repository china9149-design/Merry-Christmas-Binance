
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Roadmap', href: '#roadmap' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-binance-black/90 backdrop-blur-md py-4 shadow-xl border-b border-binance/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center p-1 glow-yellow overflow-hidden border-2 border-binance shadow-lg transform rotate-[-2deg] hover:rotate-0 transition-transform cursor-pointer">
            <img 
              src="/logoo.jpg" 
              alt="Merry Christmas Binance Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tighter text-glow-yellow leading-none uppercase">Merry Christmas</span>
            <span className="text-binance text-sm font-bold tracking-[0.2em] uppercase">Binance</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-binance transition-colors font-medium text-sm"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-binance hover:bg-binance-dark text-binance-black px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 text-sm shadow-lg shadow-binance/20">
            DEXSCREENER
          </button>
        </div>

        <div className="md:hidden text-binance">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
