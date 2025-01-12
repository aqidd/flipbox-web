import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export function WorkProcess() {
  const { t } = useLanguage();

  return (
    <div className="py-24 bg-gradient-to-r from-blue-600 to-cyan-400 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-6 text-center">{t('workprocess.title')}</h2>
        <p className="text-lg text-center mb-16 max-w-3xl mx-auto">{t('workprocess.description')}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <ProcessCard
            title={t('workprocess.agile.title')}
            description={t('workprocess.agile.description')}
            icon={<AgileIcon />}
          />
          <ProcessCard
            title={t('workprocess.performance.title')}
            description={t('workprocess.performance.description')}
            icon={<PerformanceIcon />}
          />
          <ProcessCard
            title={t('workprocess.usercentered.title')}
            description={t('workprocess.usercentered.description')}
            icon={<UserCenteredIcon />}
          />
        </div>
      </div>
    </div>
  );
}

interface ProcessCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function ProcessCard({ title, description, icon }: ProcessCardProps) {
  return (
    <div className="text-center space-y-4">
      <div className="w-24 h-24 mx-auto flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  );
}

function AgileIcon() {
  return (
    <div className="w-24 h-24 mx-auto border-2 border-white/30 rounded-full flex items-center justify-center">
      <div className="w-3 h-3 bg-white rounded-full relative">
        <div className="absolute w-12 h-12 border-2 border-white/30 rounded-full -left-[22px] -top-[22px]" />
      </div>
    </div>
  );
}

function PerformanceIcon() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {[1,2,3,4].map(i => (
        <div key={i} className="w-10 h-10 border-2 border-white/30 rounded-lg flex items-center justify-center">
          <div className="w-6 h-1 bg-white/30 rounded" />
        </div>
      ))}
    </div>
  );
}

function UserCenteredIcon() {
  return (
    <div className="relative">
      <div className="w-4 h-4 bg-white transform rotate-45 mx-auto mb-2" />
      <div className="flex justify-center space-x-2 mb-2">
        {[1,2,3].map(i => (
          <div key={i} className="w-4 h-4 bg-white/60 transform rotate-45" />
        ))}
      </div>
      <div className="flex justify-center space-x-2">
        {[1,2,3,4,5].map(i => (
          <div key={i} className="w-4 h-4 bg-white/30 transform rotate-45" />
        ))}
      </div>
    </div>
  );
}