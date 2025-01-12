import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Hero } from '../components/shared/Hero';
import { useLanguage } from '../contexts/LanguageContext';

function Works() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Hero 
        title={t('works.hero.title')}
        description={t('works.hero.description')}
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
      />

      {/* Portfolio Grid */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <PortfolioCard
              category={t('works.portfolio.axa.category')}
              title={t('works.portfolio.axa.title')}
              description={t('works.portfolio.axa.description')}
              image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
              technologies={[
                t('works.technologies.mobiledesign'),
                t('works.technologies.mobiledev')
              ]}
              links={[
                { label: 'Get Android App', url: '#' },
                { label: 'Get iOS App', url: '#' }
              ]}
            />
            
            <PortfolioCard
              category={t('works.portfolio.dianta.category')}
              title={t('works.portfolio.dianta.title')}
              description={t('works.portfolio.dianta.description')}
              image="https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&q=80"
              technologies={[
                t('works.technologies.strategy'),
                t('works.technologies.mobiledesign'),
                t('works.technologies.mobiledev'),
                t('works.technologies.webdesign'),
                t('works.technologies.webdev')
              ]}
              links={[
                { label: 'View Case Study', url: '#' }
              ]}
            />

            <PortfolioCard
              category={t('works.portfolio.smartfren.category')}
              title={t('works.portfolio.smartfren.title')}
              description={t('works.portfolio.smartfren.description')}
              image="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80"
              technologies={[
                t('works.technologies.mobiledesign'),
                t('works.technologies.androiddev')
              ]}
              links={[
                { label: 'Get Android App', url: '#' }
              ]}
            />

            <PortfolioCard
              category={t('works.portfolio.bni.category')}
              title={t('works.portfolio.bni.title')}
              description={t('works.portfolio.bni.description')}
              image="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80"
              technologies={[
                t('works.technologies.uxresearch'),
                t('works.technologies.mobiledesign'),
                t('works.technologies.security')
              ]}
              links={[
                { label: 'View Case Study', url: '#' }
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

interface PortfolioCardProps {
  category: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  links: Array<{
    label: string;
    url: string;
  }>;
}

function PortfolioCard({ category, title, description, image, technologies, links }: PortfolioCardProps) {
  const { t } = useLanguage();

  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg mb-6">
        <img 
          src={image} 
          alt={title}
          className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="space-y-4">
        <div className="text-sm font-medium text-blue-600">{t(`works.categories.${category.toLowerCase()}`)}</div>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="space-y-2">
          {technologies.map((tech, index) => (
            <div key={index} className="text-sm text-gray-500 flex items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2" />
              {tech}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 pt-2">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors"
            >
              {t(`works.links.${link.label.toLowerCase().replace(/\s+/g, '')}`)}
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Works;