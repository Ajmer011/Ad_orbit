// components/Testimonials.jsx - Client Testimonials Section
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO',
      company: 'TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
      rating: 5,
      text: 'Working with MarketPro has been transformative for our business. Their strategic approach to SEO and content marketing increased our organic traffic by 300% in just 6 months. The team is professional, responsive, and truly understands our industry.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Marketing Director',
      company: 'GrowthCo',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
      rating: 5,
      text: 'The ROI we\'ve seen from our campaigns with MarketPro is outstanding. They don\'t just execute tactics—they develop comprehensive strategies that align with our business goals. Our lead generation has increased by 250% and conversion rates have doubled.',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Founder',
      company: 'EcoLife Solutions',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
      rating: 5,
      text: 'From brand identity to social media management, MarketPro has been our trusted partner for 3 years. Their creative team brings fresh ideas while staying true to our brand values. Our social media engagement has increased by 400% and we\'ve built a loyal community.',
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-neon-pink/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-neon-pink text-sm font-semibold uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it—hear from businesses we've helped grow
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-2xl p-8 md:p-12 relative animate-fade-in">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-neon-blue/20">
              <Quote size={64} />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} size={24} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Text */}
              <p className="text-xl md:text-2xl text-gray-300 text-center leading-relaxed mb-8 italic">
                "{currentTestimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-neon-blue"
                />
                <div className="text-left">
                  <div className="font-bold text-lg">{currentTestimonial.name}</div>
                  <div className="text-gray-400">
                    {currentTestimonial.position} at {currentTestimonial.company}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-dark-700 hover:bg-neon-blue/20 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-neon"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-neon-blue" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-dark-700 hover:bg-neon-blue/20 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-neon"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-neon-blue" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-neon-blue w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center animate-on-scroll">
          <p className="text-gray-400 mb-8">Trusted by leading brands worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {['Microsoft', 'Amazon', 'Google', 'Apple', 'Meta'].map((brand) => (
              <div key={brand} className="text-2xl font-bold text-gray-600">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;