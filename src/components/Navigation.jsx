import React, { useState } from 'react';
import { Menu, X, Shield, ChevronDown } from 'lucide-react';
import WalletConnect from './WalletConnect';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { name: 'Home', href: '#' },
    { 
      name: 'Products', 
      href: '#',
      dropdown: ['RightGuard Cards', 'Premium Cards', 'Custom Solutions']
    },
    { name: 'Features', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-purple-400" />
            <span className="text-xl font-bold text-white">RightGuards Cards</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center space-x-1 text-white hover:text-purple-300 transition-colors duration-200">
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {activeDropdown === index && (
                      <div className="absolute top-full left-0 mt-2 w-48 glass-effect rounded-lg shadow-lg py-2">
                        {item.dropdown.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href="#"
                            className="block px-4 py-2 text-white hover:text-purple-300 hover:bg-purple-500/20 transition-colors duration-200"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-white hover:text-purple-300 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Wallet Connect & CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <WalletConnect />
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-purple-300 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 glass-effect rounded-lg mt-2">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-3 py-2 text-white hover:text-purple-300 hover:bg-purple-500/20 rounded-md transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex justify-center py-2">
                <WalletConnect />
              </div>
              <button className="w-full text-left bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-2 rounded-md hover:from-purple-600 hover:to-pink-600 transition-all duration-200 mt-4">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
