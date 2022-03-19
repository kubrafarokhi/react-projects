import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchDataUseState() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((res) => {
        setLoading(false);
        setPosts(res.data);
      })
      .catch((error) => {
        setError(error);
      });
  });
  return (
    <div>
      {loading ? "loading" : posts.title}
      {error ? "something went wrong" : null}
    </div>
  );
}

export default FetchDataUseState;
