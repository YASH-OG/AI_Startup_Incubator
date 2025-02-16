import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const FinancialPulse = () => {
  const [cashReserves, setCashReserves] = React.useState(5000000); // ₹50L
  const [monthlyBurn, setMonthlyBurn] = React.useState(600000); // ₹6L
  const [revenue, setRevenue] = React.useState(200000); // ₹2L

  const runwayMonths = Math.floor(cashReserves / monthlyBurn);
  const deadlineDate = new Date();
  deadlineDate.setMonth(deadlineDate.getMonth() + runwayMonths);

  const burnChartOptions = {
    chart: {
      type: 'area',
      background: 'transparent',
      toolbar: { show: false },
    },
    colors: ['#6366f1'],
    stroke: { curve: 'smooth', width: 2 },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.3,
        stops: [0, 90, 100],
      },
    },
    xaxis: {
      categories: Array.from({ length: 12 }, (_, i) => {
        const date = new Date();
        date.setMonth(date.getMonth() + i);
        return date.toLocaleString('default', { month: 'short' });
      }),
      labels: { style: { colors: '#94a3b8' } },
    },
    yaxis: {
      labels: {
        style: { colors: '#94a3b8' },
        formatter: (value: number) => `₹${(value / 100000).toFixed(1)}L`,
      },
    },
    theme: { mode: 'dark' },
  };

  const burnChartSeries = [{
    name: 'Projected Cash',
    data: Array.from({ length: 12 }, (_, i) => 
      Math.max(0, cashReserves - (monthlyBurn - revenue) * i)
    ),
  }];

  return (
    <div className="bg-background p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6">Financial Pulse</h2>

      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-background-light rounded-lg p-4">
            <h3 className="text-lg text-white mb-4">Burn Rate Calculator</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Monthly Burn (₹{(monthlyBurn / 100000).toFixed(1)}L)
                </label>
                <input
                  type="range"
                  min={500000}
                  max={5000000}
                  step={100000}
                  value={monthlyBurn}
                  onChange={(e) => setMonthlyBurn(Number(e.target.value))}
                  className="w-full h-2 bg-background rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Monthly Revenue (₹{(revenue / 100000).toFixed(1)}L)
                </label>
                <input
                  type="range"
                  min={0}
                  max={1000000}
                  step={50000}
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="w-full h-2 bg-background rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            <div className="mt-6 p-4 bg-background rounded-lg border border-gray-800">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Runway:</span>
                <motion.span 
                  key={runwayMonths}
                  className="text-2xl font-bold text-white"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  {runwayMonths} months
                </motion.span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-400">Funding Deadline:</span>
                <span className="text-primary">
                  {deadlineDate.toLocaleDateString('en-US', { 
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-background-light rounded-lg p-4">
            <h3 className="text-lg text-white mb-4">Cash Projection</h3>
            <div className="h-[300px]">
              <Chart
                options={burnChartOptions}
                series={burnChartSeries}
                type="area"
                height="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialPulse;
