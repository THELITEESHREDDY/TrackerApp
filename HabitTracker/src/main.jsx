import { createRoot } from 'react-dom/client'
import React from "react";
import ReactDOM from "react-dom/client";

import App from './App.jsx'
import './index.css'
import { registerSW } from 'virtual:pwa-register'


const updateSW = registerSW({
  onNeedRefresh() {
    alert("try refreshing the app")
  },
  onOfflineReady() {
    console.log('App ready to work offline')
  },
})



createRoot(document.getElementById('root')).render(
  <App/>
  
  
)
