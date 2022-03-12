import React, { useState } from 'react';

const Counter = () =>{
    const [count, setCount] = useState(0);
    return (
        <div>
           <h2 style={{padding: '20px'}}>Count</h2>
           <div>{count}</div>
           <button className ='c-button' onClick={()=>setCount(count + 1)}>Increment</button>
           <button className ='c-button' onClick={()=>setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default Counter;