import React from 'react';
import { EducationalItem } from '../types';
import { XIcon, TrashIcon } from './Icons';

interface CartDrawerProps {
  isOpen: boolean;
  items: EducationalItem[];
  onClose: () => void;
  onRemove: (id: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, items, onClose, onRemove }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-50 shadow-2xl transform transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-gray-50">
          <h2 className="text-lg font-bold text-gray-900 flex items-center">
            Your Cart
            <span className="ml-2 bg-indigo-100 text-indigo-700 text-xs py-1 px-2 rounded-full">{items.length}</span>
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-red-500 transition-colors">
            <XIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
               <div className="mb-3 p-4 bg-gray-100 rounded-full">
                 <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
               </div>
               <p className="font-medium">Your cart is empty</p>
               <button onClick={onClose} className="mt-4 text-indigo-600 font-semibold hover:underline">Start Browsing</button>
            </div>
          ) : (
            items.map((item, index) => (
              // Using index as key prefix to allow duplicate items if user really wants to buy multiple copies
              <div key={`${item.id}-${index}`} className="flex gap-4 p-3 bg-white border border-gray-100 rounded-xl shadow-sm animate__animated animate__fadeIn">
                <img src={item.thumbnail} alt={item.title} className="w-20 h-20 object-cover rounded-lg bg-gray-100" />
                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-gray-900 line-clamp-1">{item.title}</h4>
                    <p className="text-xs text-gray-500 mt-1">{item.type}</p>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-bold text-indigo-600">${item.price.toFixed(2)}</span>
                    <button 
                      onClick={() => onRemove(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-red-50"
                      title="Remove"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-4 border-t border-gray-100 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600">Total</span>
              <span className="text-2xl font-bold text-gray-900">${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-indigo-600 text-white py-3.5 rounded-xl font-bold hover:bg-indigo-700 active:scale-95 transition-all shadow-lg shadow-indigo-200">
              Checkout Now
            </button>
            <p className="text-center text-xs text-gray-400 mt-3">Secure Checkout Powered by Stripe</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
