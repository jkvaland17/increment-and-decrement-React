import React, { useState } from "react";
import "./style/App.scss";
import Header from "./Header";
import DateFilter from "./DateFilter";

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
    <>
      <h1>Hello, world!</h1>
      <Header name="jk" surname="valand">
        <p>hello children component</p>
      </Header>
      <Header name="uttam" surname="moradiya" />
      <Header name="manthan" surname="vanani" />
      <div className="Main_div">
        <button className="inc-btn" onClick={updateCounter}>
          +
        </button>
        <h1 onChange={handelchange}>{Incrise}</h1>
        <button className="dec-btn" onClick={DecriseCounter}>
          -
        </button>
      </div>
      <div>
      <DateFilter/>
      </div>
    </>
  );
};

export default App;
