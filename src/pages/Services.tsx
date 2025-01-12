import React from 'react';
import { Search, Smartphone, Layout, Database, Server, BarChart3, Smartphone as SmartphoneIcon, Workflow } from 'lucide-react';
import { Hero } from '../components/shared/Hero';
import { useLanguage } from '../contexts/LanguageContext';

function Services() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Hero
        title={t('services.hero.title')}
        description={t('services.hero.description')}
        backgroundImage="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80"
      />

      {/* Ideation and Design Section */}
      <ServiceSection
        title={t('services.ideation.title')}
        description={t('services.ideation.description')}
        items={[
          {
            icon: Search,
            title: t('services.ideation.research.title'),
            description: t('services.ideation.research.description')
          },
          {
            icon: Layout,
            title: t('services.ideation.ux.title'),
            description: t('services.ideation.ux.description')
          },
          {
            icon: Workflow,
            title: t('services.ideation.strategy.title'),
            description: t('services.ideation.strategy.description')
          }
        ]}
      />

      {/* Development Section */}
      <ServiceSection
        title={t('services.development.title')}
        description={t('services.development.description')}
        items={[
          {
            icon: SmartphoneIcon,
            title: t('services.development.native.title'),
            description: t('services.development.native.description')
          },
          {
            icon: Smartphone,
            title: t('services.development.hybrid.title'),
            description: t('services.development.hybrid.description')
          },
          {
            icon: Layout,
            title: t('services.development.web.title'),
            description: t('services.development.web.description')
          },
          {
            icon: Server,
            title: t('services.development.os.title'),
            description: t('services.development.os.description')
          },
          {
            icon: Database,
            title: t('services.development.backend.title'),
            description: t('services.development.backend.description')
          },
          {
            icon: Server,
            title: t('services.development.middleware.title'),
            description: t('services.development.middleware.description')
          }
        ]}
      />

      {/* Optimization Section */}
      <ServiceSection
        title={t('services.optimization.title')}
        description={t('services.optimization.description')}
        items={[
          {
            icon: BarChart3,
            title: t('services.optimization.analytics.title'),
            description: t('services.optimization.analytics.description')
          },
          {
            icon: Smartphone,
            title: t('services.optimization.training.title'),
            description: t('services.optimization.training.description')
          },
          {
            icon: Workflow,
            title: t('services.optimization.agile.title'),
            description: t('services.optimization.agile.description')
          }
        ]}
      />
    </div>
  );
}

interface ServiceItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface ServiceSectionProps {
  title: string;
  description: string;
  items: ServiceItem[];
}

function ServiceSection({ title, description, items }: ServiceSectionProps) {
  const { t } = useLanguage();

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {items.map((item, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
                <item.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;