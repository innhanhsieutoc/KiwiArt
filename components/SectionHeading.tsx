import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12 animate-fade-in">
      <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600 mb-4 drop-shadow-sm">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
