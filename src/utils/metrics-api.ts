import axios from 'axios';

// Simulated data generator for demo purposes
// In production, replace with real API calls to your analytics/metrics services
export const fetchMetricsData = async () => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const now = new Date();
  const baseRevenue = 150000;
  const baseUsers = 10000;

  // Generate realistic-looking metrics with some randomization
  return {
    revenue: {
      total: baseRevenue + Math.random() * 10000,
      mrr: baseRevenue / 12 + Math.random() * 1000,
      arpu: (baseRevenue / baseUsers) + Math.random() * 5,
      ltv: baseRevenue * 2.5 + Math.random() * 1000,
      revenueGrowth: 15 + Math.random() * 5,
      historicalRevenue: Array.from({ length: 12 }, (_, i) => ({
        month: new Date(now.getFullYear(), now.getMonth() - i, 1).toISOString(),
        value: baseRevenue - (i * 10000) + Math.random() * 5000
      })).reverse()
    },
    users: {
      total: baseUsers + Math.random() * 100,
      active: {
        daily: baseUsers * 0.3 + Math.random() * 50,
        weekly: baseUsers * 0.5 + Math.random() * 100,
        monthly: baseUsers * 0.8 + Math.random() * 200
      },
      newSignups: 150 + Math.random() * 20,
      churnRate: 2.5 + Math.random(),
      retentionRate: 85 + Math.random() * 5,
      sessionDuration: 15 + Math.random() * 5,
      pageViews: 50000 + Math.random() * 1000
    },
    performance: {
      uptime: 99.95 + Math.random() * 0.04,
      apiResponseTime: 150 + Math.random() * 50,
      errors: {
        critical: Math.floor(Math.random() * 3),
        warning: Math.floor(Math.random() * 10),
        info: Math.floor(Math.random() * 20)
      },
      serverLoad: 65 + Math.random() * 15
    },
    marketing: {
      conversionRates: {
        visitorToSignup: 2.8 + Math.random(),
        signupToCustomer: 12 + Math.random() * 2,
        overallConversion: 0.8 + Math.random() * 0.4
      },
      cac: 80 + Math.random() * 10,
      trafficSources: {
        organic: 45 + Math.random() * 5,
        paid: 25 + Math.random() * 5,
        social: 15 + Math.random() * 5,
        referral: 10 + Math.random() * 5,
        direct: 5 + Math.random() * 5
      },
      socialEngagement: {
        likes: 1200 + Math.random() * 100,
        shares: 300 + Math.random() * 50,
        comments: 150 + Math.random() * 30,
        mentions: 50 + Math.random() * 10
      }
    }
  };
};

export const fetchHistoricalMetrics = async (metric: string, period: string) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 300));

  const now = new Date();
  const dataPoints = period === 'day' ? 24 : period === 'week' ? 7 : 30;
  
  return Array.from({ length: dataPoints }, (_, i) => ({
    timestamp: new Date(now.getTime() - (i * (period === 'day' ? 3600000 : 86400000))).toISOString(),
    value: 1000 + Math.random() * 500
  })).reverse();
};

export const subscribeToMetricsUpdates = (callback: (data: any) => void) => {
  // In production, replace with WebSocket connection
  const interval = setInterval(async () => {
    const data = await fetchMetricsData();
    callback(data);
  }, 5000); // Update every 5 seconds

  return () => clearInterval(interval);
};
