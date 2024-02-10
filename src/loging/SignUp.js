import React from 'react'
import "../style/SignUp.css"
import icon from "../Images/logo.png"
import { Link } from 'react-router-dom'
const SignUp = () => {
    return (
        <div className='sign-up-page'>
            <div>
                <div className='sign-up-main-div' >
                    <Link to="/SignUp">
                        <img src={icon} alt='icon' />
                    </Link>
                </div>

                <div className='create-your-account-signup-div' >
                    <h5>CREATE YOUR ACCOUNT</h5>
                </div>

                <div>
                    <div className='signup-input-div'>
                        <div >
                            <input className='signup-input-page' type='text' placeholder='User name'></input>
                        </div>

                        <div>
                            <input className='signup-input-page' type='text' placeholder='Email'></input>

                        </div>
                        <div>
                            <input className='signup-input-page' type='text' placeholder='Password'></input>

                        </div>
                        <div>
                            <input className='signup-input-page' type='text' placeholder='Mobile Number'></input>
                        </div>

                        <div className='signup-signed-div' >
                            <input type="checkbox" id="keepSignedIn" name="keepSignedIn" />
                            <label for="keepSignedIn">Keep me signed in:</label>

                        </div>

                        <div className='signup-create-account-div'>
                            <button className='signup-create-account-button'>Create Account</button>
                        </div>

                    </div>

                </div>

                <div>
                    <p> Or sign in with</p>
                </div>

                <div >
                    <div className='signup-last-div' >
                        <button className='signup-last-button'>Google</button>
                        <button className='signup-last-button'>Facebook</button>

                    </div>

                    <div className=' signup-already-div'>
          <p>Already have an account? Sign In</p>
        </div>

                </div>

            </div>


        </div>
    )
}

export default SignUp
