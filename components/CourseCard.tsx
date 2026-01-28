import React from 'react';
import { EducationalItem } from '../types';
import { StarIcon } from './Icons';

interface CourseCardProps {
  course: EducationalItem;
  onEnroll: (course: EducationalItem) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onEnroll }) => {
  return (
    <div className="h-full animate__animated animate__fadeInUp">
      <div className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 h-full group">
        {/* Thumbnail */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={course.thumbnail} 
            alt={course.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-indigo-600 shadow-sm">
            {course.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <div className="flex justify-between items-start mb-2">
             <h3 className="text-lg font-bold text-gray-900 line-clamp-2 leading-tight group-hover:text-indigo-600 transition-colors">
              {course.title}
            </h3>
          </div>
          
          <p className="text-sm text-gray-500 mb-4 line-clamp-2">{course.description}</p>
          
          {/* Meta Info */}
          <div className="mt-auto">
            <div className="flex items-center justify-between mb-4 text-xs text-gray-500">
               <div className="flex items-center space-x-1">
                 <div className="bg-yellow-100 p-1 rounded-full">
                   <StarIcon className="w-3 h-3 text-yellow-500" fill={true} />
                 </div>
                 <span className="font-semibold text-gray-700">{course.rating}</span>
                 <span className="text-gray-400">({course.students?.toLocaleString()})</span>
               </div>
               <div className="flex items-center space-x-2">
                 <img src={course.author.avatar} alt={course.author.name} className="w-5 h-5 rounded-full ring-2 ring-white shadow-sm" />
                 <span className="truncate max-w-[80px]">{course.author.name}</span>
               </div>
            </div>
            
            <div className="flex items-center justify-between border-t border-gray-100 pt-3">
               <span className="text-xl font-bold text-gray-900">${course.price}</span>
               <button 
                onClick={() => onEnroll(course)}
                className="text-indigo-600 font-semibold text-sm hover:text-indigo-800 transition-colors uppercase tracking-wide hover:bg-indigo-50 px-3 py-1 rounded"
               >
                 Enroll Now
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;