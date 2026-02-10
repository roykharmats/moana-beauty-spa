import React from 'react';
import { Calendar } from 'lucide-react';
import { SQUARE_BOOKING_URL } from '../constants';

export const BookingButton: React.FC = () => {
  return (
    <a 
      href={SQUARE_BOOKING_URL} 
      target="_blank" 
      rel="noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-primary hover:bg-accent text-white font-bold px-6 py-4 rounded-full shadow-2xl transition-all hover:scale-105 flex items-center space-x-2 animate-fadeIn border border-white/20"
    >
      <Calendar size={18} />
      <span>Book Now</span>
    </a>
  );
};