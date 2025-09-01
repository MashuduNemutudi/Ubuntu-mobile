// data/places.ts
export type Place = {
  id: string;
  name: string;
  tags: string[];
  rating: number;
  lat: number;
  lng: number;
  address?: string;
  description?: string;
  image?: string;
  sellerId?: string;
  crowd_score?: number;
};

export const PLACES: Place[] = [
  {
    id: 'p1',
    name: 'Maboneng Market',
    tags: ['Markets', 'Art', 'Street Food'],
    rating: 4.6,
    lat: -26.2035,
    lng: 28.0473,
    address: 'Fox St, Johannesburg',
    description: 'Vibrant market with local art, live music, and street food stalls.',
    image: 'https://placehold.co/600x400?text=Maboneng+Market',
    sellerId: 's1',
    crowd_score: 0.3,
  },
  {
    id: 'p2',
    name: 'Braam Night Bites',
    tags: ['Street Food', 'Nightlife'],
    rating: 4.4,
    lat: -26.1886,
    lng: 28.0345,
    address: 'Braamfontein',
    description: 'Late-night street food cluster and small music venues.',
    image: 'https://placehold.co/600x400?text=Braam+Night+Bites',
    sellerId: 's2',
    crowd_score: 0.6,
  },
  {
    id: 'p3',
    name: 'Riverwalk Scenic View',
    tags: ['Outdoors', 'Hidden Gems', 'Architecture'],
    rating: 4.7,
    lat: -26.18,
    lng: 28.02,
    address: 'River Walk',
    description: 'Calm riverside path, great for sunsets and photos.',
    image: 'https://placehold.co/600x400?text=Riverwalk',
    crowd_score: 0.15,
  },
];
