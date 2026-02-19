// components/Services.jsx - Ultra-Premium Dark Theme Services Component
import React from 'react';
import { 
  Search, 
  Share2, 
  Palette, 
  Code, 
  Sparkles, 
  Mail, 
  MessageCircle, 
  PenTool, 
  Zap,
  User,
  ArrowRight,
  Sparkle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code size={40} />,
      title: 'Website Development & Maintenance',
      description: 'We design and develop structured, conversion-focused websites that serve as powerful digital assets — optimized for performance, usability, and scalability.',
      gradient: 'from-purple-500 via-purple-600 to-indigo-600',
      glowColor: 'rgba(168,85,247,0.4)',
      accentColor: '#a855f7',
    },
    {
      icon: <User size={40} />,
      title: 'Personal Branding',
      description: 'We help founders and professionals build credible digital identities that reflect expertise, authority, and long-term influence.',
      gradient: 'from-indigo-500 via-blue-500 to-cyan-500',
      glowColor: 'rgba(99,102,241,0.4)',
      accentColor: '#6366f1',
    },
    {
      icon: <Sparkles size={40} />,
      title: 'AI Ads Creation & Management',
      description: 'We leverage performance marketing and intelligent campaign optimization to create high-impact advertising strategies that convert attention into revenue.',
      gradient: 'from-amber-400 via-orange-500 to-red-500',
      glowColor: 'rgba(251,191,36,0.4)',
      accentColor: '#fbbf24',
    },
    {
      icon: <Palette size={40} />,
      title: 'Graphic Designing',
      description: 'We create visually compelling brand assets that communicate clarity and consistency. From social media creatives to campaign visuals, our designs are built to strengthen brand perception and drive engagement.',
      gradient: 'from-pink-500 via-rose-500 to-red-500',
      glowColor: 'rgba(236,72,153,0.4)',
      accentColor: '#ec4899',
    },
    {
      icon: <Search size={40} />,
      title: 'Search Engine Optimization (SEO)',
      description: 'We implement data-backed SEO strategies that enhance search visibility, improve rankings, and generate long-term organic growth.',
      gradient: 'from-cyan-400 via-sky-500 to-blue-500',
      glowColor: 'rgba(34,211,238,0.4)',
      accentColor: '#22d3ee',
    },
    {
      icon: <Share2 size={40} />,
      title: 'Social Media Management',
      description: 'We develop structured content strategies that maintain brand presence, improve audience engagement, and position businesses with authority across digital platforms.',
      gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
      glowColor: 'rgba(139,92,246,0.4)',
      accentColor: '#8b5cf6',
    },
    {
      icon: <PenTool size={40} />,
      title: 'Content Writing',
      description: 'We craft persuasive and purpose-driven content aligned with your brand voice — designed to inform, influence, and convert across websites, campaigns, and digital channels.',
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      glowColor: 'rgba(249,115,22,0.4)',
      accentColor: '#f97316',
    },
    {
      icon: <MessageCircle size={40} />,
      title: 'WhatsApp Marketing',
      description: 'We build direct communication channels that enable brands to connect with customers instantly, deliver value-driven messaging, and increase engagement at scale.',
      gradient: 'from-emerald-400 via-teal-500 to-cyan-500',
      glowColor: 'rgba(16,185,129,0.4)',
      accentColor: '#10b981',
    },
    {
      icon: <Mail size={40} />,
      title: 'Email Marketing',
      description: 'We design and execute targeted email communication systems that nurture audiences, strengthen relationships, and drive measurable business outcomes.',
      gradient: 'from-green-400 via-emerald-500 to-teal-500',
      glowColor: 'rgba(74,222,128,0.4)',
      accentColor: '#4ade80',
    },
  ];

  return (
    <section id="services" className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap');
      `}</style>

      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" 
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
      <div className="absolute inset-0 opacity-30 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[140px] animate-float-slow" />
        <div className="absolute top-40 right-[15%] w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[120px] animate-float-delayed" />
        <div className="absolute bottom-20 left-[20%] w-[450px] h-[450px] bg-pink-500/20 rounded-full blur-[130px] animate-float-reverse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-20 fade-in-up">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/20 rounded-full mb-8 backdrop-blur-xl">
            <Sparkle className="w-4 h-4 text-cyan-400 animate-pulse-glow" />
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.2em]" style={{ fontFamily: "'Space Mono', monospace" }}>
              Our Services
            </span>
            <Sparkle className="w-4 h-4 text-pink-400 animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1]" style={{ fontFamily: "'Outfit', sans-serif" }}>
            What We{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient">
                Deliver
              </span>
              {/* Underline accent */}
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full opacity-40 blur-sm" />
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Premium digital solutions engineered for growth, designed for impact, and built to dominate.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-[#151515] to-[#0d0d0d] border border-gray-800/50 rounded-3xl p-8 hover:border-gray-700/70 transition-all duration-700 hover:scale-[1.03] overflow-hidden card-fade-in"
              style={{ 
                animationDelay: `${index * 0.08}s`,
                fontFamily: "'Outfit', sans-serif"
              }}
            >
              {/* Glow Effect on Hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl blur-xl"
                style={{ 
                  background: `radial-gradient(circle at 50% 0%, ${service.glowColor}, transparent 70%)`,
                  transform: 'translateY(-50%)'
                }}
              />

              {/* Top Border Gradient */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Corner Accent Lines */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${service.gradient} blur-2xl`} />
              </div>

              {/* Icon Container */}
              <div className="relative mb-6 flex items-center justify-between">
                <div 
                  className={`inline-flex p-4 bg-gradient-to-br ${service.gradient} rounded-2xl shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                  style={{ boxShadow: `0 10px 40px ${service.glowColor}` }}
                >
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                
                {/* Floating number indicator */}
                <div className="text-6xl font-black text-gray-900/50 select-none" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-white leading-tight tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-500">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-500">
                  {service.description}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-6 group-hover:via-gray-700 transition-colors duration-500" />

                {/* CTA Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-bold group/link"
                >
                  <span 
                    className="bg-gradient-to-r bg-clip-text text-transparent transition-all duration-300"
                    style={{ 
                      backgroundImage: `linear-gradient(90deg, ${service.accentColor}, ${service.accentColor}dd)`
                    }}
                  >
                    Explore Service
                  </span>
                  <ArrowRight 
                    size={15} 
                    className="group-hover/link:translate-x-1 transition-transform duration-300"
                    style={{ color: service.accentColor }}
                  />
                </a>
              </div>

              {/* Bottom Gradient Accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t ${service.gradient} opacity-[0.03] rounded-b-3xl`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-gray-500 text-sm mb-6" style={{ fontFamily: "'Space Mono', monospace" }}>
            READY TO TRANSFORM YOUR BRAND?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl font-bold text-base text-white hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/50"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Let's Build Something Legendary
            <Zap size={18} className="animate-pulse-glow" />
          </a>
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
          50% { transform: translate(30px, 30px) scale(1.1); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, 40px) scale(1.15); }
        }

        @keyframes float-reverse {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -30px) scale(1.08); }
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

        .animate-float-reverse {
          animation: float-reverse 20s ease-in-out infinite;
          animation-delay: 4s;
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

export default Services;
