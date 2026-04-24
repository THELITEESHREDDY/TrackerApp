import React from 'react'
import TaskHabit from './TaskHabit.jsx';
function TaskHabitList({taskHabits,onToggle}) {
    
  return (
    <div className=''>

      {taskHabits.map((habit) =>(
      
        <TaskHabit key={habit.id} taskHabitDetails={habit} onToggle={onToggle}/>    
      
      ))}
    </div>
  )
}

export default TaskHabitList
