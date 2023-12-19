import React, { useEffect, useState } from 'react';


const Usercart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || []; // Ensure cartItems is an array even if it's empty
    console.log(cartItems.length);

    const [cartItem, setCartItem] = useState([])
    
    useEffect(() => {
        
        setCartItem(cartItems.length)
    }, [])
    

    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.length > 0 ? (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            <div>{item.title}</div>
                            <div>Price: {item.price}</div>
                            <div>Quantity: {item.quantity}</div>
                            {/* Display other item details here */}
                            </li>
                            ))}
                            <h1>{cartItem}</h1>
                </ul>
            ) : (
                <p>Your cart is empty</p>
            )}
        </div>
    );
};

export default Usercart;
