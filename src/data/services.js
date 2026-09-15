export const services = [
  {
    id: 'plumbing',
    name: 'Plumbing',
    category: 'Repair',
    price: 49,
    rating: 4.9,
    time: '1-2 hours',
    image:
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80',
    description:
      'Fast and reliable plumbing fixes for leaks, clogged drains, pipe repairs, and bathroom fixtures.',
    included: ['Leak detection', 'Pipe repair', 'Fixture installation', 'Drain cleaning'],
    popular: true,
  },
  {
    id: 'electrician',
    name: 'Electrician',
    category: 'Repair',
    price: 59,
    rating: 4.8,
    time: '1-3 hours',
    image:
      'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80',
    description:
      'Licensed electrical support for wiring, lighting, switchboards, and sudden power issues at home.',
    included: ['Electrical inspection', 'Switch replacement', 'Lighting setup', 'Safety check'],
    popular: true,
  },
  {
    id: 'home-cleaning',
    name: 'Home Cleaning',
    category: 'Cleaning',
    price: 35,
    rating: 4.9,
    time: '2-4 hours',
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80',
    description:
      'Professional home cleaning for kitchens, bedrooms, bathrooms, and living spaces with eco-safe products.',
    included: ['Kitchen cleaning', 'Bathroom sanitizing', 'Dusting', 'Floor cleaning'],
    popular: true,
  },
  {
    id: 'ac-repair',
    name: 'AC Repair',
    category: 'Maintenance',
    price: 69,
    rating: 4.7,
    time: '2-3 hours',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
    description:
      'Cooling system troubleshooting and servicing for improved performance and energy efficiency.',
    included: ['AC inspection', 'Gas refill', 'Filter cleaning', 'Temperature testing'],
    popular: false,
  },
  {
    id: 'painting',
    name: 'Painting',
    category: 'Renovation',
    price: 79,
    rating: 4.8,
    time: '1 day',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    description:
      'Refresh your walls with clean finishing, premium paint, and neat, efficient residential painting.',
    included: ['Wall prep', 'Primer coat', 'Paint finish', 'Cleanup'],
    popular: false,
  },
  {
    id: 'appliance-repair',
    name: 'Appliance Repair',
    category: 'Repair',
    price: 55,
    rating: 4.6,
    time: '1-2 hours',
    image:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80',
    description:
      'Quick service for washing machines, refrigerators, ovens, and other household appliances.',
    included: ['Diagnosis', 'Part replacement', 'Function test', 'Safety check'],
    popular: false,
  },
]

export const categories = ['All', ...new Set(services.map((service) => service.category))]

export const popularServices = services.filter((service) => service.popular)
