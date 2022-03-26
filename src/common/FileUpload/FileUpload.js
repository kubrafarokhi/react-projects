import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import ProgressBar from "react-bootstrap/ProgressBar";

function FileUpload() {
  const [file, setFile] = useState();
  const [avatar, setAvatar] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const abortController = useRef(null);

  useEffect(() => {
    let timerId = setTimeout(() => {
      setUploadPercentage(0);
    }, 2000);
  });

  function uploadFile({ target: { files } }) {
    console.log(files[0]);
    const formData = new FormData();
    formData.append("file", files[0]);

    const url = "https://jsonplaceholder.typicode.com/posts";
    abortController.current = new AbortController();
    //upload progress
    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        console.log(`${loaded}kb of ${total}kb | ${percent}%`);

        if (percent < 100) {
          setUploadPercentage(percent);
        }
      },
      signal: abortController.current.signal
    };

    axios.post(url, formData, options).then((response) => {
      console.log(response.data);
      //setAvatar(response.data.url);
      setUploadPercentage(100);
    });
  }

  const cancelRequest = () =>
    abortController.current && abortController.current.abort();
  return (
    <div className="App">
      <div>
        <h1>React File Upload</h1>
        <input type="file" onChange={uploadFile} />
        {uploadPercentage > 0 && (
          <>
            <div>Uploading the file please wait...</div>
            <ProgressBar
              now={uploadPercentage}
              active
              label={`${uploadPercentage}%`}
            />
            <button onClick={cancelRequest}>Cancel</button>
          </>
        )}
      </div>
    </div>
  );
}

export default FileUpload;
