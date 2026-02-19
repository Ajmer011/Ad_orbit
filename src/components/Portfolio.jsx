// components/Portfolio.jsx - Ultra-Premium Portfolio/Featured Work Section
import React, { useState, useRef } from 'react';
import { ExternalLink, X, Sparkles, Award } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const portRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Growth Campaign',
      client: 'TechStore Inc.',
      category: 'SEO & Content',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
      description: 'Increased organic traffic by 250% and revenue by 180% through comprehensive SEO optimization and content marketing strategy.',
      results: ['250% Traffic Growth', '180% Revenue Increase', '3.5x ROI'],
      gradient: 'from-cyan-400 via-sky-500 to-blue-500',
      glowColor: 'rgba(34,211,238,0.3)',
    },
    {
      id: 2,
      title: 'Social Media Revolution',
      client: 'FashionHub',
      category: 'Social Media',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80',
      description: 'Built a vibrant social community with 500K+ followers and 15% engagement rate through creative campaigns and influencer partnerships.',
      results: ['500K+ Followers', '15% Engagement', '50K Monthly Reach'],
      gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
      glowColor: 'rgba(139,92,246,0.3)',
    },
    {
      id: 3,
      title: 'Brand Identity Redesign',
      client: 'GreenLife Organic',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=600&q=80',
      description: 'Complete brand transformation including logo, guidelines, and marketing collateral that increased brand recognition by 300%.',
      results: ['300% Recognition', 'Award Winning', '40% Sales Lift'],
      gradient: 'from-pink-500 via-rose-500 to-red-500',
      glowColor: 'rgba(236,72,153,0.3)',
    },
    {
      id: 4,
      title: 'Lead Generation Machine',
      client: 'SaaS Solutions',
      category: 'Content Marketing',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
      description: 'Content strategy that generated 1000+ qualified leads monthly through strategic blog posts, whitepapers, and case studies.',
      results: ['1000+ Leads/Month', '35% Conversion', '2.5x Pipeline'],
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      glowColor: 'rgba(249,115,22,0.3)',
    },
    {
      id: 5,
      title: 'PPC Campaign Excellence',
      client: 'Local Services Pro',
      category: 'Paid Advertising',
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&q=80',
      description: 'Optimized Google Ads campaigns reducing cost-per-click by 45% while increasing conversions by 200%.',
      results: ['45% CPC Reduction', '200% More Conversions', '4x ROAS'],
      gradient: 'from-amber-400 via-orange-500 to-red-500',
      glowColor: 'rgba(251,191,36,0.3)',
    },
    {
      id: 6,
      title: 'Email Marketing Success',
      client: 'HealthFit Gym',
      category: 'Email Marketing',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80',
      description: 'Designed and executed email campaigns with 45% open rate and 12% click-through rate, driving membership growth.',
      results: ['45% Open Rate', '12% CTR', '500+ New Members'],
      gradient: 'from-green-400 via-emerald-500 to-teal-500',
      glowColor: 'rgba(74,222,128,0.3)',
    },
  ];

  return (
    <section id="portfolio" className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap');
      `}</style>

      {/* Background with Parallax Effect */}
      <div
        ref={portRef}
        className="absolute inset-0 z-0 transition-transform duration-100"
        style={{
          backgroundImage:
            "url(https://thumbs.dreamstime.com/b/cosmic-dance-planets-stars-vast-expanse-space-beautiful-galaxy-wallpaper-art-piece-explore-universe-385111743.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/85 to-black/95"></div>
      </div>

      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.015] z-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-shift 20s linear infinite'
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none z-10">
        <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[140px] animate-float-slow" />
        <div className="absolute bottom-20 right-[15%] w-[450px] h-[450px] bg-cyan-500/20 rounded-full blur-[130px] animate-float-delayed" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-20">
        {/* Section Header */}
        <div className="text-center mb-20 fade-in-up">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/20 rounded-full mb-8 backdrop-blur-xl">
            <Award className="w-4 h-4 text-cyan-400 animate-pulse-glow" />
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.2em]" style={{ fontFamily: "'Space Mono', monospace" }}>
              Our Portfolio
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1]" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Featured{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient">
                Success Stories
              </span>
              {/* Underline accent */}
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full opacity-40 blur-sm" />
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Real results from real campaigns that transformed businesses
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer card-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#151515] to-[#0d0d0d] border border-gray-800/50 hover:border-gray-700/70 transition-all duration-700 hover:scale-[1.03] shadow-2xl">
                {/* Glow Effect on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl blur-xl z-0"
                  style={{ 
                    background: `radial-gradient(circle at 50% 0%, ${project.glowColor}, transparent 70%)`,
                    transform: 'translateY(-50%)'
                  }}
                />

                {/* Top Border Gradient */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`} />

                {/* Project Image */}
                <div className="relative h-64 overflow-hidden rounded-t-3xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/60 to-transparent opacity-90"></div>
                  
                  {/* Category Badge */}
                  <div 
                    className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold border backdrop-blur-xl transition-all duration-300 group-hover:scale-105`}
                    style={{ 
                      background: `linear-gradient(135deg, ${project.glowColor}, transparent)`,
                      borderColor: `${project.glowColor}`
                    }}
                  >
                    <span className={`bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 flex items-center justify-center`}>
                    <ExternalLink size={40} className="text-white transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                {/* Project Info */}
                <div className="relative p-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-500">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 font-medium">{project.client}</p>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 group-hover:text-gray-300 transition-colors duration-500">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Gradient Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t ${project.gradient} opacity-[0.03] rounded-b-3xl`} />
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-gradient-to-b from-[#151515] to-[#0d0d0d] border border-gray-800/50 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
              {/* Close Button */}
              <div className="sticky top-0 bg-[#151515]/95 backdrop-blur-xl p-6 flex justify-between items-center border-b border-gray-800/50 rounded-t-3xl z-10">
                <h3 className="text-2xl md:text-3xl font-black text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800/50 rounded-xl"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
                <div className="relative rounded-2xl overflow-hidden mb-8">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/80 to-transparent"></div>
                </div>
                
                <div className="mb-8 flex flex-wrap gap-4 items-center">
                  <div className="flex items-center gap-2">
                    <span className={`bg-gradient-to-r ${selectedProject.gradient} bg-clip-text text-transparent font-bold text-sm`}>
                      Client:
                    </span>
                    <span className="text-gray-300 font-medium">{selectedProject.client}</span>
                  </div>
                  <span className="text-gray-700">|</span>
                  <div className="flex items-center gap-2">
                    <span className={`bg-gradient-to-r ${selectedProject.gradient} bg-clip-text text-transparent font-bold text-sm`}>
                      Category:
                    </span>
                    <span className="text-gray-300 font-medium">{selectedProject.category}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                  {selectedProject.description}
                </p>

                <div>
                  <h4 className="text-2xl font-black mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    <span className={`bg-gradient-to-r ${selectedProject.gradient} bg-clip-text text-transparent`}>
                      Key Results
                    </span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {selectedProject.results.map((result, idx) => (
                      <div 
                        key={idx} 
                        className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] border border-gray-800/50 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 overflow-hidden"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.gradient} opacity-[0.03]`} />
                        <div className={`relative text-base font-bold bg-gradient-to-r ${selectedProject.gradient} bg-clip-text text-transparent`}>
                          {result}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cardFadeIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.9);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, 30px) scale(1.1); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, 40px) scale(1.15); }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes grid-shift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        .fade-in-up {
          animation: fadeInUp 0.9s ease-out forwards;
          opacity: 0;
        }

        .card-fade-in {
          animation: cardFadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scale-in {
          animation: scaleIn 0.4s ease-out;
        }

        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 18s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
