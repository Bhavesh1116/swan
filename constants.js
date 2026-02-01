// Backend-safe constants (NO TypeScript)

export const MENU_ITEMS = [
  {
    id: '1',
    name: 'Mixed Oysters (Dozen)',
    description:
      'A curated selection of the freshest local oysters. Served with mignonette, horseradish, and lemon.',
    price: 36,
    currency: '$',
    category: 'Seafood',
    rating: 5.0,
    reviewsCount: 450,
    isChefSpecial: true,
    image:
      'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&w=800&q=80',
    calories: 120,
  },
  {
    id: '2',
    name: 'Dungeness Crab Back',
    description:
      'Our signature item. Savory crab "butter" (fat) served in the shell. Rich, creamy, and unforgettable.',
    price: 14,
    currency: '$',
    category: 'Seafood',
    rating: 4.9,
    reviewsCount: 320,
    isChefSpecial: true,
    image:
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
    calories: 300,
  },
  {
    id: '3',
    name: 'Sicilian Sashimi',
    description:
      'Thinly sliced raw scallops, salmon, or tuna drizzled with olive oil, capers, and red onion.',
    price: 28,
    currency: '$',
    category: 'Seafood',
    rating: 4.8,
    reviewsCount: 180,
    isChefSpecial: true,
    image:
      'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?auto=format&fit=crop&w=800&q=80',
    calories: 250,
  },
  {
    id: '4',
    name: 'Boston Clam Chowder',
    description:
      'Creamy, comforting, and loaded with clams. Served with sourdough bread.',
    price: 9,
    currency: '$',
    category: 'Chowder',
    rating: 4.7,
    reviewsCount: 290,
    isChefSpecial: false,
    image:
      'https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=800&q=80',
    calories: 450,
  },
  {
    id: '5',
    name: 'Crab Louie Salad',
    description:
      'A San Francisco classic. Heaps of fresh Dungeness crab meat over crisp lettuce with Louie dressing.',
    price: 32,
    currency: '$',
    category: 'Salads',
    rating: 4.9,
    reviewsCount: 210,
    isChefSpecial: false,
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    calories: 550,
  },
];

export const RESTAURANT_INFO = {
  name: 'Swan Oyster Depot',
  address: '1517 Polk St, San Francisco, CA 94109',
  phone: '+1 (415) 673-1101',
  description:
    'No-frills counter nook in a fish market is a bustling landmark for raw-bar fare & casual seafood. A San Francisco legend since 1912.',
};
