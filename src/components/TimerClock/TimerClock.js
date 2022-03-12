import React, {useEffect, useState}from 'react';

const TimerClock = () =>{
    const [date, setDate] = useState(new Date());

    useEffect(()=>{
        let timerId = setInterval(()=>tick(),1000) 
        return () => {
            clearInterval(timerId);
        }
    })
    const tick = () =>{
        setDate(new Date())
    }
    return (
        <>
          <h2 style={{paddingTop: "10px"}}>Digital Clock</h2>
          <div>It is {date.toLocaleTimeString()}</div>
        </>
    )
}
export default TimerClock;