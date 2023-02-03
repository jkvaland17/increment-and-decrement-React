import React, { useState } from 'react'
import B from './B';
import C from './C';
export const mycontext =React.createContext();
const A = () => {
    let [data,setData]= useState("jaydip valand")
  return (
    <div>
      <h1>Component A</h1>
      <mycontext.Provider value={data}>
        <B/>
        <C/>
      </mycontext.Provider>
    </div>
  )
}

export default A
