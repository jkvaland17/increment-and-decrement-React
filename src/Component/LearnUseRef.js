import React, { useRef, useState } from "react";

const LearnUseRef = () => {
  const [val, setVal] = useState("jk");
  const useRefElement = useRef("");
  console.log(useRefElement);
  let handelChange = (e) => {
    setVal(e.target.value);
  };
  let reset = () => {
    setVal("");
    useRefElement.current.focus();
  };
  let style = () => {
    useRefElement.current.style.color = "red";
    useRefElement.current.style.textTransform = "uppercase";
  };
  return (
    <div>
      <h1>Learning UseRef</h1>
      <input
        ref={useRefElement}
        type="text"
        value={val}
        onChange={handelChange}
      ></input>
      <button onClick={reset}>Reset</button>
      <button onClick={style}>Style</button>
    </div>
  );
};

export default LearnUseRef;
