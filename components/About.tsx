import React from 'react';
import { Button } from './Button';

export const About: React.FC = () => {
  return (
    <>
      {/* Brand Logos / As Seen In */}
      <section className="py-16 border-b border-moana-black/5 bg-white">
          <div className="container mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-24 items-center opacity-30 grayscale animate-on-scroll">
              {['VOGUE', 'ELLE', 'Allure', 'Refinery29', 'Harper\'s BAZAAR'].map(brand => (
                  <span key={brand} className="font-serif text-2xl md:text-3xl font-medium">{brand}</span>
              ))}
          </div>
      </section>

      {/* Featured Section / Excellence */}
      <section id="excellence" className="py-32 md:py-40 container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1 relative animate-on-scroll group">
                  <div className="absolute inset-0 bg-moana-gold/10 transform translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
                  <img 
                      src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1000&auto=format&fit=crop" 
                      alt="Spa Interior" 
                      className="w-full h-[700px] object-cover shadow-2xl filter sepia-[.1]"
                  />
                  <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-moana-cream border border-moana-gold/30 p-8 flex flex-col justify-center items-center text-center shadow-2xl hidden md:flex">
                        <span className="font-serif text-5xl text-moana-gold mb-2">10+</span>
                        <span className="text-[10px] uppercase tracking-[0.25em] leading-relaxed text-moana-black">Years of<br/>Restorative<br/>Excellence</span>
                  </div>
              </div>
              <div className="order-1 lg:order-2 animate-on-scroll lg:pl-10">
                  <span className="text-moana-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-6 block">Our Philosophy</span>
                  <h2 className="font-serif text-5xl md:text-6xl mb-10 leading-[1.1] text-moana-black">
                      Restore Balance to <br/> <span className="italic text-gray-500">Body & Mind</span>
                  </h2>
                  <p className="text-gray-500 font-light leading-loose mb-8 text-lg">
                      At Moana Beauty, we believe that true radiance emanates from deep within. Our sanctuary in Waikiki offers a curated selection of treatments that blend organic, earth-derived ingredients with state-of-the-art dermatological science.
                  </p>
                  <p className="text-gray-500 font-light leading-loose mb-12 text-lg">
                      Every touch is intentional, every product is pure, and every moment is designed to transport you to a state of profound tranquility.
                  </p>
                  <Button href="#services" variant="text" className="text-sm">
                      Discover Our Approach
                  </Button>
              </div>
          </div>
      </section>
    </>
  );
};