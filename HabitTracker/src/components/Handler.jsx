import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";

import DashBoard from './dashboard/DashBoard.jsx';
import Area from './area/Area.jsx';

function Handler() {

  const [habitsAndTasks,setHabitsAndTasks]=useState([
    {
      id:0,
      name:"DSA",
      description:"Trees",
      startTime:"6:00",
      endTime:"8:00",
      completionTime:null
    },
    {
      id:1,
      name:"Gym",
      description:"Chest + Triceps",
      startTime:"8:30",
      endTime:"10:30",
      completionTime:null
    },
    {
      id:2,
      name:"Development",
      description:"React Hooks",
      startTime:"17:30",
      endTime:"20:30",
      completionTime:null
    },
    {
      id:3,
      name:"System Design",
      description:"HLD of RateLimiter",
      startTime:"21:00",
      endTime:"22:00",
      completionTime:null
    }
  ]);

  function markCompleted(id)
  {
    const newList=habitsAndTasks.slice();
    newList.map((task)=>(
      task.id===id ? (task.completionTime=== null ?  task.completionTime=Date.now() :  task.completionTime=null) : task.completionTime
    ));
    setHabitsAndTasks(newList);
  }
  function addDetails(id){
    console.log(id)
  }
  function editDetails(id){
    console.log(id)
  }
  function deleteDetails(id){
    console.log(id);
  }
  return (
    <div className='mb-16 mt-0  md:mt-16 md:mb-0 bg-yellow-500 '>
        
            <Routes>
                <Route path="/" index element={<Area habitsAndTasks={habitsAndTasks} markCompleted={markCompleted}/>}/>
                <Route path="/dashboard" element={<DashBoard addDetails={addDetails} deleteDetails={deleteDetails} editDetails={editDetails}/>}/>
            </Routes> 
    </div>
  )
}

export default Handler
