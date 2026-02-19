// components/WhyChooseUs.jsx - Ultra-Premium Why Choose Us Section
import React from 'react';
import { Award, TrendingUp, Clock, Zap, Sparkles } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Award size={48} />,
      title: 'Creative That Converts',
      description: 'We blend bold design with strategic precision to craft campaigns that don\'t just look good—they perform. Every creative decision is engineered to drive engagement, build authority, and turn attention into revenue.',
      stats: 'Performance-Driven',
      gradient: 'from-amber-400 via-orange-500 to-pink-500',
      glowColor: 'rgba(251,146,60,0.3)',
    },
    {
      icon: <TrendingUp size={48} />,
      title: 'Results Driven',
      description: 'We focus on measurable outcomes. Our data-driven approach ensures every campaign is optimized for maximum ROI and business growth.',
      stats: '300% Avg ROI',
      gradient: 'from-emerald-400 via-teal-500 to-cyan-500',
      glowColor: 'rgba(16,185,129,0.3)',
    },
    {
      icon: <Clock size={48} />,
      title: '24/7 Support',
      description: 'Round-the-clock support for all your needs. Our dedicated team is always available to help you achieve your marketing goals.',
      stats: '24/7 Available',
      gradient: 'from-violet-400 via-purple-500 to-fuchsia-500',
      glowColor: 'rgba(139,92,246,0.3)',
    },
    {
      icon: <Zap size={48} />,
      title: 'Scalable Solutions',
      description: 'Whether you\'re a startup or enterprise, our flexible strategies scale with your business. We grow as you grow.',
      stats: 'Unlimited Scale',
      gradient: 'from-sky-400 via-blue-500 to-indigo-500',
      glowColor: 'rgba(56,189,248,0.3)',
    },
  ];

  return (
    <section id="why-choose-us" className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap');
      `}</style>

      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.015]">
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
      <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[15%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px] animate-float-slow" />
        <div className="absolute bottom-20 left-[10%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[140px] animate-float-delayed" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-20 fade-in-up">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-cyan-500/10 border border-orange-500/20 rounded-full mb-8 backdrop-blur-xl">
            <Sparkles className="w-4 h-4 text-orange-400 animate-pulse-glow" />
            <span className="text-orange-400 text-xs font-bold uppercase tracking-[0.2em]" style={{ fontFamily: "'Space Mono', monospace" }}>
              Why Choose Us
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1]" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Built For{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple-400 to-cyan-400 animate-gradient">
                Success
              </span>
              {/* Underline accent */}
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-purple-400 to-cyan-400 rounded-full opacity-40 blur-sm" />
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
            We combine creativity with strategy to deliver outstanding results that matter.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-[#151515] to-[#0d0d0d] border border-gray-800/50 rounded-3xl p-8 hover:border-gray-700/70 transition-all duration-700 hover:scale-[1.03] overflow-hidden text-center card-fade-in"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                fontFamily: "'Outfit', sans-serif"
              }}
            >
              {/* Glow Effect on Hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl blur-xl"
                style={{ 
                  background: `radial-gradient(circle at 50% 0%, ${benefit.glowColor}, transparent 70%)`,
                  transform: 'translateY(-50%)'
                }}
              />

              {/* Top Border Gradient */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Icon Container */}
              <div className="relative mb-6 inline-flex items-center justify-center">
                <div 
                  className={`inline-flex p-5 bg-gradient-to-br ${benefit.gradient} rounded-2xl shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                  style={{ boxShadow: `0 15px 50px ${benefit.glowColor}` }}
                >
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
              </div>

              {/* Stats Badge */}
              <div 
                className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-5 border transition-all duration-500 group-hover:scale-105`}
                style={{ 
                  background: `linear-gradient(135deg, ${benefit.glowColor}, transparent)`,
                  borderColor: `${benefit.glowColor}`
                }}
              >
                <span className={`bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent`}>
                  {benefit.stats}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 text-white leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-500">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                {benefit.description}
              </p>

              {/* Bottom Gradient Accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t ${benefit.gradient} opacity-[0.03] rounded-b-3xl`} />
            </div>
          ))}
        </div>

        {/* Company Stats */}
      
          {/* Top glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent opacity-50 rounded-3xl" />
          
          {/* Top Border */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-400 via-purple-400 to-cyan-400 opacity-60" />

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <div className="stat-item">
             
            
            </div>
            
            <div className="stat-item">
        
             
            </div>
            
            <div className="stat-item">
             
            
            </div>
            
            <div className="stat-item">
             
            </div>
          </div>
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

        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, 40px) scale(1.1); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-50px, 50px) scale(1.15); }
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

        .stat-item {
          transition: transform 0.3s ease;
        }

        .stat-item:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
