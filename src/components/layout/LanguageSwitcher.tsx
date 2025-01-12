import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 text-sm rounded-md transition-colors ${
          language === 'en'
            ? 'bg-blue-600 text-white'
            : 'text-gray-600 hover:text-blue-600'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('id')}
        className={`px-2 py-1 text-sm rounded-md transition-colors ${
          language === 'id'
            ? 'bg-blue-600 text-white'
            : 'text-gray-600 hover:text-blue-600'
        }`}
      >
        ID
      </button>
    </div>
  );
}