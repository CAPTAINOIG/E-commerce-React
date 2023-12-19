import React, { useContext, useState } from 'react';
import { GiCartwheel } from 'react-icons/gi';
// import { FiShoppingCart } from 'react-icons/fi'; // Updated icons
import { BsSun } from 'react-icons/bs';
import { BiSolidMoon } from 'react-icons/bi';
import { Link } from 'react-router-dom';
// import { AppContext } from './context/Dashboard';
import { AppContext } from '../context/Dashboard';
import Carty from './Carty';
import Searchinput from './Searchinput';
import image7 from '../assets/image7.jpg'
const Header = () => {
    // console.log(userCart);
    const { theme, setTheme } = useContext(AppContext)
    console.log(theme);
   

    

    return (
        <div className='p-4  ms-[-15px] flex justify-between  bg-white fixed top-0 w-full font-bold font-serif'>
            <Link to="/" className='flex items-center gap-1'>
                
                <img src={image7} alt="" className='h-10 object-cover rounded-md' />
                <span className='font-bold text-xl text-pink-600 '>captain</span>
            </Link>
            <Searchinput/>
            <div className='flex'>
                <div className='flex lg:me-5 font-bold font-serif lg:gap-2 mt-3'>
                    <span className='text-pink-900 dark:text-gray-900'>Captainbnb your home </span>
                    <div className='mt-1'>
                        {
                            theme === 'dark' ?
                                <BiSolidMoon id='moon' size={17} className='cursor-pointer' onClick={() => setTheme("light")} /> :
                                <BsSun id='moon' size={17} className='cursor-pointer' onClick={() => setTheme("dark")} />
                        }
                    </div>
                    
                    <Carty/>
                </div>
            </div>
        </div>
    )
}

export default Header