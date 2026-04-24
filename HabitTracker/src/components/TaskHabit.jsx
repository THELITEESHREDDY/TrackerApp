import React from 'react'



function TaskHabit({taskHabitDetails,onToggle}) {

    const handleChange=(id)=>{
        
       onToggle(id);
    }    

  return (
    <div className={`w-full h-full ${taskHabitDetails.isCompleted===true ? "bg-green-600": "bg-white"} rounded-xl p-2 mb-2 mt-2 flex justify-between items-center border-2`}>
       
        <div className="flex items-center space-x-4">
            <input 
                onChange={()=>handleChange(taskHabitDetails.id)} 
                type="checkbox" 
                checked={taskHabitDetails.isCompleted}
            />
            <h1 className={`${taskHabitDetails.isCompleted===true ? 'line-through' : ""}`}>{taskHabitDetails.taskName}</h1>
        </div>
      
        <p>{taskHabitDetails.taskTime}</p>
    </div>
  )
}

export default TaskHabit
