import React from 'react';
import { SearchIcon, UserIcon, MenuIcon, GraduationCapIcon, ShoppingCartIcon } from './Icons';

interface NavbarProps {
  onSearch: (query: string) => void;
  cartCount: number;
  onCartClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch, cartCount, onCartClick }) => {
  return (
    <nav className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer shrink-0">
            <div className="bg-indigo-600 p-1.5 rounded-lg">
              <GraduationCapIcon className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 hidden sm:block">
              EduVantage
            </span>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 sm:hidden">
              EV
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-8 items-center text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-indigo-600 transition-colors">Courses</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Books</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Mentors</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Pricing</a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-3 sm:space-x-4 flex-1 justify-end">
            
            {/* Search Bar */}
            <div className="relative group w-full max-w-[160px] sm:max-w-[240px]">
               <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  <SearchIcon className="w-4 h-4" />
               </div>
               <input 
                 type="text" 
                 placeholder="Search..." 
                 className="bg-gray-100 text-sm text-gray-700 rounded-full pl-9 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all placeholder-gray-400"
                 onChange={(e) => onSearch(e.target.value)}
               />
            </div>

            {/* Cart Button */}
            <button 
              className="relative text-gray-500 hover:text-indigo-600 transition-colors p-1"
              onClick={onCartClick}
            >
              <ShoppingCartIcon className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white">
                  {cartCount}
                </span>
              )}
            </button>

            <button className="text-gray-500 hover:text-indigo-600 transition-colors hidden sm:block">
              <UserIcon className="w-5 h-5" />
            </button>
            <button className="lg:hidden text-gray-500 hover:text-indigo-600 transition-colors">
              <MenuIcon className="w-6 h-6" />
            </button>
            <button className="hidden sm:block bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 hover:shadow-lg transition-all transform hover:-translate-y-0.5 whitespace-nowrap">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
