// src/components/CircularProgress.jsx
import React from 'react';

const CircularProgress = ({ percentage, title, subtitle, color = '#0ea5e9' }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-32 h-32 flex items-center justify-center">
        <svg className="progress-ring transform -rotate-90 absolute top-0 left-0" width="128" height="128">
          <circle
            className="progress-ring-circle"
            strokeWidth="10"
            fill="transparent"
            r={radius}
            cx="64"
            cy="64"
            style={{ stroke: 'currentColor' }}
          />
          <circle
            className="progress-ring-circle"
            strokeWidth="10"
            fill="transparent"
            r={radius}
            cx="64"
            cy="64"
            style={{
              stroke: color,
              strokeDasharray: circumference,
              strokeDashoffset: offset,
            }}
          />
        </svg>
        <span className="text-xl font-bold relative z-10">
          {`${percentage}%`}
        </span>
      </div>
      <div className="mt-4 flex flex-col items-center gap-2">
        <p className="text-base font-medium text-gray-600 dark:text-gray-300 m-0">
          {title}
        </p>
        {subtitle && (
          <p 
            className="px-4 py-1 rounded-full text-white font-medium text-sm m-0"
            style={{ backgroundColor: color }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default CircularProgress;