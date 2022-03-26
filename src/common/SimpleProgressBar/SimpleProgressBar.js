import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar/ProgressBar";

const SimpleProgressBar = () => {
  const [uploadPercentage, setUploadPercentage] = useState(0);

  useEffect(() => {
    setInterval(
      () => setUploadPercentage(Math.floor(Math.random() * 100) + 1),
      2000
    );
  }, []);

  return (
    <div>
      <ProgressBar bgcolor={"green"} uploadPercentage={uploadPercentage} />
    </div>
  );
};

export default SimpleProgressBar;
