import React, {useEffect, useState} from "react";
import './stopWatch.css';
import ControlButtons from './views/ControlButtons/ControlButtons';
import Timer from './views/Timer/Timer';


const StopWatch = (props) => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(()=>{
    let interval = null;
    if(isActive && isPaused === false){
      interval = setInterval(()=>{
        setTime((time) => time + 10);
      }, 10)
    }else{
      clearInterval(interval)
    }
    return () =>{
      clearInterval(interval);
    }
  }, [isActive, isPaused])

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  }

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  }

  const handleReset = () =>{
    setIsActive(false);
    setTime(0);
  }
  
  return (
    <div className="stop-watch">
      <h2>StopWatch</h2>
      <Timer time={time}/>
      <ControlButtons isActive ={isActive} 
                      isPaused ={isPaused}
                      handleReset = {handleReset}
                      handlePauseResume = {handlePauseResume}
                      handleStart={handleStart}/>
    </div>
  );
};
export default StopWatch;
