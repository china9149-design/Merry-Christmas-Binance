
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-binance-bg selection:bg-binance selection:text-binance-black">
      <BackgroundEffects />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Tokenomics />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
};

export default App;
