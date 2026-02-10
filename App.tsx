import React, { useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { BookingButton } from './components/BookingButton';
import { Button } from './components/Button';
import { TESTIMONIALS, SQUARE_BOOKING_URL } from './constants';

function App() {
  // Setup intersection observer for fade-in animations on scroll
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-enter-active');
          entry.target.classList.remove('fade-enter');
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      el.classList.add('fade-enter');
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="bg-moana-cream min-h-screen flex flex-col font-sans text-moana-black selection:bg-moana-gold selection:text-white">
      <Header />

      <main className="flex-grow">
        
        <Hero />

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

        {/* Featured Single Service Highlight */}
        <section className="bg-[#2C3E30] text-moana-cream py-32 animate-on-scroll relative overflow-hidden">
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

        <Services />

        <section id="reviews" className="animate-on-scroll">
            <Testimonials testimonials={TESTIMONIALS} />
        </section>

        {/* Newsletter / CTA */}
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

      </main>

      <Footer />
      <BookingButton />

    </div>
  );
}

export default App;