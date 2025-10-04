import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import PrivacyPolicy from './components/PrivacyPolicy';
import { initScriptBlocker } from './utils/scriptBlocker';

function App() {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    initScriptBlocker();

    const handleShowPrivacy = () => setShowPrivacyPolicy(true);
    window.addEventListener('showPrivacyPolicy', handleShowPrivacy);

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      window.removeEventListener('showPrivacyPolicy', handleShowPrivacy);
    };
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#privacy-policy') {
        setShowPrivacyPolicy(true);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer onShowPrivacyPolicy={() => setShowPrivacyPolicy(true)} />
      <CookieBanner />
      {showPrivacyPolicy && (
        <PrivacyPolicy onClose={() => {
          setShowPrivacyPolicy(false);
          window.location.hash = '';
        }} />
      )}
    </div>
  );
}

export default App;