import React from 'react';
import { Footer } from '../components/Footer';

export function Documentation() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex">
        <aside className="w-64 bg-cyan-950/30 backdrop-blur-lg rounded-xl p-8 border border-cyan-500/20 mr-8">
          <nav className="space-y-4">
            <a href="#getting-started" className="block text-cyan-100 hover:text-cyan-400 transition-colors">Getting Started</a>
            <a href="#features" className="block text-cyan-100 hover:text-cyan-400 transition-colors">Features</a>
            <a href="#faq" className="block text-cyan-100 hover:text-cyan-400 transition-colors">FAQ</a>
          </nav>
        </aside>
        <main className="flex-1">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Documentation</h1>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
              Welcome to the StartupAI documentation. Here you'll find everything you need to get started and make the most of our platform.
            </p>
          </div>

          <section id="getting-started" className="bg-cyan-950/30 backdrop-blur-lg rounded-xl p-8 border border-cyan-500/20 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Getting Started</h2>
            <p className="text-cyan-100 mb-4">
              Follow these steps to get started with StartupAI:
            </p>
            <ol className="list-decimal list-inside text-cyan-100 space-y-2">
              <li>Sign up for an account on our platform.</li>
              <li>Complete your profile and set up your workspace.</li>
              <li>Explore our features and tools to help you build your startup.</li>
              <li>Join our community for support and networking opportunities.</li>
            </ol>
          </section>

          <section id="features" className="bg-cyan-950/30 backdrop-blur-lg rounded-xl p-8 border border-cyan-500/20 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Features</h2>
            <p className="text-cyan-100 mb-4">
              Our platform offers a wide range of features to help you succeed:
            </p>
            <ul className="list-disc list-inside text-cyan-100 space-y-2">
              <li>AI-powered business planning tools</li>
              <li>Market research and analysis</li>
              <li>Financial modeling and forecasting</li>
              <li>Collaboration and project management</li>
              <li>Access to a network of mentors and investors</li>
            </ul>
          </section>

          <section id="faq" className="bg-cyan-950/30 backdrop-blur-lg rounded-xl p-8 border border-cyan-500/20 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">FAQ</h2>
            <div className="text-cyan-100 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">How do I sign up?</h3>
                <p>Click on the "Sign Up" button on the top right corner of the homepage and fill in your details.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">Is there a free trial available?</h3>
                <p>Yes, we offer a 14-day free trial for new users. No credit card required.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">How can I contact support?</h3>
                <p>You can reach out to our support team via the "Contact Us" page or by emailing support@startupai.com.</p>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}