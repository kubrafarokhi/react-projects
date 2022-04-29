import React, { useEffect, useState } from "react";

import "./styles.css";
import ProgressBar from "./components/ProgressBar/ProgressBar";

export default function App() {
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    let intervalid;
    if (uploadPercentage < 100) {
      intervalid = setInterval(() => {
        setUploadPercentage((uploadPercentage) => uploadPercentage + 1);
      }, 300);
    } else {
      clearInterval(intervalid);
    }

    return () => clearInterval(intervalid);
  }, [uploadPercentage]);
  // useEffect(() => {
  //   setInterval(() => setUploadPercentage(), 300);
  //   return
  // }, []);

  return (
    <div className="App">
      <ProgressBar bgcolor="green" uploadPercentage={uploadPercentage} />
    </div>
  );
}
