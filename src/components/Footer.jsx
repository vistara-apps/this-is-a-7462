import React from 'react';
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    product: [
      'Features',
      'Pricing',
      'Security',
      'Enterprise',
      'API Documentation'
    ],
    company: [
      'About Us',
      'Careers',
      'Press',
      'Partners',
      'Blog'
    ],
    support: [
      'Help Center',
      'Contact Support',
      'Status Page',
      'Security Center',
      'Privacy Policy'
    ],
    legal: [
      'Terms of Service',
      'Privacy Policy',
      'Cookie Policy',
      'GDPR',
      'Compliance'
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Instagram, href: '#', name: 'Instagram' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-primary-900 to-primary-800 pt-20 pb-8">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">RightGuards Cards</span>
            </div>
            <p className="text-purple-200 mb-6 leading-relaxed">
              Protecting your digital identity with state-of-the-art security solutions. 
              Trusted by over 500,000 users worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-purple-200">
                <Mail className="h-5 w-5" />
                <span>support@rightguards.com</span>
              </div>
              <div className="flex items-center space-x-3 text-purple-200">
                <Phone className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-purple-200">
                <MapPin className="h-5 w-5" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-purple-200 hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-purple-200 hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-purple-200 hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-purple-200 hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="glass-effect rounded-2xl p-8 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-purple-200 mb-6">
              Subscribe to our newsletter for the latest security updates and product announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-purple-400/30 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-purple-400/20">
          <div className="text-purple-200 mb-4 md:mb-0">
            © 2024 RightGuards Cards. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 glass-effect rounded-lg hover:bg-purple-500/20 transition-all duration-200 group"
                  aria-label={social.name}
                >
                  <IconComponent className="h-5 w-5 text-purple-400 group-hover:text-white transition-colors duration-200" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;