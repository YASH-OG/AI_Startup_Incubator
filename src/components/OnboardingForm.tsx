import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StartupConfig, STARTUP_FIELDS, BUSINESS_MODELS, TARGET_MARKETS, STARTUP_STAGES, REVENUE_MODELS } from '@/utils/startup-config';

interface OnboardingFormProps {
  onSubmit: (config: StartupConfig) => void;
  onClose: () => void;
}

const OnboardingForm: React.FC<OnboardingFormProps> = ({ onSubmit, onClose }) => {
  const [step, setStep] = useState(1);
  const [config, setConfig] = useState<Partial<StartupConfig>>({});

  const totalSteps = 4;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      onSubmit(config as StartupConfig);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const updateConfig = (updates: Partial<StartupConfig>) => {
    setConfig({ ...config, ...updates });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Tell us about your idea</h2>
            <div>
              <label className="block text-gray-400 mb-2">What's your startup idea?</label>
              <textarea
                className="w-full h-32 bg-background-light text-white rounded-lg p-3 focus:ring-2 focus:ring-primary"
                placeholder="Describe your startup idea in detail..."
                value={config.idea || ''}
                onChange={(e) => updateConfig({ idea: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">What problem does it solve?</label>
              <textarea
                className="w-full h-24 bg-background-light text-white rounded-lg p-3 focus:ring-2 focus:ring-primary"
                placeholder="Describe the problem you're solving..."
                value={config.problemStatement || ''}
                onChange={(e) => updateConfig({ problemStatement: e.target.value })}
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Field & Model</h2>
            <div>
              <label className="block text-gray-400 mb-2">Select your field</label>
              <select
                className="w-full bg-background-light text-white rounded-lg p-3 focus:ring-2 focus:ring-primary"
                value={config.field || ''}
                onChange={(e) => updateConfig({ field: e.target.value })}
              >
                <option value="">Select a field</option>
                {STARTUP_FIELDS.map((field) => (
                  <option key={field.value} value={field.value}>
                    {field.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Business Model</label>
              <select
                className="w-full bg-background-light text-white rounded-lg p-3 focus:ring-2 focus:ring-primary"
                value={config.modelType || ''}
                onChange={(e) => updateConfig({ modelType: e.target.value })}
              >
                <option value="">Select a business model</option>
                {BUSINESS_MODELS.map((model) => (
                  <option key={model.value} value={model.value}>
                    {model.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Market & Stage</h2>
            <div>
              <label className="block text-gray-400 mb-2">Target Market</label>
              <select
                className="w-full bg-background-light text-white rounded-lg p-3 focus:ring-2 focus:ring-primary"
                value={config.targetMarket || ''}
                onChange={(e) => updateConfig({ targetMarket: e.target.value })}
              >
                <option value="">Select target market</option>
                {TARGET_MARKETS.map((market) => (
                  <option key={market.value} value={market.value}>
                    {market.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Current Stage</label>
              <select
                className="w-full bg-background-light text-white rounded-lg p-3 focus:ring-2 focus:ring-primary"
                value={config.stage || ''}
                onChange={(e) => updateConfig({ stage: e.target.value })}
              >
                <option value="">Select current stage</option>
                {STARTUP_STAGES.map((stage) => (
                  <option key={stage.value} value={stage.value}>
                    {stage.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Target & Revenue</h2>
            <div>
              <label className="block text-gray-400 mb-2">Target Audience</label>
              <textarea
                className="w-full h-24 bg-background-light text-white rounded-lg p-3 focus:ring-2 focus:ring-primary"
                placeholder="Describe your target audience..."
                value={config.targetAudience || ''}
                onChange={(e) => updateConfig({ targetAudience: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Revenue Model</label>
              <select
                className="w-full bg-background-light text-white rounded-lg p-3 focus:ring-2 focus:ring-primary"
                value={config.revenue?.model || ''}
                onChange={(e) =>
                  updateConfig({ revenue: { ...config.revenue, model: e.target.value } })
                }
              >
                <option value="">Select revenue model</option>
                {REVENUE_MODELS.map((model) => (
                  <option key={model.value} value={model.value}>
                    {model.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Initial Pricing (Optional)</label>
              <input
                type="text"
                className="w-full bg-background-light text-white rounded-lg p-3 focus:ring-2 focus:ring-primary"
                placeholder="e.g., $10/month/user"
                value={config.revenue?.initialPrice || ''}
                onChange={(e) =>
                  updateConfig({
                    revenue: { ...config.revenue, initialPrice: e.target.value }
                  })
                }
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-background rounded-xl p-8 max-w-2xl w-full mx-4 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div
                key={i}
                className={`h-2 flex-1 mx-1 rounded-full ${
                  i + 1 <= step ? 'bg-primary' : 'bg-background-light'
                }`}
              />
            ))}
          </div>
          <p className="text-gray-400 text-sm">
            Step {step} of {totalSteps}
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between mt-8">
          <button
            onClick={handleBack}
            className={`px-6 py-2 rounded-lg ${
              step === 1
                ? 'bg-background-light text-gray-500 cursor-not-allowed'
                : 'bg-background-light text-white hover:bg-background-dark'
            }`}
            disabled={step === 1}
          >
            Back
          </button>
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
          >
            {step === totalSteps ? 'Start Analysis' : 'Next'}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default OnboardingForm;
