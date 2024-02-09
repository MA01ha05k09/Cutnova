import React from 'react'
import "../style/firstpage.css"
import icon from "../Images/logo.png"
import { Link } from 'react-router-dom'
const Firstpage = () => {
  return (
    <div>
      <div class="main-div-for-first">
        <Link to="/onboard">
        <img src={icon} alt='icon' />
        </Link>
    </div>
    </div>
  )
}

export default Firstpage