import React from 'react';
import { Monitor, BarChart3, Layers, ArrowRight } from 'lucide-react';

// Interface for Tech Stack Badges
interface TechBadge {
  name: string;
}

// Interface for a Service offering, now including a tech stack
interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  techStack: TechBadge[];
}

const Services: React.FC = () => {
    // Function to smoothly scroll to the contact section
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

  // Updated service details with SEO-rich descriptions and tech stacks
  const services: Service[] = [
    {
      title: "High-Tech Websites",
      description: "Modern, mobile-first sites that are lightning fast, SEO-optimized, and designed to convert visitors into paying customers.",
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
        {/* Subtle background grid pattern for a high-tech feel */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center"></div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What I Build: High-Performance Digital Solutions That Drive Results
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            From sleek websites to scalable SaaS, I craft tools that elevate your brand and convert.
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
                Need a solution tailored to your business? Let’s Talk
                <ArrowRight className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" />
            </button>
        </div>

        {/* Visually hidden keywords for SEO and screen readers */}
        <div className="sr-only">
          Services: Web Development, SaaS Application Development, Custom Dashboards, Local SEO Websites, CRM Portals, Full-Stack Software Engineering.
        </div>
      </div>
    </section>
  );
};

export default Services;
