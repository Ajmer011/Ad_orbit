// components/Footer.jsx - Footer Component
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/' },
      { name: 'Careers', href: '/' },
      { name: 'Blog', href: '/' },
      { name: 'Press', href: '/' },
    ],
    services: [
      { name: 'SEO', href: '#services' },
      { name: 'Social Media', href: '#services' },
      { name: 'Branding', href: '#services' },
      { name: 'Content', href: '#services' },
    ],
    support: [
      { name: 'Help Center', href: '/' },
      { name: 'Contact', href: '#contact' },
      { name: 'Privacy Policy', href: '/' },
      { name: 'Terms of Service', href: '/' },
    ],
  };

  const socialLinks = [
    { Icon: Facebook, href: '/', label: 'Facebook' },
    { Icon: Twitter, href: '/', label: 'Twitter' },
    { Icon: Instagram, href: '/', label: 'Instagram' },
    { Icon: Linkedin, href: '/', label: 'LinkedIn' },
    { Icon: Youtube, href: '/', label: 'YouTube' },
  ];

  return (
    <footer className="bg-dark-800 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <a href="#hero" className="text-3xl font-bold text-gradient mb-4 inline-block">
              Adorbit
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              Transform your brand with data-driven marketing strategies that deliver real results. 
              We're your partner in digital success.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="text-neon-blue" />
                <a href="mailto:adorbit.org@gmail.com" className="hover:text-neon-blue transition-colors">
                  adorbit.org@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={18} className="text-neon-blue" />
                <a href="tel:+919516991004" className="hover:text-neon-blue transition-colors">
                  +91 9516991004
                </a>
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} className="text-neon-blue" />
                <span>Bhopal, Madhya Pradesh</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-neon-blue transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-neon-blue transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-neon-blue transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {currentYear} MarketPro. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 bg-dark-700 rounded-full flex items-center justify-center text-gray-400 hover:bg-neon-blue hover:text-white transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="/" className="hover:text-neon-blue transition-colors">
                Privacy Policy
              </a>
              <a href="/" className="hover:text-neon-blue transition-colors">
                Terms
              </a>
              <a href="/" className="hover:text-neon-blue transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-neon hover:shadow-neon-hover transition-all duration-300 z-40"
        aria-label="Scroll to top"
      >
        <span className="text-2xl text-white">↑</span>
      </button>
    </footer>
  );
};

export default Footer;
