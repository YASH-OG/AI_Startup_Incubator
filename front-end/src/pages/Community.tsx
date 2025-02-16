import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Footer } from '../components/Footer';

export function Community() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Community</h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Connect with fellow entrepreneurs, share experiences, and grow together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <a
            href="https://discord.gg/your-invite"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-950/30 backdrop-blur-lg rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400 transition-all group"
          >
            <div className="flex items-center justify-between mb-6">
              <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" alt="Discord" className="w-12 h-12" />
              <span className="text-cyan-400 font-semibold">50k+ members</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Discord Community</h3>
            <p className="text-cyan-100 mb-6">
              Join our active Discord community for real-time discussions, networking, and support.
            </p>
            <div className="flex items-center text-cyan-400">
              <span className="font-semibold">Join Discord</span>
              <MessageCircle className="ml-2 w-5 h-5" />
            </div>
          </a>

          <a
            href="https://t.me/your-group"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-950/30 backdrop-blur-lg rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400 transition-all group"
          >
            <div className="flex items-center justify-between mb-6">
              <img src="https://telegram.org/img/t_logo.png" alt="Telegram" className="w-12 h-12" />
              <span className="text-cyan-400 font-semibold">25k+ members</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Telegram Group</h3>
            <p className="text-cyan-100 mb-6">
              Join our Telegram group for updates, announcements, and mobile-friendly discussions.
            </p>
            <div className="flex items-center text-cyan-400">
              <span className="font-semibold">Join Telegram</span>
              <MessageCircle className="ml-2 w-5 h-5" />
            </div>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}