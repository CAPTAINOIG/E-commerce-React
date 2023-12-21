import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../Redux/counterSlice'; 
import cart from '../assets/cart.webp'

const Usercart = () => {
    const dispatch = useDispatch();
    const shoppingCart = useSelector((state)=> state.counterReducer.cart);
    console.log(shoppingCart);



    const [cartQuantity, setCartQuantity] = useState(0)
    
    // reduce is being utilized to calculate the total quantity of items in the cart.

    // let newPrice = shoppingCart.price * shoppingCart.cartQuantity
    // console.log(newPrice);

    const handleIncrement = (item) => {
        // console.log(item);
        // const productItem = shoppingCart.find((cartItem) => cartItem.id === item.id)
        // console.log(productItem);

        // if(productItem){
            dispatch(increment(item.id))
    //     } else {
    //         console.log('No matching item found in the cart.');
    //     }
    };

    const handleDecrement = (item) => {
        // const productItem = shoppingCart.find((cartItem) => cartItem.id === item.id)
        // if(productItem){
            dispatch(decrement(item.id))
        // } else {
        //     console.log('No matching item found in the cart.');
        // }
    };


    // useEffect(() => {
    //     const updatedCartQuantity = shoppingCart.reduce((total, cartItem) => total + cartItem.cartQuantity, 0);
    //     setCartQuantity(updatedCartQuantity);
    // }, [shoppingCart]);
    // Assuming shoppingCart is your array of items in the cart

// Calculate total cart quantity
// const totalCartQuantity = shoppingCart.reduce((total, cartItem) => total + cartItem.cartQuantity, 0);

// // Set the total cart quantity in your state
// setCartQuantity(totalCartQuantity);


    return (
        <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Your Cart</h2>
        {shoppingCart.length > 0 ? (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {shoppingCart.map((item, index) => (
                    <li key={index} className="border rounded-lg overflow-hidden shadow-lg">
                        <img src={item.photo} alt={item.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h1 className="text-xl font-semibold mb-2">{item.title}</h1>
                            <p className="text-green-600 font-semibold">Price: ${item.price}</p>
                            <p> {item.price}* {cartQuantity} items</p>
                            <p>Subtotal: ${item.price * item.cartQuantity}</p>
                            <div className="flex justify-between mt-4">
                                <button onClick={() => handleIncrement(item)} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mr-2">Add</button>
                                {cartQuantity}
                                <button onClick={() => handleDecrement(item)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">Minus</button>
                            </div>
                        </div>
                    </li>
                ))} 
            </ul>
        ) : (
            <div className="text-center">
            <p className="text-xl">Your cart is empty</p>
            <img src={cart} alt="Empty Cart" className="w-40 h-40 mx-auto mt-6 animate-bounce" />
        </div>
        )}
    </div>
    );
};

export default Usercart;
