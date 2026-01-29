import React from 'react';
import { Star, MapPin, CheckCircle2 } from 'lucide-react';

const TrustSignals: React.FC = () => {
  return (
    <section className="relative bg-black py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>

      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          
          {/* Left: Google Rating */}
          <div className="text-center md:text-left">
            <div className="mb-4 flex items-center justify-center md:justify-start gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <p className="text-gray-300 font-medium mb-1">
              5.0 on Google
            </p>
            <p className="text-sm text-gray-500">
              Based on client reviews
            </p>
          </div>

          {/* Center: Trust Statement */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span className="text-gray-300 font-medium">
                Trusted by 15+ Florida Businesses
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Real results. Real clients.
            </p>
          </div>

          {/* Right: Location Authority */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end gap-2 mb-4">
              <MapPin className="w-5 h-5 text-emerald-400" />
              <span className="text-gray-300 font-medium">
                Estero, Florida
              </span>
            </div>
            <p className="text-sm text-gray-500">
              Local support for Southwest Florida
            </p>
          </div>

        </div>

        {/* Bottom: Client Logos / Types */}
        <div className="mt-12 pt-12 border-t border-gray-800">
          <p className="text-center text-xs text-gray-500 uppercase tracking-wider mb-6">
            We Build Websites For
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Moving Companies',
              'Fitness Coaches',
              'Service Businesses',
              'Real Estate Agents',
              'E-commerce',
              'Startups'
            ].map((industry, i) => (
              <div
                key={i}
                className="px-4 py-2 rounded-full bg-gray-900/50 border border-gray-800 text-gray-400 text-sm hover:border-emerald-500/50 transition-all duration-300"
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

export default TrustSignals;
