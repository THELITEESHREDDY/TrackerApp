import React from 'react'
import StreakArea from './StreakArea.jsx';
import HeatMapArea from './HeatMapArea.jsx';
import SuccessfullHabits from './SuccessfullHabits.jsx';
import HabitOrTaskEditor from './HabitOrTaskEditor.jsx';

function DashBoard() {
  return (
    <div className=' md:mt-20vh'>
      <StreakArea/>    
      <HeatMapArea/>  
      <SuccessfullHabits/>
      <HabitOrTaskEditor/>
    </div>
  )
}

export default DashBoard
