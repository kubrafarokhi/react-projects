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
function MousePointer(){
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const handleMouseMove = (e) =>{
        console.log('mouse move event');
        setX(e.clientX);
        setY(e.clientY);
    }
    useEffect(()=>{
        document.addEventListener('mousemove', handleMouseMove);
        //cleanup listener
        return ()=>{
            document.removeEventListener('mousemove', handleMouseMove);
        }
    },[])
    return (
        <div>X:{x}Y:{y}</div>
    )
}

// run effect cleanup

function ToggleButton () {
    const [display, setDisplay] = useState(true)
    return (
        <div>
           <button onClick={()=> setDisplay(!display)}>Toggle</button> 
           {display && <MousePointer/>}
        </div>
    )
}


//imp mistake - to miss adding dependecies in the array

const IntervalCounterDependencies = () => {
    const [count, setCount] = useState(0);

    function tick (){
        setCount(count + 1);
    }
    useEffect(()=>{
        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval)
        }
    },[count]) // useeffct will be called only once and will not update the count hence we have to provide count in the array
   // as we want react to monitor the count update
  return (
    <div>count:{count}</div>
  )
}

export default IntervalCounterDependencies