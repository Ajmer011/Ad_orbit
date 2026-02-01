// components/Portfolio.jsx - Portfolio/Featured Work Section
import React, { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Growth Campaign',
      client: 'TechStore Inc.',
      category: 'SEO & Content',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
      description: 'Increased organic traffic by 250% and revenue by 180% through comprehensive SEO optimization and content marketing strategy.',
      results: ['250% Traffic Growth', '180% Revenue Increase', '3.5x ROI'],
    },
    {
      id: 2,
      title: 'Social Media Revolution',
      client: 'FashionHub',
      category: 'Social Media',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80',
      description: 'Built a vibrant social community with 500K+ followers and 15% engagement rate through creative campaigns and influencer partnerships.',
      results: ['500K+ Followers', '15% Engagement', '50K Monthly Reach'],
    },
    {
      id: 3,
      title: 'Brand Identity Redesign',
      client: 'GreenLife Organic',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=600&q=80',
      description: 'Complete brand transformation including logo, guidelines, and marketing collateral that increased brand recognition by 300%.',
      results: ['300% Recognition', 'Award Winning', '40% Sales Lift'],
    },
    {
      id: 4,
      title: 'Lead Generation Machine',
      client: 'SaaS Solutions',
      category: 'Content Marketing',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
      description: 'Content strategy that generated 1000+ qualified leads monthly through strategic blog posts, whitepapers, and case studies.',
      results: ['1000+ Leads/Month', '35% Conversion', '2.5x Pipeline'],
    },
    {
      id: 5,
      title: 'PPC Campaign Excellence',
      client: 'Local Services Pro',
      category: 'Paid Advertising',
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&q=80',
      description: 'Optimized Google Ads campaigns reducing cost-per-click by 45% while increasing conversions by 200%.',
      results: ['45% CPC Reduction', '200% More Conversions', '4x ROAS'],
    },
    {
      id: 6,
      title: 'Email Marketing Success',
      client: 'HealthFit Gym',
      category: 'Email Marketing',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80',
      description: 'Designed and executed email campaigns with 45% open rate and 12% click-through rate, driving membership growth.',
      results: ['45% Open Rate', '12% CTR', '500+ New Members'],
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-neon-green text-sm font-semibold uppercase tracking-wider">
            Our Portfolio
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            Real results from real campaigns that transformed businesses
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-xl bg-dark-700 shadow-lg hover:shadow-neon transition-all duration-300 transform hover:-translate-y-2">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-80"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-neon-blue/90 text-white text-sm rounded-full">
                    {project.category}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-neon-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink size={32} className="text-white" />
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-neon-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{project.client}</p>
                  <p className="text-gray-300 line-clamp-2">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-dark-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <div className="sticky top-0 bg-dark-800 p-6 flex justify-between items-center border-b border-gray-700">
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                
                <div className="mb-6">
                  <span className="text-neon-blue text-sm font-semibold">Client: </span>
                  <span className="text-gray-300">{selectedProject.client}</span>
                  <span className="mx-4 text-gray-600">|</span>
                  <span className="text-neon-purple text-sm font-semibold">Category: </span>
                  <span className="text-gray-300">{selectedProject.category}</span>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                <div>
                  <h4 className="text-xl font-bold mb-4 text-gradient">Key Results</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {selectedProject.results.map((result, idx) => (
                      <div key={idx} className="bg-dark-700 rounded-lg p-4 text-center">
                        <div className="text-neon-blue font-bold">{result}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;