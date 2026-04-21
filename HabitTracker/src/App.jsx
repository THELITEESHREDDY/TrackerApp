import Navigation  from './components/Navigation.jsx'
import Area from './components/Area.jsx'
import DashBoard from './components/DashBoard.jsx'
import './App.css'
import { Routes,Route } from 'react-router-dom'

function App() {
  

  return (
    <div className='max-h:'>
      <Navigation />
        <Routes>
          <Route 
            path="/" 
            element={<Area/>}
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
