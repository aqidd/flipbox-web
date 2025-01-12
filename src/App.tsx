import React from 'react';
import { Home } from './pages/Home';
import Services from './pages/Services';
import Works from './pages/Works';
import { Navbar } from './components/layout/Navbar';
import { LanguageProvider } from './contexts/LanguageContext';
import { Footer } from './components/layout/Footer';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  const handlePageChange = (page: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return <Services />;
      case 'works':
        return <Works />;
      default:
        return <Home />;
    }
  };

  return (
    <LanguageProvider>
    <div className="min-h-screen bg-white">
      <Navbar currentPage={currentPage} onPageChange={handlePageChange} />
      {renderPage()}
      <Footer onPageChange={handlePageChange} />
    </div>
    </LanguageProvider>
  );
}

export default App;