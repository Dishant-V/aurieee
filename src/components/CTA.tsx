import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass-card-dark p-12 md:p-16 rounded-3xl relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-pink-500/5"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-pink-500"></div>
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-pink-200 bg-clip-text text-transparent">
              Start Automating
              <span className="block bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                Today
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of businesses already using our AI agents to streamline their operations and boost customer engagement.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold text-lg hover-glow transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10 flex items-center">
                  <Calendar className="w-5 h-5 mr-3" />
                  Book a Free Demo
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="px-10 py-5 rounded-full border-2 border-gray-600 text-gray-300 font-bold text-lg hover:border-cyan-400 hover:text-white hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300">
                Start Free Trial
              </button>
            </div>

            <div className="mt-12 text-gray-400 text-sm">
              <p>No credit card required • 14-day free trial • Setup in under 5 minutes</p>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16">
          <p className="text-gray-500 text-sm mb-8">Trusted by companies worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-50">
            <div className="w-24 h-8 bg-gray-700 rounded"></div>
            <div className="w-24 h-8 bg-gray-700 rounded"></div>
            <div className="w-24 h-8 bg-gray-700 rounded"></div>
            <div className="w-24 h-8 bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};