import React from 'react'
import Habit from './Habit.jsx';

function HabitAndTasksList() {
  return (
    <div className='w-full h-auto rounded-2xl border-2 my-4'>
        <div className='w-full h-auto bg-red-500  rounded-2xl border-2 p-1 flex items-center justify-center font-bold mb-2'>
          totalTasks Left
        </div>       
        <div className='w-full h-auto rounded-2xl border-2 mt-2 p-1'>
            <Habit/>
            <Habit/>
            <Habit/>
        </div>
    </div>
  )
}

export default HabitAndTasksList
