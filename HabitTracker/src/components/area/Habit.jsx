import React, { useState } from 'react'
import { useRef } from 'react';

function Habit() {

    const [isCompleted,setIsCompleted]=useState(false);
    const lastTap=useRef(0);
   
    function handleCompletion(){
        
        const now = Date.now();
        console.log("Tap")
        if(now-lastTap.current<300)
        {
            setIsCompleted(!isCompleted);            
            console.log("double Tap")
        }
        lastTap.current=now;

    }

    
    
    return (
        <div className={` w-full h-20 ${isCompleted ? "bg-green-400 text-black" : "bg-white text-black"}  font-mono border-2 rounded-2xl p-2 my-1`} onClick={handleCompletion}>
            <p>Habit/Task Name</p>
            <h1>Work to do today</h1>
            <p>Time</p>
        </div>
    )
}

export default Habit
