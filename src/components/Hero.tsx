import React from 'react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // The main section centers the new "monitor" or "phone" component.
    <section className="relative w-full overflow-hidden bg-black pt-28 pb-16 px-4 flex flex-col items-center justify-center">
      {/* UPDATED: Subtle background grid pattern without the fade-out mask */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center"></div>

      {/* --- DESKTOP VERSION (APPLE COMPUTER) --- */}
      {/* This entire block is hidden on screens smaller than 768px (md) */}
      <div className="hidden md:block w-full max-w-screen-2xl mx-auto">
        {/* Monitor Bezel/Frame - Styled to look like silver aluminum */}
        <div className="relative bg-gradient-to-b from-slate-200 to-slate-300 rounded-t-xl p-1.5 sm:p-2 border-b-2 border-slate-400 shadow-2xl shadow-black/50">
          {/* Camera Dot */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-800 rounded-full opacity-50"></div>
          
          {/* The Screen (The original Glassmorphism Card) */}
          <div className="relative w-full h-[70vh] md:aspect-video rounded-md bg-black overflow-hidden">
            
            {/* The Hero Image for Desktop */}
            <img
              src="/schulzcorp-hero.webp"
              alt="Futuristic business technology background"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Content Overlay */}
            <div className="relative z-20 h-full flex flex-col items-center justify-end text-center md:items-start md:text-left p-8 md:p-12 lg:p-16">
              <div className="w-full max-w-md">
                <h1
                  className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
                  style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.5)' }}
                >
                  Websites That Turn
                  <br />
                  <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    Visitors Into Customers
                  </span>
                </h1>

                <p
                  className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed"
                  style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.3)' }}
                >
                  High-performance, SEO-optimized websites built to rank, convert, and scale.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Primary CTA */}
                  <button
                    onClick={scrollToContact}
                    className="group bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white px-8 py-4 rounded-sm transition-all duration-300 border border-gray-700 hover:border-gray-600 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
                  >
                    <span className="flex items-center justify-center md:justify-start">
                      Free Website Audit
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

                  {/* Secondary CTA */}
                  <button
                    onClick={scrollToPortfolio}
                    className="group bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-sm transition-all duration-300 border border-gray-500 hover:border-gray-400 shadow-lg hover:shadow-xl"
                  >
                    <span className="flex items-center justify-center md:justify-start">
                      View Recent Projects
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
          </div>
        </div>
        
        {/* Monitor Stand - Apple-inspired design */}
        <div className="relative flex justify-center">
            {/* Stand Arm */}
            <div className="w-28 h-12 bg-gradient-to-b from-slate-300 via-slate-400 to-slate-500 [clip-path:polygon(30%_0,70%_0,100%_100%,0%_100%)]"></div>
        </div>
        <div className="relative flex justify-center -mt-1">
            {/* Stand Base */}
            <div className="w-56 h-2 bg-gradient-to-t from-slate-300 to-slate-400 rounded-md border-b-2 border-slate-500/50 shadow-lg"></div>
        </div>
      </div>

      {/* --- MOBILE VERSION (APPLE PHONE/TABLET) --- */}
      {/* This entire block is only visible on screens smaller than 768px (md) */}
      <div className="block md:hidden w-full px-2">
        {/* Made container responsive with w-full, max-w-sm, and aspect-ratio */}
        <div className="relative mx-auto border-gray-300 bg-gray-300 border-[10px] rounded-[2.5rem] w-full max-w-sm aspect-[2/3] shadow-xl">
            <div className="w-[140px] h-[18px] bg-gray-300 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
            <div className="h-[46px] w-[3px] bg-gray-300 absolute -start-[13px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-300 absolute -start-[13px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-300 absolute -end-[13px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-black">
                <img src="/schulzcorp-hero-mobile.png" alt="Futuristic business technology background" className="absolute inset-0 w-full h-full object-cover z-0 rounded-[2rem]" />
                
                {/* Content Overlay - Copied and adjusted for mobile */}
                <div className="relative z-20 h-full flex flex-col items-center justify-end text-center p-6">
                  <div className="w-full">
                    <p className="text-xs text-gray-300 uppercase tracking-widest mb-2" style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.3)' }}>
                      Estero & Naples, FL Website Design
                    </p>
                    <h1 className="text-3xl font-bold text-white mb-4 leading-tight" style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.5)' }}>
                      High-Converting Websites
                      <br />
                      <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        for Southwest Florida Businesses
                      </span>
                    </h1>
                    <p className="text-base text-gray-300 mb-4 leading-relaxed" style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.3)' }}>
                      Professional websites built in 1-2 weeks. Local support in Southwest Florida.
                    </p>

                    {/* CTA Buttons - Mobile Stacked */}
                    <div className="flex flex-col gap-3">
                      {/* Primary CTA */}
                      <button 
                        onClick={scrollToContact} 
                        className="group bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white px-6 py-3 rounded-sm transition-all duration-300 border border-gray-700 hover:border-gray-600 shadow-xl transform hover:-translate-y-1"
                      >
                        <span className="flex items-center justify-center">
                          Free Website Audit
                          <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </button>

                      {/* Secondary CTA */}
                      <button
                        onClick={scrollToPortfolio}
                        className="group bg-transparent hover:bg-white/10 text-white px-6 py-3 rounded-sm transition-all duration-300 border border-gray-500 hover:border-gray-400 shadow-lg hover:shadow-xl"
                      >
                        <span className="flex items-center justify-center">
                          View Recent Projects
                          <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
