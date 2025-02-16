import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

interface ValidationData {
  score: number;
  competitors: number;
  trends: number;
  sentiment: number;
  uniqueness: number;
}

function GaugeMesh({ score }: { score: number }) {
  const color = score < 5 ? '#ff4444' : score < 7 ? '#ffff44' : '#44ff44';
  
  return (
    <mesh rotation={[0, 0, 0]}>
      <circleGeometry args={[1, 32]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

const MarketValidation = () => {
  const [data, setData] = React.useState<ValidationData>({
    score: 7.5,
    competitors: 12,
    trends: 8.2,
    sentiment: 7.8,
    uniqueness: 6.9,
  });

  return (
    <div className="bg-background p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6">Market Validation Hub</h2>
      
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl text-gray-300">Live Feasibility Gauge</h3>
          <div className="relative w-[200px] h-[200px] bg-background-light rounded-lg">
            <Canvas>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={0.5} />
              <GaugeMesh score={data.score} />
            </Canvas>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-4xl font-bold text-white">{data.score}</span>
            </div>
          </div>
        </div>

        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h3 className="text-xl text-gray-300">Score Breakdown</h3>
          {[
            { label: 'Demand Trends', value: data.trends, weight: '40%' },
            { label: 'Competitors', value: data.competitors, weight: '30%' },
            { label: 'Social Sentiment', value: data.sentiment, weight: '20%' },
            { label: 'Uniqueness', value: data.uniqueness, weight: '10%' },
          ].map((item) => (
            <div key={item.label} className="space-y-1">
              <div className="flex justify-between text-sm text-gray-400">
                <span>{item.label}</span>
                <span>{item.weight}</span>
              </div>
              <div className="h-2 bg-background-light rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${item.value * 10}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MarketValidation;
