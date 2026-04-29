import React from 'react'
import Achievements from '../Achievements.jsx';
import HabitProgress from './HabitProgress.jsx';
import HabitAndTasksList from './HabitAndTasksList.jsx';

function Area() {
  return (
    <div className='mt-20vh'>
        <Achievements/>
        <HabitProgress/>  
        <HabitAndTasksList/>
    </div>
  )
}

export default Area
