import React from 'react'

// React Router
import {Routes, Route, Link} from "react-router-dom";

// Pages
import Login from "./Pages/Login";
import Register from './Pages/Register';

const Home = () => {
  return (
    <div>
      Home
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  )
}

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