import React, { useState } from 'react';

export function ApplyModal({ isOpen, onClose, position }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-cyan-950/30 backdrop-blur-lg rounded-xl p-8 border border-cyan-500/20 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-white mb-6">Apply for {position.title}</h2>
        <form>
          <div className="mb-4">
            <label className="block text-cyan-100 mb-2" htmlFor="name">Name</label>
            <input className="w-full px-4 py-2 bg-cyan-950 text-cyan-100 rounded-lg border border-cyan-500/20 focus:outline-none focus:border-cyan-400" type="text" id="name" name="name" required />
          </div>
          <div className="mb-4">
            <label className="block text-cyan-100 mb-2" htmlFor="email">Email</label>
            <input className="w-full px-4 py-2 bg-cyan-950 text-cyan-100 rounded-lg border border-cyan-500/20 focus:outline-none focus:border-cyan-400" type="email" id="email" name="email" required />
          </div>
          <div className="mb-4">
            <label className="block text-cyan-100 mb-2" htmlFor="resume">Resume</label>
            <input className="w-full px-4 py-2 bg-cyan-950 text-cyan-100 rounded-lg border border-cyan-500/20 focus:outline-none focus:border-cyan-400" type="file" id="resume" name="resume" required />
          </div>
          <div className="flex justify-end space-x-4">
            <button type="button" className="bg-cyan-950 text-cyan-400 px-4 py-2 rounded-lg font-semibold hover:bg-cyan-900 transition-all" onClick={onClose}>Cancel</button>
            <button type="submit" className="bg-cyan-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition-all">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}