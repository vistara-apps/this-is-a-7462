import React from 'react';
import { ArrowRight, Shield, Zap, Lock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-bg"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full mb-8">
            <Shield className="h-5 w-5 text-purple-400" />
            <span className="text-purple-200 text-sm font-medium">Secure & Reliable Protection</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            RightGuards
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Cards
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Protect your digital identity with our state-of-the-art security cards.
            Experience unparalleled protection for your digital assets and personal information.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-full">
              <Zap className="h-4 w-4 text-yellow-400" />
              <span className="text-white text-sm">Instant Protection</span>
            </div>
            <div className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-full">
              <Lock className="h-4 w-4 text-green-400" />
              <span className="text-white text-sm">256-bit Encryption</span>
            </div>
            <div className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-full">
              <Shield className="h-4 w-4 text-blue-400" />
              <span className="text-white text-sm">24/7 Monitoring</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 text-lg font-semibold">
              <span>Get Your Card</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button className="glass-effect text-white px-8 py-4 rounded-full hover:bg-purple-500/20 transition-all duration-200 text-lg font-semibold">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500K+</div>
              <div className="text-purple-300">Protected Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-purple-300">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-purple-300">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;