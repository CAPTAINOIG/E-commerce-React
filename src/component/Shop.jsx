import React from 'react'
import { shopping } from '../data/Shopping'
import { useNavigate } from 'react-router-dom';
import Header from './Header';


const Shop = () => {
  let navigate = useNavigate()
  const productDetail = (e) => {
    navigate('/details');
    localStorage.setItem('productdetail', JSON.stringify(e));
  };

  return (
    <>
    <Header/>
    <h1 className='text-center text-2xl my-5 mt-28 text-white font-semibold'>FASHION CATEGORY</h1>
    <div className='grid lg:grid-cols-5 grid-cols-1 gap-4 lg:p-0 p-5'>
    {shopping.map((item, i) => (
      <div onClick={()=> productDetail(item)} className='bg-white rounded-lg lg:p-2 p-5 shadow-md cursor-pointer' key={i}>
        <img src={item.photo} alt={item.title} className='w-40 h-40 object-cover rounded-md mx-auto' />
        <h1 className='text-xl font-semibold mt-4'>{item.title}</h1>
        <p className='text-gray-600 mt-2'>{item.categories}</p>
        <p className='text-gray-700 mt-2'>{item.summaries}</p>
        <p className='text-green-600 font-semibold mt-2'>${item.price}</p>
        </div>
        ))}
        </div>
        
        </>
  )
}

export default Shop