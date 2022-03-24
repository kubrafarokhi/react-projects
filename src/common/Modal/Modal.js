import React from "react";
import styles from "./modal.module.css";

function Modal({ title, body, closeModal }) {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.titleCloseBtn}>
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className={styles.title}>
          <h1>{title}</h1>
        </div>
        <div className={styles.body}>{body}</div>
        <div className={styles.footer}>
        <button
            onClick={() => {
                closeModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Done</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
