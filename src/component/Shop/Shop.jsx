import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
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

      useEffect( ()=>{
        const storedCart = getShoppingCart()
        const saveCart = []
        // get the id of storedCart
        for(const id in storedCart){
                // get product from product state by using id
                const addedProduct = products.find(product => product.id === id)
                if(addedProduct){
                        // set quantity
                        const quantity = storedCart[id]
                        addedProduct.quantity = quantity;
                        saveCart.push(addedProduct)
                }
        }
        setCart(saveCart)
      },[products])

        const handleAddCart = (product) =>{
                // console.log(cart,product)
                const newCart = [...cart, product]
                setCart(newCart)
                addToDb(product.id)
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
                                <Cart cart={cart}></Cart>
                        </div>
                </div>
        );
};

export default Shop;