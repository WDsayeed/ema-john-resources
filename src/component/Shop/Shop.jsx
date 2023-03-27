import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './shop.css'
const Shop = () => {
        const [products, setProducts] = useState([])
        const [cart, setCart] = useState([])
        useEffect( ()=>{
                fetch('products.json')
                .then(res=> res.json())
                .then(data=> setProducts(data))
        },[])

        const handleAddCart = (product) =>{
                // console.log(cart,product)
                const newCart = [...cart, product]
                setCart(newCart)
        }
        return (
                <div className='shop-container'>
                        <div className="product-container">
                               {
                                products.map(product => <Product 
                                        key = {product.id}
                                        product={product}
                                        handleAddCart={handleAddCart}
                                        ></Product>)
                               }
                        </div>
                        <div className="cart-container">
                                <h2>Order Summary</h2>
                                <p>Selected Items: {cart.length}</p>
                        </div>
                </div>
        );
};

export default Shop;