import React,{useState} from 'react'

const Counter = () => {
    const [Incrise, SetIncrise] = useState(0);

    let updateCounter = () => {
      SetIncrise(Incrise + 10);
    };
    let DecriseCounter = () => {
      SetIncrise(Incrise - 1);
    };
    let handelchange = (e) => {
      SetIncrise(e.target.value);
    };
  return (
    <>
      <div className="Main_div">
        <button className="inc-btn" onClick={updateCounter}>
          +
        </button>
        <h1 onChange={handelchange}>{Incrise}</h1>
        <button className="dec-btn" onClick={DecriseCounter}>
          -
        </button>
      </div>
    </>
  )
}

export default Counter
