import React from 'react';
import { Github, Twitter, Linkedin, Facebook, Send } from 'lucide-react';
import { Sector } from '../types';

interface FooterProps {
  onNavigate: (sector: Sector) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-bold font-display tracking-tight mb-6 cursor-pointer" onClick={() => onNavigate(Sector.HOME)}>
              Nexus<span className="text-blue-500">Web</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A next-generation content aggregation platform designed for the modern web. Exploring the intersection of travel, finance, education, and global events.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue-600 flex items-center justify-center transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/20 flex items-center justify-center transition-all duration-300">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue-700 flex items-center justify-center transition-all duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-500">Sectors</h3>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => onNavigate(Sector.TRAVEL)} className="text-gray-400 hover:text-white transition-colors">Travel Blog</button></li>
              <li><button onClick={() => onNavigate(Sector.NEWS)} className="text-gray-400 hover:text-white transition-colors">World News</button></li>
              <li><button onClick={() => onNavigate(Sector.TUTORIALS)} className="text-gray-400 hover:text-white transition-colors">Dev Tutorials</button></li>
              <li><button onClick={() => onNavigate(Sector.CRYPTO)} className="text-gray-400 hover:text-white transition-colors">Crypto Dashboard</button></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-500">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => onNavigate(Sector.ABOUT)} className="text-gray-400 hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate(Sector.CONTACT)} className="text-gray-400 hover:text-white transition-colors">Contact</button></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
             <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-500">Stay Updated</h3>
             <p className="text-gray-400 text-sm mb-4">Join our newsletter for the latest updates across all sectors.</p>
             <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white/5 border border-gray-800 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button className="absolute right-2 top-2 p-1.5 bg-blue-600 rounded text-white hover:bg-blue-500 transition-colors">
                  <Send size={14} />
                </button>
             </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} NexusWeb Platform. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <span>v2.4.0 (Stable)</span>
            <span>System Status: <span className="text-green-500">Operational</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
};