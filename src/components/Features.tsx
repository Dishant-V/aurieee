import React from 'react';
import { Mic, Clock, TrendingUp } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: Mic,
      title: 'Human-like Voices',
      description: 'Advanced AI voices that speak naturally in multiple languages including English, Hindi, and Telugu',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Clock,
      title: '24/7 Automation',
      description: 'Perfect for real estate, healthcare, and businesses that need round-the-clock customer engagement',
      gradient: 'from-pink-500 to-purple-500'
    },
    {
      icon: TrendingUp,
      title: 'Scales With Growth',
      description: 'Effortlessly handle increased volume as your business grows without additional overhead',
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Why Choose Our
            <span className="block bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              AI Agents?
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group text-center">
              <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-r ${feature.gradient} p-5 group-hover:shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-300 transform group-hover:scale-110`}>
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional feature showcase */}
        <div className="mt-20 glass-card p-8 md:p-12 rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Enterprise-Ready Performance
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 mr-4"></div>
                  <span className="text-gray-300">99.9% uptime guarantee</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mr-4"></div>
                  <span className="text-gray-300">SOC 2 compliant infrastructure</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-pink-400 mr-4"></div>
                  <span className="text-gray-300">Real-time analytics dashboard</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-orange-400 mr-4"></div>
                  <span className="text-gray-300">Custom integrations available</span>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
              <div className="glass-card p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-400">Performance Metrics</span>
                  <div className="w-2 h-2 rounded-full bg-emerald-400 pulse-glow"></div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Response Time</span>
                    <span className="text-emerald-400">&lt; 200ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Accuracy Rate</span>
                    <span className="text-cyan-400">98.7%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Customer Satisfaction</span>
                    <span className="text-pink-400">4.9/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};