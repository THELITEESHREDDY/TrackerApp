import {Routes, Route} from 'react-router-dom';

import Area from './components/area/Area.jsx';
import Navigation from './components/Navigation.jsx';
import './App.css';


function App() {
  
  

  return (
    <div className='min-w-screen min-h-screen rounded-2xl m-0 relative bg-yellow-500'>
      <Navigation/>
      <Area/>

    </div>
  )
}


export default App
