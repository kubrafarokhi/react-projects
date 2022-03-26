import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Tabs.css";

function LinkedTabs({ children, defaultTab, route }) {
  const queryTabExist = children.find(
    child => child.props.label === defaultTab
  );
  const initialTab = queryTabExist
    ? queryTabExist.props.label
    : children[0].props.label;

  const [activeTab, setActiveTab] = useState(initialTab);
  const handleActiveTab = useCallback(label => setActiveTab(label), []);

  const tabs = children.map(child => (
    <Link
      to={`/${route}?tabs=${child.props.label}`}
      onClick={() => handleActiveTab(child.props.label)}
      className={
        child.props.label === activeTab
          ? ["tabs__tab", "tabs__tab-active"].join(" ")
          : "tabs__tab"
      }
      key={child.props.label}
    >
      {child.props.tabName}
    </Link>
  ));
  const tabContent = children.filter(child => child.props.label === activeTab);
  return (
    <div>
      <div className="tabs__box">{tabs}</div>
      <div>{tabContent}</div>
    </div>
  );
}

function Tab(props) {
  return <>{props.children}</>;
}

export { LinkedTabs, Tab };


//https://codesandbox.io/s/react-tabs-and-linked-tabs-forked-96kq8m?file=/src/App.js:164-172