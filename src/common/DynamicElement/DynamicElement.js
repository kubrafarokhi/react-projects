import { useState, useEffect, useRef } from "react";
import './dynamicElement.css';

const DynamicElement = () => {
  // This ref is connected to the list
  const listRef = useRef();

  // The size of the list
  // It will be updated later
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  // The data of the list at the beginning
  const [listItems, setListItems] = useState([
    {
      id: 0,
      title: "Item 0"
    },
    {
      id: 1,
      title: "Item 1"
    }
  ]);

  // This function is trggered when the "Add new item" button gets clicked
  const addItem = () => {
    const items = [...listItems];
    const newItem = {
      id: items.length + 1,
      title: `Item ${items.length + 1}`
    };

    items.push(newItem);
    setListItems(items);
  };

  // This function calculates width and height of the list
  const getListSize = () => {
    const newWidth = listRef.current.clientWidth;
    setWidth(newWidth);

    const newHeight = listRef.current.clientHeight;
    setHeight(newHeight);
  };

  // Get 'width' and 'height' after the initial render and every time the list changes
  useEffect(() => {
    getListSize();
  }, [listItems]);

  // Update 'width' and 'height' when the window resizes
  useEffect(() => {
    window.addEventListener("resize", getListSize);
  }, []);

  return (
    <div className="container">
      <button className="button" onClick={addItem}>
        Add New Item
      </button>

      {width && <h3>Width: {width}px</h3>}
      {height && <h3>Height: {height}px</h3>}

      <ul className="list" ref={listRef}>
        {listItems.map((item) => (
          <li className="item" key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicElement;
