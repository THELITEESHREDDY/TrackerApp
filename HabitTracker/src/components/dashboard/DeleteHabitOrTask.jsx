import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function DeleteHabitOrTask({deleteDetailsId,sectionDetails}) {

  const [isOpen, setIsOpen]= useState(false);
  const [details,setDetails]=useState({
    name:"",
    isHabit:false,
    description:"",
    startTime:"",
    endTime:""
  })
  const navigate=useNavigate();


  useEffect(() => {
    if (sectionDetails.section === "delete" ) {
      setDetails(sectionDetails);
      setIsOpen(true);
    } 
  }, [sectionDetails]);

  function handleClose(){
    setDetails({
      name: "",
      isHabit: false,
      description: "",
      startTime: "",
      endTime: "",
      id: "",
    })
    setIsOpen(false);
  }
  
  function handleSubmit(id){
    deleteDetailsId(id);
    setDetails({
      name:"",
      isHabit:false,
      description:"",
      startTime:"",
      endTime:""
    });
    setIsOpen(false);
    navigate("/")
    
  }
  return (
      <div className='w-full h-auto bg-white rounded-2xl border-2 my-1'>
      <button 
        className='w-full h-auto bg-red-600 rounded-2xl border p-2   text-center hover:bg-red-500 cursor-pointer'
        onClick={()=>setIsOpen(true)}
      >
        
        Delete Task/Habit
      </button>
      {isOpen && <div className='w-full h-auto rounded-b-2xl p-2'>
        <div className='w-full h-auto'>
         {details.isHabit && <div className='p-1 text-red-600 animate-pulse flex justify-evenly'> Deleting habit may effect your consistency Rating! </div>}    
        
          

          <div className='w-full h-auto my-1 '>
            <label htmlFor="taskName">
              {details.isHabit ? "Habit" : "Task"} Name:
            </label>
            <input 
              type="text" 
              id='taskName' 
              name="name"
              value={details.name}
              className='border  w-full p-1'
              disabled
              placeholder='Task Name'  
            required/>
          </div>

          <div className='w-full h-auto my-1 '>
            <label htmlFor="taskDescription">{details.isHabit ? "Habit" : "Task"} Description:</label>
            <input 
              type="text" 
              id='taskDescription' 
              name="description"
              placeholder='Task Description'  
              value={details.description}
              className='border  w-full p-1'
              disabled
            required/>
          </div>

          <div className='w-full h-auto my-1 '>
            <label htmlFor="StartTime">Start Time:</label>
            <input 
              type="datetime-local" 
              id='StartTime'
              name="startTime"
              value={details.startTime}  
              className='border  w-full p-1' 
              disabled
            required/>
          </div>
          <div className='w-full h-auto my-1 '>
            <label htmlFor="EndTime">End Time:</label>
            <input 
              type="datetime-local" 
              id='EndTime'
              name="endTime"   
              value={details.endTime}
              className='border  w-full p-1'
              disabled
            required/>
          </div>
      
        </div>    
        <div className='w-full h-auto flex justify-between mt-4'>
          <button
            onClick={()=>setIsOpen(false)}
            className='w-[30%] h-auto bg-white-600 rounded-2xl border p-2   text-center hover:bg-red-500 cursor-pointer mx-0.5'
          > 
            Close
          </button>
          <button
            type='submit'
            className='w-[30%] h-auto bg-red-600 rounded-2xl border p-2   text-center hover:bg-red-500 cursor-pointer'
            onClick={()=>handleSubmit(details.id)}
          > 
            delete
          </button>
        </div>

      </div>}
    </div>    
  
  )
}

export default DeleteHabitOrTask