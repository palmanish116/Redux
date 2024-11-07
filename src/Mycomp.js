import React from "react";
import { useSelector } from "react-redux";

const Mycomp = () => {
  const count = useSelector((state) => state.counter);
  return <h1>Another Component : {count}</h1>;
};

export default Mycomp;
