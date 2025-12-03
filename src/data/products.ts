export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  tag?: string;
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 59.99,
    description:
      'Comfortable wireless headphones with noise isolation and long battery life.',
    tag: 'Best Seller',
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 129.99,
    description:
      'Track your fitness, notifications, and sleep with this stylish smartwatch.',
    tag: 'New',
  },
  {
    id: '3',
    name: 'Bluetooth Speaker',
    price: 39.99,
    description:
      'Portable speaker with powerful sound and water-resistant design.',
    tag: 'Popular',
  },
  {
    id: '4',
    name: 'Wireless Mouse',
    price: 24.99,
    description:
      'Ergonomic wireless mouse with adjustable DPI and long battery life.',
    tag: 'Trending',
  },
];
