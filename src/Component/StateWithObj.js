import React, { useState } from "react";

const StateWithObj = () => {
  const [name, setName] = useState({ Firstname: "Jaydip", Lastname: "Valand" });
  let hendelchange = () => {
    setName({ ...name, Firstname: "KamleshBhai" });
  };
  return (
    <>
      <h1>
        My FirstName is:<span className="stateobj">{name.Firstname}</span> And
        My Lastname is:<span className="stateobj">{name.Lastname}</span>
      </h1>
      <button onClick={hendelchange}>Click</button>
    </>
  );
};

export default StateWithObj;
