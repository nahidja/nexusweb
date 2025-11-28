import React from 'react';
import { ArrowUpRight, ArrowDownRight, Activity, DollarSign, Zap } from 'lucide-react';
import { StockData } from '../types';

export const CryptoView: React.FC = () => {
  const stocks: StockData[] = [
    { symbol: "BTC", price: "64,231.45", change: "+2.4%", isUp: true },
    { symbol: "ETH", price: "3,452.12", change: "+1.8%", isUp: true },
    { symbol: "SOL", price: "145.67", change: "-0.5%", isUp: false },
    { symbol: "ADA", price: "0.45", change: "+0.1%", isUp: true },
    { symbol: "DOT", price: "7.89", change: "-1.2%", isUp: false },
    { symbol: "XRP", price: "0.62", change: "+0.4%", isUp: true },
    { symbol: "AVAX", price: "35.40", change: "-2.1%", isUp: false },
    { symbol: "LINK", price: "14.20", change: "+3.5%", isUp: true },
  ];

  // Repeat stocks for smooth infinite scroll
  const tickerItems = [...stocks, ...stocks, ...stocks];

  return (
    <div className="bg-crypto-dark min-h-screen text-gray-300 font-mono relative overflow-hidden">
      
      {/* Background Grid Effect */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ backgroundImage: 'linear-gradient(#2a2a2a 1px, transparent 1px), linear-gradient(90deg, #2a2a2a 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Ticker Tape */}
      <div className="bg-black border-b border-crypto-green/20 overflow-hidden py-3 relative z-10">
        <div className="flex animate-ticker w-max">
          {tickerItems.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-4 px-8 border-r border-gray-800">
              <span className="font-bold text-white">{item.symbol}</span>
              <span className="text-gray-400">${item.price}</span>
              <span className={`flex items-center text-xs ${item.isUp ? 'text-crypto-green' : 'text-red-500'}`}>
                {item.isUp ? <ArrowUpRight size={12} className="mr-1" /> : <ArrowDownRight size={12} className="mr-1" />}
                {item.change}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        
        {/* Header Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[ 
                { label: "Global Market Cap", val: "$2.43T", change: "+1.2%", icon: <DollarSign className="text-crypto-green" /> },
                { label: "24h Volume", val: "$86.4B", change: "-5.4%", icon: <Activity className="text-blue-400" /> },
                { label: "BTC Dominance", val: "52.1%", change: "+0.1%", icon: <Zap className="text-yellow-400" /> },
                { label: "ETH Gas", val: "15 Gwei", change: "-2.0%", icon: <Activity className="text-purple-400" /> }
            ].map((stat, i) => (
                <div key={i} className="bg-crypto-accent/40 border border-gray-800 p-6 rounded-lg backdrop-blur-sm hover:border-crypto-green/50 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</span>
                        {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.val}</div>
                    <div className={`text-xs ${stat.change.startsWith('+') ? 'text-crypto-green' : 'text-red-500'}`}>{stat.change}</div>
                </div>
            ))}
        </div>

        {/* Main Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Market Table */}
            <div className="lg:col-span-2 bg-crypto-black border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
                <div className="p-6 border-b border-gray-800 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        <Activity size={20} className="text-crypto-green" /> Market Overview
                    </h2>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 text-xs bg-crypto-green text-black font-bold rounded">Spot</button>
                        <button className="px-3 py-1 text-xs bg-gray-800 text-gray-400 rounded hover:bg-gray-700">Futures</button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-900/50 text-xs text-gray-500 uppercase tracking-wider">
                                <th className="px-6 py-4 font-medium">Asset</th>
                                <th className="px-6 py-4 font-medium">Price</th>
                                <th className="px-6 py-4 font-medium">24h Change</th>
                                <th className="px-6 py-4 font-medium text-right">Market Cap</th>
                                <th className="px-6 py-4 font-medium text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-800">
                            {stocks.map((stock, i) => (
                                <tr key={i} className="hover:bg-white/5 transition-colors group">
                                    <td className="px-6 py-4 flex items-center gap-3">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-black ${['bg-orange-500', 'bg-blue-500', 'bg-purple-500', 'bg-blue-400', 'bg-pink-500', 'bg-white', 'bg-red-500', 'bg-blue-600'][i] || 'bg-gray-500'}`}>
                                            {stock.symbol[0]}
                                        </div>
                                        <div>
                                            <span className="font-bold text-white block">{stock.symbol}</span>
                                            <span className="text-xs text-gray-500">Coin Name</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-300">${stock.price}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${stock.isUp ? 'bg-green-900/30 text-crypto-green' : 'bg-red-900/30 text-red-400'}`}>
                                            {stock.change}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right text-gray-400 font-mono text-sm">$452.1B</td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-xs border border-crypto-green text-crypto-green px-3 py-1 rounded hover:bg-crypto-green hover:text-black transition-all">Trade</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Side Panel (Order Book / Recent Trades) */}
            <div className="space-y-8">
                
                {/* Simulated Order Book Visual */}
                <div className="bg-crypto-black border border-gray-800 rounded-xl p-6">
                    <h3 className="text-sm font-bold text-gray-400 uppercase mb-4 tracking-wider border-b border-gray-800 pb-2">Order Book (BTC/USD)</h3>
                    <div className="space-y-1 font-mono text-xs">
                        {[1,2,3,4,5].map(i => (
                            <div key={`sell-${i}`} className="flex justify-between text-red-400 relative">
                                <span className="z-10 relative">64,{(235 + i * 2).toString()}</span>
                                <span className="z-10 relative text-gray-500">{(Math.random() * 2).toFixed(4)}</span>
                                <div className="absolute right-0 top-0 bottom-0 bg-red-900/20" style={{width: `${Math.random() * 80}%`}}></div>
                            </div>
                        ))}
                        <div className="py-2 text-center text-lg font-bold text-white border-y border-gray-800 my-2">
                            64,231.45
                        </div>
                         {[1,2,3,4,5].map(i => (
                            <div key={`buy-${i}`} className="flex justify-between text-crypto-green relative">
                                <span className="z-10 relative">64,{(220 - i * 2).toString()}</span>
                                <span className="z-10 relative text-gray-500">{(Math.random() * 2).toFixed(4)}</span>
                                <div className="absolute right-0 top-0 bottom-0 bg-green-900/20" style={{width: `${Math.random() * 80}%`}}></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* News Flash */}
                <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/30 rounded-xl p-6">
                    <h3 className="text-indigo-400 text-xs font-bold uppercase mb-2">Breaking Alert</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        SEC approves new guidelines for crypto asset classification. Markets react positively to regulatory clarity.
                    </p>
                    <button className="mt-4 text-xs text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded w-full transition-colors">
                        Read Analysis
                    </button>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};