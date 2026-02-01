// components/Pricing.jsx - Pricing Plans Section
import React, { useState } from 'react';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'annual'

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
      color: 'neon-green',
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-neon-purple text-sm font-semibold uppercase tracking-wider">
            Pricing Plans
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Choose Your <span className="text-gradient">Growth Plan</span>
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            Flexible pricing that scales with your business needs
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center bg-dark-700 rounded-full p-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-primary text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                billingCycle === 'annual'
                  ? 'bg-gradient-primary text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Annual
              <span className="ml-2 text-xs text-neon-green">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative animate-on-scroll ${
                plan.popular ? 'transform scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-primary px-4 py-1 rounded-full flex items-center gap-1 shadow-neon">
                    <Star size={16} className="fill-current" />
                    <span className="text-sm font-bold">Most Popular</span>
                  </div>
                </div>
              )}

              {/* Card */}
              <div
                className={`h-full bg-dark-700 rounded-2xl p-8 glass-effect ${
                  plan.popular
                    ? 'border-2 border-neon-purple shadow-neon'
                    : 'border border-gray-700'
                } hover:shadow-neon-hover transition-all duration-300`}
              >
                {/* Plan Name */}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-gradient">
                      ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                    </span>
                    <span className="text-gray-400 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'month'}
                    </span>
                  </div>
                  {billingCycle === 'annual' && (
                    <p className="text-sm text-neon-green mt-2">
                      Billed annually (${plan.annualPrice * 12}/year)
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check size={20} className={`text-${plan.color} flex-shrink-0 mt-1`} />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-primary text-white hover:shadow-neon'
                      : 'bg-dark-600 text-white hover:bg-dark-500'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-20 animate-on-scroll">
          <h3 className="text-3xl font-bold text-center mb-8">
            Feature <span className="text-gradient">Comparison</span>
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-dark-700 rounded-xl overflow-hidden">
              <thead className="bg-dark-600">
                <tr>
                  <th className="px-6 py-4 text-left text-gray-400 font-semibold">Features</th>
                  <th className="px-6 py-4 text-center text-gray-400 font-semibold">Starter</th>
                  <th className="px-6 py-4 text-center text-gray-400 font-semibold">Professional</th>
                  <th className="px-6 py-4 text-center text-gray-400 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {[
                  ['SEO Optimization', true, true, true],
                  ['Social Media Management', '2 platforms', 'All platforms', 'Unlimited'],
                  ['Analytics Reports', 'Monthly', 'Weekly', 'Daily'],
                  ['Email Marketing', '1K subscribers', '5K subscribers', 'Unlimited'],
                  ['PPC Management', false, true, true],
                  ['Landing Page Optimization', false, true, true],
                  ['Dedicated Account Manager', false, true, true],
                  ['Video Marketing', false, false, true],
                  ['API Access', false, false, true],
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-dark-600 transition-colors">
                    <td className="px-6 py-4 text-gray-300">{row[0]}</td>
                    {[1, 2, 3].map((colIdx) => (
                      <td key={colIdx} className="px-6 py-4 text-center">
                        {typeof row[colIdx] === 'boolean' ? (
                          row[colIdx] ? (
                            <Check size={20} className="text-neon-green inline" />
                          ) : (
                            <span className="text-gray-600">—</span>
                          )
                        ) : (
                          <span className="text-gray-300">{row[colIdx]}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ or Additional Info */}
        <div className="mt-16 text-center animate-on-scroll">
          <p className="text-gray-400 mb-4">
            Need a custom plan? We can create a tailored solution for your business.
          </p>
          <button className="btn-secondary">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;