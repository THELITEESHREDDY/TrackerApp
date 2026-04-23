import React, { useEffect } from 'react'
import TaskHabitList from './TaskHabitList.jsx';
import ProgressBarMini from './ProgressBarMini.jsx';

function Area({habitList}) {

  const getTaskId=(id)=>{
    habitList.map((habit)=>(
      habit.id===id ? habit.isCompleted=!habit.isCompleted : habit.isCompleted
    ));
    console.log(id);
  }
  const calculateCompletion=()=>{
    let totalHabits=habitList.length
    let completedHabits=0;
    habitList.map((habit)=>{
      completedHabits+=(habit.isCompleted==1);
    })
    return parseFloat(completedHabits)/totalHabits*100;
  }
  useEffect(()=>{
    calculateCompletion();    
  },[habitList]);
  
  return (
    <div id="AreaDiv" className="flex flex-col md:flex-row min-w-full h-auto bg-amber-100">
      
      {/* Progress Bar first on mobile */}
      <div
        id="progressBarMiniDiv"
        className="order-1 w-full md:w-1/2 md:order-2"
      >
        {/* Progress bar content */}
        <ProgressBarMini getPercentage={calculateCompletion} />
      </div>

      {/* Tasks List second on mobile */}
      <div
        id="tasksListDiv"
        className="order-2 md:order-1 w-full h-[70vh] m-3 p-2 rounded-2xl md:w-1/2 md:h-[100vh]"
      >
        <TaskHabitList taskHabits={habitList} onToggle={getTaskId}/>
      </div>
    </div>
    
  )
}

    

export default Area
