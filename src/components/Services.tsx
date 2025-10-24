import React from 'react';
import { Monitor, BarChart3, Layers, ArrowRight, Check } from 'lucide-react';

interface TechBadge {
  name: string;
}

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  techStack: TechBadge[];
}

interface PricingPackage {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const Services: React.FC = () => {
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

  const pricingPackages: PricingPackage[] = [
    {
      name: "Starter",
      price: "$500",
      description: "Perfect for new businesses getting started online",
      features: [
        "Beautiful modern design (customized from high-converting templates)",
        "Up to 5 pages",
        "Contact form integration",
        "Mobile responsive",
        "1 week turnaround",
        "Basic SEO setup"
      ]
    },
    {
      name: "Business",
      price: "$1,000",
      description: "Ideal for established small businesses",
      features: [
        "Custom design",
        "Up to 7 pages",
        "SEO optimization",
        "Business email setup",
        "Contact form integration",
        "Mobile responsive",
        "2 week turnaround",
        "Google Analytics setup"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "$1,500",
      description: "Complete solution for growing businesses",
      features: [
        "Custom design + advanced SEO",
        "Up to 10 pages",
        "Email marketing integration",
        "Business email setup",
        "Contact form integration",
        "Mobile responsive",
        "Google Analytics & Search Console",
        "1 month post-launch support",
        "2 week turnaround"
      ]
    }
  ];

  const services: Service[] = [
    {
      title: "High-Tech Websites",
      description: "Modern, mobile-first websites that are lightning fast, SEO-optimized, and designed to convert visitors into paying customers.",
      icon: <Monitor className="w-8 h-8" />,
      techStack: [
        { name: 'React' },
        { name: 'TypeScript' },
        { name: 'Tailwind' },
      ]
    },
    {
      title: "Client Dashboards",
      description: "Interactive portals built to automate workflows, track performance, and provide clients or teams with real-time insights.",
      icon: <BarChart3 className="w-8 h-8" />,
      techStack: [
        { name: 'React' },
        { name: 'Supabase' },
        { name: 'Charts.js' },
      ]
    },
    {
      title: "Custom SaaS Platforms",
      description: "Full-stack SaaS applications designed for scale — from MVP to monetization, built with React, Supabase, and modern frameworks.",
      icon: <Layers className="w-8 h-8" />,
      techStack: [
        { name: 'Next.js' },
        { name: 'Supabase' },
        { name: 'Stripe' },
      ]
    }
  ];

  return (
    <section id="services" className="py-24 sm:py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center"></div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Website Design Packages for Small Businesses in Estero & Naples
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Affordable pricing with transparent features. Choose the package that fits your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {pricingPackages.map((pkg, index) => (
            <article
              key={index}
              className={`bg-gray-900/50 backdrop-blur-md rounded-2xl border overflow-hidden group transition-all duration-300 flex flex-col text-center relative ${
                pkg.popular
                  ? 'border-blue-500 shadow-2xl shadow-blue-500/20 scale-105'
                  : 'border-gray-800 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-sm font-bold py-2 px-4 text-center">
                  MOST POPULAR
                </div>
              )}
              <div className={`p-8 flex-grow ${pkg.popular ? 'pt-16' : ''}`}>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {pkg.name}
                </h3>
                <div className="text-4xl font-bold text-white mb-4">
                  {pkg.price}
                </div>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {pkg.description}
                </p>

                <ul className="text-left space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 pt-0 mt-auto">
                <button
                  onClick={scrollToContact}
                  className={`w-full font-bold px-6 py-3 rounded-sm transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg'
                      : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What I Build: High-Performance Websites That Drive Results
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            From sleek business websites to custom web applications, I craft solutions that elevate your brand and convert.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article
              key={index}
              className="bg-gray-900/50 backdrop-blur-md rounded-2xl border border-gray-800 overflow-hidden group transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col text-center"
            >
              <div className="p-8 flex-grow">
                <div className="text-blue-400 mb-6 w-fit mx-auto">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="p-8 pt-0 mt-auto">
                <div className="flex flex-wrap gap-2 justify-center">
                    {service.techStack.map(tech => (
                        <span key={tech.name} className="bg-gray-800/80 text-blue-300 text-xs font-medium px-3 py-1 rounded-full border border-gray-700">
                            {tech.name}
                        </span>
                    ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-20">
            <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 text-lg font-medium text-white hover:text-blue-400 transition-colors duration-300 group"
            >
                Need a custom solution? Let's Talk
                <ArrowRight className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" />
            </button>
        </div>

        <div className="sr-only">
          Services: Website Design, Web Development, Small Business Websites, Local SEO Websites, E-commerce Websites, Custom Web Applications, Estero FL, Naples FL, Southwest Florida.
        </div>
      </div>
    </section>
  );
};

export default Services;
