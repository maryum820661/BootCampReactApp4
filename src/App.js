import React,{useState} from 'react';
import './App.css';
import Message from './message.js'

function App()
{

  let [count,setCount]=useState(1);
  let [isDay,setDay]=useState(true);
  return(
<div className={`box ${isDay?'dayLight':''}`}>

  <h1>Have a good{isDay?'Morning':'Night'}</h1>
  <h3>The Count Value is {count}</h3>
  <Message counter={count}/>
  <button onClick={()=>setCount(++count)}>Increse Count</button>
  <button onClick={()=>setDay(!isDay)}>Update Day</button>
  <button onClick={()=>setCount(--count)}>Decrease Count</button>
</div>


  );
}

export default App;
