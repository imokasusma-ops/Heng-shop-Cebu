export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  compatibility: string[];
  inStock: boolean;
  featured?: boolean;
}

export const categories = [
  { id: 'bolts', name: 'Bolts & Fasteners', image: 'https://insideracing.com.ph/wp-content/uploads/2020/04/IMG_9481.jpg', icon: 'CircleDashed' },
  { id: 'oil', name: 'Engine Oil', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgynXICfrYMzxJlXLeyr2MncGXztcb6GFz7w&s', icon: 'Droplets' },
  { id: 'tires', name: 'Tires & Tubes', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTEJ4awDV91N1B0fvglRBl-JZotA0zUiQX3g&s', icon: 'Circle' },
  { id: 'brakes', name: 'Brake Parts', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ACpXTBO-3qQaw-DYvtIEUB--Q9B1ER4V3w&s', icon: 'Zap' },
];

export const products: Product[] = [];

export const testimonials = [
  {
    id: 1,
    name: 'Mark D.',
    role: 'Daily Commuter',
    content: 'Dali ra kaayo ka-transact. Naa pirmi stock sa mga bolts ug oil. Highly recommended!',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=mark'
  },
  {
    id: 2,
    name: 'John S.',
    role: 'Delivery Rider',
    content: 'Affordable prices and fast replies sa Messenger. Sakto jud para sa mga nagdali.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=john'
  },
  {
    id: 3,
    name: 'Kevin R.',
    role: 'Local Rider',
    content: 'Nindot ila mga pisa, labi na ang mga bolts. Barato ra kumpara sa uban.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=kevin'
  }
];
