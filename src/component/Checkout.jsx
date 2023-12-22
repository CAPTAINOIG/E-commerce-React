import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Shopheader from './Shopheader';
import Shopfooter from './Shopfooter';



const Checkout = () => {
    const store = useSelector((state) => state.counterReducer.cart);
    //   console.log(store);

    const [cartQuantity, setCartQuantity] = useState("")

    useEffect(() => {
        const updatedCartQuantity = store.reduce((total, store) => total + store.cartQuantity * store.price, 0);
        console.log(updatedCartQuantity);
        localStorage.setItem('amount', JSON.stringify(updatedCartQuantity))
        setCartQuantity(updatedCartQuantity)
    }, [store]);
    return (
        <>
        
       
      
            <div className='border bg-pink-700 text-white p-5  lg:ms-[70%] ms-5 text-sm rounded-md mt-20 text-center lg:w-[30%] w-[90%]'>
                <p className=''>CART SUMMARY</p>
                <div className='flex lg:gap-[60%] gap-[60%]'>
                <span className=''>Sub Total</span>
                <span className=''>${cartQuantity}</span>
                </div>
                <div className='bg-white p-2 mt-2 rounded w-[100%] font-bold'>
                <Link className='bg-white text-gray-700 w-[100%]' to="/paystack">CHECKOUT</Link>
                
                </div>
                </div>
                
            

        </>

    )
}

export default Checkout