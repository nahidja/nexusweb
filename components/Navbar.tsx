import React, { useState } from 'react';
import { Sector } from '../types';
import { Plane, Newspaper, BookOpen, TrendingUp, Menu, X, Info, Mail } from 'lucide-react';

interface NavbarProps {
  activeSector: Sector;
  onNavigate: (sector: Sector) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSector, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const getNavStyles = () => {
    if (activeSector === Sector.HOME) {
      return "bg-black/80 backdrop-blur-md border-b border-white/10 text-white";
    }
    if (activeSector === Sector.CRYPTO) {
      return "bg-crypto-black/90 border-b border-crypto-green/30 text-crypto-green backdrop-blur-md";
    }
    if (activeSector === Sector.NEWS) {
      return "bg-[#f4f1ea] border-b-2 border-stone-800 text-stone-900 font-serif";
    }
    return "bg-white/90 backdrop-blur-md border-b border-gray-100 text-gray-800";
  };

  const getButtonStyles = (sector: Sector, isMobile = false) => {
    const isActive = activeSector === sector;
    const baseMobile = "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-lg font-medium transition-all";
    
    // Home Specific
    if (activeSector === Sector.HOME) {
       const activeClass = isActive 
          ? 'bg-white/20 text-white' 
          : 'hover:bg-white/10 text-gray-300 hover:text-white';
       return isMobile ? `${baseMobile} ${activeClass}` : `flex items-center gap-2 px-4 py-2 rounded-full transition-all ${activeClass}`;
    }

    if (activeSector === Sector.CRYPTO) {
      const activeClass = isActive 
          ? 'bg-crypto-green text-black font-bold shadow-[0_0_10px_rgba(0,255,157,0.5)]' 
          : 'hover:text-white hover:bg-white/10';
      return isMobile ? `${baseMobile} ${activeClass}` : `flex items-center gap-2 px-4 py-2 rounded transition-all ${activeClass}`;
    }

    if (activeSector === Sector.NEWS) {
      const activeClass = isActive
          ? 'border-stone-900 text-stone-900 bg-stone-200'
          : 'border-transparent text-stone-500 hover:text-stone-800 hover:bg-stone-100';
      return isMobile 
        ? `${baseMobile} border-l-4 ${isActive ? 'border-stone-900' : 'border-transparent'}`
        : `flex items-center gap-2 px-4 py-2 uppercase tracking-wider text-sm font-bold border-b-2 transition-colors ${isActive ? 'border-stone-900 text-stone-900' : 'border-transparent text-stone-500 hover:text-stone-800'}`;
    }

    // Default (Travel, Tutorials, About, Contact)
    const activeClass = isActive
        ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
        : 'hover:bg-gray-100 text-gray-600';
        
    return isMobile 
      ? `${baseMobile} ${isActive ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`
      : `flex items-center gap-2 px-4 py-2 rounded-full transition-all ${activeClass}`;
  };

  const handleNavClick = (sector: Sector) => {
    onNavigate(sector);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-500 ${getNavStyles()}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer flex-1" onClick={() => handleNavClick(Sector.HOME)}>
             <span className={`text-xl font-bold ${activeSector === Sector.NEWS ? 'font-serif tracking-tighter' : 'font-display tracking-tight'}`}>
              Nexus<span className={activeSector === Sector.CRYPTO || activeSector === Sector.HOME ? "text-white" : "text-blue-600"}>Web</span>
             </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-baseline space-x-2">
              <button onClick={() => handleNavClick(Sector.TRAVEL)} className={getButtonStyles(Sector.TRAVEL)}>
                <Plane size={18} /> <span>Travel</span>
              </button>
              <button onClick={() => handleNavClick(Sector.NEWS)} className={getButtonStyles(Sector.NEWS)}>
                <Newspaper size={18} /> <span>News</span>
              </button>
              <button onClick={() => handleNavClick(Sector.TUTORIALS)} className={getButtonStyles(Sector.TUTORIALS)}>
                <BookOpen size={18} /> <span>Tutorials</span>
              </button>
              <button onClick={() => handleNavClick(Sector.CRYPTO)} className={getButtonStyles(Sector.CRYPTO)}>
                <TrendingUp size={18} /> <span>Finance</span>
              </button>
              <div className={`h-6 w-px mx-2 ${activeSector === Sector.CRYPTO || activeSector === Sector.HOME ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
              <button onClick={() => handleNavClick(Sector.ABOUT)} className={getButtonStyles(Sector.ABOUT)}>
                <Info size={18} /> <span>About</span>
              </button>
              <button onClick={() => handleNavClick(Sector.CONTACT)} className={getButtonStyles(Sector.CONTACT)}>
                <Mail size={18} /> <span>Contact</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${activeSector === Sector.CRYPTO || activeSector === Sector.HOME ? 'text-white hover:bg-white/10' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className={`lg:hidden absolute top-16 left-0 w-full h-screen pb-20 overflow-y-auto shadow-xl transition-all duration-300 ${
            activeSector === Sector.CRYPTO ? 'bg-black text-white' : 
            activeSector === Sector.HOME ? 'bg-black/95 text-white' :
            activeSector === Sector.NEWS ? 'bg-[#f4f1ea] text-stone-900' : 
            'bg-white text-gray-900'
        }`}>
          <div className="px-4 pt-4 pb-6 space-y-2">
            <button onClick={() => handleNavClick(Sector.TRAVEL)} className={getButtonStyles(Sector.TRAVEL, true)}>
              <Plane size={20} /> <span>Travel Blog</span>
            </button>
            <button onClick={() => handleNavClick(Sector.NEWS)} className={getButtonStyles(Sector.NEWS, true)}>
              <Newspaper size={20} /> <span>World News</span>
            </button>
            <button onClick={() => handleNavClick(Sector.TUTORIALS)} className={getButtonStyles(Sector.TUTORIALS, true)}>
              <BookOpen size={20} /> <span>Tutorials</span>
            </button>
            <button onClick={() => handleNavClick(Sector.CRYPTO)} className={getButtonStyles(Sector.CRYPTO, true)}>
              <TrendingUp size={20} /> <span>Crypto Dashboard</span>
            </button>
            <div className={`my-4 border-t ${activeSector === Sector.CRYPTO || activeSector === Sector.HOME ? 'border-gray-800' : 'border-gray-200'}`}></div>
            <button onClick={() => handleNavClick(Sector.ABOUT)} className={getButtonStyles(Sector.ABOUT, true)}>
              <Info size={20} /> <span>About Us</span>
            </button>
            <button onClick={() => handleNavClick(Sector.CONTACT)} className={getButtonStyles(Sector.CONTACT, true)}>
              <Mail size={20} /> <span>Contact Support</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};