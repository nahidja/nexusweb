import React from 'react';
import { Sector } from '../types';
import { ArrowRight, Globe, Code, TrendingUp, Plane, Newspaper, Zap } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (sector: Sector) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500 selection:text-white">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_50%)]"></div>
          <div className="absolute w-full h-full opacity-30" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-900/10 text-blue-400 text-sm font-medium tracking-wide animate-pulse">
            WELCOME TO NEXUSWEB V2.0
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
            The Digital <br /> Convergence
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Experience a curated ecosystem of travel, finance, technology, and global news. 
            All your interests, one futuristic platform.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate(Sector.TRAVEL)}
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
            >
              Start Exploring <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => onNavigate(Sector.CRYPTO)}
              className="px-8 py-4 bg-transparent border border-gray-700 text-white font-bold rounded-full hover:border-white hover:bg-white/5 transition-all"
            >
              View Market Data
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500">
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-2">
            <div className="w-1 h-2 bg-gray-500 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Sector A: Travel Preview */}
      <section className="py-24 bg-white text-black relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-display font-bold mb-2 flex items-center gap-3">
                <Plane className="text-blue-600" /> Travel
              </h2>
              <p className="text-gray-500">Curated destinations for the modern nomad.</p>
            </div>
            <button onClick={() => onNavigate(Sector.TRAVEL)} className="hidden md:flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
              View All Destinations <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group cursor-pointer" onClick={() => onNavigate(Sector.TRAVEL)}>
                <div className="overflow-hidden rounded-2xl mb-4 shadow-md">
                  <img 
                    src={`https://picsum.photos/600/400?random=${i}`} 
                    alt="Travel" 
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-blue-600 transition-colors">
                  {['Santorini Sunsets', 'Kyoto Temples', 'Patagonian Trek'][i-1]}
                </h3>
                <p className="text-gray-500 text-sm">Explore the hidden gems of {['Greece', 'Japan', 'Chile'][i-1]}.</p>
              </div>
            ))}
          </div>
          
          <button onClick={() => onNavigate(Sector.TRAVEL)} className="w-full md:hidden mt-8 py-3 border border-gray-200 rounded-full font-bold flex items-center justify-center gap-2">
             Explore Travel <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Sector B: News Preview */}
      <section className="py-24 bg-[#f4f1ea] text-stone-900 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block border-b-2 border-black pb-1 mb-4 font-bold uppercase tracking-widest text-xs">Breaking News</div>
              <h2 className="text-5xl font-serif font-bold leading-tight mb-6">
                Global Markets Shift as Tech Sector Rebounds
              </h2>
              <p className="text-xl text-stone-600 font-serif leading-relaxed mb-8">
                In a surprising turn of events, major technology stocks surged today, defying analyst predictions of a prolonged downturn.
              </p>
              <button 
                onClick={() => onNavigate(Sector.NEWS)}
                className="px-8 py-3 bg-stone-900 text-white font-sans font-bold hover:bg-stone-700 transition-colors shadow-lg"
              >
                Read Full Story
              </button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-stone-300 transform translate-x-4 translate-y-4"></div>
              <img 
                src="https://picsum.photos/800/600?random=20" 
                alt="News" 
                className="relative w-full shadow-xl filter grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
                onClick={() => onNavigate(Sector.NEWS)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sector C: Tutorials Preview */}
      <section className="py-24 bg-gray-50 text-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
              <Code className="text-indigo-600" /> Master Modern Tech
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Level up your skills with our interactive, documentation-style learning modules.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['React Mastery', 'Advanced TypeScript', 'Node.js Performance'].map((title, i) => (
              <div 
                key={i} 
                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all cursor-pointer group"
                onClick={() => onNavigate(Sector.TUTORIALS)}
              >
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-indigo-600 transition-colors">{title}</h3>
                <p className="text-gray-500 mb-6 text-sm">Comprehensive guide containing 12 lessons, 4 projects and 30+ code snippets.</p>
                <div className="flex items-center text-sm font-bold text-indigo-600">
                  Start Learning <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector D: Finance Preview */}
      <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
             <div>
                <h2 className="text-3xl font-mono font-bold text-green-400 mb-2 flex items-center gap-2">
                  <TrendingUp /> Market Intelligence
                </h2>
                <p className="text-gray-400">Real-time data for the digital economy.</p>
             </div>
             <button onClick={() => onNavigate(Sector.CRYPTO)} className="mt-4 md:mt-0 px-6 py-2 border border-green-500/50 text-green-400 font-mono text-sm hover:bg-green-500/10 transition-colors">
                Launch Dashboard
             </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { sym: 'BTC', price: '$64,231.45', change: '+2.4%' },
              { sym: 'ETH', price: '$3,452.12', change: '+1.8%' },
              { sym: 'SOL', price: '$145.67', change: '-0.5%' },
              { sym: 'ADA', price: '$0.45', change: '+0.1%' }
            ].map((coin, i) => (
              <div key={i} onClick={() => onNavigate(Sector.CRYPTO)} className="bg-black/50 border border-gray-800 p-6 rounded-lg hover:border-green-500/50 cursor-pointer transition-colors backdrop-blur-sm">
                <div className="text-gray-500 text-xs font-mono mb-2">/ {coin.sym}USD</div>
                <div className="text-2xl font-mono font-bold mb-1">{coin.price}</div>
                <div className={`text-sm font-mono ${coin.change.includes('+') ? 'text-green-500' : 'text-red-500'}`}>
                  {coin.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};