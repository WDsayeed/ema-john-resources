import React from "react";
import "./review.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product,handleRemoveCart }) => {
  const { id, img, name, quantity, price } = product;
  return (
    <div className="review-items">
      <img src={img} alt="" />
      <div className="review-details">
        <p className="review-title">{name}</p>
        <p>Price: $<span className="price-color">{price}</span></p>
        <p>Product Quantity:<span className="price-color">{quantity}</span></p>
      </div>
      <button onClick={()=> handleRemoveCart(id)} className="delete-btn">
        <FontAwesomeIcon className="delete-icon" icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default ReviewItem;
