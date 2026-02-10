import React from 'react';
import { ArrowDown } from 'lucide-react';
import { SQUARE_BOOKING_URL } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[800px] flex items-center justify-center bg-cover bg-center md:bg-fixed" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2000&auto=format&fit=crop")' }}>
       {/* Dark overlay for contrast */}
       <div className="absolute inset-0 bg-black/20"></div>

       <div className="relative z-10 text-center text-white backdrop-blur-md bg-white/10 border border-white/20 p-8 md:p-12 rounded-xl max-w-4xl mx-6 animate-fadeIn shadow-2xl">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6 font-serif">Moana Beauty Spa</h1>
          <p className="text-xl md:text-2xl mb-8 animate-fadeIn delay-200 font-light">Luxury Facials & Skin Tightening in Waikiki</p>
          <a 
            href={SQUARE_BOOKING_URL} 
            target="_blank" 
            rel="noreferrer"
            className="inline-block bg-primary hover:bg-accent text-white font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
            Book Now
          </a>
       </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <ArrowDown size={20} strokeWidth={1} />
      </div>
    </section>
  );
};