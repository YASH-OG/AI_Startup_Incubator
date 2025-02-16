import React from 'react';
import { motion } from 'framer-motion';
import { ExclamationCircleIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

interface Deadline {
  id: string;
  date: string;
  task: string;
  penalty: string;
  status: 'pending' | 'completed' | 'overdue';
}

const LegalCompliance = () => {
  const [riskScore, setRiskScore] = React.useState(65);
  const [deadlines, setDeadlines] = React.useState<Deadline[]>([
    {
      id: '1',
      date: '2025-03-15',
      task: 'GST-3B Filing',
      penalty: '₹5,000/day',
      status: 'pending'
    },
    {
      id: '2',
      date: '2025-04-01',
      task: '80-IAC Form 2',
      penalty: 'Tax exemption loss',
      status: 'pending'
    },
    {
      id: '3',
      date: '2025-02-28',
      task: 'Annual Returns',
      penalty: '₹10,000 fine',
      status: 'completed'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-500';
      case 'overdue':
        return 'text-red-500';
      default:
        return 'text-yellow-500';
    }
  };

  return (
    <div className="bg-background p-6 rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Legal Compliance Matrix</h2>
        <div className="flex items-center space-x-2">
          <span className="text-gray-400">Risk Score:</span>
          <motion.div
            className={`text-xl font-bold ${riskScore > 70 ? 'text-red-500' : 'text-green-500'}`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring' }}
          >
            {riskScore}%
          </motion.div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-background-light rounded-lg p-4">
          <h3 className="text-lg text-white mb-4">Upcoming Deadlines</h3>
          <div className="space-y-4">
            {deadlines.map((deadline) => (
              <motion.div
                key={deadline.id}
                className="flex items-center justify-between p-3 bg-background rounded-lg border border-gray-800"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="flex items-center space-x-4">
                  {deadline.status === 'completed' ? (
                    <CheckCircleIcon className="h-6 w-6 text-green-500" />
                  ) : (
                    <ExclamationCircleIcon className={`h-6 w-6 ${getStatusColor(deadline.status)}`} />
                  )}
                  <div>
                    <h4 className="text-white font-medium">{deadline.task}</h4>
                    <p className="text-sm text-gray-400">Due: {deadline.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm text-red-400">Penalty:</span>
                  <p className="text-sm text-gray-300">{deadline.penalty}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-background-light rounded-lg p-4">
            <h3 className="text-lg text-white mb-3">Required Documents</h3>
            <ul className="space-y-2">
              {['MCA Filings', 'GST Registration', 'PAN/TAN', 'MSME Registration'].map((doc) => (
                <li key={doc} className="flex items-center text-gray-300">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  {doc}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-background-light rounded-lg p-4">
            <h3 className="text-lg text-white mb-3">Compliance Tips</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Keep digital copies of all filings</li>
              <li>• Set up email notifications for deadlines</li>
              <li>• Review compliance checklist monthly</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalCompliance;
