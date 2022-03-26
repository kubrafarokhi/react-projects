import React, { useEffect, useState } from "react";
import axios from "axios";
import "./searchwithFilter.css";
import SearchInput from "./views/SearchInput/SearchInput";
import ListItem from "./views/ListItem/ListItem";

const SearchwithFilter = () => {
  const [searchData, setSearchData] = useState([]);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://star-wars-character-search.glitch.me/api/characters")
      .then((res) => setData(res.data?.characters));
  }, []);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = data?.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setSearchData(results);
    } else {
      setSearchData(data);
      // If the text field is empty, show all users
    }

    setSearchTerm(keyword);
  };
  return (
    <div className="auto-wrapper">
      Google Search
      <SearchInput name={searchTerm} filter={filter} />
      {
        <ul className="ul-item">
          {searchData && searchData.length > 0 ? (
            searchData.map((item) => {
              return <ListItem key={item.id} name={item.name} />;
            })
          ) : (
            <li>No results found!</li>
          )}
        </ul>
      }
    </div>
  );
};

export default SearchwithFilter;
