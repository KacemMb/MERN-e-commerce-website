import React from 'react'
import '../Styles/Auth.css'

const Signup = () => {
  return (
    <div className='Signup'>
      <div className="inputs">
        <input type="text" placeholder='User Name' name='username' className='auth-input' />
        <input type="email" placeholder='E-mail' name='email' className='auth-input' />
        <input type="password" placeholder='Password' name='password' className='auth-input' />
        <input type="password" placeholder='Re_Password' name='repassword' className='auth-input'/>
      </div>
      <button className='auth-btn'>SignUp</button>
    </div>
  )
}

export default Signup
