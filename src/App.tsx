import React from 'react';
import { Hero } from './components/Hero';
import { Agents } from './components/Agents';
import { Features } from './components/Features';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <div className="relative">
        {/* Background pattern */}
        <div className="fixed inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-pink-900/20 to-emerald-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,212,255,0.15)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,107,157,0.15)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(0,255,136,0.08)_0%,transparent_50%)]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Hero />
          <div id="agents">
            <Agents />
          </div>
          <Features />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;