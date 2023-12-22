import React, { useEffect, useState } from 'react';
import PaystackPop from '@paystack/inline-js';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';


const Paystack = () => {
    // let newPaystack = JSON.parse(localStorage.getItem("luckyCart"));
    // console.log(newPaystack);


    const newPaystack = useSelector((state) => state.counterReducer.cart);
    //   console.log(store);

    const [cartQuantity, setCartQuantity] = useState("")

    useEffect(() => {
        const updatedCartQuantity = newPaystack.reduce((total, newPaystack) => total + newPaystack.cartQuantity * newPaystack.price, 0);
        console.log(updatedCartQuantity);
        setCartQuantity(updatedCartQuantity)
    }, [newPaystack]);

    const [email, setEmail] = useState("");
    const [amount, setAmount] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const payWithPayStack = (e) => {
        const publicKey = import.meta.env.VITE_APP_PAYSTACK_KEY;
        if (email === "" || firstName === "" || lastName === "") {
            Swal.fire('Error', 'All input fields are required', 'error');
        } else {
            e.preventDefault();
            const paystack = new PaystackPop();
            paystack.newTransaction({
                key: publicKey,
                amount: newPaystack * 100,
                email,
                firstName,
                lastName,
                onSuccess(transaction) {
                    let message = `Payment Complete! Reference ${transaction.reference}`;
                    Swal.fire('Success', message, 'success');
                    setEmail("");
                    setAmount("");
                    setFirstName("");
                    setLastName("");
                },
                oncancel() {
                    Swal.fire('Cancelled', 'You have cancelled the transaction', 'info');
                }
            });
        }
    };

    return (
        <>
        <div className="continer mx-auto">
        <div className="flex justify-center">
          <div className="w-full lg:w-2/3 mt-20">
            <div className="bg-pink-700 p-4 rounded-t-lg">
              <h3 className="text-white text-center">Make Payment</h3>
            </div>
            <div className="mt-8">
              <div className="bg-white shadow-md rounded-lg p-8">
                <form id="paymentForm">
                  <div className="mb-4">
                    <label htmlFor="email" className="block">Email Address</label>
                    <input
                      type="email"
                      id="email-address"
                      className="w-full border-gray-300 border rounded-md p-2"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="amount" className="block">Amount</label>
                    <input
                      type="tel"
                      id="amount"
                      placeholder={`${cartQuantity}`}
                      disabled
                      className="w-full border-gray-300 border rounded-md p-2"
                      value={amount}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="first-name" className="block">First Name</label>
                    <input
                      type="text"
                      id="first-name"
                      className="w-full border-gray-300 border rounded-md p-2"
                      onChange={(e) => setFirstName(e.target.value)}
                      value={firstName}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="last-name" className="block">Last Name</label>
                    <input
                      type="text"
                      id="last-name"
                      className="w-full border-gray-300 border rounded-md p-2"
                      onChange={(e) => setLastName(e.target.value)}
                      value={lastName}
                    />
                  </div>
                  <button
                    className="bg-pink-700 text-white w-full py-2 rounded-md hover:bg-orange-600"
                    type="submit"
                    onClick={payWithPayStack}
                  >
                    PAY
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
        </>
    
    )
};


export default Paystack