import React from 'react';
import { Button } from './Button';
import { SQUARE_BOOKING_URL } from '../constants';

export const Featured: React.FC = () => {
  return (
    <section className="bg-moana-dark-green text-moana-cream py-32 animate-on-scroll relative overflow-hidden">
        {/* Abstract background shape */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#34493a] opacity-50 transform skew-x-12 translate-x-32 pointer-events-none"></div>

        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="max-w-xl">
                <span className="text-white/50 text-[10px] uppercase tracking-[0.3em] mb-6 block">First Time Guest Special</span>
                <h3 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">Natural Skin-Tightening <br/> <span className="italic text-moana-gold">Consultation</span></h3>
                <p className="text-moana-cream/80 font-light mb-10 text-lg leading-relaxed">
                    Unsure where to begin? Our comprehensive skin analysis uses advanced imaging to reveal what the naked eye cannot see. We then craft a bespoke roadmap to your most radiant self.
                </p>
                <div className="flex items-center space-x-6 mb-12 p-6 border border-white/10 bg-white/5 backdrop-blur-sm inline-flex">
                    <span className="text-3xl font-serif text-white">$50</span>
                    <span className="text-xs opacity-70 uppercase tracking-widest border-l border-white/20 pl-6">Full credit applied<br/>to first treatment</span>
                </div>
                <div>
                <Button href={SQUARE_BOOKING_URL} variant="primary" className="bg-moana-gold text-moana-black hover:bg-white hover:text-moana-black border-none px-10" target="_blank">
                    Book Consultation
                </Button>
                </div>
        </div>
        <div className="relative h-[500px] w-full group overflow-hidden">
                <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1000&auto=format&fit=crop" alt="Skin Analysis" className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 border border-white/10 pointer-events-none m-4"></div>
        </div>
        </div>
    </section>
  );
};