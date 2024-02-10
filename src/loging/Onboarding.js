import React from 'react'
import "../style/Onboarding.css"
import icon from "../Images/logo.png"
import button from "../Images/button.png"
import { Link } from 'react-router-dom'
const Onboarding = () => {
    return (
        <div className='main-div'>
            {/* onboarding-screen */}
            <div className='cutnova_image'>
                <img src={icon} alt='icon'></img>
            </div>
            <div className='cutnova-class'>
            {/* text-1 */}
            <div className='cutnova-div'>
                <h2>CUTNOVA - The Ultimate Business Solution for Service Providers</h2>
            </div>
            {/* text-2 */}
            <div className='manage-div'>
                <p>Manage your Social media, Appointments, and Payments with ease</p>
            </div>
            {/* button */}
            <Link to="/Create">
            <div className='gerstarted-div'>
                <button className='button-div'>Ger started</button>
            </div>
            </Link>
            </div>
        </div>

    )
}

export default Onboarding