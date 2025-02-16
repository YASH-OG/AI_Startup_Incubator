import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Footer } from '../components/Footer';
import { ApplyModal } from '../components/ApplyModal';

const positions = [
  {
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time"
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time"
  },
  {
    title: "Growth Marketing Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time"
  },
  {
    title: "Customer Success Lead",
    department: "Operations",
    location: "Remote",
    type: "Full-time"
  }
];

export function Careers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);

  const openModal = (position) => {
    setSelectedPosition(position);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPosition(null);
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Team</h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Help us revolutionize how entrepreneurs build the next generation of world-changing companies.
          </p>
        </div>

        <div className="bg-cyan-950/30 backdrop-blur-lg rounded-xl p-8 border border-cyan-500/20 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Why StartupAI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Mission-Driven</h3>
              <p className="text-cyan-100">
                Be part of a team that's democratizing entrepreneurship and helping founders succeed.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Remote-First</h3>
              <p className="text-cyan-100">
                Work from anywhere in the world with flexible hours and unlimited PTO.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Growth & Impact</h3>
              <p className="text-cyan-100">
                Rapid growth opportunities with direct impact on thousands of startups.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-8">Open Positions</h2>
        <div className="space-y-4">
          {positions.map((position, index) => (
            <div
              key={index}
              className="bg-cyan-950/30 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400 transition-all group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">{position.title}</h3>
                  <div className="flex items-center space-x-4 text-cyan-100">
                    <span>{position.department}</span>
                    <span>•</span>
                    <span>{position.location}</span>
                    <span>•</span>
                    <span>{position.type}</span>
                  </div>
                </div>
                <button
                  className="bg-cyan-950 text-cyan-400 px-4 py-2 rounded-lg font-semibold hover:bg-cyan-900 transition-all flex items-center group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                  onClick={() => openModal(position)}
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ApplyModal isOpen={isModalOpen} onClose={closeModal} position={selectedPosition} />
      <Footer />
    </div>
  );
}