import React, { useState, useMemo } from 'react'

function ReactUseMemo() {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const handleCounterOne = ()=>{
        setCounterOne(counterOne + 1)
    }

    const handleCounterTwo = ()=>{
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => { // complex calc func
        let i = 0;
        while (i < 2000000000) i++;
        return counterOne % 2 === 0
    })
  return (
    <div>
        {counterOne} - {counterTwo} 
        {isEven ? 'Even' : 'Odd'}
        <button onClick={handleCounterOne}>Click One</button>
        <button onClick={handleCounterTwo}>Click Two</button>
    </div>
  )
}

export default ReactUseMemo