import React, { useState,useRef, useCallback } from "react";
import "./dropdown.css";
import {useDetectOutsideClick} from './useDetectOutsideClick';

const data = [
  { id: 0, label: "Istanbul, TR (AHL)" },
  { id: 1, label: "Paris, FR (CDG)" }
];

const Dropdown = () => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  useDetectOutsideClick(dropdownRef, useCallback(() => setIsOpen(false), []));

  const toggleDropdown = () => {
      setIsOpen(!isOpen)
    };

  const handleItemClick = (id) => {
    selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
  };
  //detect outside click

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedItem
          ? items.find((item) => item.id == selectedItem).label
          : "Select your destination"}
      </div>
      <div className={`dropdown-body ${isOpen && "open"}`}>
        {items.map((item) => (
          <div
            className="dropdown-item"
            id={item.id}
            onClick={(e) => handleItemClick(e.target.id)}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
