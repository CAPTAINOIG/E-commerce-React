import React, { useContext, useState } from 'react';
import { GiCartwheel } from 'react-icons/gi';

import { Link } from 'react-router-dom';
import Carty from './Carty';


const Shopheader = () => {

    return (
        <div className='p-4 z-20 flex justify-between bg-pink-600 text-white fixed top-0 w-full font-bold font-serif'>
            <Link to="/" className='flex items-center gap-1'>
                <GiCartwheel size={25} className='' />
                <span className='font-bold text-xl'>captain</span>
            </Link>
            <div className='flex'>
                <div className='flex lg:me-5 font-bold font-serif lg:gap-2 mt-3'>
                    <span className=''>Captainbnb your home </span>
                    
                    <Carty/>
                </div>
            </div>
        </div>
    )
}

export default Shopheader