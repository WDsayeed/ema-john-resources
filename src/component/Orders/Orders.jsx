import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItems/ReviewItem";
import "./Order.css";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCardAlt } from '@fortawesome/free-solid-svg-icons'

const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);
  const handleRemoveCart = (id) => {
    console.log(id);
    const remainig = cart.filter((product) => product.id !== id);
    setCart(remainig);
    removeFromDb(id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveCart={handleRemoveCart}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link className="proceed-link" to='/proceed'>
          <button className="btn-proceed"> <span>Proceed Checkout</span>
          <FontAwesomeIcon icon={faCreditCardAlt} />
          </button>
         

          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
