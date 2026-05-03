import React, { useState } from 'react'
import { useRef } from 'react';

function Habit({habit,taskHandler}) {

    const [isCompleted,setIsCompleted]=useState(false);
    const lastTap=useRef(0);
   
    function handleCompletion(id){
        
        const now = Date.now();
        
        if(now-lastTap.current<300)
        {
            setIsCompleted(!isCompleted);   
            taskHandler(id)    
            console.log(id)     
            console.log("double Tap")
        }
        lastTap.current=now;

    }

   
    
    return (
        <div id={habit.id} className={` w-full h-auto ${habit.completionTime!==null ? "bg-green-400 text-black" : "bg-white text-black"}  font-mono border-2 rounded-2xl my-2 p-2`} onClick={()=>handleCompletion(habit.id)}>
            <p>{habit.name}</p>
            <h1 className='font-extrabold'>{habit.description}</h1>
            <p>Start Time: {habit.startTime}</p>
            <p>End Time: {habit.endTime}</p>

        </div>
    )
}

export default Habit
