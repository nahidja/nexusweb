import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { TravelView } from './components/TravelView';
import { NewsView } from './components/NewsView';
import { TutorialsView } from './components/TutorialsView';
import { CryptoView } from './components/CryptoView';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { Footer } from './components/Footer';
import { Sector } from './types';

const App: React.FC = () => {
  const [activeSector, setActiveSector] = useState<Sector>(Sector.HOME);

  // Scroll to top on navigation change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSector]);

  const renderSector = () => {
    switch (activeSector) {
      case Sector.HOME:
        return <HomeView onNavigate={setActiveSector} />;
      case Sector.TRAVEL:
        return <TravelView />;
      case Sector.NEWS:
        return <NewsView />;
      case Sector.TUTORIALS:
        return <TutorialsView />;
      case Sector.CRYPTO:
        return <CryptoView />;
      case Sector.ABOUT:
        return <AboutView />;
      case Sector.CONTACT:
        return <ContactView />;
      default:
        return <HomeView onNavigate={setActiveSector} />;
    }
  };

  // Determine background color based on sector for the outer wrapper
  const getWrapperClass = () => {
    switch (activeSector) {
      case Sector.HOME:
        return "min-h-screen bg-black text-white font-sans transition-colors duration-500";
      case Sector.CRYPTO:
        return "min-h-screen bg-crypto-black text-white font-mono transition-colors duration-500";
      case Sector.NEWS:
        return "min-h-screen bg-[#f4f1ea] text-stone-900 font-serif transition-colors duration-500";
      case Sector.CONTACT:
      case Sector.ABOUT:
        return "min-h-screen bg-gray-50 text-gray-900 font-sans transition-colors duration-500";
      default:
        return "min-h-screen bg-white text-gray-900 font-sans transition-colors duration-500";
    }
  };

  return (
    <div className={getWrapperClass()}>
      <Navbar activeSector={activeSector} onNavigate={setActiveSector} />
      <main className="pt-16">
        {renderSector()}
      </main>
      <Footer onNavigate={setActiveSector} />
    </div>
  );
};

export default App;