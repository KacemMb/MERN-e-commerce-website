import React, { useState } from 'react'
import '../Styles/Auth.css'
import axios from 'axios'
import toast from 'react-hot-toast'

const Signup = () => {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    repassword: ''
  })

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const isEmailValid = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const isPasswordValid = (password) => {
    return password.length >= 6;
  }

  const sentData = async () => {
    try {
      const full_name = data.username;
      const email = data.email;
      const password = data.password;
      const myData = {
        full_name,
        email,
        password
      }
      const res = await axios.post('http://localhost:2024/api/user/signup',myData)
      if(res){
        toast.success("signed Up successfully")
        console.log(res.data)
      }
      
    } catch (error) {
      console.log("error in sentData Function",error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(data.username === '' || data.email === '' || data.password === '' || data.repassword === ''){
      alert('Please fill all the fields')
    } else if(!isEmailValid(data.email)){
      alert('Please enter a valid email')
    } else if(!isPasswordValid(data.password)){
      alert('Password must be at least 6 characters long')
    } else if(data.password !== data.repassword){
      alert('Password and Re_Password must be same')
    } else {
      sentData();
    }
  }

  return (
    <div className='Signup'>
      <div className="inputs">
        <input type="text" placeholder='User Name' name='username' className='auth-input'  onChange={handleChange}/>
        <input type="email" placeholder='E-mail' name='email' className='auth-input'  onChange={handleChange}/>
        <input type="password" placeholder='Password' name='password' className='auth-input'  onChange={handleChange}/>
        <input type="password" placeholder='Re_Password' name='repassword' className='auth-input' onChange={handleChange}/>
      </div>
      <button className='auth-btn' onClick={handleSubmit}>SignUp</button>
    </div>
  )
}

export default Signup
