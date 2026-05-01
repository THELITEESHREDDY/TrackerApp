import { BrowserRouter, Routes, Route } from "react-router";
import Handler from "./components/Handler.jsx";
import Area from './components/area/Area.jsx';
import Navigation from './components/Navigation.jsx';
import './App.css';


function App() {
  
  

  return (
    <div className='min-w-screen min-h-screen rounded-2xl  relative bg-yellow-500 font-mono'>
      
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/*" index element={<Handler/>}/>
      </Routes>
  
    </BrowserRouter>
    </div>
  )
}


export default App
