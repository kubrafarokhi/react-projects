import React, { useState } from "react";
import styles from "./modal.module.css";
import Modal from "./Modal";

function ModalContainer() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
     {
         !openModal && <button
         className={styles.showbtnModal}
         onClick={() => setOpenModal(!openModal)}
       >
         Show Modal
       </button>
     } 
      {openModal && (
        <Modal
          closeModal={setOpenModal}
          title={"Are you sure you want to continue"}
          body={"This is an amazing modal"}
        />
      )}
    </>
  );
}

export default ModalContainer;
