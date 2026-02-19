// components/Hero.jsx - Hero Section Component
import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://media.istockphoto.com/id/909664780/video/sun-and-planets-of-the-solar-system-animation-3d-rendering.jpg?s=640x640&k=20&c=NVxaNiiBvZK3dXS6kCAmm7Du3CyGDibFtPTcN3yZYw0=)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Glow Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-24 left-16 w-72 h-72 bg-neon-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-24 right-16 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center space-y-10">

          {/* Badge */}
       

          {/* MAIN HEADING */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            <span className="text-gradient">
              GROW YOUR BRAND ORBIT
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-300 max-w-3xl">
            We help ambitious brands dominate their market with data-driven
            strategies, creative campaigns, and measurable growth.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-5">
            <button className="btn-primary flex items-center gap-2">
              Get Started
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pt-12">
          

          

          
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-blue rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
