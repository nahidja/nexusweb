import React from 'react';
import { Users, Globe, Award, Heart } from 'lucide-react';

export const AboutView: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            We are <span className="text-blue-600">NexusWeb</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A digital playground connecting diverse worlds. From travel diaries to financial markets, we bring you clarity in a chaotic digital age.
          </p>
        </div>
      </div>

      {/* Mission Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Global Perspective</h3>
            <p className="text-gray-600">We source content from over 50 countries, ensuring you get a truly balanced view of the world.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Community First</h3>
            <p className="text-gray-600">Our platform is built for users, by users. We value open dialogue and shared knowledge.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Quality Content</h3>
            <p className="text-gray-600">We curate the best stories, tutorials, and data. No noise, just signal.</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center group">
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                   <img src={`https://picsum.photos/300/300?random=${i + 100}`} alt="Team Member" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
                </div>
                <h4 className="text-lg font-bold">{['Alex Rivera', 'Sarah Chen', 'Mike Johnson', 'Emily Davis'][i-1]}</h4>
                <p className="text-sm text-gray-500">{['Founder & CEO', 'Head of Content', 'Lead Developer', 'Design Director'][i-1]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white py-12 text-center">
        <p className="flex items-center justify-center gap-2 text-lg">
          Made with <Heart className="text-red-500 fill-current" /> in San Francisco
        </p>
      </div>

    </div>
  );
};