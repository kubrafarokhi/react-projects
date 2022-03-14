import React, { useEffect, useState } from 'react'

//useEffect after every render / conditionallly render
function HooksUseEffect() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(()=>{
        document.title = 'You clicked' +{count} + 'times';
    }, [count])  //note


  return (
    <div>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={()=>setCount(count + 1)}>Click {count}</button>
    </div>
  )
}

export default HooksUseEffect

// run effect only once
