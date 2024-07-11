import React from 'react'
import './CSS/LoginSignUp.css'

const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup_container">
        <h1>Sign Up</h1>
        <div className="loginsignup_fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup_login">Already have an account? <span>Login Here</span></p>
        <div className="loginsignup_agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing. I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp
