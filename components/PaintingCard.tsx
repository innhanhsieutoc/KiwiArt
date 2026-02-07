import React from 'react';
import { Painting } from '../types';

interface PaintingCardProps {
  painting: Painting;
  onClick: () => void;
}

export const PaintingCard: React.FC<PaintingCardProps> = ({ painting, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-100 hover:border-purple-300"
    >
      <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-t-xl">
        <img
          src={painting.thumbnailUrl}
          alt={painting.name}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 ease-in-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300 mb-1">
          {painting.name}
        </h3>
        <p className="text-sm text-gray-600 mb-3">by {painting.artist}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            ${painting.price.toFixed(2)}
          </span>
          <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-400 text-white rounded-full text-sm font-medium hover:from-purple-600 hover:to-pink-500 transition-all duration-300 ease-in-out transform group-hover:scale-105">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
