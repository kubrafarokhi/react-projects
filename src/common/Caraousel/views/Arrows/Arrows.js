import React from "react";
import "./arrows.css";

export default function Arrows({ nextImage, prevImage }) {
  return (
    <>
      <a onClick={prevImage} className="prev">
        {"<"}
      </a>
      <a onClick={nextImage} className="next">
        {">"}
      </a>
    </>
  );
}
