import React, { useState } from "react";

const UseMap = () => {
  const [rendom, setRendom] = useState([]);
  let x = Math.floor(Math.random() * 10);
  
  let handelChange = () => {
    setRendom([...rendom, x]);
  };
  return (
    <div>
    <button onClick={handelChange}>Click</button>
      {rendom.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
      
    </div>
  );
};

export default UseMap;
