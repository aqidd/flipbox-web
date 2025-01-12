import React from 'react';

interface PortfolioItemProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  reverse: boolean;
}

export function PortfolioItem({ title, description, image, tags, reverse }: PortfolioItemProps) {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
      <div className="flex-1">
        <img 
          src={image} 
          alt={title}
          className="rounded-lg shadow-xl w-full"
        />
      </div>
      <div className="flex-1 space-y-6">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="space-y-2">
          {tags.map((tag, index) => (
            <div key={index} className="text-sm text-gray-500">
              — {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}