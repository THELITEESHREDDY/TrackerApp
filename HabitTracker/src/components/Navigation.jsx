
import React from 'react'
import {NavLink} from 'react-router-dom'


function Navigation() {
  return (
    <div className='
      w-full bg-white p-2 flex items-center justify-center gap-4
      shadow-xl fixed bottom-0 left-0 right-0
      md:top-0 md:bottom-auto
      rounded-t-2xl md:rounded-b-2xl
    '>

      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-white bg-gray-400 rounded-2xl p-1 border-2 border-black text-2xl"
            : "rounded-2xl border-2 p-1 text-2xl hover:bg-gray-400 hover:text-white"
        }
      >
        Area
      </NavLink>

      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive
            ? "text-white bg-gray-400 rounded-2xl p-1 border-2 border-black text-3xl"
            : "rounded-2xl border-2 p-1 text-3xl hover:bg-gray-400 hover:text-white"
        }
      >
        Dashboard
      </NavLink>

    </div>
  );
}

export default Navigation
