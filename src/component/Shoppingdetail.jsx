import React, { useEffect, useState } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr'
import Shopheader from './Shopheader';
import Shopfooter from './Shopfooter';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increment } from '../Redux/counterSlice';


const Shoppingdetail = () => {
  const dispatch = useDispatch();
  const cartProduct = useSelector((state)=> state.counterReducer.cart);
  // console.log(cartProduct);

  let storage = JSON.parse(localStorage.getItem('productdetail'));
  // console.log(storage);
  
  const [storageData, setStorageData] = useState({});
  const [current, setCurrent] = useState(0); // Initialize current to 0 for the first image

  useEffect(() => {
      setStorageData(storage);
  }, []);

  const addCart = () => {
    alert('product added successfully')
    const productItem = cartProduct.find((item) => item.id === storage.id )
    if(productItem){
      dispatch(increment(productItem.id))
      // localStorage.setItem('item', JSON.stringify(productItem));
    } else{
      let newCart = {
        owner:storage.owner,
        title: storage.title,
        id: storage.id,
        price: storage.price,
        cartQuantity: 1,
        photo: storage.photo,
        photo2: storage.photo2,
        photo3: storage.photo3,
        photo4: storage.photo4,
        summaries: storage.summaries,
        categories: storage.categories,
      }
      dispatch(addToCart(newCart))
    }
  }

  const images = [storageData.photo, storageData.photo3, storageData.photo2, storageData.photo4];
  const length = images.length;


  // setCurrent((current + 1) % length):
// current represents the current index of the image being displayed.
// (current + 1) increments the index by 1 to move to the next image in the array.
// % length ensures that the index remains within the bounds of the images array. If current + 1 exceeds the length of the array, % length wraps the index back to 0, thus creating a loop or carousel effect. It restarts from the beginning of the array when reaching the end.
  const handleNext = () => {
      setCurrent((current + 1) % length); // Increment current or go back to 0 if at the end
  };


//   setCurrent(current === 0 ? length - 1 : current - 1):
// current represents the current index of the image being displayed.
// It checks if current is at the beginning of the array (index 0).
// If current is 0, indicating that the user is viewing the first image, setCurrent updates the index to length - 1, which is the index of the last image in the array, effectively looping back to the end when going backwards from the start.
// If current is not 0, it simply decrements the index by 1 (current - 1), moving to the previous image in the array.
  const handlePrevious = () => {
      setCurrent(current === 0 ? length - 1 : current - 1); // Decrement current or go to the last index if at 0
  };


  return (
    <>
    <Shopheader/>
    <div className='mt-[11%] grid lg:grid-cols-2 grid-cols-1'>
    <div className='lg:ms-[30%] ms-[10%] mt-20 lg:mt-10'>
    <img
    src={images[current]}
    alt=""
    className='rounded-lg shadow-lg relative'
    style={{ width: '300px', height: '300px' }}/>  
          <GrNext size={40} onClick={handleNext} className='absolute lg:mt-[-12%] mt-[-45%] ms-[72%] lg:ms-[20%] bg-pink-500 p-2 text-white rounded-full cursor-pointer' />
          <GrPrevious size={40} onClick={handlePrevious} className='absolute lg:mt-[-12%] mt-[-45%] ms-[-3%] lg:ms-[-1%] bg-pink-500 p-2  text-white rounded-full cursor-pointer' />
          </div>
          <div className='lg:ms-[10%] ms-10 mt-10'>
          <div className='text-xl font-semibold mt-2'>{storageData.title}</div>
          <div className='text-xl font-bold mt-2 text-pink-600'>{storageData.categories}</div>
          <div className='mt-2'>${storageData.price}</div>
          <div className='mt-2 text-sm'>{storageData.summaries}</div>
          <button className='bg-pink-600 lg:w-[50%] w-[89%] p-2 mt-10 text-white rounded font-bold' onClick={addCart}>ADD TO CART</button>
          </div>
         
          </div>
          <Shopfooter/>
          </>
          );
        };

export default Shoppingdetail;
