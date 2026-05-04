import React from 'react'

import AddHabitOrTask from './AddHabitOrTask.jsx';
import EditHabitOrTask from './EditHabitOrTask.jsx';
import DeleteHabitOrTask from './DeleteHabitOrTask.jsx';
import { useState } from 'react';

function HabitOrTaskEditor({addDetails,deleteDetailsId,editDetailsId,sectionDetails}) {

  
  return (
    <div className='w-full h-auto p-2 border-2 rounded-2xl font-semibold my-4'>
        <AddHabitOrTask addDetails={addDetails}/>
        <EditHabitOrTask editDetailsId={editDetailsId} sectionDetails={sectionDetails} />
        <DeleteHabitOrTask deleteDetailsId={deleteDetailsId} sectionDetails={sectionDetails}/>
    </div>
  )
}

export default HabitOrTaskEditor;
