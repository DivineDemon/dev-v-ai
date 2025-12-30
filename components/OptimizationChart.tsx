
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const OptimizationChart: React.FC = () => {
  // Generate stable mock data
  const data = useMemo(() => {
    const points = 40;
    return Array.from({ length: points }, (_, i) => ({
      x: (i / (points - 1)) * 100,
      training: Math.exp(-i / 10) * 0.8 + Math.sin(i / 2) * 0.02 + 0.1,
      validation: Math.exp(-i / 12) * 0.8 + Math.cos(i / 3) * 0.04 + 0.2,
    }));
  }, []);

  // Calculate SVG paths
  const trainingPath = useMemo(() => {
    return data.reduce((path, p, i) => {
      const y = 100 - p.training * 80; // Scale to 0-100 viewBox
      return path + (i === 0 ? `M ${p.x} ${y}` : ` L ${p.x} ${y}`);
    }, "");
  }, [data]);

  const validationPath = useMemo(() => {
    return data.reduce((path, p, i) => {
      const y = 100 - p.validation * 80;
      return path + (i === 0 ? `M ${p.x} ${y}` : ` L ${p.x} ${y}`);
    }, "");
  }, [data]);

  const areaPath = useMemo(() => {
    return `${trainingPath} L 100 100 L 0 100 Z`;
  }, [trainingPath]);

  return (
    <div className="w-full h-full relative flex items-center justify-center min-h-[300px]">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="w-full h-full overflow-visible"
      >
        <defs>
          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3c83f6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#3c83f6" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Grid Lines */}
        <line x1="0" y1="20" x2="100" y2="20" stroke="#1e293b" strokeWidth="0.2" />
        <line x1="0" y1="50" x2="100" y2="50" stroke="#1e293b" strokeWidth="0.2" />
        <line x1="0" y1="80" x2="100" y2="80" stroke="#1e293b" strokeWidth="0.2" />

        {/* Area Fill */}
        <motion.path 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          d={areaPath} 
          fill="url(#chartGradient)" 
        />

        {/* Training Line */}
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          d={trainingPath}
          fill="none"
          stroke="#3c83f6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-[0_0_8px_rgba(60,131,246,0.5)]"
        />

        {/* Validation Line */}
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
          d={validationPath}
          fill="none"
          stroke="#94a3b8"
          strokeWidth="1"
          strokeDasharray="2,2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Interaction Points (Mock indicator at end) */}
        <motion.circle 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2 }}
          cx="100" cy={100 - data[39].training * 80} r="1.5" fill="#3c83f6" 
        />
        <motion.circle 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          cx="100" cy={100 - data[39].training * 80} r="4" fill="#3c83f6" fillOpacity="0.2" 
        />
      </svg>

      {/* Axis Labels (CSS positioned) */}
      <div className="absolute bottom-0 left-0 text-[10px] font-mono text-slate-600">0 Epochs</div>
      <div className="absolute bottom-0 right-0 text-[10px] font-mono text-slate-600">100 Epochs</div>
    </div>
  );
};

export default OptimizationChart;
