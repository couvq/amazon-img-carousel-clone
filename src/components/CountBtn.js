import React from "react";

const CountBtn = ({ count, setCount }) => {
  console.log("CountBtn rendered");
  return <button onClick={() => setCount(count + 1)}>increment</button>;
};

export default CountBtn;
