import React, { useState } from "react";
import useButtonLoader from "./hooks/useButtonLoader";

const ButtonLoadingSpinner = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const [subscribeLoading, setSubscribeLoading] = useButtonLoader("Subscribe","Subscribing...");

  // const handleClick = () => {
  //   setIsLoading(true);
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((res) => res.json())
  //     .then(() => setIsLoading(false));
  // };

  const handleClick2 = () => {
    setSubscribeLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then(() => setSubscribeLoading(false));
  };
  return (
    <div>
      {/* {!isLoading && <button onClick={handleClick}>Click Me </button>}
      {isLoading && (
        <button onClick={handleClick} disabled>
          <i className="fas fa-spinner fa-spin"></i>Please wait..
        </button>
      )} */}
      <button ref={subscribeLoading} onClick={handleClick2}>
        Subscribe b
      </button>
    </div>
  );
};

export default ButtonLoadingSpinner;
