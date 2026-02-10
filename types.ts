export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  imageUrl: string;
  category: 'Face' | 'Body' | 'Wellness';
}

export interface Testimonial {
  id: string;
  author: string;
  text: string;
  rating: number;
}

export interface NavItem {
  label: string;
  href: string;
}