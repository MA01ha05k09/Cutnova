import React from 'react'
import "../style/Create.css"
import icon from "../Images/logo.png"
import salon from "../Images/salon 2.png"
import hairdryer from "../Images/hairdryer 2.png"
import hairstraightener from "../Images/hair-straightener 2.png"
import facial from "../Images/facial-treatment (1) 2.png"
import chair from "../Images/chair 2.png"
import google from "../Images/google logo.png"
import facebook from "../Images/facebook.webp"
import { Link } from 'react-router-dom'
import HeaderImages from '../components/headerImages'
const Create = () => {
  return (

    <div className='ragitra-page'>
      <div>
        <HeaderImages/>
      </div>
     
      {/* creats-logo */}
      <div>
        <div className='create-main-div'>
          <Link to="/Create">
            <img className='cutnova-logo' src={icon} alt='icon' />
          </Link>
        </div>

        <div className='create-your-account-div' >
          <h5>CREATE YOUR ACCOUNT</h5>
        </div>
      </div>

      <div>
        <div className='input-div-1'>
          <div >
            <input className='create-input-page' type='text' placeholder='User name'></input>
          </div>

          <div>
            <input className='create-input-page' type='text' placeholder='Email'></input>

          </div>
          <div>
            <input className='create-input-page' type='text' placeholder='Password'></input>

          </div>
          <div>
            <input className='create-input-page' type='text' placeholder='Mobile Number'></input>
          </div>


          <div className='signed-div' >
            <input type="checkbox" id="keepSignedIn" name="keepSignedIn" />
            <label for="keepSignedIn">Keep me signed in:</label>

          </div>

          <div className='create-account-div'>
            <button className='create-account-button'>Create Account</button>
          </div>
        </div>
      </div>

      <div className='create-hr-or-sign-in-with-Parent'>
        <div className='create-hr-div'> <hr /> </div>
        <div className='create-or-sign-in-with'> Or sign in with </div>
        <div className='create-hr-div'> <hr /> </div>
      </div>
      <div >
        <div className='create-last-div' >
          <div className='create-last-button'>
           
            <div>
              <img className='create-last-logo' src={google} alt=' google' />
            </div>
            <div>Google</div>
          </div>
          <div className='create-last-button'>
         < div>
              <img className='create-last-logo' src={facebook} alt=' facebook' />
            </div>
            <div>Facebook</div>
          </div>

        </div>
<Link className='link-tag' to = "/login">
        <div className='already-div'>
          <p>Already have an account? Sign In</p>
        </div>
</Link>

      </div>
    </div>
  )
}

export default Create
