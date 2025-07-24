import React from 'react';
import { ExternalLink } from 'lucide-react';

interface PortfolioItem {
  title: string;
  description: string;
  testimonial: string;
  author: string;
  link: string;
  image: string;
}

const Portfolio: React.FC = () => {
  const projects: PortfolioItem[] = [
    {
      title: "Secure Florida Movers",
      description: "High-Tech high converting website SEO for local business ads",
      testimonial: "Brandon delivered exactly what we needed. Flawless execution.",
      author: "James Shelton, CEO",
      link: "https://www.securefloridamovers.com",
      image: "https://images.pexels.com/photos/7464230/pexels-photo-7464230.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Sensuous-Living",
      description: "Luxurious website with login portal, e-commerce, blog, and more",
      testimonial: "Gorgeous, intuitive, and better than expected.",
      author: "Trishiana, CEO",
      link: "https://sensuous-living.vercel.app",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Active Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <blockquote className="border-l-4 border-gray-900 pl-4 italic text-gray-700 mb-2">
                  "{project.testimonial}"
                </blockquote>
                <cite className="text-sm text-gray-500 not-italic">
                  — {project.author}
                </cite>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;