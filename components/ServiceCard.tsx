import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Service } from '../types';
import { SQUARE_BOOKING_URL } from '../constants';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="group relative bg-white transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-moana-gold/50 flex flex-col h-full">
      <div className="relative h-72 overflow-hidden bg-gray-100">
        <img 
          src={service.imageUrl} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter sepia-[.15]"
        />
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-serif border border-gray-100">
          {service.category}
        </div>
      </div>
      
      <div className="p-8 md:p-10 text-center flex flex-col flex-grow relative">
        {/* Decorative thin gold line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-moana-gold opacity-50 group-hover:w-16 transition-all duration-500"></div>

        <h3 className="font-serif text-2xl mb-4 text-moana-black group-hover:text-moana-gold transition-colors duration-300">
          {service.title}
        </h3>
        
        <p className="text-gray-500 text-sm font-light leading-relaxed mb-8 flex-grow">
          {service.description}
        </p>
        
        <div className="mt-auto">
            <div className="flex items-center justify-center space-x-6 text-xs font-medium uppercase tracking-widest text-moana-black mb-8 opacity-80">
            <span>{service.duration}</span>
            <span className="w-1 h-1 bg-moana-gold rounded-full"></span>
            <span>{service.price}</span>
            </div>

            <a 
            href={SQUARE_BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-[10px] uppercase tracking-[0.2em] border-b border-moana-black/30 pb-1 hover:text-moana-gold hover:border-moana-gold transition-colors duration-300"
            >
            Reserve <ArrowRight size={12} className="ml-2" />
            </a>
        </div>
      </div>
    </div>
  );
};