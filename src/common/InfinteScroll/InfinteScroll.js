import "./infiniteScroll.css";
import { useState, useRef, useCallback } from "react";
import useBookSearch from "./useBookSearch";

import React from "react";

function InfinteScroll() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { books, loading, hasMore, error } = useBookSearch(query, pageNumber);
  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log("visible");
          setPageNumber((prevPageNum) => prevPageNum + 1);
        }
      });
      if (node) observer.current.observe();
    },
    [loading, hasMore]
  );
  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPageNumber(1);
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleSearch} />
      {books?.map((book, index) => {
        if (books.length === index + 1) {
          return (
            <div ref={lastBookElementRef} key={book}>
              {book}
            </div>
          );
        } else {
          return <div key={book}>{book.title}</div>;
        }
      })}
      <div>{loading && <div>Loading...</div>}</div>
      <div>{error && <div>{error}</div>}</div>
    </div>
  );
}

export default InfinteScroll;
