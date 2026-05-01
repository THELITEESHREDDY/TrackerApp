import { BrowserRouter, Routes, Route } from "react-router";

import Area from './components/area/Area.jsx';
import Navigation from './components/Navigation.jsx';
import DashBoard from './components/dashboard/DashBoard.jsx';
import './App.css';


function App() {
  
  

  return (
    <div className='min-w-screen min-h-screen rounded-2xl m-0 relative bg-yellow-500'>
      
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" index element={<Area/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
      </Routes>
  
    </BrowserRouter>
    </div>
  )
}


export default App
