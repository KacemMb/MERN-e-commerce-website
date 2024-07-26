import React, { useState } from 'react'
import '../Styles/Auth.css'
import { Link, Route, Routes } from 'react-router-dom'
import Login from '../Components/Login'
import Signup from '../Components/Signup'

const Auth = () => {
    const [clicked, setClicked] = useState("login")
    const handelclick = (e) => {
        setClicked(e.target.name)
    }
  return (
    <div className='Auth'>
        <div className='change-auth'>
            <Link to={'/auth/login'}><button className='left' name='login' id={clicked==="login" ? "clicked" : ""} onClick={handelclick}>Login</button></Link>
            <Link to={'/auth/signup'}><button className='right' name='signup' id={clicked==="signup" ? "clicked" : ""} onClick={handelclick}>Signup</button></Link>
        </div>
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
        </Routes>
    </div>
  )
}

export default Auth
