import React from "react";

const ErrorExample = () => {
  let title = "Initial Title";
  const handleClick = () => {
    title = "Changed Title";
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

export default ErrorExample;
