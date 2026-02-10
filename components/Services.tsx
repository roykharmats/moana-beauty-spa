import React from 'react';
import { ServiceCard } from './ServiceCard';
import { Button } from './Button';
import { SERVICES, SQUARE_BOOKING_URL } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary container mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-textDark font-semibold">Our Services</h2>
            <p className="text-gray-600 font-light text-lg">Hand-selected treatments designed for visible results and deep relaxation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 animate-on-scroll">
            {SERVICES.map(service => (
                <ServiceCard key={service.id} service={service} />
            ))}
        </div>

        <div className="text-center mt-16 animate-on-scroll">
            <Button href={SQUARE_BOOKING_URL} variant="outline" target="_blank" className="px-12 border-primary text-textDark hover:bg-primary hover:text-white">
                View Full Availability
            </Button>
        </div>
    </section>
  );
};