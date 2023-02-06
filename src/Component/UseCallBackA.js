import React, { memo } from "react";

const UseCallBackA = ({callback}) => {
  console.log("UseCallBackA");
  return <div></div>;
};

export default memo(UseCallBackA);
