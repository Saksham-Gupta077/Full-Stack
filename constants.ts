import { EducationalItem, ContentType } from './types';

export const CATEGORIES = ["All", "Development", "Design", "Business", "Marketing", "Science"];

export const MOCK_COURSES: EducationalItem[] = [
  {
    id: 'c1',
    title: 'Complete React Developer in 2025',
    description: 'Master React.js, Redux, Hooks, GraphQL, and build real-world apps with a modern curriculum.',
    thumbnail: 'https://picsum.photos/400/225?random=1',
    rating: 4.8,
    price: 89.99,
    author: { name: 'Sarah Jenkins', avatar: 'https://picsum.photos/50/50?random=10' },
    category: 'Development',
    students: 15400,
    type: ContentType.COURSE
  },
  {
    id: 'c2',
    title: 'UI/UX Design Masterclass',
    description: 'Learn to design beautiful user interfaces and user experiences using Figma and Adobe XD.',
    thumbnail: 'https://picsum.photos/400/225?random=2',
    rating: 4.9,
    price: 94.50,
    author: { name: 'Michael Chen', avatar: 'https://picsum.photos/50/50?random=11' },
    category: 'Design',
    students: 8200,
    type: ContentType.COURSE
  },
  {
    id: 'c3',
    title: 'Python for Data Science and AI',
    description: 'Dive deep into Python, Pandas, NumPy, and Machine Learning concepts.',
    thumbnail: 'https://picsum.photos/400/225?random=3',
    rating: 4.7,
    price: 120.00,
    author: { name: 'Dr. Emily Roberts', avatar: 'https://picsum.photos/50/50?random=12' },
    category: 'Science',
    students: 22000,
    type: ContentType.COURSE
  },
  {
    id: 'c4',
    title: 'Digital Marketing Strategy 101',
    description: 'SEO, Social Media Marketing, Email Marketing, and Analytics for business growth.',
    thumbnail: 'https://picsum.photos/400/225?random=4',
    rating: 4.5,
    price: 49.99,
    author: { name: 'James Wilson', avatar: 'https://picsum.photos/50/50?random=13' },
    category: 'Marketing',
    students: 5600,
    type: ContentType.COURSE
  },
  {
    id: 'c5',
    title: 'Financial Analysis for Startups',
    description: 'Understand balance sheets, cash flow, and valuation methods for modern businesses.',
    thumbnail: 'https://picsum.photos/400/225?random=50',
    rating: 4.6,
    price: 79.99,
    author: { name: 'Robert Fox', avatar: 'https://picsum.photos/50/50?random=50' },
    category: 'Business',
    students: 3400,
    type: ContentType.COURSE
  },
  {
    id: 'c6',
    title: 'Advanced JavaScript Concepts',
    description: 'Closures, Event Loop, Prototypes, and Asynchronous programming explained simply.',
    thumbnail: 'https://picsum.photos/400/225?random=51',
    rating: 4.9,
    price: 65.00,
    author: { name: 'Sarah Jenkins', avatar: 'https://picsum.photos/50/50?random=10' },
    category: 'Development',
    students: 9000,
    type: ContentType.COURSE
  },
  {
    id: 'c7',
    title: 'Graphic Design Bootcamp',
    description: 'Photoshop, Illustrator, and InDesign for beginners. Create stunning visuals.',
    thumbnail: 'https://picsum.photos/400/225?random=52',
    rating: 4.7,
    price: 55.00,
    author: { name: 'Jessica Lee', avatar: 'https://picsum.photos/50/50?random=52' },
    category: 'Design',
    students: 12000,
    type: ContentType.COURSE
  },
  {
    id: 'c8',
    title: 'Machine Learning A-Z',
    description: 'Hands-on Python & R In Data Science, Machine Learning & Deep Learning.',
    thumbnail: 'https://picsum.photos/400/225?random=53',
    rating: 4.8,
    price: 139.99,
    author: { name: 'Dr. Emily Roberts', avatar: 'https://picsum.photos/50/50?random=12' },
    category: 'Science',
    students: 28000,
    type: ContentType.COURSE
  }
];

export const MOCK_BOOKS: EducationalItem[] = [
  {
    id: 'b1',
    title: 'Clean Code: A Handbook',
    description: 'Even bad code can function. But if code isn\'t clean, it can bring a development organization to its knees.',
    thumbnail: 'https://picsum.photos/300/450?random=5',
    rating: 4.9,
    price: 35.00,
    author: { name: 'Robert C. Martin', avatar: 'https://picsum.photos/50/50?random=14' },
    category: 'Development',
    pages: 464,
    type: ContentType.BOOK
  },
  {
    id: 'b2',
    title: 'The Design of Everyday Things',
    description: 'The ultimate guide to human-centered design, showing how good design is easier to understand.',
    thumbnail: 'https://picsum.photos/300/450?random=6',
    rating: 4.8,
    price: 28.50,
    author: { name: 'Don Norman', avatar: 'https://picsum.photos/50/50?random=15' },
    category: 'Design',
    pages: 368,
    type: ContentType.BOOK
  },
  {
    id: 'b3',
    title: 'Astrophysics for People in a Hurry',
    description: 'What is the nature of space and time? How do we fit within the universe?',
    thumbnail: 'https://picsum.photos/300/450?random=7',
    rating: 4.7,
    price: 18.99,
    author: { name: 'Neil deGrasse Tyson', avatar: 'https://picsum.photos/50/50?random=16' },
    category: 'Science',
    pages: 224,
    type: ContentType.BOOK
  },
  {
    id: 'b4',
    title: 'Zero to One',
    description: 'Notes on Startups, or How to Build the Future. A fresh view on innovation.',
    thumbnail: 'https://picsum.photos/300/450?random=8',
    rating: 4.6,
    price: 24.00,
    author: { name: 'Peter Thiel', avatar: 'https://picsum.photos/50/50?random=17' },
    category: 'Business',
    pages: 224,
    type: ContentType.BOOK
  }
];