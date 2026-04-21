
import React from 'react'
import {Link} from 'react-router-dom'
function Navigation() {
  return (
    <div >

      <Link to="/">
        Area
      </Link>
      <Link to="/dashboard">
        DashBoard
      </Link>
    </div>
  )
}

export default Navigation
