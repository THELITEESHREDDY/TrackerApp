import React from 'react'

function HabitProgress() {
  return (
    <div className="w-full h-14 bg-black text-white border rounded-2xl p-0.5 my-4">
        
        <div className="flex w-full h-full rounded-2xl overflow-hidden">
            <div id="completed" className="bg-green-600 w-1/2 h-full " title='completed'></div>
            <div id="completedButDelayed" className="bg-red-600 w-1/6 h-full"></div>
            <div id="completedButEarly" className="bg-orange-600 w-1/6 h-full"></div>
            <div id="notCompleted" className="bg-gray-600 w-1/6 h-full"></div>
        </div>
    </div>
  )
}

export default HabitProgress
