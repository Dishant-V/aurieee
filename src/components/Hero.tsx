import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-orb absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
        <div className="floating-orb-delay absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-green-500/20 rounded-full blur-xl"></div>
        <div className="floating-orb absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-6 inline-flex items-center px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
          <span className="text-blue-300 text-sm font-medium">Revolutionary AI Technology</span>
        </div>
        
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
          AI Agents That
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Work For You
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Automating calls, messages, and real-time chat with human-like AI voices.
          Scale your business with intelligent automation that never sleeps.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg hover-glow transition-all duration-300 transform hover:scale-105">
            <span className="relative z-10 flex items-center">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button className="px-8 py-4 rounded-full border border-gray-600 text-gray-300 font-semibold text-lg hover:border-blue-500 hover:text-white transition-all duration-300">
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">10K+</div>
            <div className="text-gray-400">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-gray-400">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
            <div className="text-gray-400">Automation</div>
          </div>
        </div>
      </div>
    </section>
  );
};