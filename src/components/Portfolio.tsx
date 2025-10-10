import React from 'react';
import { ExternalLink } from 'lucide-react';

interface TechBadge {
  name: string;
  icon?: React.ReactNode;
}

interface PortfolioItem {
  title: string;
  description: string;
  testimonial: string;
  author: string;
  link: string;
  image: string;
  alt: string;
  techStack: TechBadge[];
}

const Portfolio: React.FC = () => {
  const projects: PortfolioItem[] = [
    {
      title: "Secure Florida Movers",
      description: "High-performance, high-converting website with local SEO and ad strategy integration for a professional moving company serving Southwest Florida.",
      testimonial: "This website instantly elevated our brand. We saw a massive increase in calls and Google visibility. It's fast, clean, and modern.",
      author: "James Shelton, CEO of Secure Florida Movers",
      link: "https://www.securefloridamovers.com",
      image: "/sfm-portfolio.webp",
      alt: "Local SEO Website for Moving Company – Secure Florida Movers",
      techStack: [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'JS' },
        { name: 'HubSpot' },
        { name: 'Supabase' },
        { name: 'Local SEO' },
      ]
    },
    {
      title: "Estero Performance",
      description: "Hybrid fitness coaching in Estero, FL with science-backed training, nutrition, and corrective exercise for seamless online and in-person programs.",
      testimonial: "Precise programming, real accountability, and measurable results. Brandon makes the process simple and powerful.",
      author: "Brandon Schulz, Founder — Estero Performance",
      link: "https://esteroperformance.com",
      image: "/ep-hero.webp",
      alt: "Hybrid Performance Coaching — Estero Performance Founder Coaching a Client",
      techStack: [
        { name: 'React' },
        { name: 'Typescript' },
        { name: 'Vite' },
        { name: 'Tailwind CSS' },
        { name: 'Supabase' },
        { name: 'Stripe' },
        { name: 'OAuth' },
      ]
    },
    {
      title: "American Eagle Firearms",
      description: "Professional firearms dealer website featuring inventory showcase, compliance information, and streamlined customer inquiry system.",
      testimonial: "Professional, clean, and exactly what we needed to showcase our inventory and services to customers in the area.",
      author: "Dennis, CEO of American Eagle Firearms LLC",
      link: "https://ae-firearms-dt.vercel.app/",
      image: "/ae-firearms-portfolio.webp",
      alt: "Professional Firearms Dealer Website – AE Firearms LLC",
      techStack: [
        { name: 'React' },
        { name: 'TypeScript' },
        { name: 'Tailwind' },
        { name: 'Responsive Design' },
        { name: 'Contact Forms' },
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center"></div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 mb-4">
            Recent Website Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A showcase of high-performance websites I've developed for businesses in Southwest Florida and beyond.
          </p>
        </div>

        <p className="text-base text-gray-500 text-center max-w-4xl mx-auto mb-16">
          Each website is built from scratch using modern frameworks, responsive design, and SEO best practices to deliver real business results.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-md rounded-2xl border border-gray-800 overflow-hidden group transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute top-4 right-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black/40 backdrop-blur-sm text-white p-3 rounded-full hover:bg-blue-500/80 transition-colors duration-200 flex items-center gap-2"
                      aria-label={`Visit ${project.title} website`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 text-center flex flex-col items-center">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                    {project.techStack.map(tech => (
                        <span key={tech.name} className="bg-gray-800/80 text-blue-300 text-xs font-medium px-3 py-1 rounded-full border border-gray-700">
                            {tech.name}
                        </span>
                    ))}
                </div>

                <blockquote className="border-t-2 border-blue-500/30 pt-4 italic text-gray-300 my-5 max-w-md">
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
