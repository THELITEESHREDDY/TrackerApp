import React from 'react'
import { useLocation } from 'react-router-dom';


import StreakArea from './StreakArea.jsx';
import HeatMapArea from './HeatMapArea.jsx';
import SuccessfullHabits from './SuccessfullHabits.jsx';
import HabitOrTaskEditor from './HabitOrTaskEditor.jsx';

function DashBoard({addDetails,deleteDetailsId,editDetailsId}) {

  const location = useLocation();
  const sectionDetails = location.state || {};


  return (
    <div className='md:mt-20vh'>
      <StreakArea/>    
      <HeatMapArea/>  
      <SuccessfullHabits/>
      <HabitOrTaskEditor addDetails={addDetails} deleteDetailsId={deleteDetailsId} editDetailsId={editDetailsId} sectionDetails={sectionDetails} />
    </div>
  )
}

export default DashBoard
