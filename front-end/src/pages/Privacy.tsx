import React from 'react';
import { Footer } from '../components/Footer';

export function Privacy() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Your privacy is important to us. This privacy policy explains how we collect, use, and protect your information.
          </p>
        </div>

        <div className="bg-cyan-950/30 backdrop-blur-lg rounded-xl p-8 border border-cyan-500/20 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Information Collection</h2>
          <p className="text-cyan-100 mb-4">
            We collect information that you provide to us directly, such as when you create an account, update your profile, or use our services.
          </p>
          <p className="text-cyan-100 mb-4">
            We also collect information automatically as you navigate our site, such as your IP address, browser type, and usage data.
          </p>
        </div>

        <div className="bg-cyan-950/30 backdrop-blur-lg rounded-xl p-8 border border-cyan-500/20 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Use of Information</h2>
          <p className="text-cyan-100 mb-4">
            We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to protect our users.
          </p>
          <p className="text-cyan-100 mb-4">
            We may also use the information for research and analytics purposes to better understand how our services are used.
          </p>
        </div>

        <div className="bg-cyan-950/30 backdrop-blur-lg rounded-xl p-8 border border-cyan-500/20 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Information Sharing</h2>
          <p className="text-cyan-100 mb-4">
            We do not share your personal information with third parties except as necessary to provide our services, comply with the law, or protect our rights.
          </p>
          <p className="text-cyan-100 mb-4">
            We may share aggregated or anonymized information that does not directly identify you with third parties for research and analysis purposes.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}