import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://res.cloudinary.com/dlc5hg3hn/video/upload/v1771114123/demovideo_vrazhs.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white px-4 md:px-8 max-w-4xl animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 drop-shadow-lg animate-text-pop">
          Unveil the Radiance of <span className="text-purple-300">Gemstone Art</span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-10 font-light drop-shadow-md animate-fade-in-delay">
          Exquisite handmade paintings crafted with natural precious stones.
        </p>
        <a
          href="#gallery"
          className="inline-block py-4 px-10 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xl font-semibold rounded-full shadow-lg hover:from-purple-700 hover:to-pink-600 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-75"
        >
          Explore Collection
        </a>
      </div>
    </div>
  );
};
