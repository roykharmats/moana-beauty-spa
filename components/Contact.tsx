import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section className="py-32 container mx-auto px-6 text-center animate-on-scroll bg-moana-cream relative overflow-hidden">
        <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-moana-black">The Art of <span className="italic text-moana-gold">Wellbeing</span></h2>
            <p className="text-gray-500 font-light mb-12 text-lg">Subscribe to receive exclusive invitations to our wellness workshops and seasonal specials.</p>
            <div className="flex flex-col md:flex-row gap-0 shadow-lg">
                <input 
                type="email" 
                placeholder="Email Address" 
                className="flex-grow px-6 py-4 bg-white text-moana-black outline-none font-light placeholder:text-gray-300 border-none"
                />
                <button className="bg-moana-black text-white px-10 py-4 uppercase tracking-widest text-xs font-medium hover:bg-moana-gold transition-colors">
                Join List
                </button>
            </div>
        </div>
    </section>
  );
};