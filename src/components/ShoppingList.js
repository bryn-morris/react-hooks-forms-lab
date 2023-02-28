import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterString, setFilterString] = useState("");
  const [newListArray, setNewListArray] = useState(items);

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  function handleUserSearch(searchString){
    setFilterString(searchString);
  }

  function handleAddNewItem (newItem) {
    setNewListArray([
      ...newListArray, 
      newItem
    ])
  }

  // PseudoCode
  // Create a "handleSubmit" function that takes an argument and
    // pass it down as props to itemForm and create inverseDataFlow
    // have function set newState for the array that is being rendered
  // 

  //const totalArray = 

  const filteredList = newListArray.filter((item) => {
    return item.name.toLowerCase().includes(`${filterString}`)
  })

  const itemsToDisplay = filteredList.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm
      handleAddNewItem = {handleAddNewItem}
      />
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
