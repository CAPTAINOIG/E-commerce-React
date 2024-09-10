import React, { useEffect, useState } from 'react';
// import { GrNext, GrPrevious } from 'react-icons/gr'
import Shopheader from './Shopheader';
import Shopfooter from './Shopfooter';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increment } from '../Redux/counterSlice';
import Swal from 'sweetalert2'; // Import SweetAlert


const Shoppingdetail = () => {
  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => state.counterReducer.cart);
  console.log(cartProduct);

  let storage = JSON.parse(localStorage.getItem('productdetail'));
  // console.log(storage);

  const [storageData, setStorageData] = useState({});
  const [mainImage, setMainImage] = useState('')

  useEffect(() => {
    setStorageData(storage);
  }, []);

  
const addCart = () => {
  Swal.fire({ // Use SweetAlert instead of alert
    icon: 'success',
    title: 'Product added successfully',
    showConfirmButton: false,
    timer: 1500 // Automatically close after 1.5 seconds
  });

  const productItem = cartProduct.find((item) => item.id === storage.id);

  if (productItem) {
    console.log(productItem);
    if (productItem.cartQuantity < productItem.availableQuantity) {
      console.log('Incrementing product quantity');
      dispatch(increment(productItem.id));
    } else {
      console.log('Cannot add more than available stock');
      // Optionally, show a toast notification or alert here
      Swal.fire({ // Use SweetAlert instead of alert
        icon: 'error',
        title: 'Cannot add more than available stock',
        showConfirmButton: false,
        timer: 1500 // Automatically close after 1.5 seconds
      });
    }
  }
  else {
    let newCart = {
      owner: storage.owner,
      title: storage.title,
      id: storage.id,
      price: storage.price,
      cartQuantity: 1,
      availableQuantity:storage.quantity,
      photo: storage.photo,
      photo2: storage.photo2,
      photo3: storage.photo3,
      photo4: storage.photo4,
      summaries: storage.summaries,
      categories: storage.categories,
    };
    // console.log(newCart);
    dispatch(addToCart(newCart));
    // for instance, lets say you want to send the data to the backend, you can call your api here. eg
    // fetch('/api/cart/add', store {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newCart),
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to add product to cart');
//         }
//         return response.json();
//       })
// Note, your second parameter will be your store. then you can the post it to the database.
  }
};


  const images = [storageData.photo, storageData.photo3, storageData.photo2, storageData.photo4];
  // console.log(images);
  const length = images.length;


  // setCurrent((current + 1) % length):
  // current represents the current index of the image being displayed.
  // (current + 1) increments the index by 1 to move to the next image in the array.
  // % length ensures that the index remains within the bounds of the images array. If current + 1 exceeds the length of the array, % length wraps the index back to 0, thus creating a loop or carousel effect. It restarts from the beginning of the array when reaching the end.
  // const handleNext = () => {
  //   setCurrent((current + 1) % length); // Increment current or go back to 0 if at the end
  // };


  //   setCurrent(current === 0 ? length - 1 : current - 1):
  // current represents the current index of the image being displayed.
  // It checks if current is at the beginning of the array (index 0).
  // If current is 0, indicating that the user is viewing the first image, setCurrent updates the index to length - 1, which is the index of the last image in the array, effectively looping back to the end when going backwards from the start.
  // If current is not 0, it simply decrements the index by 1 (current - 1), moving to the previous image in the array.
  // const handlePrevious = () => {
  //   setCurrent(current === 0 ? length - 1 : current - 1); // Decrement current or go to the last index if at 0
  // };

  const handleImageClick =(newImage)=>{
    console.log(newImage);
    setMainImage(newImage)
  }

  return (
    <>
      <Shopheader />
      <div className='mt-[11%] grid lg:grid-cols-2 grid-cols-1 lg:px-20'>
        <div className="px-5 lg:ms-[10%] ms-[3%]">
        {
            mainImage ?
            <img className="w-[355px] h-[200px] my-5 lg:mt-0 mt-16" src={mainImage} alt="Main" />
            :
            <img
            className="w-[355px] h-[200px] my-5 lg:mt-0 mt-16"
            src={storageData.photo}
            alt="Thumbnail"
          />
        }
        <div className="flex gap-3">
          <img
            className="cursor-pointer w-[80px] h-[60px]"
            src={storageData.photo2}
            alt="Thumbnail"
            onClick={() => handleImageClick(storageData.photo2)}
          />
          <img
            className="cursor-pointer w-[80px] h-[60px]"
            src={storageData.photo3}
            alt="Thumbnail 1"
            onClick={() => handleImageClick(storageData.photo3)}
          />
          <img
            className="cursor-pointer w-[80px] h-[60px]"
            src={storageData.photo4}
            alt="Thumbnail 3"
            onClick={() => handleImageClick(storageData.photo4)}
          />
          <img
            className="cursor-pointer w-[80px] h-[60px]"
            src={storageData.photo}
            alt="Thumbnail 4"
            onClick={() => handleImageClick(storageData.photo)}
          />
        </div>
      </div>  
        <div className='lg:ms-[10%] ms-10 mt-10'>
          <div className='text-xl font-semibold mt-2'>{storageData.title}</div>
          <div className='text-xl font-bold mt-2 text-pink-600'>{storageData.categories}</div>
          <div className='mt-2'>${storageData.price}</div>
          <div className='mt-2 text-sm'>{storageData.summaries}</div>
          <button className='bg-pink-600 lg:w-[50%] w-[89%] p-2 mt-10 text-white rounded font-bold' onClick={addCart}>ADD TO CART</button>
        </div>
      </div>
      <Shopfooter />
    </>
  );
};

export default Shoppingdetail;
