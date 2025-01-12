import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export function Clients() {
  const { t } = useLanguage();

  const clients = [
    'Garuda Indonesia',
    'AXA Insurance',
    'Pertamina',
    'Telkomsel',
    'OLX',
    'Trakindo',
    'CKB Logistics',
    'Smartfren',
    'Rumah.com',
    'Blanja.com'
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">{t('clients.title')}</h2>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          {t('clients.description')}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="aspect-[3/2] rounded-lg bg-gray-100 flex items-center justify-center p-6"
            >
              <span className="text-gray-400 font-medium text-center">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}