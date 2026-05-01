import React from 'react'
import Achievements from '../Achievements.jsx';
import HabitProgress from './HabitProgress.jsx';
import HabitAndTasksList from './HabitAndTasksList.jsx';
import Month from './Month.jsx';

function Area() {
  return (
    <div className='md:mt-20vh '>
        <Achievements/>
        <HabitProgress/>  
        <HabitAndTasksList/>
        <Month />
    </div>
  )
}

export default Area
