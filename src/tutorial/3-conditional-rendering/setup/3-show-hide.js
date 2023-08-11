import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [isShow, setIsShow] = useState(true);

  return (
    <>
      <button
        type="button"
        className="btn"
        onClick={() => {
          setIsShow(!isShow);
        }}
      >
        Show/Hide
      </button>
      {isShow && <Window />}
    </>
  );
};

const Window = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("use Effect Called!!!");
    window.addEventListener("resize", checkSize);

    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return <h2 style={{ marginTop: "2rem" }}>Size : {size}</h2>;
};

export default ShowHide;
