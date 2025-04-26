import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import BlockchainSection from './components/BlockchainSection';
import CTASection from './components/CTASection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PricingSection from './components/PricingSection';
import PrivacyPolicy from './components/PrivacyPolicy';
import ScrollToTop from './components/ScrollToTop';
import Security from './components/Security';
import TargetSection from './components/TargetSection';
import TermsOfService from './components/TermsOfService';
import TestimonialSection from './components/TestimonialSection';

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.state]);

  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <TargetSection />
      <BlockchainSection />
      <TestimonialSection />
      <PricingSection />
      <CTASection />
    </>
  );
}

function App() {
  // Update the document title
  useEffect(() => {
    document.title = 'MesaChain - Restaurant Management Platform';
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen font-sans">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/security" element={<Security />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
