import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext'

const ProductDisplay = (props) => {
  const {product}=props;
  const {addToCart}=useContext(ShopContext)
  return (
    <div className='productdisplay'>
      <div className="productdisplay_left">
        <div className="productdisplay_img_list">
          <img src={product.img} alt="" />
          <img src={product.img} alt="" />
          <img src={product.img} alt="" />
          <img src={product.img} alt="" />
        </div>
        <div className="productdisplay_img">
          <img className='productdisplay_main_img' src={product.img} alt="" />
        </div>
      </div>
      <div className="productdisplay_right">
        <h1>{product.name}</h1>
        <div className="productdisplay_right_star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(143)</p>
        </div>
        <div className="productdisplay_right_prices">
          <div className="productdisplay_right_price_old">${product.old_price}</div>
          <div className="productdisplay_right_price_new">${product.new_price}</div>
        </div>
        <div className="productdisplay_right_description">
          Wear this lovely kurta set with dupatta from the company of Vaamsi Fashion to dazzle everyone with your amazing traditional appearance. Its attractive and modern designs for women have a beautiful polish. Both casual and professional attire can be worn with it. It is the ideal option for any situation. This women's kurta set is comfortable and lightweight against the skin. This suit set will give you a stylish appearance in every season because it is made of cotton and has a calming color.
        </div>
        <div className="productdisplay_right_size">
          <h1>Select Size</h1>
          <div className="productdisplay_right_sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>addToCart(product.id)}>ADD TO CART</button>
        <p className="productdisplay_right_category"><span>Category: </span>Women,T-Shirt, Crop Top</p>
        <p className="productdisplay_right_category"><span>Tags: </span>Modern,Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
