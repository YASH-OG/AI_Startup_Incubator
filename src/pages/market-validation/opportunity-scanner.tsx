import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { LightBulbIcon, ChartBarIcon, SparklesIcon } from '@heroicons/react/24/outline';

interface Opportunity {
  title: string;
  description: string;
  impact: number;
  feasibility: number;
  timeToMarket: string;
  keyFactors: string[];
}

const OpportunityScanner = () => {
  const [opportunities] = React.useState<Opportunity[]>([
    {
      title: 'AI-Powered Market Research',
      description: 'Develop automated market research tools using AI to provide real-time insights',
      impact: 85,
      feasibility: 75,
      timeToMarket: '3-6 months',
      keyFactors: ['High demand', 'Technical expertise available', 'Clear monetization']
    },
    {
      title: 'Predictive Analytics Suite',
      description: 'Launch a suite of predictive analytics tools for startup success prediction',
      impact: 90,
      feasibility: 70,
      timeToMarket: '4-8 months',
      keyFactors: ['Growing market', 'Competitive advantage', 'Scalable solution']
    },
    {
      title: 'Startup Risk Assessment Platform',
      description: 'Create an AI-driven platform for comprehensive startup risk assessment',
      impact: 80,
      feasibility: 85,
      timeToMarket: '2-4 months',
      keyFactors: ['Immediate need', 'Low competition', 'Regulatory compliance']
    }
  ]);

  return (
    <Layout>
      <div className="space-y-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Opportunity Scanner</h1>
          <p className="text-gray-400">AI-powered opportunity identification and analysis</p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={opportunity.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-background p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <LightBulbIcon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-2">{opportunity.title}</h2>
                  <p className="text-gray-400 mb-4">{opportunity.description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="bg-background-light p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <ChartBarIcon className="h-5 w-5 text-primary" />
                        <span className="text-white font-semibold">Impact</span>
                      </div>
                      <div className="text-2xl font-bold text-primary">{opportunity.impact}%</div>
                    </div>
                    <div className="bg-background-light p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <SparklesIcon className="h-5 w-5 text-primary" />
                        <span className="text-white font-semibold">Feasibility</span>
                      </div>
                      <div className="text-2xl font-bold text-primary">{opportunity.feasibility}%</div>
                    </div>
                    <div className="bg-background-light p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <SparklesIcon className="h-5 w-5 text-primary" />
                        <span className="text-white font-semibold">Time to Market</span>
                      </div>
                      <div className="text-lg font-bold text-primary">{opportunity.timeToMarket}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {opportunity.keyFactors.map((factor, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {factor}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default OpportunityScanner;
