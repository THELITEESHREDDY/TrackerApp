import React from 'react'
import SuccessfullHabit from './SuccessfullHabit'

function SuccessfullHabits() {
  return (
    <div className='w-full h-auto rounded-2xl border-2 my-4'>
        <div className='w-full h-auto p-2 text-center bg-white rounded-t-2xl'>
            <h1 className='font-bold'>Successfull Habits</h1>
        </div>
        <div>
            <SuccessfullHabit/>
        </div>
        
    </div>
  )
}

export default SuccessfullHabits
