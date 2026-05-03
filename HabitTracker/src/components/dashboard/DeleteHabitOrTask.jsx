import React from 'react'
import { useState } from 'react'

function DeleteHabitOrTask({deleteDetails,detail}) {

  const [isOpen, setIsOpen]= useState(false);
  const [details,setDetails]=useState({
      name:"",
      isHabit:true,
      description:"",
      startTime:"",
      endTime:""
    })
  function handleSubmit(){
    deleteDetails(deleteDetails.id);
  }
  return (
      <div className='w-full h-auto bg-white  rounded-2xl border-2 my-1 '>
      <button 
        className='w-full h-auto bg-red-600 rounded-2xl border p-2   text-center hover:bg-red-500 cursor-pointer'
        onClick={()=>setIsOpen(true)}
      >
        
        Delete Task/Habit
      </button>
      {isOpen && <div className='w-full h-auto  rounded-b-2xl p-2'>
        <div className='w-full h-auto'>
         {details.isHabit && <div className='p-1 text-red-600 animate-pulse'> Deleting habit may effect your consistency Rating! </div>}    
        
          

          <div className='w-full h-auto my-1'>
            <label htmlFor="taskName">{details.isHabit ? "Habit" : "Task"} Name:</label>
            <input 
              type="text" 
              id='taskName' 
              name="name"
              value={details.name}
              disabled
              placeholder='Task Name'  
            required/>
          </div>

          <div className='w-full h-auto'>
            <label htmlFor="taskDescription">{details.isHabit ? "Habit" : "Task"} Description:</label>
            <input 
              type="text" 
              id='taskDescription' 
              name="description"
              placeholder='Task Description'  
              value={details.description}
              disabled
            required/>
          </div>

          <div className='w-full h-auto'>
            <label htmlFor="StartTime">Start Time:</label>
            <input 
              type="datetime-local" 
              id='StartTime'
              name="startTime"   
              disabled
            required/>
          </div>
          <div className='w-full h-auto'>
            <label htmlFor="EndTime">End Time:</label>
            <input 
              type="datetime-local" 
              id='EndTime'
              name="endTime"   
              disabled
            required/>
          </div>
      
        </div>    
        <div className='w-full h-auto flex justify-between'>
          <button
            onClick={()=>setIsOpen(false)}
            className='w-[30%] h-auto bg-white-600 rounded-2xl border p-2   text-center hover:bg-red-500 cursor-pointer mx-0.5'
          > 
            Close
          </button>
          <button
            type='submit'
            className='w-[30%] h-auto bg-red-600 rounded-2xl border p-2   text-center hover:bg-red-500 cursor-pointer'
            onClick={()=>handleSubmit()}
          > 
            delete
          </button>
        </div>

      </div>}
    </div>    
  
  )
}

export default DeleteHabitOrTask