import React from 'react';
import { collection } from '../data/Data';
import { useNavigate } from 'react-router-dom';
import Footer from '../FooterComponent/Footer';


const Product = () => {

  let navigate = useNavigate()

  const productDetail = (e) => {
    navigate('/details');
    localStorage.setItem('productdetail', JSON.stringify(e));
  };

  return (
      <>
      <h1 className='text-center text-2xl text-white my-5'>MUSIC CATEGORY</h1>
      <div className='grid lg:grid-cols-5 grid-cols-1 gap-4 lg:p-0 p-5'>
      {collection.map((item, i) => (
        <div onClick={() => productDetail(item)} className='bg-white text-sm rounded-lg p-5 shadow-md lg:p-4  cursor-pointer' key={i}>
          <img src={item.photo} alt={item.title} className='w-40 h-40 object-cover rounded-md mx-auto' />
          <h1 className='text-xl font-semibold mt-4'>{item.title}</h1>
          <p className='text-gray-600 mt-2'>{item.categories}</p>
          <p className='text-gray-700 mt-2'>{item.summaries}</p>
          <p className='text-green-600 font-semibold mt-2'>${item.price}</p>
          </div>
          ))}
          </div>
          <Footer/>
          </>
  );
};

export default Product;
