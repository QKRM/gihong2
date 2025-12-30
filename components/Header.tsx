
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-orange rounded-lg flex items-center justify-center text-white font-bold text-xl">
            G
          </div>
          <span className={`text-2xl font-black tracking-tighter ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            GIHONG
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-semibold transition-colors hover:text-[#f15a24] ${
                isScrolled ? 'text-gray-600' : 'text-white/90'
              }`}
            >
              {item.label}
            </a>
          ))}
          <button className="bg-gradient-orange text-white px-5 py-2 rounded-full text-sm font-bold hover:shadow-lg transition-all transform hover:-translate-y-0.5">
            Contact Us
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} className={isScrolled ? 'text-gray-900' : 'text-white'} /> : <Menu size={28} className={isScrolled ? 'text-gray-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-2xl md:hidden border-t">
          <div className="flex flex-col p-6 gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-lg font-medium text-gray-800 flex justify-between items-center border-b border-gray-100 pb-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
                <ChevronRight size={18} className="text-gray-400" />
              </a>
            ))}
            <button className="w-full bg-gradient-orange text-white py-3 rounded-xl font-bold mt-4">
              문의하기
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
