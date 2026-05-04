import React, { useState } from 'react'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Habit({habit,taskHandler}) {

    const navigate=useNavigate();
  
    const [isCompleted,setIsCompleted]=useState(false);
    const lastTap=useRef(0);

   
    function handleCompletion(id){
        
        const now = Date.now();
        
        if(now-lastTap.current<300)
        {
            setIsCompleted(!isCompleted);   
            taskHandler(id)    
            
        }
       
        lastTap.current=now;

    }
    
    function handleNavigate({section}){
        
        navigate('/dashboard',{state: {...habit,section: section}});
        
    }
    
    return (
        <div 
            id={habit.id} 
            className={` w-full h-auto ${habit.completionTime!==null ? "bg-green-400 text-black" : "bg-white text-black"}   border-2 rounded-2xl my-2 flex overflow-hidden`} 
            
            
        >
            <div 
                className=' border-l-2 rounded-2xl  p-2 grow'
                onClick={()=>handleCompletion(habit.id)}
            >
                <p>Name: {habit.name}</p>
                <h1 className='font-extrabold'>Description: {habit.description}</h1>
                <p>Start Time: {habit.startTime}</p>
                <p>End Time: {habit.endTime}</p>
                {habit.completionTime && <p>Completion Time: {habit.completionTime}</p>}
            </div>
            <div className='  flex flex-col justify-evenly  '>
                <button className='w-auto h-full bg-blue-600 hover:bg-blue-400 flex items-center justify-center px-1' onClick={()=>handleNavigate({section:"edit"})}>Edit</button>
                <button className='w-auto h-full bg-red-600 hover:bg-red-400 flex items-center justify-center px-1' onClick={()=>handleNavigate({section:"delete"})}>Delete</button>

            </div>
            

        </div>
    )
}

export default Habit
