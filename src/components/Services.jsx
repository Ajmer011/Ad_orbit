// components/Services.jsx - Services Overview Component
import React from 'react';
import { Search, Share2, Palette, FileText } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Search size={40} />,
      title: 'SEO Optimization',
      description: 'Boost your search rankings with our proven SEO strategies. We optimize your content, improve site speed, and build quality backlinks to drive organic traffic.',
      color: 'neon-blue',
    },
    {
      icon: <Share2 size={40} />,
      title: 'Social Media Marketing',
      description: 'Engage your audience across all platforms. Our creative campaigns increase brand awareness, drive engagement, and convert followers into customers.',
      color: 'neon-purple',
    },
    {
      icon: <Palette size={40} />,
      title: 'Brand Strategy',
      description: 'Build a memorable brand identity that resonates. From logo design to brand guidelines, we create cohesive experiences that tell your story.',
      color: 'neon-pink',
    },
    {
      icon: <FileText size={40} />,
      title: 'Content Marketing',
      description: 'Compelling content that converts. Our expert writers create blog posts, whitepapers, and case studies that establish authority and drive results.',
      color: 'neon-green',
    },
  ];

  return (
    <section id="services" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-neon-blue text-sm font-semibold uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            What We <span className="text-gradient">Offer</span>
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive marketing solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`text-${service.color} mb-6`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Learn More Link */}
              <a
                href="#contact"
                className={`text-${service.color} font-semibold hover:underline inline-flex items-center gap-2`}
              >
                Learn More
                <span>→</span>
              </a>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center animate-on-scroll">
          <p className="text-gray-400 mb-6">
            Need a custom solution? We offer tailored packages for your unique needs.
          </p>
          <button className="btn-primary">
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;