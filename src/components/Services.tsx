import React from 'react';
import { Monitor, BarChart3, Layers } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: "High-Tech Websites",
      description: "Modern, performance-optimized sites that convert visitors into customers with sophisticated design and seamless user experience.",
      icon: <Monitor className="w-8 h-8" />
    },
    {
      title: "Client Dashboards",
      description: "Custom analytics and operations portals tailored to your specific workflow, providing actionable insights and streamlined management.",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: "Custom SaaS",
      description: "Scalable software solutions with subscription models, built to grow with your business and generate recurring revenue.",
      icon: <Layers className="w-8 h-8" />
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      {/* The container width is now set to max-w-screen-2xl for a consistent, wider layout. */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What I Build
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 hover:border-gray-600 group"
            >
              <div className="text-gray-400 group-hover:text-white transition-colors duration-300 mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
