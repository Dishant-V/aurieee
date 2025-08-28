import React from 'react';
import { Bot, Mail, Twitter, Github, Linkedin } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-16 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-cyan-500 to-pink-500 p-3 mr-3">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">AI Agents</span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <button 
              onClick={scrollToTop}
              className="text-gray-400 hover:text-white transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('agents')}
              className="text-gray-400 hover:text-white transition-colors font-medium"
            >
              AI Caller
            </button>
            <button 
              onClick={() => scrollToSection('agents')}
              className="text-gray-400 hover:text-white transition-colors font-medium"
            >
              AI Messenger
            </button>
            <button 
              onClick={() => scrollToSection('agents')}
              className="text-gray-400 hover:text-white transition-colors font-medium"
            >
              AI Chatbot
            </button>
            <a 
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors font-medium"
            >
              Contact Us
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-8">
            <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors">
              <Twitter className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors">
              <Github className="w-5 h-5 text-gray-400 hover:text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors">
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
            </a>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-4">
            <div className="flex items-center text-gray-400 text-sm">
              <Mail className="w-4 h-4 mr-2" />
              <a href="mailto:hello@aiagents.com" className="hover:text-white transition-colors">
                hello@aiagents.com
              </a>
            </div>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
          </div>
          <div className="text-gray-400 text-sm">
            © 2025 YourCompany. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};