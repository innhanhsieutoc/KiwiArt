import React, { useEffect, useRef, useState } from 'react';
import { Painting } from '../types';

interface PaintingDetailModalProps {
  painting: Painting;
  onClose: () => void;
}

export const PaintingDetailModal: React.FC<PaintingDetailModalProps> = ({ painting, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [mainMedia, setMainMedia] = useState(painting.imageUrl); // State to switch main image/video preview

  useEffect(() => {
    // Reset main media when painting changes (e.g., if a new painting is opened in the modal)
    setMainMedia(painting.imageUrl);
  }, [painting]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!painting) return null;

  const hasDiscount = painting.originalPrice && painting.originalPrice > painting.price;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm animate-fade-in"> {/* Increased z-index for overlay */}
      <div
        ref={modalRef}
        // Simplified initial classes to ensure visibility. animate-scale-in handles transform and opacity.
        className="relative bg-white rounded-lg shadow-2xl max-w-6xl w-full max-h-[95vh] overflow-y-auto animate-scale-in"
        role="dialog"
        aria-modal="true"
        aria-labelledby="painting-name"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl font-bold focus:outline-none z-10 transition-colors duration-200"
          aria-label="Close modal"
        >
          &times;
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8">
          {/* Left Column: Main Media (Video/Image) & Additional Images */}
          <div className="flex flex-col space-y-4">
            <div className="relative overflow-hidden rounded-lg shadow-md bg-gray-100 w-full" style={{paddingBottom: '56.25%'}}> {/* 16:9 Aspect Ratio with padding-bottom hack */}
              {mainMedia === painting.videoUrl && painting.videoUrl ? (
                <video
                  key={painting.id + '-video-' + mainMedia} // Added key
                  controls
                  src={painting.videoUrl}
                  className="absolute top-0 left-0 w-full h-full object-contain rounded-lg"
                  aria-label={`Video of ${painting.name}`}
                  autoPlay
                  loop
                  muted
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  key={painting.id + '-image-' + mainMedia} // Added key
                  src={mainMedia}
                  alt={painting.name}
                  className="absolute top-0 left-0 w-full h-full object-contain rounded-lg transform transition-transform duration-500 ease-in-out hover:scale-105"
                />
              )}
            </div>

            {(painting.videoUrl || (painting.additionalImages && painting.additionalImages.length > 0)) && (
              <div className="flex space-x-2 overflow-x-auto pb-2 custom-scrollbar-x"> {/* Added custom-scrollbar-x class */}
                {painting.videoUrl && (
                  <button
                    onClick={() => setMainMedia(painting.videoUrl!)}
                    className={`relative flex-shrink-0 w-24 h-20 rounded-lg overflow-hidden border-2 ${mainMedia === painting.videoUrl ? 'border-purple-500' : 'border-gray-200'} hover:border-purple-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500`}
                    aria-label={`View video for ${painting.name}`}
                  >
                    <video
                      src={painting.videoUrl}
                      className="w-full h-full object-cover"
                      aria-hidden="true" // Hide from screen readers as it's a preview
                      preload="metadata"
                      poster={painting.thumbnailUrl || painting.imageUrl} // Use thumbnail as poster
                    >
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </button>
                )}
                <button
                  onClick={() => setMainMedia(painting.imageUrl)}
                  className={`flex-shrink-0 w-24 h-20 rounded-lg overflow-hidden border-2 ${mainMedia === painting.imageUrl && mainMedia !== painting.videoUrl ? 'border-purple-500' : 'border-gray-200'} hover:border-purple-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500`}
                  aria-label={`View main image for ${painting.name}`}
                >
                  <img
                    src={painting.thumbnailUrl} // Use thumbnail for gallery
                    alt={`${painting.name} - main view thumbnail`}
                    className="w-full h-full object-cover"
                  />
                </button>
                {painting.additionalImages?.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setMainMedia(img)}
                    className={`flex-shrink-0 w-24 h-20 rounded-lg overflow-hidden border-2 ${mainMedia === img ? 'border-purple-500' : 'border-gray-200'} hover:border-purple-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500`}
                    aria-label={`View detailed image ${index + 1} for ${painting.name}`}
                  >
                    <img
                      src={img}
                      alt={`${painting.name} - detail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Details & Pricing */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 id="painting-name" className="text-4xl font-bold text-gray-900 mb-2 leading-tight">
                {painting.name}
              </h2>
              <p className="text-lg text-gray-600 mb-4">by {painting.artist}</p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                {painting.description}
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Details:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li><span className="font-medium">Materials:</span> {painting.materials.join(', ')}</li>
                  <li><span className="font-medium">Dimensions:</span> {painting.dimensions}</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-200 flex items-center justify-between flex-wrap gap-4">
              <div className="flex flex-col">
                {hasDiscount && (
                  <span className="text-lg text-gray-500 line-through mr-2">
                    ${painting.originalPrice?.toFixed(2)}
                  </span>
                )}
                <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                  ${painting.price.toFixed(2)}
                </span>
              </div>
              <button className="py-3 px-8 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:from-purple-700 hover:to-pink-600 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};