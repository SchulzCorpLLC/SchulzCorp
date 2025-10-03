import React from 'react';
import { Clock, DollarSign, Smartphone, MapPin } from 'lucide-react';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const About: React.FC = () => {
  const benefits: Benefit[] = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Quick Turnaround",
      description: "1-2 weeks from start to launch"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Affordable Pricing",
      description: "Packages starting at just $500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Modern & Mobile-Friendly",
      description: "Looks perfect on all devices"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Local Support",
      description: "Based in Estero, serving Southwest Florida"
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30"></div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About SchulzCorp
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Hi, I'm <span className="font-bold text-white">Brandon Schulz</span>, a local web designer helping small businesses in Estero, Naples, and Southwest Florida launch professional websites quickly and affordably.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              I specialize in creating high-converting, mobile-friendly websites that help local businesses establish their online presence and attract more customers. No complicated jargon, no endless timelines — just clean, modern websites that work.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-md rounded-2xl border border-gray-800 p-8 text-center transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="text-blue-400 mb-4 flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
