import React from 'react'



function TaskHabit({taskHabitDetails,onToggle}) {

    const handleChange=(id)=>{
        
       onToggle(id);
    }    
    console.log(taskHabitDetails);
  return (
    <div className="w-full h-full bg-white rounded-xl p-2 mb-2 mt-2 flex justify-between items-center">
       
        <div className="flex items-center space-x-4">
            <h1 className={`${taskHabitDetails.isCompleted===true ? 'line-through' : ""}`}>{taskHabitDetails.taskName}</h1>
            <input 
                onChange={()=>handleChange(taskHabitDetails.id)} 
                type="checkbox" 
                checked={taskHabitDetails.isCompleted}
            />
        </div>
      
        <p>{taskHabitDetails.taskTime}</p>
    </div>
  )
}

export default TaskHabit
