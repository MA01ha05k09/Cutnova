import React from 'react'
import "../style/login.css"
import icon from "../Images/logo.png"
import google from "../Images/google logo.png"
import facebook from "../Images/facebook.webp"
import HeaderImages from '../components/headerImages'
import { Link } from 'react-router-dom'
const SignUp = () => {
    return (
        <div className='login-page'>
            <div>
                <HeaderImages />
            </div>
            <div>
                <div className='login-main-div' >
                    <Link to="/SignUp">
                        <img className='cutnova-logo' src={icon} alt='icon' />
                    </Link>
                </div>

                <div className='login-your-account-login-div' >
                    <h5>SING IN YOUR ACCOUNT</h5>
                </div>

                <div>
                    <div className='login-input-div'>
                        <div >
                            <input className='login-input-page' type='text' placeholder='User name,email or phone'></input>
                        </div>

                        <div>
                            <input className='login-input-page' type='text' placeholder='Password'></input>

                        </div>
                        <Link className='login' to="/forgot">
                       <div className='Forgot-Password-div'>
                        Forgot Password?
                       </div>
                       </Link>

                        <div className='login-account-div'>
                            <button className='login-account-button'>Sing in</button>
                        </div>

                    </div>

                </div>

                <div>
                    < div className='login-hr-or-sign-in-with-Parent'>
                        <div className='login-hr-div'> <hr /> </div>
                        <div className='login-or-sign-in-with'> Or sign in with </div>
                        <div className='login-hr-div'> <hr /> </div>
                    </div>
                </div>

                <div >
                    <div className='login-last-div' >
                        <div className='login-last-button'>

                            <div>
                                <img className='login-last-logo' src={google} alt=' google' />
                            </div>
                            <div>Google</div>
                        </div>
                        <div className='login-last-button'>
                            < div>
                                <img className='login-last-logo' src={facebook} alt=' facebook' />
                            </div>
                            <div>Facebook</div>
                        </div>
                    </div>
<Link className='link-tag'to ="/create">
                    <div className=' login-dont-div'>
                        <p>don't have an account? Sign In</p>
                    </div>
                    </Link> 
                </div>

            </div>


        </div>
    )
}

export default SignUp
