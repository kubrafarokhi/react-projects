import React, { useState, useEffect } from "react";
import "./dynamicHeightDiv.css";

const DynamicHeightDiv = () => {
  const [expand, setExpand] = useState(false);
 // const [count, setCount] = useState(0)
  useEffect(() => {
      console.log('called..', expand)
      let timerID = setInterval(()=>{
       // setCount(count + 1)
        setExpand(!expand)
      } ,5000);
      return ()=> clearInterval(timerID)
  });

  return <div className={`div-height ${expand && "expand"}`}>Hello World</div>;
};

export default DynamicHeightDiv;
