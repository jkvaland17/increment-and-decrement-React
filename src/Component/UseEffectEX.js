import React, { useEffect, useState } from 'react'

const UseEffectEX = () => {
    const [count, setCount] = useState(0)
    const [data, setData] = useState("jk")
    useEffect(()=>{
      console.log('useEffect Runed')
    },[data])
    let countUpdate=()=>{
        setCount(count + 1)   
    }
    let dataUpdate=()=>{
      setData("valand")
    }
  return (
    <div>
      <h1>Button Clicked {count} Time</h1>
      <h1>Button Clicked {data} Time</h1>
      <button onClick={countUpdate}>Click Me</button>
      <button onClick={dataUpdate}>Click Me</button>
    </div>
  )
}

export default UseEffectEX
