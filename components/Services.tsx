import React from 'react';
import { ServiceCard } from './ServiceCard';
import { Button } from './Button';
import { SERVICES, SQUARE_BOOKING_URL } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 md:py-40 container mx-auto px-6 bg-white relative">
        <div className="text-center max-w-3xl mx-auto mb-24 animate-on-scroll">
            <span className="text-moana-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-6 block">Curated Menu</span>
            <h2 className="font-serif text-5xl md:text-6xl mb-8 text-moana-black">Services</h2>
            <p className="text-gray-400 font-light text-lg">Hand-selected treatments designed for visible results and deep relaxation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 animate-on-scroll">
            {SERVICES.map(service => (
                <ServiceCard key={service.id} service={service} />
            ))}
        </div>

        <div className="text-center mt-24 animate-on-scroll">
            <Button href={SQUARE_BOOKING_URL} variant="outline" target="_blank" className="px-12">
                View Full Availability
            </Button>
        </div>
    </section>
  );
};