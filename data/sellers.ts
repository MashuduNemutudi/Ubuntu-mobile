// data/sellers.ts
export type Seller = {
  id: string;
  name: string;
  bio?: string;
  phone?: string;
  email?: string;
  address?: string;
  image?: string;
  placeIds?: string[];
};

export const SELLERS: Seller[] = [
  {
    id: 's1',
    name: 'Maboneng Collective',
    bio: 'Community market organisers — crafts, food & music.',
    phone: '+27 71 000 1111',
    email: 'maboneng@example.org',
    address: 'Fox St, Johannesburg',
    image: 'https://placehold.co/400x300?text=Maboneng+Collective',
    placeIds: ['p1'],
  },
  {
    id: 's2',
    name: 'Braam Bites Group',
    bio: 'Group of street-food vendors and popup kitchens.',
    phone: '+27 72 222 3333',
    address: 'Braamfontein',
    image: 'https://placehold.co/400x300?text=Braam+Bites',
    placeIds: ['p2'],
  },
];
