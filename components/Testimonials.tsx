import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-moana-dark-green text-moana-cream py-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
             <div className="w-64 h-64 rounded-full bg-moana-gold absolute -top-20 -left-20 blur-3xl"></div>
             <div className="w-96 h-96 rounded-full bg-moana-gold absolute top-1/2 right-0 blur-3xl"></div>
        </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="font-serif text-3xl md:text-5xl italic mb-16">Voices of Calm</h2>
        
        <div className="max-w-3xl mx-auto">
            <div className="min-h-[250px] flex flex-col justify-center items-center transition-opacity duration-500">
                <div className="flex justify-center space-x-1 mb-6 text-moana-gold">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" className="stroke-none" />
                    ))}
                </div>
                <p className="font-serif text-2xl md:text-3xl leading-relaxed mb-8">
                    "{testimonials[currentIndex].text}"
                </p>
                <p className="text-sm uppercase tracking-widest opacity-75">
                    — {testimonials[currentIndex].author}
                </p>
            </div>
            
            <div className="flex justify-center items-center space-x-12 mt-12">
                <button 
                    onClick={prevSlide}
                    className="p-3 border border-moana-cream/20 rounded-full hover:bg-moana-cream hover:text-moana-dark-green transition-all"
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft size={20} />
                </button>
                <div className="flex space-x-2">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${
                                idx === currentIndex ? 'bg-moana-gold w-4' : 'bg-moana-cream/30'
                            }`}
                            aria-label={`Go to testimonial ${idx + 1}`}
                        />
                    ))}
                </div>
                <button 
                    onClick={nextSlide}
                    className="p-3 border border-moana-cream/20 rounded-full hover:bg-moana-cream hover:text-moana-dark-green transition-all"
                    aria-label="Next testimonial"
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};