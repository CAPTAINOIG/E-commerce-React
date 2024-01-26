import React from "react";
import { shopping } from "../../data/Shopping";

const SortByPrices = ({
  setCurrentPageItem,
  setSelectedPriceRange,
  selectedPriceRange,
}) => {
  const priceRanges = {
    "1-50": { min: 1, max: 50 },
    "51-100": { min: 51, max: 100 },
    "101-150": { min: 101, max: 150 },
    "151-200": { min: 151, max: 200 },
    "201+": { min: 201, max: Infinity },
  };

  const filterCollectionByPrice = (selectedPriceRange) => {
    setSelectedPriceRange(selectedPriceRange);

    const { min, max } = priceRanges[selectedPriceRange];

    const filtered = shopping.filter(
      (item) => parseFloat(item.price) >= min && parseFloat(item.price) <= max
      );
      setCurrentPageItem(filtered);
      console.log(filtered);

  };

  return (
    <>
      <div className="flex">
        <div className="my-auto sm:text-xs lg:text-base mr-2">Price:</div>
        <select
          value={selectedPriceRange}
          onChange={(e) => filterCollectionByPrice(e.target.value)}
          className="rounded-md p-2 sm:text-xs lg:text-base bg-transparent border focus:bg-black"
        >
          <option value="1-50">$1 - $50</option>
          <option value="51-100">$51 - $100</option>
          <option value="101-150">$101 - $150</option>
          <option value="151-200">$151 - $200</option>
          <option value="201+">More than $200</option>
        </select>
      </div>
    </>
  );
};

export default SortByPrices;
