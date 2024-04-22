import React, { useEffect, useState } from 'react';
import { shopping } from '../data/Shopping';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import CustomPagination from './CustomPagination';
import Sort from './SortComponent/Sort';

const Shop = () => {
  let navigate = useNavigate();
  const [shuffledShopping, setShuffledShopping] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentItems, setCurrentItems] = useState([]);
  const itemsPerPage = 10;

  useEffect(() => {
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

  // Apply filters when searchQuery changes
  useEffect(() => {
    const filteredProducts = shuffledShopping.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setCurrentItems(filteredProducts);
  }, [searchQuery, shuffledShopping]);

  const productDetail = (item) => {
    navigate('/details');
    localStorage.setItem('productdetail', JSON.stringify(item));
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = currentItems.slice(startIndex, endIndex);
  const pageCount = Math.ceil(currentItems.length / itemsPerPage);

  return (
    <>
      <Header />
      <input className='lg:mt-[8%] mt-[20%] w-[100%] lg:ms-[35%] lg:w-[30%] md:w-[70%] md:ms-[15%] md:mt-[10%] lg:mb-0 mb-10 border border-gray-300 rounded-s-sm px-2 py-1 text-black focus:outline-pink-500 focus:border-pink-500'
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {paginatedItems.length === 0 ? '' :
        <CustomPagination
          pageCount={pageCount}
          onPageChange={handlePageChange}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={currentItems.length}
        />
      }
      <Sort
        setCurrentItems={setCurrentItems}
        shuffledShopping={shuffledShopping}
      />

      <h1 className='text-center text-2xl my-5 text-white font-semibold'>
        {paginatedItems.length === 0 ? '' : 'SHOPPING CATEGORY'}
      </h1>
      <div className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4 dark:text-gray-600 text-pink-600 lg:p-0 p-5'>
        {paginatedItems.length === 0 ? (
          <div className="text-white text-xl lg:w-[500px] lg:ms-[450px] lg:mb-[150px]">
            Sorry, we couldn't find any results
          </div>
        ) : (
          paginatedItems.map((item, i) => (
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
          ))
        )}
      </div>
    </>
  );
}

export default Shop

