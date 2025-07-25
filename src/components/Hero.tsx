import React from 'react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Image Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/schulzcorp-hero.png')` }}
      ></div>
      {/* Dimming Overlay */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* Content Overlay */}
      <div className="relative z-20 h-full flex items-end justify-center md:justify-start">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-24">
          <div className="max-w-md text-center md:text-left">
            <p 
              className="text-sm text-gray-300 uppercase tracking-widest mb-4"
              style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.3)' }}
            >
              Your Business' Future Begins Here
            </p>
            
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.5)' }}
            >
              Future-Proof
              <br />
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </h1>
            
            <p 
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
              style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.3)' }}
            >
              Minimal. Luxurious. Built to Perform.
            </p>
            
            <button
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white px-8 py-4 rounded-sm transition-all duration-300 border border-gray-700 hover:border-gray-600 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
            >
              <span className="flex items-center">
                Tell Me About Your Project
                <svg 
                  className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
