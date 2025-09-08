import React from 'react';
import { Shield, Zap, Lock, Globe, Users, Smartphone, Eye, RefreshCw } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Advanced Threat Protection",
      description: "Real-time protection against malware, phishing, and advanced persistent threats with machine learning detection."
    },
    {
      icon: Zap,
      title: "Lightning Fast Response",
      description: "Instant threat detection and response with sub-second reaction times to protect your digital assets."
    },
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "Military-grade 256-bit encryption ensures your data remains secure during transmission and storage."
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Worldwide infrastructure with 99.9% uptime and local data centers for optimal performance."
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Centralized dashboard for managing multiple users, permissions, and security policies across your organization."
    },
    {
      icon: Smartphone,
      title: "Multi-Device Sync",
      description: "Seamless protection across all your devices with automatic synchronization and unified security policies."
    },
    {
      icon: Eye,
      title: "Real-Time Monitoring",
      description: "24/7 monitoring with intelligent alerts and detailed security analytics to keep you informed."
    },
    {
      icon: RefreshCw,
      title: "Automatic Updates",
      description: "Always stay protected with automatic security updates and threat intelligence updates."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 gradient-bg opacity-80"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features for
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Complete Protection
            </span>
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Our comprehensive security suite provides everything you need to protect your digital life 
            with cutting-edge technology and user-friendly interfaces.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group card-gradient rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 mb-6 group-hover:scale-110 transition-transform duration-200">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-purple-200 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-effect rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Secure Your Digital Life?
            </h3>
            <p className="text-purple-200 mb-8 text-lg">
              Join over 500,000 users who trust RightGuards Cards to protect their digital assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 font-semibold text-lg">
                Start Free Trial
              </button>
              <button className="glass-effect text-white px-8 py-4 rounded-2xl hover:bg-purple-500/20 transition-all duration-200 font-semibold text-lg">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;