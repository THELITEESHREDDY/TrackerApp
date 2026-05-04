import React, { useEffect, useState } from 'react'
import Habit from './Habit.jsx';

function HabitAndTasksList({ list, getTaskId }) {

  const tasksLeft= list.filter((habit) => habit.completionTime===null).length;

  if(list.length===0){
    return(
      <div className='w-full max-h-screen overflow-y-auto rounded-2xl border-2 my-4'>
        <div className='w-full h-auto bg-red-500  rounded-2xl border-2 p-1 flex items-center justify-center font-bold mb-2'>
          {tasksLeft} Task(s) Left
        </div>       
        <div className='w-full h-auto rounded-2xl border-2 mt-2 p-1 flex justify-center'>
          <h1>No Tasks Today!!</h1>
        </div>
    </div>
    )
  }
  
  return (
    <div className='w-full max-h-screen overflow-y-auto rounded-2xl border-2 my-4'>
        <div className='w-full h-auto bg-red-500  rounded-2xl border-2 p-1 flex items-center justify-center font-bold mb-2'>
          {tasksLeft} Task(s) Left
        </div>       
        <div className='w-full h-auto rounded-2xl border-2 mt-2 p-1'>
          {list.map( (habit)=>(<Habit key={habit.id} habit={habit} taskHandler={getTaskId}/>))}
        </div>
    </div>
  )
}

export default HabitAndTasksList
