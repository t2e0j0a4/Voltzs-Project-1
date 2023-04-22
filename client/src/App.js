import React from 'react'

// React Router
import {Routes, Route} from "react-router-dom";

// Pages
import Home from './Pages/Home';
import Login from "./Pages/Login";
import Register from './Pages/Register';

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App