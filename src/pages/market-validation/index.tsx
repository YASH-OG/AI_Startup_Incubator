import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ChartBarIcon,
  UserGroupIcon,
  TrendingUpIcon,
  NewspaperIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline';
import { searchCompetitors, getMarketNews } from '../../utils/api';

interface MarketData {
  competitors: {
    totalResults: number;
    organicResults: any[];
  };
  news: {
    news_items: string[];
    market_sentiment: string;
    key_developments: string[];
  };
}

interface Feature {
  path: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  metrics: string[];
}

const iconComponents = {
  UserGroupIcon,
  TrendingUpIcon,
  NewspaperIcon,
  LightBulbIcon,
};

const features: Feature[] = [
  {
    path: '/market-validation/competitor-analysis',
    icon: UserGroupIcon,
    title: 'Competitor Analysis',
    description: 'Deep dive into your competition landscape',
    metrics: ['Active Competitors', 'Market Share', 'Growth Rate']
  },
  {
    path: '/market-validation/trend-analysis',
    icon: TrendingUpIcon,
    title: 'Market Trends',
    description: 'Real-time market trend analysis',
    metrics: ['Search Trends', 'Industry Growth', 'Regional Demand']
  },
  {
    path: '/market-validation/sentiment-analysis',
    icon: NewspaperIcon,
    title: 'Sentiment Analysis',
    description: 'Social and news sentiment tracking',
    metrics: ['Social Media Sentiment', 'News Mentions', 'Brand Perception']
  },
  {
    path: '/market-validation/opportunity-scanner',
    icon: LightBulbIcon,
    title: 'Opportunity Scanner',
    description: 'AI-powered opportunity identification',
    metrics: ['Market Gaps', 'Innovation Score', 'Growth Potential']
  }
];

const MarketValidationHub = () => {
  const [data, setData] = useState<MarketData | null>(null);
  const [loading, setLoading] = useState(true);
  const [startupInfo] = useState({
    idea: "AI-powered startup advisor and market analysis platform",
    industry: "SaaS AI Technology"
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [competitorData, newsData] = await Promise.all([
          searchCompetitors(startupInfo.industry),
          getMarketNews(startupInfo.idea)
        ]);

        setData({
          competitors: competitorData,
          news: JSON.parse(newsData)
        });
      } catch (error) {
        console.error('Error fetching market data:', error);
      }
      setLoading(false);
    };

    fetchData();
    // Refresh data every 5 minutes
    const interval = setInterval(fetchData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [startupInfo]);

  return (
    <Layout>
      <div className="space-y-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Market Validation Hub</h1>
          <p className="text-gray-400">Comprehensive market analysis and validation tools</p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : data ? (
          <>
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature) => (
                <Link href={feature.path} key={feature.path}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-background p-6 rounded-xl shadow-lg cursor-pointer hover:bg-background-light transition-all duration-200"
                  >
                    <div className="flex items-start space-x-4">
                      <feature.icon className="h-8 w-8 text-primary" />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                        <p className="text-gray-400 mb-4">{feature.description}</p>
                        <div className="grid grid-cols-3 gap-4">
                          {feature.metrics.map((metric) => (
                            <div key={metric} className="bg-background-dark p-2 rounded-lg">
                              <p className="text-sm text-gray-300 text-center">{metric}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            <div className="bg-background p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-4">Latest Market Insights</h2>
              <div className="space-y-4">
                {data.news.news_items.slice(0, 4).map((insight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-background-light rounded-lg text-gray-300 flex items-center space-x-3"
                  >
                    <ChartBarIcon className="h-5 w-5 text-primary" />
                    <span>{insight}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="bg-background p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-4">Market Sentiment</h2>
                <div className="flex items-center justify-center h-32">
                  <div className={`text-4xl font-bold ${
                    data.news.market_sentiment === 'positive' ? 'text-green-500' :
                    data.news.market_sentiment === 'negative' ? 'text-red-500' :
                    'text-yellow-500'
                  }`}>
                    {data.news.market_sentiment.toUpperCase()}
                  </div>
                </div>
              </div>

              <div className="bg-background p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-4">Competition Overview</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Total Competitors</span>
                    <span className="text-2xl text-white">{data.competitors.totalResults}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Key Players</span>
                    <span className="text-lg text-primary">
                      {data.competitors.organicResults.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center text-red-500">
            Error loading market validation data. Please try again later.
          </div>
        )}
      </div>
    </Layout>
  );
};

export default MarketValidationHub;
