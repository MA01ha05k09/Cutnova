import React from 'react'
import salon from "../Images/salon 2.png"
import hairdryer from "../Images/hairdryer 2.png"
import hairstraightener from "../Images/hair-straightener 2.png"
import facial from "../Images/facial-treatment (1) 2.png"
import chair from "../Images/chair 2.png"
import "../style/Create.css"

function HeaderImages() {
  return (
    <div>
         {/* top-image-section */}
      <div className='top-image-section-div'>
        {/* img-1 */}
        <div className='img-1-salon '>
          <img className=' hading-img' src={salon} alt='salon' />
        </div>
        {/* img-2 */}
        <div className='img-2-hairstraightener ' >
          <img className='hading-img' src={hairstraightener} alt='hairstraightener' />
        </div>
        {/* img-3 */}
        <div className='img-3-chair '>
          <img className='hading-img' src={chair} alt='chair' />
        </div>
        {/* img-4 */}
        <div className='img-4-facial '>
          <img className='hading-img' src={facial} alt=' facial' />
        </div>
        {/* img-5 */}
        <div className='img-5-hairdryer '>
          <img className='hading-img' src={hairdryer} alt='hairdryer' />
        </div>
      </div>
    </div>
  )
}

export default HeaderImages