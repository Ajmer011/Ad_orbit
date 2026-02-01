// components/Contact.jsx - Contact & Newsletter Section
import React, { useState } from 'react';
import axios from 'axios';
import { Mail, Send, CheckCircle, AlertCircle, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Contact = () => {
  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState({ type: '', message: '' });
  const [isNewsletterLoading, setIsNewsletterLoading] = useState(false);

  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [contactStatus, setContactStatus] = useState({ type: '', message: '' });
  const [isContactLoading, setIsContactLoading] = useState(false);

  // Newsletter Submission
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsNewsletterLoading(true);
    setNewsletterStatus({ type: '', message: '' });

    try {
      const response = await axios.post('/api/newsletter/subscribe', {
        email: newsletterEmail,
      });

      setNewsletterStatus({
        type: 'success',
        message: response.data.message || 'Successfully subscribed!',
      });
      setNewsletterEmail('');
    } catch (error) {
      setNewsletterStatus({
        type: 'error',
        message: error.response?.data?.message || 'Failed to subscribe. Please try again.',
      });
    } finally {
      setIsNewsletterLoading(false);
    }
  };

  // Contact Form Submission
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsContactLoading(true);
    setContactStatus({ type: '', message: '' });

    try {
      const response = await axios.post('/api/contact/submit', contactForm);

      setContactStatus({
        type: 'success',
        message: response.data.message || 'Message sent successfully!',
      });
      setContactForm({ name: '', email: '', message: '' });
    } catch (error) {
      setContactStatus({
        type: 'error',
        message: error.response?.data?.message || 'Failed to send message. Please try again.',
      });
    } finally {
      setIsContactLoading(false);
    }
  };

  const handleContactChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <section id="contact" className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-neon-blue text-sm font-semibold uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Let's Start Your <span className="text-gradient">Success Story</span>
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to transform your marketing? Contact us today for a free consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-on-scroll">
            <div className="bg-dark-800 rounded-2xl p-8 glass-effect">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleContactSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    required
                    className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg focus:outline-none focus:border-neon-blue transition-colors text-white"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    required
                    className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg focus:outline-none focus:border-neon-blue transition-colors text-white"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg focus:outline-none focus:border-neon-blue transition-colors text-white resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                {/* Status Message */}
                {contactStatus.message && (
                  <div
                    className={`flex items-center gap-2 p-4 rounded-lg ${
                      contactStatus.type === 'success'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}
                  >
                    {contactStatus.type === 'success' ? (
                      <CheckCircle size={20} />
                    ) : (
                      <AlertCircle size={20} />
                    )}
                    <span>{contactStatus.message}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isContactLoading}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isContactLoading ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Newsletter & Info */}
          <div className="space-y-8 animate-on-scroll">
            {/* Newsletter Subscription */}
            <div className="bg-gradient-primary rounded-2xl p-8 shadow-neon">
              <div className="flex items-center gap-3 mb-4">
                <Mail size={32} />
                <h3 className="text-2xl font-bold">Subscribe to Newsletter</h3>
              </div>
              <p className="text-white/90 mb-6">
                Get weekly marketing tips, industry insights, and exclusive offers delivered to your inbox.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg focus:outline-none focus:border-white transition-colors text-white placeholder-white/70"
                  placeholder="Enter your email"
                />

                {/* Newsletter Status */}
                {newsletterStatus.message && (
                  <div
                    className={`flex items-center gap-2 p-3 rounded-lg ${
                      newsletterStatus.type === 'success'
                        ? 'bg-green-500/30 text-white'
                        : 'bg-red-500/30 text-white'
                    }`}
                  >
                    {newsletterStatus.type === 'success' ? (
                      <CheckCircle size={18} />
                    ) : (
                      <AlertCircle size={18} />
                    )}
                    <span className="text-sm">{newsletterStatus.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isNewsletterLoading}
                  className="w-full bg-white text-dark-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isNewsletterLoading ? 'Subscribing...' : 'Subscribe Now'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-dark-800 rounded-2xl p-8 glass-effect">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <a href="mailto:hello@marketpro.com" className="text-neon-blue hover:underline">
                    adorbit.org@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Phone</p>
                  <a href="tel:+11234567890" className="text-neon-blue hover:underline">
                   +91 9516991004
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Address</p>
                  <p className="text-gray-300">
                    123 Marketing Street<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8">
                <p className="text-gray-400 text-sm mb-4">Follow Us</p>
                <div className="flex gap-4">
                  {socialLinks.map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="w-10 h-10 bg-dark-700 rounded-full flex items-center justify-center hover:bg-neon-blue hover:text-white transition-all duration-300 hover:shadow-neon"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;