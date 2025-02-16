import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import OnboardingForm from '@/components/OnboardingForm';
import { StartupConfig } from '@/utils/startup-config';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {
  CurrencyDollarIcon,
  UsersIcon,
  ServerIcon,
  MegaphoneIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import Layout from '@/components/Layout';
import { fetchMetricsData, subscribeToMetricsUpdates } from '@/utils/metrics-api';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const DashboardCard = ({ title, value, change, icon: Icon, trend, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-background p-6 rounded-xl shadow-lg cursor-pointer"
    onClick={onClick}
  >
    <div className="flex justify-between items-start mb-4">
      <div className="p-2 bg-background-light rounded-lg">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <div className={`flex items-center ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
        {trend === 'up' ? <ArrowUpIcon className="h-4 w-4 mr-1" /> : <ArrowDownIcon className="h-4 w-4 mr-1" />}
        <span className="text-sm">{Math.abs(change)}%</span>
      </div>
    </div>
    <h3 className="text-lg text-gray-400 mb-2">{title}</h3>
    <p className="text-2xl font-bold text-white">{value}</p>
  </motion.div>
);

const MetricsSection = ({ title, metrics, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-background p-6 rounded-xl shadow-lg"
  >
    <div className="flex items-center mb-6">
      <Icon className="h-6 w-6 text-primary mr-3" />
      <h2 className="text-xl font-semibold text-white">{title}</h2>
    </div>
    <div className="grid grid-cols-2 gap-4">
      {Object.entries(metrics).map(([key, value]) => (
        <div key={key} className="bg-background-light p-4 rounded-lg">
          <p className="text-gray-400 mb-1">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
          <p className="text-xl font-semibold text-white">
            {typeof value === 'number' ? value.toLocaleString(undefined, {
              minimumFractionDigits: 0,
              maximumFractionDigits: 2
            }) : value}
          </p>
        </div>
      ))}
    </div>
  </motion.div>
);

const Dashboard = () => {
  const router = useRouter();
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [startupConfig, setStartupConfig] = useState<StartupConfig | null>(null);
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleStartupSubmit = (config: StartupConfig) => {
    setStartupConfig(config);
    setShowOnboarding(false);
    // Navigate to market validation with the config
    router.push({
      pathname: '/market-validation',
      query: { config: JSON.stringify(config) }
    });
  };

  useEffect(() => {
    const loadInitialData = async () => {
      const data = await fetchMetricsData();
      setMetrics(data);
      setLoading(false);
    };

    loadInitialData();
    const unsubscribe = subscribeToMetricsUpdates(setMetrics);
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </Layout>
    );
  }

  const revenueChartOptions = {
    chart: {
      type: 'area',
      background: 'transparent',
      toolbar: { show: false }
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.2,
        stops: [0, 90, 100]
      }
    },
    dataLabels: { enabled: false },
    xaxis: {
      type: 'datetime',
      labels: {
        style: { colors: '#94a3b8' }
      }
    },
    yaxis: {
      labels: {
        style: { colors: '#94a3b8' },
        formatter: (value) => `$${value.toLocaleString()}`
      }
    },
    tooltip: {
      theme: 'dark',
      x: { format: 'MMM dd, yyyy' }
    },
    grid: {
      borderColor: '#1e293b',
      strokeDashArray: 4
    },
    theme: { mode: 'dark' }
  };

  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Startup Dashboard</h1>
            <p className="text-gray-400">Real-time metrics and insights</p>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-4 gap-6">
          <DashboardCard
            title="Total Revenue"
            value={`$${metrics.revenue.total.toLocaleString()}`}
            change={metrics.revenue.revenueGrowth}
            icon={CurrencyDollarIcon}
            trend="up"
            onClick={() => {}}
          />
          <DashboardCard
            title="Active Users"
            value={metrics.users.active.monthly.toLocaleString()}
            change={5.2}
            icon={UsersIcon}
            trend="up"
            onClick={() => {}}
          />
          <DashboardCard
            title="Server Uptime"
            value={`${metrics.performance.uptime.toFixed(2)}%`}
            change={0.1}
            icon={ServerIcon}
            trend="up"
            onClick={() => {}}
          />
          <DashboardCard
            title="Conversion Rate"
            value={`${metrics.marketing.conversionRates.overallConversion.toFixed(1)}%`}
            change={-0.5}
            icon={MegaphoneIcon}
            trend="down"
            onClick={() => {}}
          />
        </div>

        {/* Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-background p-6 rounded-xl shadow-lg"
        >
          <h2 className="text-xl font-semibold text-white mb-6">Revenue Trend</h2>
          <div className="h-[300px]">
            <Chart
              options={revenueChartOptions}
              series={[{
                name: 'Revenue',
                data: metrics.revenue.historicalRevenue.map(item => ({
                  x: new Date(item.month).getTime(),
                  y: item.value
                }))
              }]}
              type="area"
              height="100%"
            />
          </div>
        </motion.div>

        {/* Detailed Metrics Sections */}
        <div className="grid grid-cols-2 gap-8">
          <MetricsSection
            title="User Metrics"
            metrics={{
              'Daily Active Users': Math.round(metrics.users.active.daily),
              'Weekly Active Users': Math.round(metrics.users.active.weekly),
              'Churn Rate': `${metrics.users.churnRate.toFixed(1)}%`,
              'Retention Rate': `${metrics.users.retentionRate.toFixed(1)}%`
            }}
            icon={UsersIcon}
          />
          <MetricsSection
            title="Performance Metrics"
            metrics={{
              'API Response Time': `${metrics.performance.apiResponseTime.toFixed(0)}ms`,
              'Critical Errors': metrics.performance.errors.critical,
              'Server Load': `${metrics.performance.serverLoad.toFixed(1)}%`,
              'Page Views': metrics.users.pageViews.toLocaleString()
            }}
            icon={ServerIcon}
          />
        </div>

        {/* Marketing Metrics */}
        <div className="grid grid-cols-2 gap-8">
          <MetricsSection
            title="Marketing Performance"
            metrics={{
              'Customer Acquisition Cost': `$${metrics.marketing.cac.toFixed(2)}`,
              'Visitor to Signup': `${metrics.marketing.conversionRates.visitorToSignup.toFixed(1)}%`,
              'Signup to Customer': `${metrics.marketing.conversionRates.signupToCustomer.toFixed(1)}%`,
              'Social Mentions': metrics.marketing.socialEngagement.mentions
            }}
            icon={MegaphoneIcon}
          />
          <MetricsSection
            title="Revenue Metrics"
            metrics={{
              'Monthly Recurring Revenue': `$${metrics.revenue.mrr.toLocaleString()}`,
              'Average Revenue Per User': `$${metrics.revenue.arpu.toFixed(2)}`,
              'Customer Lifetime Value': `$${metrics.revenue.ltv.toLocaleString()}`,
              'Revenue Growth': `${metrics.revenue.revenueGrowth.toFixed(1)}%`
            }}
            icon={ChartBarIcon}
          />
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
