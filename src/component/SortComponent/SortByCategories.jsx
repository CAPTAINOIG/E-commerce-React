import React, { useState } from "react";
import { shopping } from "../../data/Shopping";

const SortByCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPageItem, setCurrentPageItem] = useState([]);

  const uniqueCategories = [...new Set(shopping.map((item) => item.categories))];

  const filterCollection = (category) => {
    setSelectedCategory(category);

    if (category === "all") {
      setCurrentPageItem(shopping);
    } else {
      const filtered = shopping.filter((item) => item.categories === category);
      setCurrentPageItem(filtered);
      console.log(filtered);
    }
  };

  return (
    <>
      <div className="flex">
        <div className="my-auto sm:text-xs lg:text-base mr-2">Category:</div>
        <select
          value={selectedCategory}
          onChange={(e) => filterCollection(e.target.value)}
          className="rounded-md p-2 sm:text-xs lg:text-base bg-transparent border focus:bg-black"
        >
          <option key="all" value="all">
            All
          </option>
          {uniqueCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Display the items based on the selected category */}
      <div className="item-container">
        {currentPageItem.length > 0 ? (
          currentPageItem.map((item) => (
            <div key={item.id} className="item">
              {/* Display your item details here */}
              <p>{item.title}</p>
              {/* Add other item details as needed */}
            </div>
          ))
        ) : (
          <p>No items found for the selected category.</p>
        )}
      </div>
    </>
  );
};

export default SortByCategories;
