import React, { useState, useCallback } from "react";
import UseCallBackA from "./UseCallBackA";

const UseCallBackEx = () => {
  const [count, setcount] = useState(0);
  const [counttwo, setCounttwo] = useState(0);

  let callback = useCallback(() => {
    //use call back
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counttwo]);
  return (
    <div>
      <h1>Learning UseCallBack</h1>
      <UseCallBackA callback={callback} />
      <h1>{count}</h1>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        +
      </button>
      <h1>{counttwo}</h1>
      <button
        onClick={() => {
          setCounttwo(counttwo + 1);
        }}
      >
        +2
      </button>
    </div>
  );
};

export default UseCallBackEx;
