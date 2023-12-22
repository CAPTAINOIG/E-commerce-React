import React, { useState } from 'react';
import { shopping } from '../data/Shopping';

const Searchinput = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = shopping.filter((item) => {
        console.log(item);
      const itemName = item && item.name && typeof item.name === 'string' ? item.name.toLowerCase() : '';
      return itemName.includes(searchTerm.toLowerCase());
    });
    setSearchResults(results);
  };

  return (
    <div>
    
      <input className='lg:w-[70%] w-[50%] lg:ms-0 ms-10 lg:mt-0 mt-3 border rounded border-pink-600 dark:border-gray-900' 
        type="text"
        placeholder="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className='lg:text-xl text-sm' onClick={handleSearch}>Search</button>
      {searchResults.map((result, index) => (
        <div key={index}>{result.name}</div>
      ))}
    </div>
  );
};

export default Searchinput;
