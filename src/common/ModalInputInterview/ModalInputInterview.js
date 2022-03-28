import React, { useState, useRef, useEffect } from "react";

const ModalInputInterview = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState("");
  const modalRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    setList([...list, input]);
    setInput("");
  };

  const openModal = (text) => {
    setModalText(text);
    setModalOpen(true);
  };

  useEffect(() => {
    const clickedOutside = (e) => {
      if (
        modalOpen &&
        modalRef.current &&
        !modalRef.current.contains(e.target)
      ) {
        setModalOpen(false);
      }
    };

    document.addEventListener("mousedown", clickedOutside);

    return () => {
      document.removeEventListener("mousedown", clickedOutside);
    };
  }, [modalOpen]);

  return (
    <>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 100
        }}
      >
        <form onSubmit={submitHandler}>
          <input value={input} onChange={(e) => setInput(e.target.value)} />
        </form>
        {list.map((item) => {
          return (
            <p onClick={() => openModal(item)}>
              {item.length > 5 ? `${item.substring(0, 5)}...` : item}
            </p>
          );
        })}
      </div>
      {modalOpen && (
        <div
          ref={modalRef}
          style={{
            position: "absolute",
            textAlign: "center",
            inset: 0,
            margin: "auto",
            width: 600,
            height: 600,
            border: "5px solid black",
            backgroundColor: "black"
          }}
        >
          <p style={{ color: "white" }}>{`Full text: "${modalText}"`}</p>
        </div>
      )}
    </>
  );
};

export default ModalInputInterview;
