import React from 'react';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';

export function Legal() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          <section>
            <h1 className="text-4xl font-bold text-white mb-8">Legal Information</h1>
            <div className="bg-cyan-950/30 backdrop-blur-lg rounded-xl p-8 border border-cyan-500/20 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Privacy Policy</h2>
                <p className="text-cyan-100">
                  Our privacy policy outlines how we collect, use, and protect your personal information.
                  We are committed to maintaining the trust and confidence of our users.
                </p>
                <Link to="/privacy" className="inline-block mt-4 text-cyan-400 hover:text-cyan-300">
                  Read full Privacy Policy →
                </Link>
              </div>
              
              <div className="pt-6 border-t border-cyan-950">
                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Terms of Service</h2>
                <p className="text-cyan-100">
                  Our terms of service explain the rules and regulations for using StartupAI's platform
                  and services. By using our platform, you agree to these terms.
                </p>
                <Link to="/terms" className="inline-block mt-4 text-cyan-400 hover:text-cyan-300">
                  Read full Terms of Service →
                </Link>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">AI Model Compliance</h2>
            <div className="bg-cyan-950/30 backdrop-blur-lg rounded-xl p-8 border border-cyan-500/20">
              <p className="text-cyan-100 mb-6">
                Our AI models comply with all applicable regulations, including:
              </p>
              <ul className="space-y-4 text-cyan-100">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  India's AI Safety and Ethics Guidelines
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  NITI Aayog's Responsible AI Framework
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  International AI Ethics Standards
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}