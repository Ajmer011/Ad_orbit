// components/WhyChooseUs.jsx - Why Choose Us Section
import React from 'react';
import { Award, TrendingUp, Clock, Zap } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Award size={48} />,
      title: 'Industry Expertise',
      description: 'Over 10 years of experience delivering exceptional marketing campaigns across diverse industries. Our team stays ahead of trends and best practices.',
      stats: '10+ Years',
    },
    {
      icon: <TrendingUp size={48} />,
      title: 'Results Driven',
      description: 'We focus on measurable outcomes. Our data-driven approach ensures every campaign is optimized for maximum ROI and business growth.',
      stats: '300% Avg ROI',
    },
    {
      icon: <Clock size={48} />,
      title: '24/7 Support',
      description: 'Round-the-clock support for all your needs. Our dedicated team is always available to help you achieve your marketing goals.',
      stats: '24/7 Available',
    },
    {
      icon: <Zap size={48} />,
      title: 'Scalable Solutions',
      description: 'Whether you\'re a startup or enterprise, our flexible strategies scale with your business. We grow as you grow.',
      stats: 'Unlimited Scale',
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-neon-purple text-sm font-semibold uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Built For <span className="text-gradient">Success</span>
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            We combine creativity with strategy to deliver outstanding results
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card text-center animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon with Gradient Background */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-primary mb-6">
                <div className="text-white">
                  {benefit.icon}
                </div>
              </div>

              {/* Stats Badge */}
              <div className="inline-block px-4 py-1 bg-neon-blue/20 text-neon-blue rounded-full text-sm font-semibold mb-4">
                {benefit.stats}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Company Stats */}
        <div className="glass-effect rounded-2xl p-8 md:p-12 animate-on-scroll">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-gradient mb-2">500+</div>
              <div className="text-gray-400">Successful Projects</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gradient mb-2">250+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gradient mb-2">50+</div>
              <div className="text-gray-400">Team Members</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gradient mb-2">15+</div>
              <div className="text-gray-400">Industry Awards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;