/* As an organization admin, I want the ability to create different types of forms which I can share with my org members. (Think of Google Forms)

Requirements
I should be able to provide a title to the form
I should have the option to add following questions - Text field, Dropdown & Checkbox
Each question should have a label
Each question card should have following features - move up, move down, copy and delete
I should be able to save the form once I’ve added all the questions and the title


You don’t need to worry about CSS, we are interested only in the HTML & JS part. Feel free to use any framework. The code should be clean, maintainable and extensible. */

import React, { useState } from "react";
import Title from "./views/Title";

const GoogleForm = () => {
  const [title, setTitle] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault()

  };
  return (
    <div>
      <form onSubmit={handleSumbit}>
        <Title title={title} setTitle={setTitle} />
       
        <input type="submit" value="Sumit" />
      </form>
    </div>
  );
};

export default GoogleForm;
