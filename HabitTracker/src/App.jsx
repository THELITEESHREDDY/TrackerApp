import Navigation  from './components/Navigation.jsx'
import Area from './components/Area.jsx'
import DashBoard from './components/DashBoard.jsx'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import { useState } from 'react'

function App() {
  
  const [habitList,setHabitList]=useState([
    {
      id:1,
      taskName: "work",
      taskTime: "xx:XX",
      isCompleted: false
    },
    {
      id:2,
      taskName: "DSA",
      taskTime: "xx:XX",
      isCompleted: false
    },
    {
      id:3,
      taskName: "Diet",
      taskTime: "xx:xx",
      isCompleted: false
    }
  ]);

  return (
    <div className='w-dvw h-dvh'>
      <Navigation />
        <Routes>
          <Route 
            path="/" 
            element={<Area habitList={habitList} setHabitList={setHabitList}/>}
          />
          
          <Route 
            path="/dashboard" 
            element={<DashBoard/>}
          />
        </Routes>
      
      
    </div>
  )
}

export default App
