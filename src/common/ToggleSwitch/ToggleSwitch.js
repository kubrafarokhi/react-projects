import React, { useState } from "react";
import Switch from './view/Switch';

const ToggleSwitch = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
      <>
          <Switch isToggle={isToggled} onToggle={()=>setIsToggled(!isToggled)}/>
      </>
  )
};

export default ToggleSwitch;
