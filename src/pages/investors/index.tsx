import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import {
  CurrencyDollarIcon,
  ChartBarIcon,
  DocumentTextIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface InvestorMetrics {
  totalFunding: number;
  valuation: number;
  investors: number;
  runway: number;
}

interface FundingRound {
  round: string;
  amount: number;
  date: string;
  investors: string[];
  valuation: number;
}

const InvestorDashboard = () => {
  const [metrics] = React.useState<InvestorMetrics>({
    totalFunding: 5000000,
    valuation: 25000000,
    investors: 12,
    runway: 18
  });

  const [fundingRounds] = React.useState<FundingRound[]>([
    {
      round: 'Seed',
      amount: 1000000,
      date: '2024-01',
      investors: ['Angel Group A', 'Seed Fund X'],
      valuation: 5000000
    },
    {
      round: 'Series A',
      amount: 4000000,
      date: '2024-06',
      investors: ['VC Fund Alpha', 'Tech Ventures', 'Growth Capital'],
      valuation: 25000000
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
      categories: fundingRounds.map(r => r.round),
      labels: { style: { colors: '#94a3b8' } }
    },
    yaxis: {
      labels: { style: { colors: '#94a3b8' } }
    },
    theme: { mode: 'dark' }
  };

  const chartSeries = [{
    name: 'Funding Amount',
    data: fundingRounds.map(r => r.amount)
  }];

  return (
    <Layout>
      <div className="space-y-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Investor Relations</h1>
          <p className="text-gray-400">Track funding, valuation, and investor engagement</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-background p-6 rounded-xl shadow-lg"
          >
            <div className="flex items-center space-x-3 mb-4">
              <CurrencyDollarIcon className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-semibold text-white">Total Funding</h3>
            </div>
            <p className="text-3xl font-bold text-white">${(metrics.totalFunding / 1000000).toFixed(1)}M</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-background p-6 rounded-xl shadow-lg"
          >
            <div className="flex items-center space-x-3 mb-4">
              <ChartBarIcon className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-semibold text-white">Valuation</h3>
            </div>
            <p className="text-3xl font-bold text-white">${(metrics.valuation / 1000000).toFixed(1)}M</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-background p-6 rounded-xl shadow-lg"
          >
            <div className="flex items-center space-x-3 mb-4">
              <UserGroupIcon className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-semibold text-white">Investors</h3>
            </div>
            <p className="text-3xl font-bold text-white">{metrics.investors}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-background p-6 rounded-xl shadow-lg"
          >
            <div className="flex items-center space-x-3 mb-4">
              <DocumentTextIcon className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-semibold text-white">Runway (months)</h3>
            </div>
            <p className="text-3xl font-bold text-white">{metrics.runway}</p>
          </motion.div>
        </div>

        {/* Funding History */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-background p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Funding History</h2>
            <div className="h-[300px]">
              <Chart
                options={chartOptions}
                series={chartSeries}
                type="bar"
                height="100%"
              />
            </div>
          </div>

          <div className="bg-background p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Funding Rounds</h2>
            <div className="space-y-4">
              {fundingRounds.map((round) => (
                <motion.div
                  key={round.round}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-4 bg-background-light rounded-lg"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-white">{round.round}</h3>
                    <span className="text-primary">${(round.amount / 1000000).toFixed(1)}M</span>
                  </div>
                  <div className="text-sm text-gray-400 mb-2">
                    Valuation: ${(round.valuation / 1000000).toFixed(1)}M
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {round.investors.map((investor, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {investor}
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

export default InvestorDashboard;
