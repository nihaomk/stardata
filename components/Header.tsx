
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <i className="ri-database-2-line text-white text-lg"></i>
            </div>
            <span className="text-white font-bold text-xl">Stardata</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer whitespace-nowrap">
              Home
            </Link>
            <Link href="#about" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer whitespace-nowrap">
              About
            </Link>
            <Link href="#services" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer whitespace-nowrap">
              Services
            </Link>
            <Link href="#solutions" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer whitespace-nowrap">
              Solutions
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer whitespace-nowrap">
              Contact
            </Link>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all cursor-pointer whitespace-nowrap">
              Get Started
            </button>
          </nav>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-slate-800 pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="#home" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">Home</Link>
              <Link href="#about" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">About</Link>
              <Link href="#services" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">Services</Link>
              <Link href="#solutions" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">Solutions</Link>
              <Link href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">Contact</Link>
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all cursor-pointer whitespace-nowrap w-fit">
                Get Started
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
