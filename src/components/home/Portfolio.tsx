import React from 'react';
import { PortfolioItem } from '../shared/PortfolioItem';
import { useLanguage } from '../../contexts/LanguageContext';

export function Portfolio() {
  const { t } = useLanguage();

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          <PortfolioItem 
            title={t('works.portfolio.axa.title')}
            description={t('works.portfolio.axa.description')}
            image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
            tags={[t('works.technologies.mobiledev')]}
            reverse={false}
          />
          <PortfolioItem 
            title={t('works.portfolio.dianta.title')}
            description={t('works.portfolio.dianta.description')}
            image="https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&q=80"
            tags={[
              t('works.technologies.strategy'),
              t('works.technologies.mobiledev'),
              t('works.technologies.webdev')
            ]}
            reverse={true}
          />
        </div>
      </div>
    </div>
  );
}