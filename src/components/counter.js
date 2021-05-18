import {useState,useEffect} from 'react'

const Counter = () => {

  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log(count + ' konduvannu 🦅');
    return()=>{
      console.log(count + ' kondupokunu ✈');
    }
  },[count])

  return (
    <div>
      <button onClick={()=>{count!==0?setCount(count-1):setCount(0)}} style={{display:'inline-block'}}>-</button>
      <p style={{display:'inline-block',margin:'8px'}}>{count}</p>
      <button onClick={()=>{setCount(count+1)}} style={{display:'inline-block'}}>+</button>
    </div>
  );
}

export default Counter;

