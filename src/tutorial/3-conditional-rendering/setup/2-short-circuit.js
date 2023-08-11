import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const firstValue = text || "Hello World";
  const secondValue = text && "Hello World";

  const [isMorning, setIsMorning] = useState(true);

  return (
    <>
      {/* <h2>First Value: {firstValue}</h2>
      <h2>Second Value: {secondValue}</h2> */}

      {/* <h2>First : {text || "Hello World"}</h2>
      <h2>Second : {text && "Hello World"}</h2>
      <h2>Third : {!text && "Hello World"}</h2> */}

      {/* <h2>{isMorning && "Good Morning"}</h2>
      <h2>{!isMorning && "Good Night"}</h2> */}
      <h2>{isMorning ? "Good Morning" : "Good Night"}</h2>
      <button
        type="button"
        className="btn"
        onClick={() => {
          setIsMorning(!isMorning);
        }}
      >
        Toggle
      </button>
    </>
  );
};

export default ShortCircuit;
