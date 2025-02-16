import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {
  DocumentCheckIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  DocumentDuplicateIcon,
  ArrowTrendingUpIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';
import { analyzeLegalCompliance, trackComplianceDeadlines } from '@/utils/legal-api';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface ComplianceData {
  risk_score: number;
  compliance_tasks: Array<{
    id: string;
    title: string;
    deadline: string;
    status: 'pending' | 'completed' | 'overdue';
    priority: 'high' | 'medium' | 'low';
    penalty: string;
    description: string;
  }>;
  required_documents: string[];
  regulatory_updates: string[];
  recommendations: string[];
}

const LegalComplianceHub = () => {
  const [data, setData] = useState<ComplianceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedTask, setSelectedTask] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await analyzeLegalCompliance(
        'Technology Startup',
        'Early Stage',
        'India'
      );
      if (result) {
        result.compliance_tasks = trackComplianceDeadlines(result.compliance_tasks);
      }
      setData(result);
      setLoading(false);
    };

    fetchData();
    const interval = setInterval(fetchData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const riskScoreOptions = {
    chart: {
      type: 'radialBar',
      background: 'transparent',
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        hollow: {
          size: '70%',
        },
        track: {
          background: '#1e293b',
          strokeWidth: '100%',
        },
        dataLabels: {
          name: {
            show: true,
            color: '#94a3b8',
            fontSize: '16px',
            offsetY: -10
          },
          value: {
            color: '#fff',
            fontSize: '24px',
            fontWeight: 600,
            offsetY: 5
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#6366f1'],
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: 'round'
    },
    labels: ['Risk Score'],
    colors: ['#f43f5e'],
    theme: { mode: 'dark' }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-500';
      case 'medium':
        return 'text-yellow-500';
      case 'low':
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'overdue':
        return 'bg-red-500';
      default:
        return 'bg-yellow-500';
    }
  };

  return (
    <Layout>
      <div className="space-y-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Legal Compliance Hub</h1>
          <p className="text-gray-400">Real-time compliance monitoring and risk assessment</p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : data ? (
          <>
            {/* Top Cards */}
            <div className="grid grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-background p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Risk Assessment</h3>
                <div className="h-[200px]">
                  <Chart
                    options={riskScoreOptions}
                    series={[data.risk_score]}
                    type="radialBar"
                    height="100%"
                  />
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-background p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Compliance Status</h3>
                <div className="space-y-4">
                  {['pending', 'completed', 'overdue'].map((status) => {
                    const count = data.compliance_tasks.filter(t => t.status === status).length;
                    return (
                      <div key={status} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className={`w-3 h-3 rounded-full ${getStatusColor(status)}`} />
                          <span className="text-gray-400 capitalize">{status}</span>
                        </div>
                        <span className="text-2xl font-semibold text-white">{count}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-background p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'Generate Document', icon: DocumentTextIcon },
                    { name: 'View Calendar', icon: ClockIcon },
                    { name: 'Check Updates', icon: ArrowTrendingUpIcon },
                    { name: 'File Report', icon: DocumentDuplicateIcon }
                  ].map((action) => (
                    <motion.button
                      key={action.name}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-background-light rounded-lg text-white hover:bg-primary transition-all duration-200 flex flex-col items-center justify-center space-y-2"
                    >
                      <action.icon className="h-6 w-6" />
                      <span className="text-sm">{action.name}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Compliance Tasks */}
            <div className="bg-background p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Compliance Tasks</h3>
              <div className="space-y-4">
                {data.compliance_tasks.map((task) => (
                  <motion.div
                    key={task.id}
                    layoutId={task.id}
                    onClick={() => setSelectedTask(task.id === selectedTask ? null : task.id)}
                    className="cursor-pointer"
                  >
                    <div className="p-4 bg-background-light rounded-lg hover:bg-background-dark transition-all duration-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-3 h-3 rounded-full ${getStatusColor(task.status)}`} />
                          <div>
                            <h4 className="text-white font-medium">{task.title}</h4>
                            <p className="text-sm text-gray-400">Due: {new Date(task.deadline).toLocaleDateString()}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className={`text-sm font-medium ${getPriorityColor(task.priority)}`}>
                            {task.priority.toUpperCase()}
                          </span>
                          <ExclamationTriangleIcon className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      
                      <AnimatePresence>
                        {selectedTask === task.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="mt-4 pt-4 border-t border-gray-700"
                          >
                            <p className="text-gray-300 mb-2">{task.description}</p>
                            <div className="flex justify-between items-center">
                              <span className="text-red-400">Penalty: {task.penalty}</span>
                              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-200">
                                Take Action
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Updates and Documents */}
            <div className="grid grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-background p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Regulatory Updates</h3>
                <div className="space-y-4">
                  {data.regulatory_updates.map((update, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 bg-background-light rounded-lg text-gray-300 flex items-center space-x-3"
                    >
                      <DocumentCheckIcon className="h-5 w-5 text-primary" />
                      <span>{update}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-background p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Required Documents</h3>
                <div className="grid grid-cols-2 gap-4">
                  {data.required_documents.map((doc, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 bg-background-light rounded-lg text-gray-300 flex items-center space-x-3"
                    >
                      <DocumentDuplicateIcon className="h-5 w-5 text-primary" />
                      <span>{doc}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </>
        ) : (
          <div className="text-center text-red-500">
            Error loading compliance data. Please try again later.
          </div>
        )}
      </div>
    </Layout>
  );
};

export default LegalComplianceHub;
