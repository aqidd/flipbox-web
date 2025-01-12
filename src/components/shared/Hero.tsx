import React from 'react';

interface HeroProps {
  title: string;
  description: string;
  backgroundImage: string;
  showCta?: boolean;
  ctaText?: string;
  onCtaClick?: () => void;
}

export function Hero({ 
  title, 
  description, 
  backgroundImage,
  showCta = false,
  ctaText = 'View All Works',
  onCtaClick
}: HeroProps) {
  return (
    <div className="relative">
      <div 
        className="relative min-h-screen flex items-center before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-600 before:to-cyan-400 before:opacity-90 transition-all duration-500"
        style={{
          backgroundImage: `url("${backgroundImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            {title}
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl animate-fade-in-delay">
            {description}
          </p>
          {showCta && (
            <button 
              onClick={onCtaClick}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors animate-fade-in-delay-2"
            >
              {ctaText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}