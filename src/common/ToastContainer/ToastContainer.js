import React, { useState } from "react";
import styles from "./Toast/Toast.js";
import Button from "./Button/Button";
import Toast from "./Toast/Toast";

function ToastContainer() {
  const [list, setList] = useState([]);
  let toastProperties = null;

  const showToast = (type) => {
    switch (type) {
      case "success":
        toastProperties = {
          id: list.length+1,
          title: "Success",
          description: "This is a success Toast Component",
          backgroundColor: "green"
        };
        break;
      case "danger":
        toastProperties = {
          id: list.length+1,
          title: "Danger",
          description: "This is a danger Toast Component",
          backgroundColor: "red"
        };
        break;
      case "warning":
        toastProperties = {
          id: list.length+1,
          title: "Warning",
          description: "This is a warning Toast Component",
          backgroundColor: "orange"
        };
        break;
      case "info":
        toastProperties = {
          id: list.length+1,
          title: "Info",
          description: "This is a info Toast Component",
          backgroundColor: "yellow"
        };
        break;
      default:
        toastProperties = [];
    }

    setList([...list, toastProperties]);
  };
  return (
    <div>
      <h1>React Toast Component</h1>
      <div className={styles.buttons}>
        <Button handleClick={() => showToast("success")}>Success</Button>
        <Button handleClick={() => showToast("danger")}>Danger</Button>
        <Button handleClick={() => showToast("warning")}>Warning</Button>
        <Button handleClick={() => showToast("info")}>Info</Button>
      </div>
      <Toast toastList={list} position={"bottom-right"} setList={setList}/>
    </div>
  );
}

export default ToastContainer;
