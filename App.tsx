import React, { useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Featured } from './components/Featured';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BookingButton } from './components/BookingButton';
import { TESTIMONIALS } from './constants';

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

    // Select all elements with the animation class, including those in child components
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      el.classList.add('fade-enter');
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="font-sans text-textDark bg-secondary min-h-screen flex flex-col selection:bg-primary selection:text-white">
      <Header />

      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Testimonials testimonials={TESTIMONIALS} />
        <Featured />
        <Contact />
      </main>

      <Footer />
      <BookingButton />
    </div>
  );
}

export default App;