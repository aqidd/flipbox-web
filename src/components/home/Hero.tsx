import React from 'react';
import { Hero as SharedHero } from '../shared/Hero';
import { useLanguage } from '../../contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <SharedHero
      title={t('home.hero.title')}
      description={t('home.hero.description')}
      backgroundImage="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80"
      showCta={true}
      ctaText={t('home.hero.cta')}
      onCtaClick={() => window.scrollTo({ top: document.getElementById('portfolio')?.offsetTop, behavior: 'smooth' })}
    />
  );
}