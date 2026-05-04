import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";

import DashBoard from './dashboard/DashBoard.jsx';
import Area from './area/Area.jsx';

function Handler() {

  const [habitsAndTasks,setHabitsAndTasks]=useState([]);

  function markCompleted(id)
  {
    const newList=habitsAndTasks.slice();
    const time= new Date(Date.now()).toLocaleString().slice(11);
    newList.map((task)=>(
      task.id===id ? (task.completionTime=== null ?  task.completionTime= time :  task.completionTime=null) : task.completionTime
    ));
    setHabitsAndTasks(newList);
  }
  function addDetails(habit){
    const id=habitsAndTasks.length
    habit={...habit,id};
    
    setHabitsAndTasks([...habitsAndTasks,habit]);
  }
  function editDetails(currHabit){
    const newHabitsAndTasks=habitsAndTasks.map((habit)=>habit.id===currHabit.id ? currHabit : habit );
    setHabitsAndTasks(newHabitsAndTasks)  
  }
  function deleteDetails(id){
    const newHabitsAndTasks=habitsAndTasks.filter((habit)=>habit.id!==id );
    setHabitsAndTasks(newHabitsAndTasks)  
  }
  return (
    <div className='mb-16 mt-0  md:mt-16 md:mb-0 bg-yellow-500 '>
        
            <Routes>
                <Route path="/" index element={<Area habitsAndTasks={habitsAndTasks} markCompleted={markCompleted}/>}/>
                <Route path="/dashboard" element={<DashBoard addDetails={addDetails} deleteDetailsId={deleteDetails} editDetailsId={editDetails}/>}/>
            </Routes> 
    </div>
  )
}

export default Handler
