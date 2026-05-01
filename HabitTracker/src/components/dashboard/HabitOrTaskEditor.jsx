import React from 'react'
import AddHabitOrTask from './AddHabitOrTask.jsx';
import EditHabitOrTask from './EditHabitOrTask.jsx';
import DeleteHabitOrTask from './DeleteHabitOrTask.jsx';

function HabitOrTaskEditor() {
  return (
    <div className='w-full h-auto p-2 border-2 rounded-2xl font-semibold my-4'>
        <AddHabitOrTask />
        <EditHabitOrTask />
        <DeleteHabitOrTask />
    </div>
  )
}

export default HabitOrTaskEditor;
