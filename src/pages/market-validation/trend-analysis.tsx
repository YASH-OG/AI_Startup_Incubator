import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { TrendingUpIcon, TrendingDownIcon } from '@heroicons/react/24/outline';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface TrendData {
  category: string;
  data: number[];
  growth: number;
  prediction: number;
}

const TrendAnalysis = () => {
  const [trends] = React.useState<TrendData[]>([
    {
      category: 'Market Size ($M)',
      data: [150, 180, 210, 250, 310, 380, 450, 520, 600, 690, 780, 850],
      growth: 35,
      prediction: 920
    },
    {
      category: 'User Adoption (K)',
      data: [50, 80, 120, 180, 250, 330, 420, 520, 630, 750, 880, 1020],
      growth: 42,
      prediction: 1200
    },
    {
      category: 'Revenue Potential ($M)',
      data: [20, 35, 55, 85, 130, 190, 260, 340, 430, 530, 640, 760],
      growth: 48,
      prediction: 900
    }
  
    {
      category: 'Search Volume',
      data: [45, 52, 38, 45, 19, 23, 2, 48, 65, 73, 80, 85],
      growth: 35,
      prediction: 92
    },
    {
      category: 'Market Size',
      data: [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
      growth: 28,
      prediction: 90
    },
    {
      category: 'User Adoption',
      data: [20, 25, 30, 40, 45, 50, 55, 60, 65, 70, 75, 80],
      growth: 42,
      prediction: 88
    }
  ]);

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const chartOptions = {
    chart: {
      type: 'line',
      background: 'transparent',
      toolbar: { show: false }
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    xaxis: {
      categories: months,
      labels: { style: { colors: '#94a3b8' } }
    },
    yaxis: {
      labels: { style: { colors: '#94a3b8' } }
    },
    theme: { mode: 'dark' },
    grid: {
      borderColor: '#1e293b',
      strokeDashArray: 4
    },
    colors: ['#6366f1', '#10b981', '#f43f5e']
  };

  const chartSeries = trends.map(trend => ({
    name: trend.category,
    data: trend.data
  }));

  return (
    <Layout>
      <div className="space-y-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Market Trend Analysis</h1>
          <p className="text-gray-400">Real-time market trends and predictions</p>
        </div>

        {/* Main Trend Chart */}
        <div className="bg-background p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Trend Overview</h2>
          <div className="h-[400px]">
            <Chart
              options={chartOptions}
              series={chartSeries}
              type="line"
              height="100%"
            />
          </div>
        </div>

        {/* Trend Metrics */}
        <div className="grid grid-cols-3 gap-6">
          {trends.map((trend) => (
            <motion.div
              key={trend.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-background p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-lg font-semibold text-white mb-4">{trend.category}</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Growth Rate</span>
                  <div className="flex items-center space-x-2">
                    <TrendingUpIcon className="h-5 w-5 text-green-500" />
                    <span className="text-green-500">{trend.growth}%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Prediction (Next Month)</span>
                  <span className="text-primary">{trend.prediction}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Regional Analysis */}
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-background p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Regional Hotspots</h2>
            <div className="space-y-4">
              {[
                { region: 'North America', growth: 45 },
                { region: 'Europe', growth: 32 },
                { region: 'Asia Pacific', growth: 58 },
                { region: 'Latin America', growth: 25 }
              ].map((region) => (
                <div key={region.region} className="flex items-center justify-between p-3 bg-background-light rounded-lg">
                  <span className="text-gray-300">{region.region}</span>
                  <div className="flex items-center space-x-2">
                    {region.growth > 30 ? (
                      <TrendingUpIcon className="h-5 w-5 text-green-500" />
                    ) : (
                      <TrendingDownIcon className="h-5 w-5 text-red-500" />
                    )}
                    <span className={region.growth > 30 ? 'text-green-500' : 'text-red-500'}>
                      {region.growth}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Insights */}
          <div className="bg-background p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">AI Market Insights</h2>
            <div className="space-y-4">
              {[
                'Strong growth potential in emerging markets',
                'Increasing demand for mobile solutions',
                'Shift towards subscription-based models',
                'Rising importance of AI integration'
              ].map((insight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-background-light rounded-lg text-gray-300"
                >
                  {insight}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TrendAnalysis;
