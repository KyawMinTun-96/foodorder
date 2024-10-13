import React, { useState } from 'react'
import {assets} from '../../assets/imgs/others/assets'
import './Login.css'

const Login = ({setShowLogin}) => {

    const [curState, setCurState] = useState('Sign Up');

  return (
    <div className='login'>
        <form className='login-container'>
            <div className='login-title'>
                <h2>{curState}</h2>
                <img onClick={() => setShowLogin(false) } src={assets.cross_icon} alt='...'/>
            </div>
            <div className='login-inputs'>
                {
                    curState === 'Login' 
                    ? <></>
                    : <input type='text' placeholder='Your name' required />
                }
                <input type='email' placeholder='Your email' required />
                <input type='password' placeholder='Password' required />
            </div>
            <button>{curState === 'Sign Up' ? "Create account" : " Login"}</button>
            <div className='login-condition'>
                <input type='checkbox' required/>
                <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
            {
                curState === 'Login'
                ? <p>Create a new account? <span onClick={()=>setCurState('Sign Up')}>Click here</span></p>
                : <p>Already have an accont? <span onClick={() => setCurState('Login')}>Login here</span></p>
            }
        </form>
    </div>
  )
}

export default Login
