import React from 'react';
import { MOCK_PAINTINGS } from '../constants';
import { PaintingCard } from './PaintingCard';
import { Painting } from '../types';

interface GalleryProps {
  onPaintingClick: (painting: Painting) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onPaintingClick }) => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {MOCK_PAINTINGS.map((painting) => (
          <PaintingCard
            key={painting.id}
            painting={painting}
            onClick={() => onPaintingClick(painting)}
          />
        ))}
      </div>
    </div>
  );
};
