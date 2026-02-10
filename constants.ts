import { Service, Testimonial, NavItem } from './types';

export const SQUARE_BOOKING_URL = "https://squareup.com/appointments/book/YOUR_SQUARE_ID";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Philosophy', href: '#excellence' },
  { label: 'Treatments', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Natural Skin Tightening',
    description: 'A non-invasive treatment stimulating collagen production for a naturally lifted look.',
    price: '$250',
    duration: '60 min',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop',
    category: 'Face'
  },
  {
    id: 's2',
    title: 'Deep Tissue Restoration',
    description: 'Targeted therapeutic massage to release chronic tension and restore mobility.',
    price: '$180',
    duration: '90 min',
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop',
    category: 'Body'
  },
  {
    id: 's3',
    title: 'Hydra-Glow Facial',
    description: 'Deep cleansing and hydration using advanced serums for an immediate radiance boost.',
    price: '$195',
    duration: '60 min',
    imageUrl: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop',
    category: 'Face'
  },
  {
    id: 's4',
    title: 'Volcanic Stone Therapy',
    description: 'Warm basalt stones melt away tension and promote profound relaxation.',
    price: '$210',
    duration: '75 min',
    imageUrl: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=800&auto=format&fit=crop',
    category: 'Body'
  },
  {
    id: 's5',
    title: 'Holistic Scalp Treatment',
    description: 'A sensory experience focusing on cranial pressure points and aromatic oils.',
    price: '$95',
    duration: '45 min',
    imageUrl: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800&auto=format&fit=crop',
    category: 'Wellness'
  },
  {
    id: 's6',
    title: 'Lymphatic Drainage',
    description: 'Gentle, rhythmic strokes to encourage lymph flow and reduce water retention.',
    price: '$160',
    duration: '60 min',
    imageUrl: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop',
    category: 'Body'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Sarah Jenkins',
    text: "The most serene experience I've had in Waikiki. The attention to detail is unmatched.",
    rating: 5
  },
  {
    id: 't2',
    author: 'Michael Chen',
    text: "Truly clinical results in a luxury setting. My skin has never looked better.",
    rating: 5
  },
  {
    id: 't3',
    author: 'Elena Rodriguez',
    text: "A sanctuary of calm. The therapists are true masters of their craft.",
    rating: 5
  }
];