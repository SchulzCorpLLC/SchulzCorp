import React from 'react';
import { Star, MapPin, CheckCircle2, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "James Shelton",
    company: "Secure Florida Movers",
    location: "Florida",
    text: "Brandon built our website for Secure Florida Movers, and we couldn't be happier with the results. He understood exactly how to showcase our moving services and made the site look professional, fast, and mobile-friendly. The site started bringing in real leads almost immediately after launch. Brandon is easy to work with, quick to make updates, and genuinely cares about helping your business grow. Highly recommend SchulzCorp to any Florida business that needs a reliable web designer or digital partner.",
    rating: 5
  },
  {
    name: "Dennis",
    company: "American Eagle Firearms LLC",
    location: "Missouri",
    text: "Brandon at SchulzCorp built and now maintains our website for American Eagle Firearms LLC here in Missouri. Even though we’re out of state, he’s been incredibly responsive and easy to work with. He keeps our site updated each month with new photos and content, and the quality of his work has been excellent. Everything runs smoothly, loads fast, and looks great on mobile. Highly recommend SchulzCorp to any business, local or out-of-state, that needs a reliable and professional web designer.",
    rating: 5
  }
];

const App = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black py-16 sm:py-24 px-4 flex flex-col items-center justify-center">
      {/* Exact background grid pattern from Hero.tsx */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-40"></div>

      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Trust Metrics */}
        <div className="grid md:grid-cols-3 gap-12 items-center mb-20">
          
          {/* Left: Google Rating */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <div className="mb-3 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-white font-bold text-xl mb-1">
              5.0 Star Rating
            </p>
            <p className="text-sm text-gray-400 uppercase tracking-widest">
              Verified Google Reviews
            </p>
          </div>

          {/* Center: Trust Statement */}
          <div className="text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-4">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span className="text-gray-200 font-semibold">
                Trusted by 15+ Businesses
              </span>
            </div>
            <p className="text-sm text-gray-500 uppercase tracking-widest">
              Delivering Real Business Results
            </p>
          </div>

          {/* Right: Location Authority */}
          <div className="text-center md:text-right flex flex-col items-center md:items-end">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-6 h-6 text-emerald-400" />
              <span className="text-white font-bold text-xl">
                Estero, Florida
              </span>
            </div>
            <p className="text-sm text-gray-400 uppercase tracking-widest">
              Serving Southwest Florida & Beyond
            </p>
          </div>
        </div>

        {/* Featured Testimonials Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={idx}
                className="relative p-8 rounded-2xl bg-gray-900/40 border border-gray-800 hover:border-emerald-500/30 transition-all duration-500 flex flex-col justify-between group backdrop-blur-sm"
              >
                <Quote className="absolute top-6 right-8 w-12 h-12 text-emerald-500/5 group-hover:text-emerald-500/10 transition-colors" />
                
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 leading-relaxed italic mb-8 relative z-10">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-800/50">
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-emerald-400 text-sm">{testimonial.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500 text-xs uppercase tracking-wider flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: Industry Chips */}
        <div className="pt-12 border-t border-gray-900">
          <p className="text-center text-xs text-gray-500 uppercase tracking-widest mb-8">
            Custom High-Performance Sites For
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Moving Companies',
              'Remodeling',
              'Service Businesses',
              'Plumbers',
              'Roofers',
              'HVAC',
              'Painters'
            ].map((industry, i) => (
              <div
                key={i}
                className="px-5 py-2.5 rounded-full bg-gray-900/30 border border-gray-800 text-gray-400 text-sm hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-300 cursor-default backdrop-blur-sm"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;