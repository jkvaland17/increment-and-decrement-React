import React from "react";
import "./style/App.scss";
// import Header from "./Header";
// import DateFilter from "./DateFilter";
// import Counter from "./Component/Counter";
// import UseMap from "./Component/UseMap";
//import A from "./Component/A";
//import UseEffectEX from "./Component/UseEffectEX";
import LearnUseRef from "./Component/LearnUseRef";
import UseMemoEx from "./Component/UseMemoEx";
const App = () => {
  return (
    <>
      {/* <h1>Hello, world!</h1>
      <Header name="jk" surname="valand">
        <p>hello children component</p>
      </Header>
      <Header name="uttam" surname="moradiya" />
      <Header name="manthan" surname="vanani" />
        <DateFilter />
        <Counter/>
        <UseMap/> */}
      {/* <A/> */}
      {/* <UseEffectEX/> */}
      <LearnUseRef />
      <UseMemoEx />
    </>
  );
};

export default App;
