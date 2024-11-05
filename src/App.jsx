
// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'

import './App.css'
import Home from './Home'
import About from './components/About'

function App() {
 

  return (
    <>
   <Router>
    <Header/>
      <div>
        {/* Add your navigation bar component here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          
          </Routes>
         
          </div>
          </Router>
  
  </>
  )
}

export default App
