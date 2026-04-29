import { createRoot } from 'react-dom/client'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import DashBoard from './components/dashboard/DashBoard.jsx';
import Navigation from './components/Navigation.jsx';
import './index.css'



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    
    <Routes>
      <Route path="/" index element={<App/>}/>
      <Route path="/dashboard" element={<DashBoard/>}/>
    </Routes>
  
  </BrowserRouter>
  
  
)
