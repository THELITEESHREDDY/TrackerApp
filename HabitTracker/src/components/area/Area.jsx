import React from 'react'
import Achievements from '../Achievements.jsx';
import HabitProgress from './HabitProgress.jsx';
import HabitAndTasksList from './HabitAndTasksList.jsx';
import Month from './Month.jsx';

function Area({habitsAndTasks,markCompleted}) {

  
 
  return (
    <div className='md:mt-20vh '>
        <Achievements/>
        <HabitProgress list={habitsAndTasks}/>  
        <HabitAndTasksList list={habitsAndTasks} getTaskId={markCompleted}/>
        <Month />
    </div>
  )
}

export default Area
