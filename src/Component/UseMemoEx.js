import React, { useMemo, useState } from "react";

const UseMemoEx = () => {
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(100);
  const multification = useMemo(
    function multiply() {
      console.log("multiply");
      return add * 10;
    },
    [add]
  );
  let AddChnger = () => {
    setAdd(add + 1);
  };
  //   function multiply() {
  //     console.log("multiply");
  //     return add * 10;
  //   }
  let SubChanger = () => {
    setSub(sub - 1);
  };

  return (
    <div>   
      <h1>Learning Use Memo</h1>
      <h3>Addition</h3>
      {multification}
      <br></br>
      <button onClick={AddChnger}>Addition</button>

      <p>{add}</p>
      <h3>Substration</h3>
      <button onClick={SubChanger}>Substration</button>
      <p>{sub}</p>
    </div>
  );
};

export default UseMemoEx;
