import React from 'react';
import { Box } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export function Footer({ onPageChange }: FooterProps) {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <CompanyInfo />
          <QuickLinks onPageChange={onPageChange} />
          <ServiceLinks />
          <ContactInfo />
        </div>
        <BottomBar />
      </div>
    </footer>
  );
}

function CompanyInfo() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <Box className="h-8 w-8 text-blue-400" />
        <span className="ml-2 text-xl font-bold">Flipbox</span>
      </div>
      <p className="text-gray-400">{t('home.hero.description')}</p>
      <div className="space-y-2">
        <p className="text-gray-400 whitespace-pre-line">{t('footer.company.address')}</p>
      </div>
    </div>
  );
}

function QuickLinks({ onPageChange }: { onPageChange: (page: string) => void }) {
  const { t } = useLanguage();

  return (
    <div>
      <h3 className="text-lg font-semibold mb-6">{t('footer.quicklinks.title')}</h3>
      <ul className="space-y-4">
        <li>
          <button onClick={() => onPageChange('services')} className="text-gray-400 hover:text-white transition-colors">
            {t('nav.services')}
          </button>
        </li>
        <li>
          <button onClick={() => onPageChange('works')} className="text-gray-400 hover:text-white transition-colors">
            {t('nav.works')}
          </button>
        </li>
        <li>
          <a href="#about" className="text-gray-400 hover:text-white transition-colors">{t('nav.about')}</a>
        </li>
        <li>
          <a href="#career" className="text-gray-400 hover:text-white transition-colors">{t('nav.career')}</a>
        </li>
        <li>
          <a href="#blog" className="text-gray-400 hover:text-white transition-colors">{t('nav.blog')}</a>
        </li>
      </ul>
    </div>
  );
}

function ServiceLinks() {
  const { t } = useLanguage();

  return (
    <div>
      <h3 className="text-lg font-semibold mb-6">{t('footer.services.title')}</h3>
      <ul className="space-y-4">
        <li>
          <a href="#mobile-app" className="text-gray-400 hover:text-white transition-colors">
            Mobile App Development
          </a>
        </li>
        <li>
          <a href="#web-app" className="text-gray-400 hover:text-white transition-colors">
            Web App Development
          </a>
        </li>
        <li>
          <a href="#ui-ux" className="text-gray-400 hover:text-white transition-colors">
            UI/UX Design
          </a>
        </li>
        <li>
          <a href="#consulting" className="text-gray-400 hover:text-white transition-colors">
            Digital Consulting
          </a>
        </li>
      </ul>
    </div>
  );
}

function ContactInfo() {
  const { t } = useLanguage();

  return (
    <div>
      <h3 className="text-lg font-semibold mb-6">{t('footer.contact.title')}</h3>
      <ul className="space-y-4">
        <li className="text-gray-400">
          {t('footer.contact.phone')}
        </li>
        <li>
          <a href={`mailto:${t('footer.contact.email')}`} className="text-gray-400 hover:text-white transition-colors">
            {t('footer.contact.email')}
          </a>
        </li>
      </ul>
    </div>
  );
}

function BottomBar() {
  const { t } = useLanguage();

  return (
    <div className="border-t border-gray-800 mt-12 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-gray-400 text-sm">
          {t('footer.copyright')}
        </p>
        <div className="flex space-x-6">
          <a href="#privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
            {t('footer.privacy')}
          </a>
          <a href="#terms" className="text-gray-400 hover:text-white text-sm transition-colors">
            {t('footer.terms')}
          </a>
        </div>
      </div>
    </div>
  );
}