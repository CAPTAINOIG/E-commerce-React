import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, remove } from '../Redux/counterSlice'; 
import cart from '../assets/cart.webp'
import {CiCircleRemove} from 'react-icons/ci'
import Checkout from './Checkout';
import Shopfooter from './Shopfooter';
import Shopheader from './Shopheader';
import Swal from 'sweetalert2'; // Import SweetAlert


const Usercart = () => {
    const dispatch = useDispatch();
    const shoppingCart = useSelector((state)=> state.counterReducer.cart);
    console.log(shoppingCart);




    const [message, setMessage] = useState('')
    
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
        Swal.fire({
          title: 'Do you really want to remove this item from cart?',
          showCancelButton: true,
          confirmButtonText: 'Yes, remove it!',
          cancelButtonText: 'No, keep it',
          icon: 'warning'
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(remove(index));
            setMessage('Product was removed from cart');
            Swal.fire(
              'Removed!',
              'Your item has been removed from the cart.',
              'success'
            );
            setTimeout(() => {
                setMessage('');
            }, 4000);
        }
        
          
          else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'Cancelled',
              'Your item is safe :)',
              'error'
            );
          }
        });
      };
    
   


    return (
        <div>
        <Shopheader />
        <div className="container mx-auto">
        <div className='absolute font-bolder text-pink-700 lg:ms-[42%] mt-[-63%] ms-20 text-sm lg:mt-[-13%]'>{message}</div>
        {shoppingCart.length > 0 ? (
            <>
            <Checkout />
            
            <h2 className="text-3xl font-bold mb-4 lg:px-0 px-4">Your Cart ({shoppingCart.length})</h2>
            
            <ul className="grid gap-6 sm:grid-cols-2 lg:px-0 px-4 lg:grid-cols-3 xl:grid-cols-4">
                        {shoppingCart.map((item, index) => (
                            <li key={index} className="border relative rounded-lg overflow-hidden shadow-lg">
                                <img src={item.photo} alt={item.title} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h1 className="text-xl font-semibold mb-2">{item.title}</h1>
                                    <p className="text-green-600 font-semibold">Price: ${item.price}</p>
                                    <p> ${item.price} * {item.cartQuantity} items</p>
                                    <div className='flex'>
                                        <p>Subtotal: ${item.price * item.cartQuantity}</p>
                                        <button onClick={() => handleRemove(index)} className="rounded-md">
                                            <CiCircleRemove size={30} className='absolute lg:mt-[-105%] lg:ms-[48%] mt-[-90%] ms-[54%] text-white bg-red-500 rounded-full font-bolder' />
                                        </button>
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
                </>
            ) : (
                <div className="text-center">
                    <p className="text-xl lg:mt-[19%] mt-[81%]">Your cart is empty</p>
                    <img src={cart} alt="Empty Cart" className="w-40 h-40 mx-auto mt-6 animate-bounce" />
                </div>
            )}
        </div>
        <div className='text-center bg-pink-600 text-white font-semibold p-2 lg:mt-[10%] mt-28'>DEVELOPED AND DESIGNED BY CAPTAIN OIG</div>
    </div>
            );
};

export default Usercart;
