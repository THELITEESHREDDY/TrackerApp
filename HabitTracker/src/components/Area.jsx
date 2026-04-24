import React, { useEffect } from 'react'
import TaskHabitList from './TaskHabitList.jsx';
import ProgressBarMini from './ProgressBarMini.jsx';
import ProgressBarMaxi from './ProgressBarMaxi.jsx';
function Area({habitList,setHabitList}) {

  const getTaskId=(id)=>{
    
    setHabitList(prev=>{
    
      return prev.map(habit =>
    
        habit.id===id ? {...habit,isCompleted:!habit.isCompleted} : habit
    
      )
    });

    console.log(id);
  }
  
  

  
  return (
    <div id="AreaDiv" className="flex flex-col md:flex-row min-w-full h-auto bg-amber-100">
      
      {/* Progress Bar first on mobile */}
      <div
        id="progressBarMiniDiv"
        className="order-1 w-full md:w-1/2 md:order-2 block md:hidden"
      >
        {/* Progress bar content */}
        <ProgressBarMini  habitList={habitList} />
      </div>
      <div
        id="progressBarMaxiDiv"
        className="order-1 w-full md:w-1/2 md:order-2 hidden md:block"
      >
        {/* Progress bar content */}
        <ProgressBarMaxi  habitList={habitList}/>
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
