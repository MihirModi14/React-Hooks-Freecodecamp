import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    console.log("useEffect call");
    window.addEventListener("resize", checkSize);

    return () => {
      console.log("cleanup function");
      window.removeEventListener("resize", checkSize);
    };
  });
  console.log("render");

  return <h2>useEffect cleanup</h2>;
};

export default UseEffectCleanup;
