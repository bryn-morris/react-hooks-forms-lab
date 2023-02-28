import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterString, setFilterString] = useState("");

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  function handleUserSearch(searchString){
    setFilterString(searchString);
  }

  // PseudoCode
  // Store each typed letter as a string in state,
  // declare variable and set equal to filter
  // use the .filter method and pass it a function that returns
    // true or false
  // set state string and comparison category to lower case
  // use string.includes() also to compare
  // return true if conditions are met
  // pass through line 30

  const filteredList = items.filter((item) => {
    return item.name.toLowerCase().includes(`${filterString}`)
  })

  const itemsToDisplay = filteredList.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter 
        onCategoryChange={handleCategoryChange}
        handleUserSearch={handleUserSearch}
        filteredItem = {filterString}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
