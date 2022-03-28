import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const CancelToken = axios.CancelToken;

function Cancel() {
  const [image, setImage] = useState({
    index: 0,
    data: null
  });
  const cancelSource = useRef(null);

  useEffect(() => {
    cancelSource.current = CancelToken.source();
    axios
      .get("https://data.com", {
        cancelToken: cancelSource.current.source
      })
      .then(({ data }) => {
        setImage({
          ...image,
          data: data.message
        });
      })
      .catch((err) => console.log(err));

    return () => {
      cancelSource.current.cancel();
    };
  }, [image.index]);

  function reload() {
    console.log("reloading");
    setImage({ data: null, index: image.index + 1 });
  }

  function reloadWithCancel() {
    console.log("reloading");
    setImage({ data: null, index: image.index + 1 });

    setTimeout(() => {
      console.log("cancelling");
      cancelSource.current.cancel();
    }, 1000);
  }
}
