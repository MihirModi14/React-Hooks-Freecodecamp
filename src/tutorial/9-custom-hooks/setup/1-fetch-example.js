import React, { useState } from "react";
import { useFetch } from "./2-useFetch";

const url = "https://course-api.com/javascript-store-products";

const Example = () => {
  const [name, setName] = useState("");
  const { loading } = useFetch(url, name);

  return (
    <div>
      <h2>{loading ? "loading..." : "data"}</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default Example;
