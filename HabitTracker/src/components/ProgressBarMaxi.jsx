import React from "react";

function ProgressBarMaxi({ habitList }) {
  const calculateCompletion=()=>{
  
    let totalHabits=habitList.length
  
    let completedHabits=0;
  
    habitList.map((habit)=>{
  
      completedHabits+=(habit.isCompleted? 1 : 0);
  
    });
    return parseFloat(completedHabits)/totalHabits*100;
  }

  const radius = 60;
  const strokeWidth = 10;

  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * normalizedRadius;

  const strokeDashoffset =
    circumference - (calculateCompletion() / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center p-6">
      
      <svg height={radius * 2} width={radius * 2}>
        
        {/* Background circle */}
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        {/* Progress circle */}
        
        <circle
          stroke="url(#gradient)"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-500 ease-in-out origin-center -rotate-90"
        />

        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>

      </svg>

      {/* Percentage text */}
      <div className="absolute text-xl font-bold">
        {Math.round(calculateCompletion())}%
      </div>

      <p className="mt-2 text-2xl text-black font-bold">Completion</p>
    </div>
  );
}

export default ProgressBarMaxi;