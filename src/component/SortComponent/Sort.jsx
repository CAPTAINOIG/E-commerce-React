// Sort.js
import React, { useState } from "react";
import SortByCategories from "./SortByCategories";
import SortByPrices from "./SortByPrices";
import SortByNames from "./SortByNames";
import { shopping } from "../../data/Shopping";
import SortMenu from "./SortMenu";
// ... other imports

const Sort = ({
  
    // collection,
    // setSelectedCategory,
    // currentPageItem,
    // setCurrentPageItem,
    // isSmallScreen,
    // selectedCategory
}) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPageItem, setCurrentPageItem] = useState([]);

  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedName, setSelectedName] = useState("");

  return (
    <>
      <section className={`w-full mt-28 mb-6 md:mb-12 py-4 px-4 md:px-[11%] lg:px-[6.5%] flex gap-3 shadow-md bg-sort-background justify-between text-white font-bold z-10 overflow-x-scroll lg:z-[unset] lg:overflow-x-hidden`}>
        <SortByCategories
        setCurrentPageItem={setCurrentPageItem}
        setSelectedCategory={setSelectedCategory}
        collection={shopping}
        currentPageItem={currentPageItem}
        selectedCategory={selectedCategory}
        />
   <SortByNames
   setCurrentPageItem={setCurrentPageItem}
        setSelectedCategory={setSelectedCategory}
        collection={shopping}
        currentPageItem={currentPageItem}
        selectedCategory={selectedCategory}
   />
   <SortByPrices
            setCurrentPageItem={setCurrentPageItem}
            setSelectedPriceRange={setSelectedPriceRange}
            shopping={shopping}
            selectedPriceRange={selectedPriceRange}
          />
          <SortMenu
            setCurrentPageItem={setCurrentPageItem}
            setSelectedPriceRange={setSelectedPriceRange}
            shopping={shopping}
            selectedPriceRange={selectedPriceRange}
          />
        {/* ... other sorting components */}
      </section>
    </>
  );
};

export default Sort;
