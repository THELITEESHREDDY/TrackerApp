import React from 'react'

function ProgressBarMini({habitList}) {
  const calculateCompletion=()=>{
  
    let totalHabits=habitList.length
  
    let completedHabits=0;
  
    habitList.map((habit)=>{
  
      completedHabits+=(habit.isCompleted? 1 : 0);
  
    });
    return parseFloat(completedHabits)/totalHabits*100;
  }
  return (
     <div className="w-full p-4">
      
      {/* Label */}
      <div className="flex justify-between mb-2 text-sm font-medium">
        <span>Progress</span>
        <span>{Math.round(calculateCompletion())}%</span>
      </div>

      {/* Bar Background */}
      <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
        
        {/* Filled Part */}
        <div
          className="h-full bg-green-500 transition-all duration-500 ease-in-out rounded-full"
          style={{ width: `${calculateCompletion()}%` }}
        ></div>
      
      </div>

    </div>
  )
}

export default ProgressBarMini
