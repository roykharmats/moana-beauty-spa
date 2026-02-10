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
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-textDark mb-12">What Clients Say</h2>
        
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg relative animate-on-scroll">
            <div className="flex flex-col justify-center items-center transition-opacity duration-500">
                <div className="flex justify-center space-x-1 mb-6 text-primary">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} size={20} fill="currentColor" className="stroke-none" />
                    ))}
                </div>
                <p className="font-serif text-2xl md:text-3xl leading-relaxed mb-8 text-gray-700 italic">
                    "{testimonials[currentIndex].text}"
                </p>
                <p className="text-sm uppercase tracking-widest font-semibold text-textDark">
                    — {testimonials[currentIndex].author}
                </p>
            </div>
            
            <div className="flex justify-center items-center space-x-12 mt-10">
                <button 
                    onClick={prevSlide}
                    className="p-3 text-gray-400 hover:text-primary transition-colors"
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft size={24} />
                </button>
                <div className="flex space-x-2">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${
                                idx === currentIndex ? 'bg-primary w-6' : 'bg-gray-300'
                            }`}
                            aria-label={`Go to testimonial ${idx + 1}`}
                        />
                    ))}
                </div>
                <button 
                    onClick={nextSlide}
                    className="p-3 text-gray-400 hover:text-primary transition-colors"
                    aria-label="Next testimonial"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};