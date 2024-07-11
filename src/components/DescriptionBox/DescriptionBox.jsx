import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox_navigator">
        <div className="descriptionbox_nav_box">Description</div>
        <div className="descriptionbox_nav_box fade">Reviews(143)</div>
      </div>
      <div className="descriptionbox_description">
        <p>An e-commerce website, short for electronic commerce website, is an online platform that facilitates the buying and selling of goods and services over the internet. E-commerce websites allow businesses to reach a global audience and enable customers to browse and purchase products or services online.</p>
        <p>E-commerce websites can take various forms, such as business-to-consumer (B2C), business-to-business (B2B), or consumer-to-consumer (C2C) platforms. Examples of well-known e-commerce websites include Amazon, eBay, Shopify, and many others.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
