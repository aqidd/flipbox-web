import React from 'react';
import { Hero } from '../components/home/Hero';
import { Services } from '../components/home/Services';
import { Portfolio } from '../components/home/Portfolio';
import { WorkProcess } from '../components/home/WorkProcess';
import { Clients } from '../components/home/Clients';

export function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Portfolio />
      <WorkProcess />
      <Clients />
    </div>
  );
}