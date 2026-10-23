import React, { useState } from 'react'
import './Login.css'

const Login = () => {
  const [currentState, setCurrentState] = useState('Login')

  return (
    <div className='login-page'>

      <form className='login-box'>

        <h2>{currentState}</h2>

        {currentState === 'Sign Up' && (
          <input
            type='text'
            placeholder='Full Name'
          />
        )}

        <input
          type='email'
          placeholder='Email Address'
        />

        <input
          type='password'
          placeholder='Password'
        />

        <button>
          {currentState}
        </button>

        {
          currentState === 'Login'
          ? (
            <p>
              Don’t have an account?
              <span onClick={() => setCurrentState('Sign Up')}>
                Create Account
              </span>
            </p>
          )
          : (
            <p>
              Already have an account?
              <span onClick={() => setCurrentState('Login')}>
                Login Here
              </span>
            </p>
          )
        }

      </form>

    </div>
  )
}

export default Login