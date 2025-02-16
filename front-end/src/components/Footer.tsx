import React from 'react';

export function Footer() {
  return (
    <footer className="border-t border-cyan-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-cyan-100 hover:text-cyan-400 transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-cyan-100 hover:text-cyan-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-cyan-100 hover:text-cyan-400 transition-colors">API</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-cyan-100 hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="/careers" className="text-cyan-100 hover:text-cyan-400 transition-colors">Careers</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-cyan-100 hover:text-cyan-400 transition-colors">GitHub</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-cyan-100 hover:text-cyan-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-cyan-100 hover:text-cyan-400 transition-colors">Documentation</a></li>
              <li><a href="/community" className="text-cyan-100 hover:text-cyan-400 transition-colors">Community</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-cyan-100 hover:text-cyan-400 transition-colors">Privacy</a></li>
              <li><a href="/legal" className="text-cyan-100 hover:text-cyan-400 transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center text-cyan-100">
          © 2025 StartupAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}