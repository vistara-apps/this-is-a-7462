import React, { useState } from 'react';
import { Shield, Star, ArrowRight, Check, Zap, Lock, Globe } from 'lucide-react';

const ProductShowcase = () => {
  const [activeCard, setActiveCard] = useState(0);

  const cards = [
    {
      id: 1,
      name: "RightGuard Elite",
      description: "Ultimate protection for professionals and enterprises",
      price: "$299",
      period: "/year",
      features: [
        "Advanced Threat Detection",
        "Real-time Monitoring",
        "Priority Support",
        "Custom Security Policies",
        "Multi-device Protection",
        "Enterprise Dashboard"
      ],
      icon: Shield,
      gradient: "from-purple-500 to-pink-500",
      popular: true
    },
    {
      id: 2,
      name: "RightGuard Pro",
      description: "Perfect balance of security and convenience",
      price: "$199",
      period: "/year",
      features: [
        "Standard Protection",
        "24/7 Monitoring",
        "Email Support",
        "Basic Analytics",
        "Multi-device Sync"
      ],
      icon: Zap,
      gradient: "from-blue-500 to-purple-500",
      popular: false
    },
    {
      id: 3,
      name: "RightGuard Basic",
      description: "Essential security for personal use",
      price: "$99",
      period: "/year",
      features: [
        "Basic Protection",
        "Standard Support",
        "Single Device",
        "Monthly Reports"
      ],
      icon: Lock,
      gradient: "from-green-500 to-blue-500",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Military-grade encryption and protection protocols"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Instant threat detection and response times"
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Worldwide protection with local support teams"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 gradient-bg opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Protection Level
            </span>
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Select the perfect RightGuards Card for your security needs. 
            All plans include our core protection features with varying levels of coverage.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className={`relative group cursor-pointer transition-all duration-300 ${
                  activeCard === index ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setActiveCard(index)}
              >
                {card.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}
                
                <div className={`card-gradient rounded-3xl p-8 h-full ${
                  card.popular ? 'ring-2 ring-yellow-400/50' : ''
                }`}>
                  {/* Card Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${card.gradient} mb-4`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{card.name}</h3>
                    <p className="text-purple-200 mb-4">{card.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{card.price}</span>
                      <span className="text-purple-300 ml-1">{card.period}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    {card.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <span className="text-purple-100">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full group bg-gradient-to-r ${card.gradient} text-white py-4 rounded-2xl hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 font-semibold`}>
                    <span>Choose Plan</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl glass-effect mb-6 group-hover:scale-110 transition-transform duration-200">
                  <IconComponent className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-purple-200">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;