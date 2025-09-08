import React from 'react';
import { OnchainProviders } from './providers/OnchainProviders';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <OnchainProviders>
      <div className="min-h-screen bg-gray-900">
        <Navigation />
        <main>
          <Hero />
          <ProductShowcase />
          <Features />
        </main>
        <Footer />
      </div>
    </OnchainProviders>
  );
}

export default App;
