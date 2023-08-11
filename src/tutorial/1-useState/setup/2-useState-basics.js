import React, { useState } from "react";

const UseStateBasics = () => {
  const [title, setTitle] = useState("Initial Title");
  const handleClick = () => {
    if (title === "Initial Title") {
      setTitle("Changed Title");
    } else {
      setTitle("Initial Title");
    }
    console.log("Title changed!!!");
  };
  return (
    <>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </>
  );
};

export default UseStateBasics;
