import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ArrowRight, Sparkles, Brain, Target, Users, BarChart as ChartBar, Building2 } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { About } from './pages/About';
import { Careers } from './pages/Careers';
import { Community } from './pages/Community';
import { Legal } from './pages/Legal';
import { Documentation } from './pages/Documentation';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Footer } from './components/Footer';
import { ContactForm } from './components/ContactForm';

function Home() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-purple-500/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-950 border border-cyan-500/50 mb-8 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Startup Builder</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Transform Your Vision Into Reality
            </h1>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto mb-8">
              Your AI co-founder that helps validate ideas, build MVPs, connect with investors, and find the perfect team.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-cyan-400 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-400 hover:to-cyan-300 transition-all shadow-[0_0_30px_rgba(6,182,212,0.5)] inline-flex items-center">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Brain />}
            title="Idea Validation"
            description="Get instant feedback on your startup ideas with our custom-trained AI assistant."
          />
          <FeatureCard 
            icon={<Target />}
            title="Market Analysis"
            description="Deep dive into market opportunities, competitor analysis, and growth potential."
          />
          <FeatureCard 
            icon={<ChartBar />}
            title="MVP Builder"
            description="Transform your idea into a working prototype with AI-guided development."
          />
          <FeatureCard 
            icon={<Building2 />}
            title="Investor Connect"
            description="Match with the right investors and prepare for successful fundraising."
          />
          <FeatureCard 
            icon={<Users />}
            title="Co-Founder Matching"
            description="Find your perfect co-founder match based on skills, vision, and compatibility."
          />
          <FeatureCard 
            icon={<Sparkles />}
            title="AI Strategy Assistant"
            description="Get personalized guidance on your startup journey, 24/7."
          />
        </div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-cyan-950">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Simple, Transparent Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard 
            title="Starter"
            price="Free"
            features={[
              "Basic idea validation",
              "Limited market analysis",
              "Community access",
              "Basic AI assistance"
            ]}
          />
          <PricingCard 
            title="Pro"
            price="$49/mo"
            featured={true}
            features={[
              "Advanced idea validation",
              "Full market analysis",
              "MVP builder access",
              "Investor matching",
              "Priority AI assistance"
            ]}
          />
          <PricingCard 
            title="Enterprise"
            price="Custom"
            features={[
              "Custom AI training",
              "Dedicated support",
              "Team collaboration",
              "Advanced analytics",
              "API access"
            ]}
            onContactClick={() => setShowContactForm(true)}
          />
        </div>
      </div>

      <Footer />

      {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-cyan-950/30 backdrop-blur-lg rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400 transition-all group hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]">
      <div className="w-12 h-12 bg-cyan-950 rounded-lg flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all">
        <div className="text-cyan-400 w-6 h-6">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold text-cyan-400 mb-4">{title}</h3>
      <p className="text-cyan-100">{description}</p>
    </div>
  );
}

function PricingCard({ title, price, features, featured = false, onContactClick }) {
  return (
    <div className={`rounded-xl p-8 ${featured ? 'bg-gradient-to-b from-cyan-500/20 to-cyan-950/50' : 'bg-cyan-950/30'} backdrop-blur-lg border ${featured ? 'border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.3)]' : 'border-cyan-500/20'} hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all`}>
      <h3 className="text-xl font-semibold text-cyan-400 mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-white">{price}</span>
        {price !== "Custom" && <span className="text-cyan-100">/month</span>}
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-cyan-100">
            <Sparkles className="w-5 h-5 mr-2 text-cyan-400" />
            {feature}
          </li>
        ))}
      </ul>
      {price === "Custom" ? (
        <button
          className="w-full py-3 rounded-lg font-semibold bg-cyan-400 text-black hover:bg-cyan-300 transition-all"
          onClick={onContactClick}
        >
          Contact Us
        </button>
      ) : (
        <button className={`w-full py-3 rounded-lg font-semibold ${featured ? 'bg-cyan-400 text-black hover:bg-cyan-300' : 'bg-cyan-950 text-cyan-400 border border-cyan-500/50 hover:bg-cyan-900'} transition-all`}>
          Get Started
        </button>
      )}
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/community" element={<Community />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </>
  );
}

export default App;