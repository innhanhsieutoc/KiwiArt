import React from 'react';
import { NAV_ITEMS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand/Logo */}
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 hover:scale-105 transition-transform duration-300">
              KiwiArt
            </a>
            <p className="mt-4 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Discover a world where natural beauty meets artistic brilliance.
              Each piece is a testament to the earth's treasures and human creativity.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-purple-300 transition-colors duration-200 text-base relative group"
                  >
                    {item.name}
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex justify-center md:justify-start space-x-6 mb-6">
              <a href="#" className="text-gray-300 hover:text-purple-300 transition-colors duration-200 transform hover:scale-125">
                <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.251-.148-4.77-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.359.201-6.528 2.373-6.728 6.728-.058 1.28-.072 1.687-.072 4.947s.014 3.667.072 4.947c.204 4.354 2.375 6.527 6.728 6.728 1.28.058 1.687.072 4.947.072s3.667-.014 4.947-.072c4.354-.204 6.527-2.375 6.728-6.728.058-1.28.072-1.687.072-4.947s-.014-3.667-.072-4.947c-.204-4.356-2.375-6.528-6.728-6.728-1.28-.058-1.687-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.44-.645-1.44-1.44s.644-1.44 1.44-1.44 1.44.645 1.44 1.44-.644 1.44-1.44 1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-300 transition-colors duration-200 transform hover:scale-125">
                <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.271 0-4.192 1.549-4.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-300 transition-colors duration-200 transform hover:scale-125">
                <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.418.724-.659 1.58-.659 2.484 0 1.694.831 3.24 2.091 4.129-.766-.025-1.491-.234-2.118-.582v.06c0 3.224 2.557 5.895 5.923 6.5-.62.162-1.29.21-1.966.083.831 2.609 3.328 4.508 6.29 4.562-2.558 2-5.783 3.21-9.284 3.21- .604 0-1.19-.035-1.76-.104 3.233 2.112 7.161 3.35 11.33 3.35 13.627 0 21.09-11.162 21.09-20.834 0-.353-.012-.7-.02-.1.381-.324.733-.695 1.06-1.134z"/>
                </svg>
              </a>
            </div>
            <p className="text-sm">
              Email: <a href="mailto:info@kiwiart.com" className="text-purple-300 hover:underline">info@kiwiart.com</a>
            </p>
            <p className="text-sm">
              Phone: <a href="tel:+1234567890" className="text-purple-300 hover:underline">+1 (234) 567-890</a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} KiwiArt. All rights reserved.</p>
          <p className="mt-2">
            Designed with <span role="img" aria-label="heart">❤️</span> by the KiwiArt team.
          </p>
        </div>
      </div>
    </footer>
  );
};