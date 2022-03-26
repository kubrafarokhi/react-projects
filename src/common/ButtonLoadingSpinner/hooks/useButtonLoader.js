import React, { useEffect, useState, useRef } from "react";

const useButtonLoader = (
  defaultText = "Loadii",
  loadingText = "Loading..."
) => {
  const [isLoading, setLoading] = useState(false);
  const element = useRef(null);

  useEffect(() => {
    if (isLoading) {
      element.current.disabled = true;
      element.current.innerHTML =
        '<i className="fas fa-spinner fa-spin"></i>' + loadingText;
    } else {
      element.current.disabled = false;
      element.current.innerHTML = defaultText;
    }
  }, [isLoading]);
  return [element, setLoading];
};

export default useButtonLoader;
