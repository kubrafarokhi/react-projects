import React from "react";
import "./slide.css";

export default function Slide({ image }) {
  return (
    <div className="mySlides">
      <img src={image?.img} alt={image?.alt} />
    </div>
  );
}
