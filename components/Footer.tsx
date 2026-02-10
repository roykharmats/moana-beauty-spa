import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-moana-black text-moana-cream pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-gray-800 pb-16">
          
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl mb-6">Moana Beauty</h3>
            <p className="text-gray-400 font-light leading-relaxed text-sm">
              An oasis of tranquility in the heart of Waikiki. Experience clinically tested technologies merged with ancient healing traditions.
            </p>
          </div>

          <div>
            <h4 className="uppercase text-xs tracking-widest font-bold mb-6 text-moana-gold">Visit Us</h4>
            <div className="space-y-4 text-sm text-gray-400 font-light">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1 shrink-0" />
                <span>2135 Kalakaua Ave,<br />Honolulu, HI 96815</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <span>(808) 555-0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <span>aloha@moanabeauty.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="uppercase text-xs tracking-widest font-bold mb-6 text-moana-gold">Hours</h4>
            <ul className="space-y-2 text-sm text-gray-400 font-light">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span>10am - 7pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>9am - 6pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>10am - 5pm</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase text-xs tracking-widest font-bold mb-6 text-moana-gold">Follow</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 border border-gray-800 rounded-full hover:border-moana-gold hover:text-moana-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 border border-gray-800 rounded-full hover:border-moana-gold hover:text-moana-gold transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Moana Beauty. All rights reserved.</p>
          <div className="space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-moana-cream transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-moana-cream transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};