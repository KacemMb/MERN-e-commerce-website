import React, { useState } from 'react';
import '../Styles/login.css';

const Login = () => {
  const [isActive, setIsActive] = useState(false);

  const handleSwitch = () => {
    setIsActive(!isActive);
  };

  return (
    <div className='cont'>
        <div className={`content justify-content-center align-items-center d-flex shadow-lg ${isActive ? 'active' : ''}`} id='content'>
      {/*----Register form-----*/}
      <form>
        <div className='col-md-6 d-flex flex-column justify-content-center'>
          <div className='header-text mb-4'>
            <h1>Create Account</h1>
          </div>
          <div className='input-group mb-3'>
            <input type='text' placeholder='Name' className='form-control form-control-lg bg-light fs-6' />
          </div>
          <div className='input-group mb-3'>
            <input type='email' placeholder='Email' className='form-control form-control-lg bg-light fs-6' />
          </div>
          <div className='input-group mb-3'>
            <input type='password' placeholder='Password' className='form-control form-control-lg bg-light fs-6' />
          </div>
          <div className='input-group mb-3'>
            <input type='password' placeholder='Confirm-Password' className='form-control form-control-lg bg-light fs-6' />
          </div>
          <div className='input-group mb-3 justify-content-center'>
            <button className='btn border-white text-white w-50 fs-6'>Register</button>
          </div>
        </div>
      </form>
      {/*----Login form-----*/}
      <form>
        <div className='col-md-6 right-box d-flex flex-column justify-content-center'>
          <div className='header-text mb-4'>
            <h1>Sign In</h1>
          </div>
          <div className='input-group mb-3'>
            <input type='email' placeholder='Email' className='form-control form-control-lg bg-light fs-6' />
          </div>
          <div className='input-group mb-3'>
            <input type='password' placeholder='Password' className='form-control form-control-lg bg-light fs-6' />
          </div>
          <div className='input-group mb-5 d-flex justify-content-center'>
            <div className='form-check'>
              <input type='checkbox' className='form-check-input' id='formcheck' />
              <label htmlFor='formcheck' className='form-check-label text-secondary'><small>Remember me</small></label>
            </div>
            <div className='forgot'>
              <small><a href='#'>Forgot Password?</a></small>
            </div>
          </div>
          <div className='input-group mb-3 justify-content-center'>
            <button className='btn border-white text-white w-50 fs-6'>Login</button>
          </div>
        </div>
      </form>
      {/*----------Switch panel ----------- */}
      <div className='switch-content'>
        <div className='switch'>
          <div className='switch-panel switch-left'>
            <h1>Hello, Again</h1>
            <p>We are happy to see you back</p>
            <button className='btn text-white w-50 fs-6' id='login' onClick={handleSwitch}>Login</button>
          </div>
          <div className='switch-panel switch-right'>
            <h1>Welcome</h1>
            <p>Login our Store.</p>
            <button className='btn text-white w-50 fs-6' id='register' onClick={handleSwitch}>Register</button>
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default Login;
