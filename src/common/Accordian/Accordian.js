import React, { useState } from "react";
import { questions } from "./api";
import "./accordian.css";

const MyAccordian = ({ question, answer }) => {
  const [show, setShow] = useState(true);
  return (
    <div className="main-heading">
      <p onClick={()=>setShow(!show)}>{show ? '-': '+'}</p>
      <h1>{question}</h1>
      {show && <p className="answers">{answer}</p>}
    </div>
  );
};
const Accordian = () => {
  const [data, setData] = useState(questions);
  return (
    <div>
      {data.map((currElem) => {
        return <MyAccordian key={currElem.id} {...currElem} />;
      })}
    </div>
  );
};

export default Accordian;
