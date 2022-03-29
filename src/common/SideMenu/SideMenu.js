import React, { useState } from "react";
import SlidingMenu from './views/SlidingMenu';

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
      <div>
          <SlidingMenu isOpen={isOpen} onChange={setIsOpen}>
              <h2>Hello</h2>
              <h2>Hello</h2>
              <h2>Hello</h2>
          </SlidingMenu>
      </div>
  )
};

export default SideMenu;
