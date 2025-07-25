import React from 'react';
import { ExternalLink } from 'lucide-react';

// Interface for Tech Stack Badges
interface TechBadge {
  name: string;
  icon?: React.ReactNode; // Optional icon for the badge
}

// Interface for Portfolio Item including tech stack
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
      description: "High-tech, high-converting website with local SEO and ad strategy integration for a professional moving company.",
      testimonial: "This website instantly elevated our brand. We saw a massive increase in calls and Google visibility. It’s fast, clean, and modern.",
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
      title: "Sensuous-Living",
      description: "Luxurious, feminine brand website with a fully integrated e-commerce system, blog, user login portal, and client dashboard features.",
      testimonial: "The site feels luxurious and powerful. Everything I dreamed of for my brand — functional, fast, and beautifully crafted.",
      author: "Trishiana, CEO of Sensuous-Living",
      link: "https://sensuous-living.vercel.app",
      image: "/sl-portfolio.webp",
      alt: "Luxury E-commerce & Client Portal Website – Sensuous Living",
      techStack: [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'JS' },
        { name: 'HubSpot' },
        { name: 'Supabase' },
        { name: 'Stripe' },
        { name: 'OAuth' },
        { name: 'E-Commerce' },
      ]
    }
  ];

  return (
    // SECTION STYLING: Switched to a dark theme with a subtle background pattern for a high-tech feel.
    <section id="portfolio" className="py-24 sm:py-32 bg-black relative overflow-hidden">
        {/* Subtle background grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 mb-4">
            Active Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A showcase of high-performance websites and advanced client platforms I've developed for modern businesses.
          </p>
        </div>

        <p className="text-base text-gray-500 text-center max-w-4xl mx-auto mb-16">
          Each site below is built from scratch using high-performance frameworks, responsive design, and SEO best practices to deliver real business results.
        </p>

        {/* PROJECT CARDS: Now uses a grid layout with glassmorphism effect on cards. */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              // CARD STYLING: Glassmorphism effect with a glowing border on hover.
              className="bg-gray-900/50 backdrop-blur-md rounded-2xl border border-gray-800 overflow-hidden group transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Image overlay for the external link button */}
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
              
              {/* CARD CONTENT: Centered all content within the card for a clean, balanced look. */}
              <div className="p-6 md:p-8 text-center flex flex-col items-center">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                  {project.description}
                </p>
                
                {/* TECH STACK BADGES: Centered using justify-center. */}
                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                    {project.techStack.map(tech => (
                        <span key={tech.name} className="bg-gray-800/80 text-blue-300 text-xs font-medium px-3 py-1 rounded-full border border-gray-700">
                            {tech.name}
                        </span>
                    ))}
                </div>

                {/* TESTIMONIAL: Switched to a top border to better suit the centered layout. */}
                <blockquote className="border-t-2 border-blue-500/30 pt-4 italic text-gray-300 my-5 max-w-md">
                  “{project.testimonial}”
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
