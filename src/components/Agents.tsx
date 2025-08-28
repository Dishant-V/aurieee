import React from 'react';
import { Phone, MessageCircle, Globe } from 'lucide-react';

export const Agents = () => {
  const agents = [
    {
      name: 'Agent Vox',
      title: 'AI Caller',
      description: 'A professional AI that makes and receives calls in English, Hindi, and Telugu with human-like conversation.',
      icon: Phone,
      gradient: 'from-cyan-500 to-cyan-600',
      glowColor: 'shadow-cyan-500/30'
    },
    {
      name: 'Agent Echo',
      title: 'AI Messenger',
      description: 'Automates WhatsApp, SMS, and email conversations with intelligent context awareness.',
      icon: MessageCircle,
      gradient: 'from-pink-500 to-pink-600',
      glowColor: 'shadow-pink-500/30'
    },
    {
      name: 'Agent Lume',
      title: 'AI Chatbot',
      description: 'Engages customers in real time on your website or apps, answering questions instantly with natural conversation.',
      icon: Globe,
      gradient: 'from-emerald-500 to-emerald-600',
      glowColor: 'shadow-emerald-500/30'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Our AI Agents
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the right agent for your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <div 
              key={index}
              className={`group glass-card p-8 rounded-2xl hover:shadow-2xl ${agent.glowColor} transition-all duration-500 transform hover:scale-105 hover:-translate-y-2`}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${agent.gradient} p-4 mb-6 group-hover:shadow-lg ${agent.glowColor} transition-all duration-300`}>
                <agent.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{agent.title}</h3>
              <h4 className="text-lg font-semibold text-gray-300 mb-4">{agent.name}</h4>
              <p className="text-gray-400 mb-6 leading-relaxed">{agent.description}</p>
              
              <div className="flex items-center justify-between">
                <button className={`px-6 py-3 rounded-full bg-gradient-to-r ${agent.gradient} text-white font-semibold hover:shadow-lg ${agent.glowColor} transition-all duration-300 transform hover:scale-105`}>
                  Learn More
                </button>
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${agent.gradient} pulse-glow`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};