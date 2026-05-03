import React from 'react'
import AddHabitOrTask from './AddHabitOrTask.jsx';
import EditHabitOrTask from './EditHabitOrTask.jsx';
import DeleteHabitOrTask from './DeleteHabitOrTask.jsx';

function HabitOrTaskEditor({addDetails,deleteDetails,editDetails,details}) {
  return (
    <div className='w-full h-auto p-2 border-2 rounded-2xl font-semibold my-4'>
        <AddHabitOrTask addDetails={addDetails} details={details}/>
        <EditHabitOrTask editDetails={editDetails} detail={details} />
        <DeleteHabitOrTask deleteDetails={deleteDetails} detail={details}/>
    </div>
  )
}

export default HabitOrTaskEditor;
