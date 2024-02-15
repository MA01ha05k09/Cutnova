import React from 'react'
import "../style/Forgot.css";
import icon from "../Images/logo.png"
import HeaderImages from '../components/headerImages'
import Rectangle from "../Images/Rectangle.png"
import { Link } from 'react-router-dom'
function Forgot() {
  return (
    <div className='Forgot-page'>
      <div>
        <HeaderImages />
      </div>
      {/* forgot logo */}
      <div>
        <div className='Forgot-main-div' >
          <Link to="/Forgot">
            <img className='cutnova-logo' src={icon} alt='icon' />
          </Link>
        </div>

        <div className='Rectangle-logo-div'>
          <img className='Rectangle-logo' src={Rectangle} alt=' Rectangle' />
        </div>

        <div className='Forgot-your-password-div' >
          <h5>FORGOT YOUR PASSWORD</h5>
        </div>
      </div>

      <div className='forgot-card-div'>
        <div className='register-email-div'>Enter your registered email below to receive
          password reset instruction
        </div>
        <div className='forgot-last-button-div'>
          <input className='forgot-input-page' type='text' placeholder='Jonathansmth@gmail.com'></input>
        </div>
        <div className='forgot-last-button-div'>
          <button className='create-account-button'>
            Send Verification Code
          </button>
        </div>



      </div>


      <div className='forgot-remember-div'>
        <p>Remember password?Sign in</p>
      </div>

    </div>

  )
}

export default Forgot