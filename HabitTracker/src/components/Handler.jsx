import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";

import DashBoard from './dashboard/DashBoard.jsx';
import Area from './area/Area.jsx';

function Handler() {
  return (
    <div className='mb-16 mt-0  md:mt-16 md:mb-0 bg-yellow-500 '>
        
            <Routes>
                <Route path="/" index element={<Area/>}/>
                <Route path="/dashboard" element={<DashBoard/>}/>
            </Routes> 
    </div>
  )
}

export default Handler
