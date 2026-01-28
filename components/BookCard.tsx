import React from 'react';
import { EducationalItem } from '../types';
import { StarIcon, BookIcon } from './Icons';

interface BookCardProps {
  book: EducationalItem;
  onBuy: (book: EducationalItem) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onBuy }) => {
  return (
    <div className="h-full animate__animated animate__fadeInUp">
      <div className="flex flex-col sm:flex-row bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group h-full">
        {/* Book Cover */}
        <div className="sm:w-1/3 relative bg-gray-100 flex items-center justify-center p-4">
          <div className="relative w-32 shadow-lg transform transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105">
              <img 
              src={book.thumbnail} 
              alt={book.title} 
              className="w-full h-auto rounded-r-md object-cover"
              style={{ aspectRatio: '2/3' }}
              />
              {/* Spine effect */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-r from-black/20 to-transparent rounded-l-sm"></div>
          </div>
        </div>

        {/* Content */}
        <div className="sm:w-2/3 p-6 flex flex-col justify-center">
          <div className="mb-2">
              <span className="inline-block px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold tracking-wide mb-2">
                  {book.category}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
              {book.title}
              </h3>
              <p className="text-sm text-gray-500 font-medium">by {book.author.name}</p>
          </div>

          <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
              {book.description}
          </p>

          <div className="flex items-center space-x-4 mt-auto">
               <div className="flex items-center space-x-1">
                 <StarIcon className="w-4 h-4 text-yellow-400" fill={true} />
                 <span className="text-sm font-bold text-gray-700">{book.rating}</span>
               </div>
               <div className="flex items-center text-gray-400 text-sm space-x-1">
                  <BookIcon className="w-4 h-4" />
                  <span>{book.pages} pages</span>
               </div>
          </div>
          
          <div className="mt-5 flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900">${book.price}</span>
              <button 
                onClick={() => onBuy(book)}
                className="bg-gray-900 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors shadow-md transform active:scale-95"
              >
                  Buy Book
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;