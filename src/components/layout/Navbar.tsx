import React from 'react';
import { Box } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navbar({ currentPage, onPageChange }: NavbarProps) {
  const { t } = useLanguage();

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <button 
            onClick={() => onPageChange('home')} 
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <Box className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold">Flipbox</span>
          </button>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink page="services" currentPage={currentPage} onPageChange={onPageChange}>
              {t('nav.services')}
            </NavLink>
            <NavLink page="works" currentPage={currentPage} onPageChange={onPageChange}>
              {t('nav.works')}
            </NavLink>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}

interface NavLinkProps {
  children: React.ReactNode;
  page?: string;
  href?: string;
  currentPage?: string;
  onPageChange?: (page: string) => void;
}

function NavLink({ children, page, href, currentPage, onPageChange }: NavLinkProps) {
  if (href) {
    return (
      <a href={href} className="text-gray-600 hover:text-blue-600">
        {children}
      </a>
    );
  }

  return (
    <button 
      onClick={() => onPageChange?.(page!)} 
      className={`text-gray-600 hover:text-blue-600 ${currentPage === page ? 'text-blue-600' : ''}`}
    >
      {children}
    </button>
  );
}