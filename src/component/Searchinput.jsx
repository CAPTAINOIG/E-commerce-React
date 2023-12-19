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
      <h1>Search Page</h1>
      <input
        type="text"
        placeholder="Enter your search term"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {searchResults.map((result, index) => (
        <div key={index}>{result.name}</div>
      ))}
    </div>
  );
};

export default Searchinput;
