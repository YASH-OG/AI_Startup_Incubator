import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface Competitor {
  name: string;
  funding: number;
  marketShare: number;
  growth: number;
  strengths: string[];
  weaknesses: string[];
}

const CompetitorAnalysis = () => {
  const [competitors] = React.useState<Competitor[]>([
    {
      name: 'TechCorp AI',
      funding: 15000000,
      marketShare: 35,
      growth: 45,
      strengths: ['Market Leader', 'Strong AI Tech', 'Large Customer Base'],
      weaknesses: ['High Prices', 'Complex Interface', 'Limited Support']
    },
    {
      name: 'SmartAnalytics',
      funding: 8000000,
      marketShare: 25,
      growth: 60,
      strengths: ['Innovative Features', 'User Friendly', 'Affordable'],
      weaknesses: ['New Player', 'Limited Features', 'Small Team']
    },
    {
      name: 'DataMind',
      funding: 12000000,
      marketShare: 20,
      growth: 30,
      strengths: ['Advanced Analytics', 'Enterprise Focus', 'Good Support'],
      weaknesses: ['Expensive', 'Slow Updates', 'Limited Integration']
    }
  
    {
      name: 'TechCorp',
      funding: 5000000,
      marketShare: 35,
      growth: 25,
      strengths: ['Strong brand', 'Large user base', 'Advanced tech'],
      weaknesses: ['High prices', 'Poor customer service', 'Limited features']
    },
    {
      name: 'InnovatePro',
      funding: 2000000,
      marketShare: 20,
      growth: 40,
      strengths: ['Innovative features', 'Good pricing', 'User-friendly'],
      weaknesses: ['Small team', 'Limited market presence', 'New player']
    },
    // Add more competitors as needed
  ]);

  const marketShareChartOptions = {
    chart: {
      type: 'pie',
      background: 'transparent',
    },
    labels: competitors.map(c => c.name),
    colors: ['#6366f1', '#10b981', '#f43f5e', '#f59e0b'],
    theme: { mode: 'dark' },
  };

  const marketShareSeries = competitors.map(c => c.marketShare);

  return (
    <Layout>
      <div className="space-y-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Competitor Analysis</h1>
          <p className="text-gray-400">Deep dive into your competition landscape</p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Market Share Chart */}
          <div className="bg-background p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Market Share Distribution</h2>
            <div className="h-[300px]">
              <Chart
                options={marketShareChartOptions}
                series={marketShareSeries}
                type="pie"
                height="100%"
              />
            </div>
          </div>

          {/* Competitor Metrics */}
          <div className="bg-background p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Key Metrics</h2>
            <div className="space-y-4">
              {competitors.map((competitor) => (
                <motion.div
                  key={competitor.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-background-light rounded-lg"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-white">{competitor.name}</h3>
                    <span className="text-primary">
                      ${(competitor.funding / 1000000).toFixed(1)}M
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-400">Market Share</p>
                      <p className="text-lg text-white">{competitor.marketShare}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Growth Rate</p>
                      <p className="text-lg text-white">{competitor.growth}%</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* SWOT Analysis */}
        <div className="grid grid-cols-2 gap-8">
          {competitors.map((competitor) => (
            <div key={competitor.name} className="bg-background p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">{competitor.name} - SWOT</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="text-lg text-primary mb-2">Strengths</h4>
                  {competitor.strengths.map((strength, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-2 bg-background-light rounded-lg text-gray-300"
                    >
                      {strength}
                    </motion.div>
                  ))}
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg text-accent mb-2">Weaknesses</h4>
                  {competitor.weaknesses.map((weakness, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-2 bg-background-light rounded-lg text-gray-300"
                    >
                      {weakness}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Recommendations */}
        <div className="bg-background p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">AI Recommendations</h2>
          <div className="space-y-4">
            {[
              'Focus on premium features to differentiate from TechCorp',
              'Explore partnerships with smaller players',
              'Target underserved market segments',
              'Invest in customer service as a competitive advantage'
            ].map((recommendation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-background-light rounded-lg text-gray-300 flex items-center space-x-3"
              >
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>{recommendation}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CompetitorAnalysis;
