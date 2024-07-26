import React, { useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'


const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  const isEmailValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }
  const isPasswordValid = (password) => {
    return password.length >= 6
  }

  const sentData = async () => {
    try {
      const res = await axios.post('http://localhost:2024/api/user/login', data)
    console.log(res.data)
      
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (e) => {
    if (!isEmailValid(data.email)) {
      toast.error('Invalid Email')
      return
    }
    if (!isPasswordValid(data.password)) {
      toast.error('Invalid Password')
      return
    }
    console.log(data)
    sentData()
    toast.success('Login success')
  }
  return (
    <div className='Login'>
      <div className="inputs">
        <input type="email" name='email' placeholder='E-mail' className='auth-input' onChange={handleChange} />
        <input type="password" name='password' placeholder='Password' className='auth-input' onChange={handleChange}/>
      </div>
      <div className="btnandforget">
        <button className='auth-btn' onClick={handleSubmit}>Login</button>
        <p className='auth-p'>forget Password</p>
      </div>
      
    </div>
  )
}

export default Login
