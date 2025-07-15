
'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
                <i className="ri-database-2-line text-white text-xl"></i>
              </div>
              <span className="text-white font-bold text-2xl">Stardata</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Precision Annotation · Intelligent Harvest. Your premier partner for AI training data, 
              delivering professional and efficient data solutions to power intelligent systems worldwide.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-lg"></i>
              </button>
              <button className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-lg"></i>
              </button>
              <button className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-github-fill text-lg"></i>
              </button>
              <button className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-mail-fill text-lg"></i>
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link href="#services" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">Image Annotation</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">Text Processing</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">Video Analysis</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">Audio Transcription</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">Data Collection</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">Custom Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Industries</h3>
            <ul className="space-y-3">
              <li><Link href="#solutions" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">Autonomous Vehicles</Link></li>
              <li><Link href="#solutions" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">Medical AI</Link></li>
              <li><Link href="#solutions" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">Retail & E-commerce</Link></li>
              <li><Link href="#solutions" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">Security Systems</Link></li>
              <li><Link href="#solutions" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">Manufacturing</Link></li>
              <li><Link href="#solutions" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">Natural Language</Link></li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 py-8 border-t border-slate-800">
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-2 text-blue-400">Contact Information</h4>
            <p className="text-gray-400 text-sm">contact@stardata.ai</p>
            <p className="text-gray-400 text-sm">+86 (022) 8888-8888</p>
          </div>
          
          <div className="text-center">
            <h4 className="font-semibold mb-2 text-blue-400">Quality Guarantee</h4>
            <p className="text-gray-400 text-sm">99.9% Annotation Accuracy</p>
            <p className="text-gray-400 text-sm">24/7 Support Available</p>
          </div>
          
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-2 text-blue-400">Global Presence</h4>
            <p className="text-gray-400 text-sm">Tianjin Headquarters</p>
            <p className="text-gray-400 text-sm">Worldwide Service</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Tianjin Stardata Technology Co., Ltd. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">Privacy Policy</Link>
            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">Terms of Service</Link>
            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
