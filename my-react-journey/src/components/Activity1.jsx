import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useState } from "react";
const Activity1 = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="activity1">
      <h1>In this part i use 'useState' and React Icons.</h1>
      <h1>{count}</h1>
      <div>
        <button style={{ padding: "1rem" }} onClick={() => setCount(count + 1)}>
          <FaPlus />
        </button>
        <button style={{ padding: "1rem" }} onClick={() => setCount(count - 1)}>
          <FaMinus />
        </button>
      </div>
    </div>
  );
  c;
};

export default Activity1;
