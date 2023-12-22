import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';



const Checkout = () => {
    const store = useSelector((state) => state.counterReducer.cart);
    //   console.log(store);

    const [cartQuantity, setCartQuantity] = useState("")

    useEffect(() => {
        const updatedCartQuantity = store.reduce((total, store) => total + store.cartQuantity * store.price, 0);
        console.log(updatedCartQuantity);
        setCartQuantity(updatedCartQuantity)
    }, [store]);
    return (
        <>

            <div className='border bg-pink-800 text-white p-5 lg:ms-[150%] text-sm rounded-md mt-5 text-center lg:w-[50%] w-[100%]'>
                <p className=''>CART SUMMARY</p>
                <div className='flex gap-20'>
                <span className=''>Sub Total</span>
                <span className=''>${cartQuantity}</span>
                </div>
                <div className='bg-white w-[100%] font-bold'>
                <Link className='bg-white text-gray-700 w-[100%]' to="/paystack">CHECKOUT</Link>
                </div>
            </div>


        </>

    )
}

export default Checkout