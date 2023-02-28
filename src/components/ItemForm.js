import React, {useState} from "react";
import { v4 as uuid } from "uuid";



function ItemForm({handleAddNewItem}) {

  const [newListItem, setNewListItem] = useState({})

  function onItemFormSubmit(eventObj){
    eventObj.preventDefault();
    const itemName = eventObj.target.name.value;
    const itemCategory = eventObj.target.category.value;
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };
    setNewListItem(newItem);
    handleAddNewItem(newItem);
  }

  return (
    <form className="NewItem" onSubmit = {onItemFormSubmit} value = {newListItem}>
      <label>
        Name:
        <input type="text" name="name" value={newListItem.name}/>
      </label>

      <label>
        Category:
        <select name="category" value = {newListItem.value}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
