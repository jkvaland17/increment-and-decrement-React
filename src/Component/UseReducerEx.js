import React, { useReducer } from "react";

let initialState = 0;
let reducer = (state, action) => {
  switch (action) {
    case "Incriment":
      return state + 1;

    case "Decriment":
      return state - 1;
    default:
      return state;
  }
};
const UseReducerEx = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch("Incriment")}>Incriment</button>
      <button onClick={() => dispatch("Decriment")}>Decriment</button>
    </div>
  );
};

export default UseReducerEx;
