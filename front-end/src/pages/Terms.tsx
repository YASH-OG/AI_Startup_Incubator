import React from 'react';
import { Footer } from '../components/Footer';

export function Terms() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Terms of Service</h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            These terms of service outline the rules and regulations for using StartupAI's platform and services.
          </p>
        </div>

        <div className="bg-cyan-950/30 backdrop-blur-lg rounded-xl p-8 border border-cyan-500/20 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Acceptance of Terms</h2>
          <p className="text-cyan-100 mb-4">
            By accessing and using our platform, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </div>

        <div className="bg-cyan-950/30 backdrop-blur-lg rounded-xl p-8 border border-cyan-500/20 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Modification of Terms</h2>
          <p className="text-cyan-100 mb-4">
            We reserve the right to modify these terms at any time. You should check this page regularly to take notice of any changes we may have made.
          </p>
        </div>

        <div className="bg-cyan-950/30 backdrop-blur-lg rounded-xl p-8 border border-cyan-500/20 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">User Responsibilities</h2>
          <p className="text-cyan-100 mb-4">
            You agree to use the platform only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the platform.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}