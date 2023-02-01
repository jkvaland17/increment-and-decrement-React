import React, { useState } from "react";

const App = () => {
  const [Incrise, SetIncrise] = useState(0);
  let updateCounter = () => {
    SetIncrise(Incrise + 1);
  };
  let DecriseCounter = () => {
    SetIncrise(Incrise - 1);
  };
  let handelchange = (e) => {
    SetIncrise(e.target.value);
  };
  return (
    <div>
      <h1>Hello, world!</h1>
      <button onClick={updateCounter}>incrise</button>
      <h1 onChange={handelchange}>{Incrise}</h1>
      <button onClick={DecriseCounter}>decrise</button>
    </div>
  );
};

export default App;
