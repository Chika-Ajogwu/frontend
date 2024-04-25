import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="decriptionbox-nav-box">Description</div>
        <div className="decriptionbox-nav-box fade">Reveiws (122)</div>
      </div>

      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that facilitates
            buying and selling of products or services over the internet and
            serves as a virtual merketplace where business and individuals 
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce 
            websires have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
        </p>

        <p>E-commerce websites typically displays products or services and detailed descriptions, images, prices, and any available variables
            (e.g., colors). Each product usually has its own dedicated page
            with relevant information.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
