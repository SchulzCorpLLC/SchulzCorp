import React from 'react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // The main section centers the new "monitor" component.
    <section className="relative w-full overflow-hidden bg-black pt-28 pb-16 px-4 flex flex-col items-center justify-center">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      {/* Monitor Container */}
      <div className="w-full max-w-screen-2xl mx-auto">
        {/* Monitor Bezel/Frame - Styled to look like silver aluminum */}
        <div className="relative bg-gradient-to-b from-slate-200 to-slate-300 rounded-t-xl p-1.5 sm:p-2 border-b-2 border-slate-400 shadow-2xl shadow-black/50">
          {/* Camera Dot */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-800 rounded-full opacity-50"></div>
          
          {/* The Screen (The original Glassmorphism Card) */}
          <div className="relative w-full h-[70vh] md:aspect-video rounded-md bg-black overflow-hidden">
            
            {/* The Hero Image - Now responsive with two separate images */}
            {/* Desktop Image: Hidden on mobile, visible on medium screens and up */}
            <img
              src="/schulzcorp-hero.png"
              alt="Futuristic business technology background"
              className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block"
            />
            {/* Mobile Image: Visible on mobile, hidden on medium screens and up */}
            <img
              src="/schulzcorp-hero-mobile.png"
              alt="Futuristic business technology background"
              className="absolute inset-0 w-full h-full object-cover z-0 md:hidden"
            />

            {/* Content Overlay */}
            <div className="relative z-20 h-full flex flex-col items-center justify-end text-center md:items-start md:text-left p-8 md:p-12 lg:p-16">
              <div className="w-full max-w-md">
                <p
                  className="text-sm text-gray-300 uppercase tracking-widest mb-4"
                  style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.3)' }}
                >
                  Your Business' Future Begins Here
                </p>

                <h1
                  className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
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
                  <span className="flex items-center justify-center md:justify-start">
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
    </section>
  );
};

export default Hero;
