import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../Redux/counterSlice'; // Import the increment and reset actions

const Usercart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartId = JSON.parse(localStorage.getItem('cartId'));

    const dispatch = useDispatch();
    const counter = useSelector((state)=> state.counterReducer.count);
    console.log(counter);

    const [cartItem, setCartItem] = useState(0);
    
    useEffect(() => {
        setCartItem(cartItems.length);
    }, [cartItems.length]);
    
    const handleIncrement = (index) => {
        console.log(index, cartId);
        const foundCartItem = cartItems.find((item) => item.id === index);
    
        if (foundCartItem) {
            dispatch(increment());
        } else {
            console.log('No matching item found in the cart.');
        }
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    // const handleReset = () => {
    //     dispatch(reset()); // Dispatch the reset action
    // };

    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.length > 0 ? (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            <img src={item.photo} alt={item.title} className='w-40 h-40 object-cover rounded-md mx-auto hover:scale-110'  style={{ width: '300px', height: '300px' }} />
                            <h1 className='text-xl font-semibold mt-4'>{item.title}</h1>
                            <p className='text-gray-600 mt-2'>{item.categories}</p>
                            <p className='text-gray-700 mt-2'>{item.summaries}</p>
                            <p className='text-green-600 font-semibold mt-2'>${item.price}</p>
                            <button onClick={ () => handleIncrement(item.id)}>add</button>
                            <button onClick={handleDecrement}>minus</button>
                            {counter}
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
