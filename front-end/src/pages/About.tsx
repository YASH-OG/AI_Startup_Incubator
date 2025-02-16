import React from 'react';
import { Brain, Target, Users, Linkedin, Github } from 'lucide-react';
import { Footer } from '../components/Footer';
import yashPic from '../static/pic/yash.jpeg';
import adinePic from '../static/pic/adine.jpeg';
import saumyaPic from '../static/pic/saumya-2.jpeg';

export function About() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About StartupAI</h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            We're building the future of entrepreneurship by combining artificial intelligence with human creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="text-center">
            <div className="w-16 h-16 bg-cyan-950 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Our Mission</h3>
            <p className="text-cyan-100">
              To democratize entrepreneurship by making expert-level startup guidance accessible to everyone.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-cyan-950 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Our Vision</h3>
            <p className="text-cyan-100">
              A world where every innovative idea has the chance to become a successful business.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-cyan-950 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Our Team</h3>
            <p className="text-cyan-100">
              A diverse group of entrepreneurs, engineers, and AI experts passionate about startup success.
            </p>
          </div>
        </div>

        <div className="bg-cyan-950/30 backdrop-blur-lg rounded-xl p-8 border border-cyan-500/20 mb-20">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Our Story</h2>
          <div className="text-cyan-100 space-y-4 max-w-3xl mx-auto">
            <p>
              Founded in 2025, StartupAI emerged from a simple observation: while starting a business has never been more accessible, the path to success remains complex and challenging.
            </p>
            <p>
              We recognized that artificial intelligence could revolutionize how entrepreneurs build and scale their businesses. By combining cutting-edge AI technology with decades of startup expertise, we've created a platform that provides personalized, actionable guidance to founders at every stage of their journey.
            </p>
            <p>
              Today, we're proud to support thousands of entrepreneurs worldwide, helping them transform their visions into successful businesses.
            </p>
          </div>
        </div>

        <div className="bg-cyan-950/30 backdrop-blur-lg rounded-xl p-8 border border-cyan-500/20">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <img src={yashPic} alt="Yash Lal" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Yash Lal</h3>
              <p className="text-cyan-100">Developer Lead</p>
              <div className="flex justify-center space-x-4 mt-2">
                <a href="https://www.linkedin.com/in/yash-lal-4a22b6257/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-6 h-6 text-cyan-400 hover:text-cyan-300 transition-colors" />
                </a>
                <a href="https://github.com/yash-og" target="_blank" rel="noopener noreferrer">
                  <Github className="w-6 h-6 text-cyan-400 hover:text-cyan-300 transition-colors" />
                </a>
              </div>
            </div>
            <div className="text-center">
              <img src={saumyaPic} alt="Saumya C" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Saumya C</h3>
              <p className="text-cyan-100">Creative Strategist</p>
              <div className="flex justify-center space-x-4 mt-2">
                <a href="https://www.linkedin.com/in/saumya-c-548727332/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-6 h-6 text-cyan-400 hover:text-cyan-300 transition-colors" />
                </a>
                <a href="https://github.com/saumya-ch-100" target="_blank" rel="noopener noreferrer">
                  <Github className="w-6 h-6 text-cyan-400 hover:text-cyan-300 transition-colors" />
                </a>
              </div>
            </div>
            <div className="text-center">
              <img src={adinePic} alt="Adine Vikash" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Adine Vikash</h3>
              <p className="text-cyan-100">Front-End Developer</p>
              <div className="flex justify-center space-x-4 mt-2">
                <a href="https://www.linkedin.com/in/adinevikash/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-6 h-6 text-cyan-400 hover:text-cyan-300 transition-colors" />
                </a>
                <a href="https://github.com/adinetech/" target="_blank" rel="noopener noreferrer">
                  <Github className="w-6 h-6 text-cyan-400 hover:text-cyan-300 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}