import React from "react";
import './controButton.css';

const ControlButtons = (props) =>{
    const StartButton = (
        <div className="c-button" onClick={props.handleStart}>
            Start
        </div>
    )
    const ActiveButtons =  (
        <div className="act-buttons">
            <div className="c-button" onClick={props.handleReset}>
                Reset
             </div>
             <div className="c-button" onClick={props.handlePauseResume}>
                {props.isPaused ? 'Resume' : 'Paused'}
             </div>
        </div>
    )
    return (
        <div className="control-buttons">
            {props.isActive ? ActiveButtons : StartButton}
        </div>
    )
}
export default ControlButtons;