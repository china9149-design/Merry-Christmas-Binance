
import React, { useMemo } from 'react';

const BackgroundEffects: React.FC = () => {
  const festiveIcons = ['❄️', '🎄', '🎁', '🔔', '✨', '🍪', '🥛'];
  
  // Memoize snow flakes to ensure consistent animation across renders
  const snowFlakes = useMemo(() => {
    return [...Array(100)].map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2, // Varied sizes for depth
      left: Math.random() * 100,
      delay: Math.random() * -20, // Negative delay so some start mid-screen
      duration: Math.random() * 10 + 10, // Varied speeds
      drift: Math.random() * 200 - 100, // Unique horizontal drift
      opacity: Math.random() * 0.5 + 0.1,
      blur: Math.random() * 3, // Parallax blur effect
    }));
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      
      {/* Floating BSC Logos */}
      <div className="absolute top-[10%] left-[5%] animate-drift opacity-[0.03]">
        <img src="https://cryptologos.cc/logos/bnb-bnb-logo.png" alt="BSC" className="w-32 h-32 grayscale" />
      </div>
      <div className="absolute top-[60%] right-[10%] animate-drift [animation-delay:3s] opacity-[0.03]">
        <img src="https://cryptologos.cc/logos/bnb-bnb-logo.png" alt="BSC" className="w-48 h-48 grayscale" />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-binance/5 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-red-500/5 blur-[150px] rounded-full"></div>

      {/* Floating Festive Icons */}
      {festiveIcons.map((icon, i) => (
        <div 
          key={i}
          className="absolute text-2xl opacity-10 animate-drift"
          style={{
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            animationDelay: i * 2 + 's',
            animationDuration: (Math.random() * 5 + 10) + 's'
          }}
        >
          {icon}
        </div>
      ))}

      {/* Enhanced Continuous Snowfall */}
      <div className="absolute inset-0">
        {snowFlakes.map((flake) => (
          <div 
            key={flake.id}
            className="absolute rounded-full bg-white animate-snow-optimized"
            style={{
              width: `${flake.size}px`,
              height: `${flake.size}px`,
              left: `${flake.left}%`,
              top: '-20px',
              opacity: flake.opacity,
              filter: `blur(${flake.blur}px)`,
              animationDelay: `${flake.delay}s`,
              animationDuration: `${flake.duration}s`,
              // Custom properties for the keyframe animation
              // @ts-ignore
              '--drift-x': `${flake.drift}px`,
              '--flake-opacity': flake.opacity
            } as React.CSSProperties}
          />
        ))}
      </div>

      <style>{`
        @keyframes snow-optimized {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          5% {
            opacity: var(--flake-opacity, 0.6);
          }
          95% {
            opacity: var(--flake-opacity, 0.6);
          }
          100% {
            transform: translateY(110vh) translateX(var(--drift-x, 50px));
            opacity: 0;
          }
        }
        .animate-snow-optimized {
          animation-name: snow-optimized;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }
      `}</style>
    </div>
  );
};

export default BackgroundEffects;
