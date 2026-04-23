import React from 'react'
import TaskHabit from './TaskHabit.jsx';
function TaskHabitList({taskHabits,onToggle}) {
    console.log(taskHabits)
  return (
    <div className=''>
      {taskHabits.map((habit) =>(
        <div  key={habit.id}>
            <TaskHabit taskHabitDetails={habit} onToggle={onToggle}/>
        </div>
      ))}
    </div>
  )
}

export default TaskHabitList
