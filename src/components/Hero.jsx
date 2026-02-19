// components/Hero.jsx - Enhanced Hero Section Component
import React, { useEffect, useRef } from "react";
import { ArrowRight, Zap } from "lucide-react";


const Hero = () => {
  const heroRef = useRef(null);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div
        ref={heroRef}
        className="absolute inset-0 z-0 transition-transform duration-100"
        style={{
          backgroundImage:
            "url(https://thumbs.dreamstime.com/b/cosmic-dance-planets-stars-vast-expanse-space-beautiful-galaxy-wallpaper-art-piece-explore-universe-385111743.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90"></div>
      </div>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(rgba(0, 191, 255, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(0, 191, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}
        ></div>
      </div>

      {/* Enhanced Glow Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-neon-blue/30 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-500/25 rounded-full blur-[120px] animate-pulse-slow-delay"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[150px] animate-spin-slow"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center space-y-6">
          
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-neon-blue/10 to-purple-500/10 border border-neon-blue/30 rounded-full backdrop-blur-sm animate-fade-in-down">
          
            <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
          </div>

          {/* MAIN HEADING with Glitch Effect */}
          <div className="relative">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight animate-fade-in-up leading-tight">
              <span className="relative inline-block">
                <span className="text-gradient relative z-10">
                  GROW YOUR
                </span>
                <span className="absolute inset-0 text-gradient blur-xl opacity-50 animate-pulse"></span>
              </span>
              <br />
              <span className="relative inline-block mt-1">
                <span className="text-gradient-alt relative z-10 animate-shimmer bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-purple-400 to-neon-purple bg-[length:200%_100%] leading-tight">
                  BRAND ORBIT
                </span>
                <span className="absolute inset-0 blur-2xl opacity-60 bg-gradient-to-r from-neon-blue to-neon-purple animate-pulse"></span>
              </span>
            </h1>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-16 h-16 border-2 border-neon-blue/30 rounded-full animate-spin-slow hidden lg:block"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 border-2 border-purple-500/30 rounded-full animate-spin-reverse hidden lg:block"></div>
          </div>

          {/* Enhanced Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed animate-fade-in-up animation-delay-200">
            We help ambitious brands <span className="text-neon-blue font-semibold">dominate their market</span> with 
            <span className="text-purple-400 font-semibold"> data-driven strategies</span>, creative campaigns, and 
            <span className="text-green-400 font-semibold"> measurable growth</span>.
          </p>

          {/* CTA Buttons with Enhanced Effects */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
            <button className="group relative px-7 py-3.5 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold rounded-xl shadow-2xl shadow-neon-blue/50 hover:shadow-neon-purple/50 transition-all duration-500 hover:scale-105 overflow-hidden">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-neon-purple to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative flex items-center gap-2 text-base">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <span className="absolute inset-0 -z-10 blur-xl bg-gradient-to-r from-neon-blue to-neon-purple opacity-50 group-hover:opacity-75 transition-opacity"></span>
            </button>

            <button className="group px-7 py-3.5 bg-transparent border-2 border-neon-blue/50 text-white font-bold rounded-xl hover:bg-neon-blue/10 hover:border-neon-blue transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              <span className="flex items-center gap-2 text-base">
                <Zap className="w-5 h-5 text-neon-blue group-hover:animate-pulse" />
                View Our Work
              </span>
            </button>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 w-full max-w-4xl animate-fade-in-up animation-delay-600">
            <div className="group relative p-5 bg-gradient-to-br from-dark-800/50 to-dark-900/50 backdrop-blur-md border border-neon-blue/20 rounded-2xl hover:border-neon-blue/50 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             
              
         
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="group relative p-5 bg-gradient-to-br from-dark-800/50 to-dark-900/50 backdrop-blur-md border border-purple-500/20 rounded-2xl hover:border-purple-500/50 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
           
   
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="group relative p-5 bg-gradient-to-br from-dark-800/50 to-dark-900/50 backdrop-blur-md border border-green-400/20 rounded-2xl hover:border-green-400/50 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             
             
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-fade-in animation-delay-800">
        <div className="relative flex flex-col items-center gap-2">
          <span className="text-xs text-gray-500 font-medium tracking-wider uppercase">Scroll</span>
          <div className="w-7 h-12 border-2 border-neon-blue/50 rounded-full flex justify-center relative overflow-hidden group hover:border-neon-blue transition-colors duration-300">
            <div className="w-1.5 h-3 bg-neon-blue rounded-full mt-2 animate-scroll-bounce"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>

      {/* Custom Animations Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-15px) translateX(5px); }
        }

        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }

        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        @keyframes scroll-bounce {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(12px); opacity: 0.5; }
        }

        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }

        @keyframes pulse-slow-delay {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0.4; }
        }

        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-slow-delay {
          animation: pulse-slow-delay 4s ease-in-out infinite 2s;
        }

        .animate-scroll-bounce {
          animation: scroll-bounce 2s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }

        .animation-delay-800 {
          animation-delay: 800ms;
        }
      `}</style>
    </section>
  );
};

export default Hero;
