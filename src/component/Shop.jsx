import React, { useEffect, useState } from 'react';
import { shopping } from '../data/Shopping';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
// import Sort from './SortComponent/Sort';
// import Pagination from './Pagination'; // Import the Pagination component
import CustomPagination from './CustomPagination';

// <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
const Shop = () => {
  let navigate = useNavigate();
  const [shuffledShopping, setShuffledShopping] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // Keep track of the current page

  const itemsPerPage = 10; // Number of items per page

  useEffect(() => {
    // Shuffling the shopping array when the component mounts or when shopping changes
    const shuffleArray = (array) => {
      let currentIndex = array.length, temporaryValue, randomIndex;

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    };

    const shuffledArray = shuffleArray([...shopping]);
    setShuffledShopping(shuffledArray);
  }, [shopping]);

  const productDetail = (item) => {
    navigate('/details');
    localStorage.setItem('productdetail', JSON.stringify(item));
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Calculate the start and end index for the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = shuffledShopping.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const pageCount = Math.ceil(shuffledShopping.length / itemsPerPage);

  return (
    <>
      <Header />

     
      
      <CustomPagination
        pageCount={pageCount}
        onPageChange={handlePageChange}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={shuffledShopping.length}
      />
    
      <h1 className='text-center text-2xl my-5 mt-20 text-white font-semibold'>
        FASHION CATEGORY
      </h1>
      <div className='grid lg:grid-cols-5 grid-cols-1 gap-4 dark:text-gray-600 text-pink-600 lg:p-0 p-5'>
        {currentItems.map((item, i) => (
          <div
            onClick={() => productDetail(item)}
            className='bg-white text-sm rounded-lg lg:p-2 p-5 shadow-md cursor-pointer'
            key={i}
          >
            <img src={item.photo} alt={item.title} className='w-40 h-40 object-cover rounded-md mx-auto hover:scale-110' />
            <h1 className='text-xl font-semibold mt-4'>{item.title}</h1>
            <p className='mt-2'>{item.categories}</p>
            <p className=' mt-2'>{item.summaries}</p>
            <p className='text-green-600 font-semibold mt-2'>${item.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Shop;
