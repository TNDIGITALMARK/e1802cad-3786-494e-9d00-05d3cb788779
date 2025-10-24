/**
 * Mock Product Data for E-Commerce Store
 * Categories: Kinderen, Heren, Dames
 * Popular, affordable products with realistic pricing in EUR
 */

export type Category = 'kinderen' | 'heren' | 'dames';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  description: string;
  sizes: string[];
  colors: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  featured?: boolean;
  brand: string;
}

export const products: Product[] = [
  // ========== DAMES (Women's) ==========
  {
    id: 'dames-1',
    name: 'Gestreepte T-shirt',
    category: 'dames',
    price: 12.99,
    image: '/generated/product-dress-gray.png',
    description: 'Comfortabele katoenen t-shirt met streepdessin. Perfect voor casual wear.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Grijs', 'Wit', 'Zwart'],
    rating: 4.5,
    reviewCount: 127,
    inStock: true,
    featured: true,
    brand: 'Urban Style'
  },
  {
    id: 'dames-2',
    name: 'Casual Blouse',
    category: 'dames',
    price: 24.99,
    originalPrice: 34.99,
    image: '/generated/product-blouse-casual.png',
    description: 'Elegante blouse met geborduurde details. Ideaal voor kantoor of uitgaan.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Olijfgroen', 'Wit', 'Beige'],
    rating: 4.7,
    reviewCount: 89,
    inStock: true,
    featured: true,
    brand: 'Trend Forward'
  },
  {
    id: 'dames-3',
    name: 'Zomerjurk Floraal',
    category: 'dames',
    price: 39.99,
    image: '/generated/product-summer-dress.png',
    description: 'Luchtige zomerjurk met tropisch bloemenpatroon. Perfect voor warme dagen.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Multicolor'],
    rating: 4.8,
    reviewCount: 156,
    inStock: true,
    featured: true,
    brand: 'Casual Comfort'
  },
  {
    id: 'dames-4',
    name: 'Slim Fit Jeans',
    category: 'dames',
    price: 34.99,
    image: '/generated/product-jeans-blue.png',
    description: 'Klassieke slim fit jeans met stretch voor optimaal comfort.',
    sizes: ['26', '27', '28', '29', '30', '31', '32'],
    colors: ['Blauw', 'Zwart', 'Lichtblauw'],
    rating: 4.4,
    reviewCount: 203,
    inStock: true,
    brand: 'Urban Style'
  },
  {
    id: 'dames-5',
    name: 'Elegante Blazer',
    category: 'dames',
    price: 49.99,
    image: '/generated/product-blazer-navy.png',
    description: 'Professionele blazer voor zakelijke gelegenheden.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Navy', 'Zwart', 'Grijs'],
    rating: 4.6,
    reviewCount: 74,
    inStock: true,
    brand: 'Trend Forward'
  },
  {
    id: 'dames-6',
    name: 'Casual Hoodie',
    category: 'dames',
    price: 29.99,
    image: '/generated/product-hoodie-beige.png',
    description: 'Zachte hoodie met capuchon. Perfect voor relaxte dagen.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Beige', 'Grijs', 'Zwart'],
    rating: 4.5,
    reviewCount: 142,
    inStock: true,
    brand: 'Casual Comfort'
  },

  // ========== HEREN (Men's) ==========
  {
    id: 'heren-1',
    name: 'Basic T-shirt',
    category: 'heren',
    price: 9.99,
    image: '/generated/product-tshirt-white.png',
    description: 'Essentieel basic t-shirt van hoogwaardig katoen.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Wit', 'Zwart', 'Grijs', 'Navy'],
    rating: 4.3,
    reviewCount: 287,
    inStock: true,
    featured: true,
    brand: 'Urban Style'
  },
  {
    id: 'heren-2',
    name: 'Slim Fit Jeans',
    category: 'heren',
    price: 39.99,
    originalPrice: 54.99,
    image: '/generated/product-jeans-blue.png',
    description: 'Moderne slim fit jeans met stretch comfort.',
    sizes: ['30', '32', '34', '36', '38'],
    colors: ['Dark Blue', 'Black', 'Light Blue'],
    rating: 4.6,
    reviewCount: 198,
    inStock: true,
    featured: true,
    brand: 'Trend Forward'
  },
  {
    id: 'heren-3',
    name: 'Cargo Broek',
    category: 'heren',
    price: 44.99,
    image: '/generated/product-cargo-pants.png',
    description: 'Praktische cargo broek met meerdere zakken.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Grijs', 'Olijf', 'Zwart', 'Beige'],
    rating: 4.4,
    reviewCount: 112,
    inStock: true,
    brand: 'Casual Comfort'
  },
  {
    id: 'heren-4',
    name: 'Blazer Navy',
    category: 'heren',
    price: 79.99,
    image: '/generated/product-blazer-navy.png',
    description: 'Klassieke blazer voor formele gelegenheden.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy', 'Zwart', 'Grijs'],
    rating: 4.7,
    reviewCount: 86,
    inStock: true,
    brand: 'Trend Forward'
  },
  {
    id: 'heren-5',
    name: 'Sneakers Wit',
    category: 'heren',
    price: 49.99,
    image: '/generated/product-sneakers-white.png',
    description: 'Minimalist design witte sneakers voor elke outfit.',
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Wit', 'Zwart'],
    rating: 4.5,
    reviewCount: 234,
    inStock: true,
    featured: true,
    brand: 'Urban Style'
  },
  {
    id: 'heren-6',
    name: 'Hoodie Beige',
    category: 'heren',
    price: 34.99,
    image: '/generated/product-hoodie-beige.png',
    description: 'Comfortabele hoodie voor casual dagen.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Beige', 'Grijs', 'Zwart', 'Navy'],
    rating: 4.4,
    reviewCount: 167,
    inStock: true,
    brand: 'Casual Comfort'
  },

  // ========== KINDEREN (Kids) ==========
  {
    id: 'kinderen-1',
    name: 'Streepjes T-shirt',
    category: 'kinderen',
    price: 14.99,
    image: '/generated/product-kids-tshirt.png',
    description: 'Kleurrijk gestreept t-shirt voor kinderen. Zacht en ademend.',
    sizes: ['98/104', '110/116', '122/128', '134/140', '146/152'],
    colors: ['Multicolor', 'Blauw/Wit', 'Rood/Wit'],
    rating: 4.6,
    reviewCount: 94,
    inStock: true,
    featured: true,
    brand: 'Kids Fashion'
  },
  {
    id: 'kinderen-2',
    name: 'Denim Jeans',
    category: 'kinderen',
    price: 24.99,
    image: '/generated/product-jeans-blue.png',
    description: 'Duurzame kinder jeans voor actieve kids.',
    sizes: ['98/104', '110/116', '122/128', '134/140', '146/152'],
    colors: ['Blauw', 'Zwart'],
    rating: 4.5,
    reviewCount: 118,
    inStock: true,
    brand: 'Kids Fashion'
  },
  {
    id: 'kinderen-3',
    name: 'Hoodie',
    category: 'kinderen',
    price: 19.99,
    originalPrice: 29.99,
    image: '/generated/product-hoodie-beige.png',
    description: 'Warme hoodie met zachte fleece binnenkant.',
    sizes: ['98/104', '110/116', '122/128', '134/140', '146/152'],
    colors: ['Beige', 'Grijs', 'Roze', 'Blauw'],
    rating: 4.7,
    reviewCount: 145,
    inStock: true,
    featured: true,
    brand: 'Casual Comfort'
  },
  {
    id: 'kinderen-4',
    name: 'Sneakers',
    category: 'kinderen',
    price: 34.99,
    image: '/generated/product-sneakers-white.png',
    description: 'Comfortabele sneakers voor school en spelen.',
    sizes: ['28', '29', '30', '31', '32', '33', '34', '35'],
    colors: ['Wit', 'Zwart', 'Roze'],
    rating: 4.4,
    reviewCount: 176,
    inStock: true,
    brand: 'Urban Style'
  },
  {
    id: 'kinderen-5',
    name: 'Zomerjurk',
    category: 'kinderen',
    price: 22.99,
    image: '/generated/product-summer-dress.png',
    description: 'Leuke zomerjurk met vrolijk bloemenpatroon.',
    sizes: ['98/104', '110/116', '122/128', '134/140', '146/152'],
    colors: ['Multicolor', 'Roze', 'Blauw'],
    rating: 4.8,
    reviewCount: 89,
    inStock: true,
    brand: 'Kids Fashion'
  },
];

// Helper functions
export const getProductsByCategory = (category: Category): Product[] => {
  return products.filter(p => p.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured === true);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getCategoryCount = (category: Category): number => {
  return getProductsByCategory(category).length;
};

export const categoryInfo = {
  kinderen: {
    name: 'Kinderen',
    slug: 'kinderen',
    description: 'Trendy en comfortabele kleding voor kinderen',
    color: 'hsl(200, 70%, 90%)' // Soft blue
  },
  heren: {
    name: 'Heren',
    slug: 'heren',
    description: 'Stijlvolle mode voor de moderne man',
    color: 'hsl(220, 15%, 30%)' // Navy/charcoal
  },
  dames: {
    name: 'Dames',
    slug: 'dames',
    description: 'Elegante en trendy kledingstukken voor dames',
    color: 'hsl(350, 40%, 60%)' // Rose/burgundy
  }
};
