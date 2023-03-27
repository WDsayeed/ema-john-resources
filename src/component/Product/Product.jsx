import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
        // console.log(props)
        const {img, name, seller, ratings, price} = props.product
        const handleAddCart = props.handleAddCart
        
        return (
                <div className='product'>
                        <img src={img} alt="" />
                      <div className='product-details'>
                      <h4>{name}</h4>
                        <p>Price: ${price}</p>
                        <p>Manufacturer: {seller}</p>
                        <p>Rating: {ratings}</p>
                      </div>
                      <button onClick={()=> handleAddCart(props.product)} className='cart-btn'>
                        Add to Cart
                        <FontAwesomeIcon icon={faShoppingCart} />
                        </button>
                </div>
        );
};

export default Product;