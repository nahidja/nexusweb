import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const ContactView: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Get in touch</h2>
          <p className="mt-4 text-lg text-gray-600">We'd love to hear from you. Our friendly team is always here to chat.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
          
          {/* Contact Info (Left) */}
          <div className="bg-blue-600 p-10 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-blue-100 mb-8">Fill up the form and our team will get back to you within 24 hours.</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-blue-200 mt-1" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-blue-100">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-200 mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-blue-100">hello@nexusweb.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-200 mt-1" />
                  <div>
                    <p className="font-semibold">Headquarters</p>
                    <p className="text-blue-100">101 Tech Boulevard<br />San Francisco, CA 94107</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-400 flex items-center justify-center cursor-pointer transition-colors">
                <span className="font-bold">tw</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-400 flex items-center justify-center cursor-pointer transition-colors">
                <span className="font-bold">in</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-400 flex items-center justify-center cursor-pointer transition-colors">
                <span className="font-bold">ig</span>
              </div>
            </div>
          </div>

          {/* Contact Form (Right) */}
          <div className="p-10">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                  <input type="text" id="first-name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                  <input type="text" id="last-name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="john@example.com" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="How can we help you?"></textarea>
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group">
                Send Message
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};