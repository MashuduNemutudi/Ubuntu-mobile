// data/countries.ts
export type Country = {
  description: string | undefined;
  id: string;
  name: string;
  emoji?: string;
  intro?: string;
  featured?: boolean;
  slug?: string;
};

export const COUNTRIES: Country[] = [
  {
      id: 'za', name: 'South Africa', emoji: '🇿🇦', intro: 'Discover the rainbow nation’s diverse cultures, wildlife, and landscapes.', featured: true, slug: 'south-africa',
      description: undefined
  },
  {
      id: 'br', name: 'Brazil', emoji: '🇧🇷', intro: 'Experience the vibrant culture, Amazon rainforest, and stunning beaches.', featured: true, slug: 'brazil',
      description: undefined
  },
  {
      id: 'in', name: 'India', emoji: '🇮🇳', intro: 'Explore ancient traditions, diverse landscapes, and incredible cuisine.', featured: true, slug: 'india',
      description: undefined
  },
  {
      id: 'cn', name: 'China', emoji: '🇨🇳', intro: 'Ancient history meets modern innovation.', featured: true, slug: 'china',
      description: undefined
  },

  // rest of G20 (short intros)
  {
      id: 'ar', name: 'Argentina', emoji: '🇦🇷', intro: 'Land of tango, steak, and stunning landscapes.', slug: 'argentina',
      description: undefined
  },
  {
      id: 'au', name: 'Australia', emoji: '🇦🇺', intro: 'Outback, Great Barrier Reef, and vibrant cities.', slug: 'australia',
      description: undefined
  },
  {
      id: 'ca', name: 'Canada', emoji: '🇨🇦', intro: 'From Niagara Falls to the Rocky Mountains.', slug: 'canada',
      description: undefined
  },
  {
      id: 'fr', name: 'France', emoji: '🇫🇷', intro: 'Romance, wine, and the Eiffel Tower.', slug: 'france',
      description: undefined
  },
  {
      id: 'de', name: 'Germany', emoji: '🇩🇪', intro: 'Castles, beer festivals, and technology.', slug: 'germany',
      description: undefined
  },
  {
      id: 'id', name: 'Indonesia', emoji: '🇮🇩', intro: 'Thousands of islands and tropical paradise.', slug: 'indonesia',
      description: undefined
  },
  {
      id: 'it', name: 'Italy', emoji: '🇮🇹', intro: 'Art, history, and world-renowned cuisine.', slug: 'italy',
      description: undefined
  },
  {
      id: 'jp', name: 'Japan', emoji: '🇯🇵', intro: 'Ancient traditions meet futuristic cities.', slug: 'japan',
      description: undefined
  },
  {
      id: 'mx', name: 'Mexico', emoji: '🇲🇽', intro: 'Vibrant culture, ancient ruins, and beaches.', slug: 'mexico',
      description: undefined
  },
  {
      id: 'ru', name: 'Russia', emoji: '🇷🇺', intro: 'The world’s largest country with rich history.', slug: 'russia',
      description: undefined
  },
  {
      id: 'sa', name: 'Saudi Arabia', emoji: '🇸🇦', intro: 'Ancient heritage and modern megacities.', slug: 'saudi-arabia',
      description: undefined
  },
  {
      id: 'kr', name: 'South Korea', emoji: '🇰🇷', intro: 'K-pop, kimchi, and cutting-edge tech.', slug: 'south-korea',
      description: undefined
  },
  {
      id: 'tr', name: 'Turkey', emoji: '🇹🇷', intro: 'Where East meets West with rich cuisine.', slug: 'turkey',
      description: undefined
  },
  {
      id: 'gb', name: 'United Kingdom', emoji: '🇬🇧', intro: 'Royal traditions, historic landmarks, diverse cities.', slug: 'united-kingdom',
      description: undefined
  },
  {
      id: 'us', name: 'United States', emoji: '🇺🇸', intro: 'From New York to California, diverse landscapes.', slug: 'united-states',
      description: undefined
  },
  {
      id: 'eu', name: 'European Union', emoji: '🇪🇺', intro: 'Diverse cultures united in one union.', slug: 'european-union',
      description: undefined
  },
];
