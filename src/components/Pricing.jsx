// components/Pricing.jsx - Enhanced Pricing Plans Section with Login
import React, { useState } from 'react';
import { Check, Star, Lock, Eye, X } from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started',
      monthlyPrice: 999,
      annualPrice: 799,
      popular: false,
      features: [
        'SEO Optimization',
        'Social Media Management (2 platforms)',
        'Monthly Analytics Report',
        'Email Marketing (up to 1000 subscribers)',
        'Content Calendar',
        'Basic Support',
      ],
      cta: 'Get Started',
      color: 'neon-blue',
      gradient: 'from-neon-blue to-cyan-400',
    },
    {
      name: 'Professional',
      description: 'Best for growing businesses',
      monthlyPrice: 2499,
      annualPrice: 1999,
      popular: true,
      features: [
        'Everything in Starter',
        'Advanced SEO & Content Strategy',
        'Social Media (All platforms)',
        'Weekly Analytics Report',
        'Email Marketing (up to 5000 subscribers)',
        'PPC Campaign Management',
        'Landing Page Optimization',
        'Priority Support',
        'Dedicated Account Manager',
      ],
      cta: 'Get Started',
      color: 'neon-purple',
      gradient: 'from-neon-purple to-purple-500',
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with custom needs',
      monthlyPrice: 4999,
      annualPrice: 3999,
      popular: false,
      features: [
        'Everything in Professional',
        'Custom Marketing Strategy',
        'Unlimited Social Media',
        'Daily Analytics & Insights',
        'Email Marketing (Unlimited)',
        'Full-Service PPC Management',
        'Brand Strategy & Design',
        'Video Marketing',
        'API Access',
        '24/7 Premium Support',
        'Dedicated Team',
      ],
      cta: 'Contact Sales',
      color: 'green-400',
      gradient: 'from-green-400 to-emerald-400',
    },
  ];

  const handleViewPrice = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple demo login - replace with real authentication
    if (loginForm.email && loginForm.password) {
      setIsLoggedIn(true);
      setShowLoginModal(false);
      // You can add proper authentication logic here
    }
  };

  return (
    <section id="pricing" className="relative py-24 bg-dark-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
            <Star className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-semibold uppercase tracking-wider">
              Pricing Plans
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-neon-purple">Growth Plan</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Flexible pricing that scales with your business needs
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center bg-dark-800 border border-gray-700 rounded-full p-1.5 shadow-lg">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-neon-blue to-purple-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                billingCycle === 'annual'
                  ? 'bg-gradient-to-r from-neon-blue to-purple-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-green-400/20 text-green-400 px-2 py-0.5 rounded-full">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative animate-on-scroll ${
                plan.popular ? 'md:scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`bg-gradient-to-r ${plan.gradient} px-5 py-2 rounded-full flex items-center gap-2 shadow-xl`}>
                    <Star size={16} className="fill-white text-white" />
                    <span className="text-sm font-bold text-white">Most Popular</span>
                  </div>
                </div>
              )}

              {/* Card */}
              <div
                className={`h-full bg-gradient-to-br from-dark-800/80 to-dark-900/80 backdrop-blur-md rounded-2xl p-8 ${
                  plan.popular
                    ? 'border-2 border-purple-500/50 shadow-2xl shadow-purple-500/20'
                    : 'border border-gray-700/50'
                } hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 relative overflow-hidden group`}
              >
                {/* Background Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                  <p className="text-gray-400 mb-6 text-sm">{plan.description}</p>

                  {/* Price - Blurred if not logged in */}
                  <div className="mb-8 relative">
                    {!isLoggedIn ? (
                      <div className="relative">
                        <div className="blur-sm select-none pointer-events-none">
                          <div className="flex items-baseline">
                            <span className={`text-5xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                              $999
                            </span>
                            <span className="text-gray-400 ml-2">
                              /month
                            </span>
                          </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button
                            onClick={handleViewPrice}
                            className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${plan.gradient} text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300`}
                          >
                            <Lock className="w-4 h-4" />
                            View Price
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-baseline">
                          <span className={`text-5xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                            ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                          </span>
                          <span className="text-gray-400 ml-2">
                            /{billingCycle === 'monthly' ? 'month' : 'month'}
                          </span>
                        </div>
                        {billingCycle === 'annual' && (
                          <p className="text-sm text-green-400 mt-2 flex items-center gap-1">
                            <Check size={16} />
                            Billed annually (${plan.annualPrice * 12}/year)
                          </p>
                        )}
                      </>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 group/item">
                        <div className={`p-1 bg-gradient-to-br ${plan.gradient} rounded-full`}>
                          <Check size={14} className="text-white" />
                        </div>
                        <span className="text-gray-300 text-sm group-hover/item:text-white transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  {isLoggedIn ? (
                    <button
                      className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                        plan.popular
                          ? `bg-gradient-to-r ${plan.gradient} text-white shadow-lg hover:shadow-xl hover:scale-105`
                          : 'bg-dark-700 border-2 border-gray-600 text-white hover:border-gray-500 hover:bg-dark-600'
                      }`}
                    >
                      {plan.cta}
                    </button>
                  ) : (
                    <button
                      onClick={handleViewPrice}
                      className="w-full py-4 bg-dark-700 border-2 border-gray-600 text-white font-bold rounded-xl hover:border-purple-500 hover:bg-dark-600 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Eye className="w-5 h-5" />
                      View Full Details
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-center animate-on-scroll">
          <div className="max-w-3xl mx-auto">
           
          </div>
        </div>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative bg-dark-800 border border-gray-700 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl animate-scale-in">
            {/* Close Button */}
            <button
              onClick={() => setShowLoginModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex p-3 bg-gradient-to-r from-neon-blue to-purple-500 rounded-xl mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Login to View Pricing</h3>
              <p className="text-gray-400">Get access to exclusive pricing details</p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={loginForm.email}
                  onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                  className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                <input
                  type="password"
                  required
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                  className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue transition-colors"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-neon-blue to-purple-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Login & View Pricing
              </button>
            </form>

            {/* Footer */}
            <p className="text-center text-sm text-gray-400 mt-6">
              Don't have an account?{' '}
              <a href="#contact" className="text-neon-blue hover:underline font-semibold">
                Sign up free
              </a>
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }

        @keyframes float-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-on-scroll {
          animation: float-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Pricing;
