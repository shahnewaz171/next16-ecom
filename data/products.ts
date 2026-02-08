import type { Product } from '@/types/product';

export const products: Product[] = [
  // Wearables
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'High-quality noise cancelling headphones with 20 hours battery life',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    category: 'Audio',
    inStock: true,
    rating: 4.5,
    reviews: 128
  },
  {
    id: '2',
    name: 'Smart Watch',
    description: 'Fitness tracker with heart rate monitor and sleep tracking',
    price: 149.95,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    category: 'Wearables',
    inStock: true,
    rating: 4.3,
    reviews: 95
  },
  // Accessories
  {
    id: '4',
    name: 'Wireless Mouse',
    description: 'Ergonomic wireless mouse with precision tracking',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop',
    category: 'Accessories',
    inStock: true,
    rating: 4.6,
    reviews: 203
  },
  {
    id: '7',
    name: 'Wireless Charger',
    description: 'Fast wireless charger compatible with all Qi devices',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1591290619618-904f6dd935e3?w=500&h=500&fit=crop',
    category: 'Accessories',
    inStock: true,
    rating: 4.4,
    reviews: 156
  },
  // Electronics
  {
    id: '13',
    name: 'Studio Headphones',
    description: 'Premium studio-quality headphones for audio professionals',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop',
    category: 'Audio',
    inStock: true,
    rating: 4.8,
    reviews: 72
  },
  {
    id: '14',
    name: 'True Wireless Earbuds',
    description: 'Compact earbuds with active noise cancellation',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop',
    category: 'Audio',
    inStock: true,
    rating: 4.5,
    reviews: 189
  },
  {
    id: '16',
    name: 'USB Microphone',
    description: 'Professional USB microphone for podcasting and streaming',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500&h=500&fit=crop',
    category: 'Electronics',
    inStock: true,
    rating: 4.6,
    reviews: 143
  },
  {
    id: '21',
    name: 'USB-C Hub',
    description: 'Multi-port USB-C hub with 4K HDMI output',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop',
    category: 'Electronics',
    inStock: true,
    rating: 4.4,
    reviews: 98
  },
  // Home
  {
    id: '37',
    name: 'Tower Fan',
    description: 'Tower fan with remote control and timer',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1760904730891-8a63cde68d3b?w=500&h=500&fit=crop',
    category: 'Home',
    inStock: true,
    rating: 4.2,
    reviews: 67
  },
  // Smart Home
  {
    id: '25',
    name: 'Smart Speaker',
    description: 'Voice-controlled smart speaker with premium sound',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=500&h=500&fit=crop',
    category: 'Smart Home',
    inStock: true,
    rating: 4.5,
    reviews: 234
  },
  {
    id: '28',
    name: 'Smart Light Bulbs (4-Pack)',
    description: 'Color changing smart LED bulbs with app control',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1550985543-f47f38aeee65?w=500&h=500&fit=crop',
    category: 'Smart Home',
    inStock: true,
    rating: 4.3,
    reviews: 178
  },
  {
    id: '30',
    name: 'Security Camera',
    description: '1080p HD security camera with night vision and motion detection',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1589935447067-5531094415d1?w=500&h=500&fit=crop',
    category: 'Smart Home',
    inStock: true,
    rating: 4.6,
    reviews: 156
  },
  // Kitchen
  {
    id: '32',
    name: 'Electric Kettle',
    description: 'Fast boiling electric kettle with temperature control',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1562158147-f6ba6f5d2950?w=500&h=500&fit=crop',
    category: 'Kitchen',
    inStock: true,
    rating: 4.4,
    reviews: 89
  },
  {
    id: '34',
    name: 'Coffee Maker',
    description: 'Programmable coffee maker with thermal carafe',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&h=500&fit=crop',
    category: 'Kitchen',
    inStock: true,
    rating: 4.5,
    reviews: 123
  },
  {
    id: '36',
    name: 'Blender',
    description: 'High-power blender for smoothies and food prep',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=500&h=500&fit=crop',
    category: 'Kitchen',
    inStock: false,
    rating: 4.3,
    reviews: 67
  },
  // Additional Products
  {
    id: '40',
    name: 'Laptop Stand',
    description: 'Ergonomic aluminum laptop stand with adjustable height',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop',
    category: 'Accessories',
    inStock: true,
    rating: 4.7,
    reviews: 145
  },
  {
    id: '42',
    name: 'Webcam',
    description: '1080p HD webcam with auto-focus and stereo microphones',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=500&fit=crop',
    category: 'Electronics',
    inStock: true,
    rating: 4.5,
    reviews: 112
  },
  {
    id: '45',
    name: 'Mechanical Keyboard',
    description: 'RGB backlit mechanical keyboard with blue switches',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&h=500&fit=crop',
    category: 'Accessories',
    inStock: true,
    rating: 4.6,
    reviews: 198
  }
];
