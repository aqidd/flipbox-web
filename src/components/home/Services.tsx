import React from 'react';
import { Building2, Rocket, Users, Smartphone } from 'lucide-react';
import { ServiceCard } from '../shared/ServiceCard';
import { useLanguage } from '../../contexts/LanguageContext';

export function Services() {
  const { t } = useLanguage();

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <ServiceCard 
            icon={Building2}
            title={t('home.services.enterprise.title')}
            description={t('home.services.enterprise.description')}
          />
          <ServiceCard 
            icon={Rocket}
            title={t('home.services.startup.title')}
            description={t('home.services.startup.description')}
          />
          <ServiceCard 
            icon={Users}
            title={t('home.services.agency.title')}
            description={t('home.services.agency.description')}
          />
          <ServiceCard 
            icon={Smartphone}
            title={t('home.services.products.title')}
            description={t('home.services.products.description')}
          />
        </div>
      </div>
    </div>
  );
}