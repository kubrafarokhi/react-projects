//https://stackblitz.com/edit/react-debounce-search-8ramgl?embed=1&file=src/App.js
//https://www.youtube.com/watch?v=DTeY9psVDDg

import React, { useEffect, useState, useCallback } from "react";
import SearchInput from "./views/SearchInput/SearchInput";
import ListItem from "./views/ListItem.js/ListItem";
import axios from "axios";
import './AutocompleteDebounce.css';

const debounce = (fn, d) => {
  let timer;
  return function (...args) {
    if (timer) clearInterval(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, args);
    }, 1000);
  };
};

const AutocompleteDebounce = () => {
  const [results, setResults] = useState([]);

  const handleChange = (event) => {
    const {value} = event.target  // because of debounce
    axios
      .get(`https://star-wars-character-search.glitch.me/api/search/${value}`)
      .then((res) => {
        setResults(res?.data.characters);
      })
      .catch((e) => console.log(e));
  };

  const betterFunction = debounce(handleChange);
  return (
    <div className="auto-wrapper">
      Google Search
      <input
        className="input-field"
        type="text"
        name="Search"
        onChange={betterFunction}
      />
      {
        <ul>
          {results.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      }
    </div>
  );
};

export default AutocompleteDebounce;
