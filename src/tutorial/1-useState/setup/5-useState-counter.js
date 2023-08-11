import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const reset = () => {
    setValue(0);
  };

  const moreComplexIncrease = () => {
    setTimeout(() => {
      setValue((prevValue) => prevValue + 1);
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular Counter</h2>
        <h2>{value}</h2>
        <button
          className="btn"
          onClick={() => {
            setValue(value + 1);
          }}
        >
          increase
        </button>
        <button className="btn" onClick={reset}>
          reset
        </button>
        <button
          className="btn"
          onClick={() => {
            setValue(value - 1);
          }}
        >
          decrease
        </button>
      </section>
      <section>
        <h2>More Complex Counter</h2>
        <h2>{value}</h2>
        <button className="btn" onClick={moreComplexIncrease}>
          increase
        </button>
        <button className="btn" onClick={reset}>
          reset
        </button>
        <button
          className="btn"
          onClick={() => {
            setValue(value - 1);
          }}
        >
          decrease
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
