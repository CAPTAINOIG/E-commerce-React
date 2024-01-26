import React, { useState } from "react";
import { shopping } from "../../data/Shopping";
import { useNavigate } from "react-router-dom";

const SortByNames = () => {
  let navigate = useNavigate();
  const [selectedName, setSelectedName] = useState('');
  const [currentPageItem, setCurrentPageItem] = useState([]);

  const filterCollectionByName = (selectedName) => {
    setSelectedName(selectedName);
    const filtered = shopping.filter((item) => item.title === selectedName);
    setCurrentPageItem(filtered);
    console.log(filtered);
    
    // Navigate to details page when an option is selected
    navigate('/details');
    localStorage.setItem('productdetail', JSON.stringify(filtered[0])); // Assuming filtered has at most one item
  };

  return (
    <>
      <div className="flex">
        <div className="my-auto sm:text-xs lg:text-base mr-2">Name:</div>
        <select
          value={selectedName}
          onChange={(e) => filterCollectionByName(e.target.value)}
          className="rounded-md p-2 sm:text-xs lg:text-base bg-transparent border focus:bg-black"
        >
          {shopping.map((item, index) => (
            <option
              key={item.title} // Use a unique key, assuming item.title is unique
              value={item.title}
            >
              {item.title}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SortByNames;
