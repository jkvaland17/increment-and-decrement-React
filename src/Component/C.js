import React from "react";
import { mycontext } from "./A";
const C = () => {
  return (
    <div>
      <h1>Component C</h1>
      <mycontext.Consumer>
        {(data) => <h5>Component C:{data}</h5>}
      </mycontext.Consumer>
    </div>
  );
};

export default C;
