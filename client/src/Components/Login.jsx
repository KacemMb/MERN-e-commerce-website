import React, { useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'


const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)

  

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
      if(res){
        toast.success("signed in successfully")
        localStorage.setItem('stToken', res.data.stToken)
      }
      
      
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (e) => {
    setLoading(true)
    if (!isEmailValid(data.email)) {
      toast.error('Invalid Email')
      setLoading(false)
      return
    }
    if (!isPasswordValid(data.password)) {
      toast.error('Invalid Password')
      setLoading(false)
      return
    }
    
    sentData()
    setLoading(false)
  }
  return (
    <div className='Login'>
      <div className="inputs">
        <input type="email" name='email' placeholder='E-mail' className='auth-input' onChange={handleChange} />
        <input type="password" name='password' placeholder='Password' className='auth-input' onChange={handleChange}/>
      </div>
      <div className="btnandforget">
        <button className='auth-btn' onClick={handleSubmit}>{loading ? <div className='loader'></div> : 'Login'}</button>
        <p className='auth-p'>forget Password</p>
      </div>
      
    </div>
  )
}

export default Login
