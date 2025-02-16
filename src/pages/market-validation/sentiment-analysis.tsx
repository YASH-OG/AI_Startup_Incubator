import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { ChatBubbleBottomCenterTextIcon, TrendingUpIcon, TrendingDownIcon } from '@heroicons/react/24/outline';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface SentimentData {
  platform: string;
  sentiment: number;
  volume: number;
  trend: 'up' | 'down';
  keywords: string[];
}

const SentimentAnalysis = () => {
  const [sentimentData] = React.useState<SentimentData[]>([
    {
      platform: 'Twitter/X',
      sentiment: 78,
      volume: 1250,
      trend: 'up',
      keywords: ['innovative', 'game-changer', 'efficient']
    },
    {
      platform: 'LinkedIn',
      sentiment: 85,
      volume: 890,
      trend: 'up',
      keywords: ['professional', 'business solution', 'productivity']
    },
    {
      platform: 'News Media',
      sentiment: 72,
      volume: 450,
      trend: 'up',
      keywords: ['startup', 'AI technology', 'market growth']
    }
  ]);

  const chartOptions = {
    chart: {
      type: 'bar',
      background: 'transparent',
      toolbar: { show: false }
    },
    colors: ['#6366f1'],
    xaxis: {
      categories: sentimentData.map(d => d.platform),
      labels: { style: { colors: '#94a3b8' } }
    },
    yaxis: {
      labels: { style: { colors: '#94a3b8' } }
    },
    theme: { mode: 'dark' }
  };

  const chartSeries = [{
    name: 'Sentiment Score',
    data: sentimentData.map(d => d.sentiment)
  }];

  return (
    <Layout>
      <div className="space-y-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Social Sentiment Analysis</h1>
          <p className="text-gray-400">Real-time social media and news sentiment tracking</p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Sentiment Chart */}
          <div className="bg-background p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Sentiment Overview</h2>
            <div className="h-[300px]">
              <Chart
                options={chartOptions}
                series={chartSeries}
                type="bar"
                height="100%"
              />
            </div>
          </div>

          {/* Platform Analysis */}
          <div className="bg-background p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Platform Insights</h2>
            <div className="space-y-4">
              {sentimentData.map((platform) => (
                <motion.div
                  key={platform.platform}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-background-light rounded-lg"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-white">{platform.platform}</h3>
                    <div className="flex items-center space-x-2">
                      {platform.trend === 'up' ? (
                        <TrendingUpIcon className="h-5 w-5 text-green-500" />
                      ) : (
                        <TrendingDownIcon className="h-5 w-5 text-red-500" />
                      )}
                      <span className="text-primary">{platform.sentiment}%</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Volume: {platform.volume} mentions</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {platform.keywords.map((keyword, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SentimentAnalysis;
