import React, { useState } from "react";
import Items from "./views/Items/Items";
import './toDoList.css';

const ToDoList = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const handleInputChange = (e) => {
    const input = e.target.value;
    console.log(input)
    setInput(input);
  };
  const addItem = () => {
    if (input) {
      setItems([...items, input]);
      setInput("");
    }
  };
  const deleteItem = (id) => {
    if (items?.length > 0) {
      const newItems = items.filter((item, index) => {
        return index !== id;
      });
      setItems(newItems);
    }
  };
  const editItem = (id) =>{
    // let newEditItem =items.find((elem)=>{
    //   return elem.id === id
    // })
    // setInput(newEditItem)

  }
  const removeAll = () => {
    setItems([]);
  };
  const handleKeyPress = (ev) =>{
    console.log(ev.key)
    if(ev.key === 'Enter'){
      setItems([...items, ev.target.value]);
      setInput("");
    }
  }
  return (
    <div>
      <h2>To Do List App</h2>
      <input
        type="text"
        className="text-input"
        value={input}
        onKeyPress={handleKeyPress}
        name="input"
        placeholder="Type here..."
        onChange={handleInputChange}
      />
      <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem}></i>
      <Items items={items} deleteItem={deleteItem} editItem={editItem}/>
      <div className="show-items">
        <button className="c-button" onClick={removeAll}>Remove All</button>
      </div>
    </div>
  );
};

export default ToDoList;
