import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-lg border-b border-cyan-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Sparkles className="w-8 h-8 text-cyan-400" />
            <span className="text-cyan-400 font-bold text-xl">StartupAI</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/sign-in" className="text-cyan-100 hover:text-cyan-400 transition-colors">
              Sign In
            </Link>
            <Link
              to="/sign-up"
              className="bg-gradient-to-r from-cyan-500 to-cyan-400 text-black px-4 py-2 rounded-lg font-semibold hover:from-cyan-400 hover:to-cyan-300 transition-all shadow-[0_0_15px_rgba(6,182,212,0.5)]"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}