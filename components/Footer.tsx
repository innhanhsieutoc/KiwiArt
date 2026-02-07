import React from 'react';
import { NAV_ITEMS, SOCIAL_MEDIA } from '../constants';

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
              <a href={SOCIAL_MEDIA.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-300 transition-colors duration-200 transform hover:scale-125" title="Instagram">
                <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.251-.148-4.77-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.359.201-6.528 2.373-6.728 6.728-.058 1.28-.072 1.687-.072 4.947s.014 3.667.072 4.947c.204 4.354 2.375 6.527 6.728 6.728 1.28.058 1.687.072 4.947.072s3.667-.014 4.947-.072c4.354-.204 6.527-2.375 6.728-6.728.058-1.28.072-1.687.072-4.947s-.014-3.667-.072-4.947c-.204-4.356-2.375-6.528-6.728-6.728-1.28-.058-1.687-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.44-.645-1.44-1.44s.644-1.44 1.44-1.44 1.44.645 1.44 1.44-.644 1.44-1.44 1.44z"/>
                </svg>
              </a>
              <a href={SOCIAL_MEDIA.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-300 transition-colors duration-200 transform hover:scale-125" title="Facebook">
                <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.271 0-4.192 1.549-4.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href={SOCIAL_MEDIA.tiktok} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-300 transition-colors duration-200 transform hover:scale-125" title="TikTok">
                <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.92-2.32 2.89 2.89 0 0 1 2.31 1.39V9.58a6.29 6.29 0 1 0 10.86 3.75v-3.33a8.01 8.01 0 0 0 3.77-1.01v-3.3a4.7 4.7 0 0 1-.61 0z"/>
                </svg>
              </a>
              <a href={SOCIAL_MEDIA.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-300 transition-colors duration-200 transform hover:scale-125" title="YouTube">
                <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href={SOCIAL_MEDIA.viber} className="text-gray-300 hover:text-purple-300 transition-colors duration-200 transform hover:scale-125" title="Viber">
                <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                  <path d="M12 0C5.372 0 0 4.477 0 10c0 2.547 1.091 4.898 2.914 6.67.071 2.889-1.497 5.75-1.82 6.831l3.636-1.918c1.153.592 2.467.937 3.81.937 6.628 0 12-4.477 12-10S18.628 0 12 0zm.5 14.5h-1v-4h1v4zm-3.5 0h1v-3h1v-1h-1v-.5c0-.276.224-.5.5-.5h.5v-1c-.821 0-1.5.679-1.5 1.5v.5h-.5v1h.5v3z"/>
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