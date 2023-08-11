import React, { useEffect, useRef, useState } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  // DOES NOT trigger re-render Example
  const userName = useRef("");
  const [email, setEmail] = useState("");

  // target DOM nodes/elements Example
  const divRef = useRef("");
  const handleSubmit = () => {
    console.log(divRef.current);
  };

  useEffect(() => {
    console.log("useEffect Called!!!");
  });

  return (
    <>
      {/* DOES NOT trigger re-render Example */}
      <label>useRef Name: </label>
      <input ref={userName}></input>
      <h2>{userName.current.value}</h2>
      <label>useState Email: </label>
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <h2>{email}</h2>

      {/* target DOM nodes/elements Example */}
      <button type="button" className="btn" onClick={handleSubmit}>
        Click Me
      </button>
      <div ref={divRef}>Hello World!!!</div>
    </>
  );
};

export default UseRefBasics;
