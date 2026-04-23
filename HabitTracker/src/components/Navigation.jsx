
import React from 'react'
import {NavLink} from 'react-router-dom'
function Navigation() {
  return (
    <div  className=' w-full h-20vh bg-white p-4 flex items-center justify-center shadow-2xl'>

      
      <button className='p-2 hover:text-white hover:bg-gray-400 rounded-2xl cursor-pointer  text-3xl font-medium '>
        <NavLink to="/" className={({isActive})=> isActive ? "text-white bg-gray-400 rounded-2xl cursor-pointer p-2" : ""}>
          Area
        </NavLink>
      </button>
      <button className='p-2 hover:text-white hover:bg-gray-400 rounded-2xl cursor-pointer  text-3xl font-medium'>
        <NavLink to="/dashboard" className={({isActive})=> isActive ? "text-white bg-gray-400 rounded-2xl cursor-pointer p-2" : ""}>
          Dashboard
        </NavLink>
      </button>

      
    </div>
  )
}

export default Navigation
