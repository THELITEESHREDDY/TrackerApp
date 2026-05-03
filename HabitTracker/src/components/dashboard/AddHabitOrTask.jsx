import React, { useState } from 'react'

function AddHabitOrTask() {
  const [isOpen, setIsOpen]= useState(false);
  return (
    <div className='w-full h-auto bg-white  rounded-2xl border-2 my-1 '>
      <button 
        className='w-full h-auto bg-green-600 rounded-2xl border p-2   text-center hover:bg-green-500 cursor-pointer'
        onClick={()=>setIsOpen(true)}
      >
        
        Add Task/Habit
      </button>
      {isOpen && <div className='w-full h-auto  rounded-b-2xl p-2'>
        <div className='w-full h-auto'>
          <div className='w-full h-auto my-1'>
            <label htmlFor="taskName">Task Name:</label>
            <input type="text" id='taskName' placeholder='Task Name'  required/>
          </div>

          <div className='w-full h-auto'>
            <label htmlFor="taskDescription">Task Description:</label>
            <input type="text" id='taskDescription' placeholder='Task Description'  required/>
          </div>

          <div className='w-full h-auto'>
            <label htmlFor="StartTime">Start Time:</label>
            <input type="datetime-local" id='StartTime'   required/>
          </div>
          <div className='w-full h-auto'>
            <label htmlFor="EndTime">End Time:</label>
            <input type="datetime-local" id='EndTime'   required/>
          </div>
      
        </div>    
        <div className='w-full h-auto flex justify-between'>
          <button
            onClick={()=>setIsOpen(false)}
            className='w-[30%] h-auto bg-white-600 rounded-2xl border p-2   text-center hover:bg-green-500 cursor-pointer mx-0.5'
          > 
            Close
          </button>
          <button
            className='w-[30%] h-auto bg-green-600 rounded-2xl border p-2   text-center hover:bg-green-500 cursor-pointer'
            onClick={()=>setIsOpen(false)}
          > 
            Add
          </button>
        </div>

      </div>}
    </div>
    

  )
}

export default AddHabitOrTask
