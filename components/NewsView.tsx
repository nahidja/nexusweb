import React from 'react';
import { Clock } from 'lucide-react';

export const NewsView: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  const handleArticleClick = (title: string) => {
    alert(`Opening article: ${title}`);
  };

  return (
    <div className="bg-[#f4f1ea] min-h-screen text-stone-900 font-serif pb-20">
      <div className="border-b-2 border-stone-800 bg-[#f4f1ea] pt-8 px-4 pb-2 mb-8">
        <div className="max-w-6xl mx-auto text-center">
            <div className="text-xs font-sans uppercase tracking-widest text-stone-500 mb-2">{currentDate}</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2 font-display">The Global Daily</h1>
            <div className="flex justify-between items-center border-t border-b border-stone-400 py-2 mt-4 text-xs font-sans font-bold uppercase tracking-wider overflow-x-auto">
                <span className="px-2">World</span>
                <span className="px-2">Politics</span>
                <span className="px-2">Business</span>
                <span className="px-2">Tech</span>
                <span className="px-2">Science</span>
                <span className="px-2">Health</span>
                <span className="px-2">Opinion</span>
            </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Main Content Area (Left 8 cols) */}
        <div className="lg:col-span-8 space-y-8">
            
            {/* Lead Story */}
            <article className="border-b border-stone-300 pb-8">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="order-2 md:order-1">
                        <h2 
                            onClick={() => handleArticleClick("Global Markets Shift as Tech Sector Rebounds Unexpectedly")}
                            className="text-3xl md:text-4xl font-bold leading-tight mb-4 hover:text-stone-700 cursor-pointer hover:underline decoration-stone-400 underline-offset-4"
                        >
                            Global Markets Shift as Tech Sector Rebounds Unexpectedly
                        </h2>
                        <p className="text-stone-600 text-lg leading-relaxed mb-4">
                            In a surprising turn of events, major technology stocks surged today, defying analyst predictions of a prolonged downturn. The rally was led by semiconductor manufacturers.
                        </p>
                        <p className="text-sm font-sans text-stone-500 flex items-center gap-2">
                            <span className="font-bold text-stone-900">By Sarah Jenkins</span> <Clock size={12} /> 2 hrs ago
                        </p>
                    </div>
                    <div className="order-1 md:order-2">
                        <img 
                            onClick={() => handleArticleClick("Global Markets Shift as Tech Sector Rebounds Unexpectedly")}
                            src="https://picsum.photos/600/400?random=20" 
                            alt="News Lead" 
                            className="w-full h-64 object-cover filter grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer shadow-sm hover:shadow-md" 
                        />
                        <p className="text-xs text-stone-500 mt-2 italic text-right">Traders at the NYSE earlier today.</p>
                    </div>
                </div>
            </article>

            {/* Sub Stories Grid */}
            <div className="grid md:grid-cols-3 gap-6 border-b border-stone-300 pb-8">
                 {[
                    { id: 1, title: "New Climate Accord Signed in Geneva", desc: "Delegates from 40 nations agreed on aggressive carbon reduction targets..." },
                    { id: 2, title: "Urban Farming Takes Root in Metropolis", desc: "Rooftop gardens are transforming city skylines and food supply chains..." },
                    { id: 3, title: "The Future of AI in Education", desc: "Schools are adapting curriculum to include machine learning basics..." }
                 ].map((story) => (
                     <article key={story.id} className="flex flex-col">
                        <div className="mb-3 overflow-hidden h-40 group cursor-pointer" onClick={() => handleArticleClick(story.title)}>
                             <img src={`https://picsum.photos/400/300?random=${20+story.id}`} alt="Thumbnail" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <h3 
                            onClick={() => handleArticleClick(story.title)}
                            className="text-lg font-bold leading-snug mb-2 hover:underline decoration-2 underline-offset-4 cursor-pointer"
                        >
                            {story.title}
                        </h3>
                        <p className="text-sm text-stone-600 line-clamp-3">
                            {story.desc}
                        </p>
                     </article>
                 ))}
            </div>

            {/* Opinion Section */}
            <div>
                <h4 className="font-sans font-bold uppercase tracking-widest text-xs mb-4 border-b border-stone-900 inline-block pb-1">Opinion & Editorial</h4>
                <div className="grid md:grid-cols-2 gap-8">
                    <article className="cursor-pointer group" onClick={() => handleArticleClick("Why We Need Slow Travel")}>
                         <h3 className="text-xl font-bold italic mb-2 group-hover:text-stone-600 transition-colors">"Why We Need Slow Travel"</h3>
                         <p className="text-stone-600">The rush to see everything is ruining the experience of seeing anything at all.</p>
                    </article>
                    <article className="cursor-pointer group" onClick={() => handleArticleClick("The Digital Detox Myth")}>
                         <h3 className="text-xl font-bold italic mb-2 group-hover:text-stone-600 transition-colors">"The Digital Detox Myth"</h3>
                         <p className="text-stone-600">Disconnecting isn't the solution; mindful connection is.</p>
                    </article>
                </div>
            </div>

        </div>

        {/* Sidebar (Right 4 cols) */}
        <aside className="lg:col-span-4 border-l border-stone-300 pl-0 lg:pl-8">
            <div className="sticky top-24">
                <h3 className="font-sans font-bold text-sm uppercase border-t-4 border-black pt-2 mb-6">Trending Topics</h3>
                
                <ul className="space-y-6">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <li key={i} className="flex gap-4 group cursor-pointer" onClick={() => handleArticleClick("Trending Topic #" + i)}>
                            <span className="text-3xl font-display text-stone-300 font-bold group-hover:text-stone-900 transition-colors">{i}</span>
                            <div>
                                <h4 className="font-bold leading-tight mb-1 group-hover:text-blue-900 transition-colors">
                                    {i === 1 ? "SpaceX Launches New Satellite Constellation" : 
                                     i === 2 ? "Federal Reserve Holds Interest Rates Steady" :
                                     i === 3 ? "Breakthrough in Quantum Computing Stability" :
                                     i === 4 ? "Rare Art Collection Found in Attic" :
                                     "Local Election Results Surprise Pundits"}
                                </h4>
                                <span className="text-xs font-sans text-stone-500 uppercase">Tech • 14m ago</span>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="mt-12 bg-stone-200 p-6 text-center">
                    <h4 className="font-sans font-bold uppercase tracking-widest text-xs mb-2">Daily Newsletter</h4>
                    <p className="text-sm mb-4">Get the most important stories delivered to your inbox.</p>
                    <input type="email" placeholder="Your email address" className="w-full p-2 mb-2 bg-white border border-stone-300 font-sans text-sm" />
                    <button className="w-full bg-stone-900 text-white font-sans text-xs font-bold uppercase py-2 hover:bg-stone-700 transition-colors">Subscribe</button>
                </div>
            </div>
        </aside>

      </div>
    </div>
  );
};