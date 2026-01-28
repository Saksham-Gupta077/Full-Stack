export enum ContentType {
  COURSE = 'COURSE',
  BOOK = 'BOOK'
}

export interface Author {
  name: string;
  avatar: string;
}

export interface EducationalItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  rating: number;
  price: number;
  author: Author;
  category: string;
  students?: number; // For courses
  pages?: number; // For books
  type: ContentType;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}
