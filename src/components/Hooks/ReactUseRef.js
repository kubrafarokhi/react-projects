// Access DOM Nodes directly within functional components
// useRef can also be used to store any mutable value , like instance variables
// Adv:
// value wil persist through rerenders and not ccasuing any additional renders when its value changes


import React, {useRef, useEffect} from 'react'

function  InputFocus() {

  const inputRef = useRef(null)
  useEffect(()=>{
    inputRef.current.focus();
  },[])

  return (
    <input type="text" ref={inputRef}></input>
  )
}

export default  InputFocus



// other usecase

import React,{useRef, useEffect} from 'react'

function ReactUseRef() {
    const [count,setCount] = useState(0);

    const interval = useRef(null); // store value
    useEffect(()=>{
        interval.current = setInterval(()=>{
            setCount(prevCount => prevCount + 1)
        }, 1000)
        return ()=>{
            clearInterval(interval.current)
        }
    },[])
  return (
    <div>
        {count}
        <button onClick={()=> clearInterval(interval.current)}>click</button> // use here
    </div>
  )
}

export default ReactUseRef

