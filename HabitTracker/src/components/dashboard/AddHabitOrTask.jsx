import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function AddHabitOrTask({addDetails,detail}) {

  const [isOpen, setIsOpen]= useState(false);
  const [details,setDetails]=useState({
    name:"",
    isHabit:false,
    description:"",
    startTime:"",
    endTime:""
  })
  const navigate=useNavigate();

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
  
  function handleChanges(e){
    const { name, value, type, checked } = e.target;

    const finalValue = type === 'checkbox' ? checked : value;
    
      
    setDetails(prevDetails => ({
      ...prevDetails,
      [name]:finalValue}
    ));
  };

  function handleSubmit(){
    const newDetails={...details,completionTime:null}
    
    addDetails(newDetails)
    setDetails({
      name:"",
      isHabit:false,
      description:"",
      startTime:"",
      endTime:""
    })
    setIsOpen(false);
    navigate("/");
  }

  return (
    <div className='w-full h-auto bg-white rounded-2xl border-2 my-1'>
      <button 
        className='w-full h-auto bg-green-600 rounded-2xl border p-2   text-center hover:bg-green-500 cursor-pointer'
        onClick={()=>setIsOpen(true)}
      >
        
        Add Task/Habit
      </button>
      {isOpen && <div className='w-full h-auto rounded-b-2xl p-2'>
        <div className='w-full h-auto'>
         {details.isHabit &&<div className='p-1 text-red-600 animate-pulse'> Habit must be strictly followed for minimum of 21 days!!</div>}    
        
          <div className='w-full h-auto my-1 flex justify-evenly'>
           <label>
            <input 
              type="checkbox" 
              name="isHabit"           
              checked={details.isHabit} 
              onChange={handleChanges} 
            />
            Is this a habit?
            </label>
          </div>

          <div className='w-full h-auto my-1'>
            <label htmlFor="taskName">{details.isHabit ? "Habit" : "Task"} Name:</label>
            <input 
              type="text" 
              id='taskName' 
              name="name"
              value={details.name}
              onChange={handleChanges}
              placeholder='Task Name' 
              className='border w-full p-1' 
            required/>
          </div>

          <div className='w-full h-auto my-1'>
            <label htmlFor="taskDescription">{details.isHabit ? "Habit" : "Task"} Description:</label>
            <input 
              type="text" 
              id='taskDescription' 
              name="description"
              placeholder='Task Description'  
              value={details.description}
              onChange={handleChanges}
              className='border w-full p-1'
            required/>
          </div>

          <div className='w-full h-auto my-1'>
            <label htmlFor="StartTime">Start Time:</label>
            <input 
              type="datetime-local" 
              id='StartTime'
              name="startTime"   
              onChange={handleChanges}
              className='border w-full p-1'
            required/>
          </div>
          <div className='w-full h-auto my-1'>
            <label htmlFor="EndTime">End Time:</label>
            <input 
              type="datetime-local" 
              id='EndTime'
              name="endTime"   
              onChange={handleChanges}
              className='border w-full p-1'
            required/>
          </div>
      
        </div>    
        <div className='w-full h-auto flex justify-between mt-4'>
          <button
            onClick={()=>setIsOpen(false)}
            className='w-[30%] h-auto bg-white-600 rounded-2xl border p-2   text-center hover:bg-green-500 cursor-pointer mx-0.5'
          > 
            Close
          </button>
          <button
            type='submit'
            className='w-[30%] h-auto bg-green-600 rounded-2xl border p-2   text-center hover:bg-green-500 cursor-pointer'
            onClick={()=>handleSubmit()}
          > 
            Add
          </button>
        </div>

      </div>}
    </div>
    

  )
}

export default AddHabitOrTask
