import React, { useEffect, useState } from "react";
import axios from "axios";

const useBookSearch = (query, pageNumber) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  let cancel;
  useEffect(() => {
    setBooks([]);
  }, []);
  
  useEffect(() => {
    setLoading(true);
    setError(false);
    axios({
      method: "get",
      url: "http://openlibrary.org/search.json",
      params: {
        q: query,
        page: pageNumber
      },
      cancelToken: new axios.CancelToken((c) => (cancel = c))
    })
      .then((res) => {
        setBooks((prevBooks) => {
          return [
            ...new Set([...prevBooks, ...res.data.docs.map((b) => b.title)])
          ];
        });
        console.log(res.data);
        setHasMore(res.data.docs.loading > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(e);
      });

    return () => cancel();
  }, [query, pageNumber]);

  return { loading, error, books, hasMore };
};

export default useBookSearch;
