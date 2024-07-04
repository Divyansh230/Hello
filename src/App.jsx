
import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import  Dashboard from './Dashboard'
import PastInterview from './PastInterviews'
 
function App() {
  

  return (
    <div className="grid-container">
      <Header/>
      <Sidebar/>
      <Dashboard/>
      
    </div>
  )
}

export default App
