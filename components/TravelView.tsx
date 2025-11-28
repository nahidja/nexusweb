import React, { useState, useEffect, useCallback } from 'react';
import { MapPin, Heart, Share2, X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';

export const TravelView: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const destinations = [
    { id: 1, title: "Santorini Sunsets", location: "Greece", height: "h-96", img: "https://picsum.photos/400/600?random=1" },
    { id: 2, title: "Kyoto Temples", location: "Japan", height: "h-64", img: "https://picsum.photos/400/400?random=2" },
    { id: 3, title: "Patagonian Trek", location: "Chile", height: "h-80", img: "https://picsum.photos/400/500?random=3" },
    { id: 4, title: "Amalfi Coast", location: "Italy", height: "h-72", img: "https://picsum.photos/400/450?random=4" },
    { id: 5, title: "Safari Dreams", location: "Kenya", height: "h-96", img: "https://picsum.photos/400/600?random=5" },
    { id: 6, title: "Swiss Alps", location: "Switzerland", height: "h-64", img: "https://picsum.photos/400/400?random=6" },
    { id: 7, title: "Bali Retreats", location: "Indonesia", height: "h-80", img: "https://picsum.photos/400/500?random=7" },
    { id: 8, title: "Northern Lights", location: "Iceland", height: "h-72", img: "https://picsum.photos/400/450?random=8" },
  ];

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % destinations.length);
    }
  }, [selectedImageIndex, destinations.length]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + destinations.length) % destinations.length);
    }
  }, [selectedImageIndex, destinations.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedImageIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, handleNext, handlePrev]);

  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?random=10" 
            alt="Travel Hero" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="relative z-10 text-center text-white p-4">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-4 tracking-tight drop-shadow-lg">
            Wanderlust
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide opacity-90">
            Discover the world, one story at a time.
          </p>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-center mb-12">
          <span className="text-sm font-semibold tracking-[0.2em] text-gray-400 uppercase border-b pb-2">Latest Visuals</span>
        </div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {destinations.map((dest, index) => (
            <div 
              key={dest.id} 
              className="break-inside-avoid group cursor-pointer"
              onClick={() => setSelectedImageIndex(index)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
                <img 
                  src={dest.img} 
                  alt={dest.title} 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white transform translate-y-[-10px] group-hover:translate-y-0 transition-transform duration-300">
                    <Maximize2 size={16} />
                  </div>
                  
                  <span className="text-white/80 text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                    <MapPin size={12} /> {dest.location}
                  </span>
                  <h3 className="text-white text-xl font-display font-medium">{dest.title}</h3>
                  <div className="flex gap-4 mt-4 text-white/90" onClick={(e) => e.stopPropagation()}>
                    <button className="hover:text-red-400 transition-colors"><Heart size={20} /></button>
                    <button className="hover:text-blue-400 transition-colors"><Share2 size={20} /></button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
            <button className="px-8 py-3 border border-gray-300 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-colors duration-300 uppercase tracking-widest">
                Load More Stories
            </button>
        </div>
      </div>

      {/* Image Modal Overlay */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full z-10"
            onClick={() => setSelectedImageIndex(null)}
          >
            <X size={32} />
          </button>

          {/* Navigation Buttons */}
          <button 
            className="absolute left-4 md:left-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-10"
            onClick={handlePrev}
          >
            <ChevronLeft size={32} />
          </button>
          <button 
            className="absolute right-4 md:right-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-10"
            onClick={handleNext}
          >
            <ChevronRight size={32} />
          </button>
          
          <div 
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={destinations[selectedImageIndex].img} 
              alt={destinations[selectedImageIndex].title} 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center text-white bg-gradient-to-t from-black/80 to-transparent">
               <h3 className="text-2xl font-display">{destinations[selectedImageIndex].title}</h3>
               <p className="text-gray-300 flex items-center justify-center gap-2"><MapPin size={16}/> {destinations[selectedImageIndex].location}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};