import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, remove } from '../Redux/counterSlice'; 
import cart from '../assets/cart.webp'
import {CiCircleRemove} from 'react-icons/ci'
import Checkout from './Checkout';


const Usercart = () => {
    const dispatch = useDispatch();
    const shoppingCart = useSelector((state)=> state.counterReducer.cart);
    console.log(shoppingCart);



    // const [cartQuantity, setCartQuantity] = useState('')
    
    // reduce is being utilized to calculate the total quantity of items in the cart.

    // let newPrice = shoppingCart.price * shoppingCart.cartQuantity
    // console.log(newPrice);

    const handleIncrement = (item) => {
     dispatch(increment(item.id))
    };

    const handleDecrement = (item) => {
    dispatch(decrement(item.id))
    };

    const handleRemove = (index) => {
       alert('Are You Sure You want to Remove?')
    dispatch(remove(index))
    };

    // useEffect(() => {
    //     const updatedCartQuantity = shoppingCart.reduce((total, shoppingCart) => total + shoppingCart.cartQuantity, 0);
    //     console.log(updatedCartQuantity);
    //     setCartQuantity(updatedCartQuantity)
    // }, [shoppingCart]);
    // Assuming shoppingCart is your array of items in the cart

// Calculate total cart quantity
// const totalCartQuantity = shoppingCart.reduce((total, cartItem) => total + cartItem.cartQuantity, 0);

// // Set the total cart quantity in your state
// setCartQuantity(totalCartQuantity);


    return (
        <div className="container mx-auto px-4">
        <div className='grid grid-cols-2'>
        <Checkout/>
        </div>
        <h2 className="text-3xl font-bold mb-4">Your Cart</h2>
        {shoppingCart.length > 0 ? (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
                {shoppingCart.map((item, index) => (
                    <li key={index} className="border relative rounded-lg overflow-hidden shadow-lg">
                        <img src={item.photo} alt={item.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h1 className="text-xl font-semibold mb-2">{item.title}</h1>
                            <p className="text-green-600 font-semibold">Price: ${item.price}</p>
                            <p> {item.price}* {item.cartQuantity} items</p>
                            <div className='flex'>
                            <p>Subtotal: ${item.price * item.cartQuantity}</p>
                            <button onClick={() => handleRemove(index)} className="rounded-md"><CiCircleRemove size={30} className='absolute lg:mt-[-105%] lg:ms-[48%] mt-[-90%] ms-[54%] text-white bg-red-500 rounded-full font-bolder'/></button>
                            </div>
                            <div className="flex justify-between mt-4">
                                <button onClick={() => handleIncrement(item)} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mr-2">+</button>
                                {item.cartQuantity}
                                <button onClick={() => handleDecrement(item)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">-</button>
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
