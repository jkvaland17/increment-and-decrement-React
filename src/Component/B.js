import React from "react";
import { mycontext } from "./A";
const B = () => {
  return (
    <div>
      <h1>Component B</h1>
      <mycontext.Consumer>{(data) => <p>Component B:{data}</p>}</mycontext.Consumer>
    </div>
  );
};

export default B;
