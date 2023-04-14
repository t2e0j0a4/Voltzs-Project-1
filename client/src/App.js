import React from 'react'

// React Router
import {Routes, Route} from "react-router-dom";

// Pages
import Login from "./Pages/Login";

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App