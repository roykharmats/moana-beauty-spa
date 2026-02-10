import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import { NAV_ITEMS, SQUARE_BOOKING_URL } from '../constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4 border-b border-gray-100' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className={`font-serif text-2xl md:text-3xl tracking-wide font-medium transition-colors ${isScrolled ? 'text-moana-black' : 'text-white'}`}>
          Moana Beauty
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className={`text-[11px] uppercase tracking-[0.2em] transition-colors font-medium hover:text-moana-gold ${isScrolled ? 'text-moana-black' : 'text-white/90'}`}
            >
              {item.label}
            </a>
          ))}
          <Button 
            href={SQUARE_BOOKING_URL} 
            variant={isScrolled ? 'primary' : 'outline'} 
            className={`${!isScrolled ? 'border-white text-white hover:bg-white hover:text-moana-black' : ''} text-[10px] px-6 py-2.5`} 
            target="_blank"
          >
            Book Now
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden p-2 ${isScrolled ? 'text-moana-black' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} className="text-moana-black" /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-moana-cream z-40 transform transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden flex flex-col items-center justify-center space-y-10`}
      >
        {NAV_ITEMS.map((item) => (
          <a 
            key={item.label} 
            href={item.href} 
            className="font-serif text-3xl text-moana-black hover:text-moana-gold italic"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <Button href={SQUARE_BOOKING_URL} target="_blank" className="mt-8">
          Book Appointment
        </Button>
      </div>
    </header>
  );
};