import React, { useState } from 'react';

export function ContactForm({ onClose }) {
  const [email, setEmail] = useState('');
  const [requirements, setRequirements] = useState('');
  const [website, setWebsite] = useState('');
  const [companyType, setCompanyType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email:', email);
    console.log('Requirements:', requirements);
    console.log('Website:', website);
    console.log('Company Type:', companyType);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-cyan-950 p-8 rounded-lg shadow-lg max-w-md w-full border border-cyan-500/20">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-cyan-100 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-cyan-500 rounded bg-cyan-900 text-cyan-100"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-cyan-100 mb-2" htmlFor="website">Website</label>
            <input
              type="url"
              id="website"
              className="w-full p-2 border border-cyan-500 rounded bg-cyan-900 text-cyan-100"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-cyan-100 mb-2" htmlFor="companyType">Company Type</label>
            <input
              type="text"
              id="companyType"
              className="w-full p-2 border border-cyan-500 rounded bg-cyan-900 text-cyan-100"
              value={companyType}
              onChange={(e) => setCompanyType(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-cyan-100 mb-2" htmlFor="requirements">Requirements</label>
            <textarea
              id="requirements"
              className="w-full p-2 border border-cyan-500 rounded bg-cyan-900 text-cyan-100"
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end">
            <button type="button" className="mr-4 text-cyan-400" onClick={onClose}>Cancel</button>
            <button type="submit" className="bg-cyan-400 text-black px-4 py-2 rounded">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}