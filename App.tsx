import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseCard from './components/CourseCard';
import BookCard from './components/BookCard';
import ChatWidget from './components/ChatWidget';
import Toast from './components/Toast';
import CartDrawer from './components/CartDrawer';
import { MOCK_COURSES, MOCK_BOOKS, CATEGORIES } from './constants';
import { GraduationCapIcon, BookIcon } from './components/Icons';
import { EducationalItem } from './types';

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [notification, setNotification] = useState({ show: false, message: "" });
  const [cart, setCart] = useState<EducationalItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filterContent = (item: any) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  };

  const filteredCourses = MOCK_COURSES.filter(filterContent);
  const filteredBooks = MOCK_BOOKS.filter(filterContent);

  const showToast = (message: string) => {
    setNotification({ show: true, message });
  };

  const addToCart = (item: EducationalItem) => {
    setCart(prev => [...prev, item]);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleEnroll = (course: EducationalItem) => {
    addToCart(course);
    showToast(`Added ${course.title} to cart`);
  };

  const handleBuyBook = (book: EducationalItem) => {
    addToCart(book);
    showToast(`${book.title} added to cart!`);
    setIsCartOpen(true); // Automatically open cart when a book is added as requested
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar 
        onSearch={setSearchQuery} 
        cartCount={cart.length} 
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        items={cart} 
        onClose={() => setIsCartOpen(false)} 
        onRemove={removeFromCart}
      />

      <Toast 
        isVisible={notification.show} 
        message={notification.message} 
        onClose={() => setNotification({ ...notification, show: false })} 
      />
      
      <main className="flex-grow">
        <Hero />

        {/* Categories Sticky Filter */}
        <div className="sticky top-16 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 py-4 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="d-flex gap-2 overflow-auto pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`btn rounded-pill px-4 text-sm fw-bold transition-all ${
                    activeCategory === cat
                      ? 'btn-primary bg-indigo-600 border-indigo-600 text-white'
                      : 'btn-light text-gray-600'
                  }`}
                  style={{ whiteSpace: 'nowrap' }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Courses Section - Using Bootstrap Grid */}
        <section id="courses-section" className="py-5">
          <div className="container">
            <div className="d-flex align-items-center mb-4">
              <div className="bg-indigo-100 p-2 rounded me-3">
                  <GraduationCapIcon className="w-6 h-6 text-indigo-600" />
              </div>
              <h2 className="h2 fw-bold text-gray-900 mb-0">Featured Courses</h2>
            </div>
            
            <div className="row g-4">
              {filteredCourses.map(course => (
                <div key={course.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
                  <CourseCard course={course} onEnroll={handleEnroll} />
                </div>
              ))}
            </div>
            
            {filteredCourses.length === 0 && (
               <div className="text-center py-5 text-muted animate__animated animate__fadeIn">
                 {searchQuery ? `No courses found matching "${searchQuery}"` : "No courses found in this category."}
               </div>
            )}
          </div>
        </section>

        {/* Books Section - Using Bootstrap Grid */}
        <section className="py-5 bg-gray-100 border-top">
           <div className="container">
            <div className="d-flex align-items-center mb-4">
                <div className="bg-pink-100 p-2 rounded me-3">
                    <BookIcon className="w-6 h-6 text-pink-600" />
                </div>
                <h2 className="h2 fw-bold text-gray-900 mb-0">Recommended Books</h2>
            </div>

            <div className="row g-4">
                {filteredBooks.map(book => (
                  <div key={book.id} className="col-12 col-lg-6">
                    <BookCard book={book} onBuy={handleBuyBook} />
                  </div>
                ))}
            </div>
            
            {filteredBooks.length === 0 && (
                <div className="text-center py-5 text-muted animate__animated animate__fadeIn">
                  {searchQuery ? `No books found matching "${searchQuery}"` : "No books found in this category."}
                </div>
            )}
           </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-top py-5 mt-auto">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="mb-3 mb-md-0">
                <span className="h5 fw-bold text-gray-900">EduVantage</span>
                <p className="text-muted small mt-1 mb-0">© 2025 EduVantage Inc. All rights reserved.</p>
            </div>
            <div className="d-flex gap-4">
                <a href="#" className="text-secondary hover:text-primary">Privacy</a>
                <a href="#" className="text-secondary hover:text-primary">Terms</a>
                <a href="#" className="text-secondary hover:text-primary">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
}

export default App;
