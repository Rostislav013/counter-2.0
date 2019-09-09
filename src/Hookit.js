
import React, { useState } from 'react';
import './App.css';


function Hookit() {
  const [count, setCount] = useState(0);
  let ab = '';
  ab = count % 10 === 0 && count !==0 ? ab= 'pink' : !count  ? ab= "original" : count % 2 === 0 ? ab= "odd" : ab= 'even';

  return (

    <div>
        <h1>Click on circle</h1>
        <div className={"like " + ab} >
          <h1>{count}</h1>
        </div>
        <div className="reset">
          <button className="butt"  onClick={() =>setCount(count + 1)}>Add</button>
          <button className="butt" onClick={()=>setCount(count-count)}>Reset</button>
          <button className="butt" onClick={count>0 ? () => setCount(count-1) : ()=> count}>Decrease</button>
        </div>

      </div>
  );
}

export default Hookit;
