import React, { useState } from 'react'

function Habit() {

    const [isCompleted,setIsCompleted]=useState(false);
   
    function handleCompletion(){
    
        setIsCompleted(!isCompleted);
        console.log("clicked");
        
        
    }

    
    
    return (
        <div className={` w-full h-20 ${isCompleted ? "bg-green-400 text-white" : "bg-white text-black"}  font-mono border-2 rounded-2xl p-2 my-1`} onDoubleClick={handleCompletion}>
            <p>Habit/Task Name</p>
            <h1>Work to do today</h1>
            <p>Time</p>
        </div>
    )
}

export default Habit
