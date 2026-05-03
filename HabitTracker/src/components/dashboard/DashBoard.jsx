import React from 'react'
import { useLocation } from 'react-router-dom';


import StreakArea from './StreakArea.jsx';
import HeatMapArea from './HeatMapArea.jsx';
import SuccessfullHabits from './SuccessfullHabits.jsx';
import HabitOrTaskEditor from './HabitOrTaskEditor.jsx';

function DashBoard({addDetails,deleteDetails,editDetails,details}) {
  return (
    <div className=' md:mt-20vh'>
      <StreakArea/>    
      <HeatMapArea/>  
      <SuccessfullHabits/>
      <HabitOrTaskEditor addDetails={addDetails} deleteDetails={deleteDetails} editDetails={editDetails} details={details} />
    </div>
  )
}

export default DashBoard
