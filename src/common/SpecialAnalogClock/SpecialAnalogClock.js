import React, { useEffect, useState } from "react";
import "./speacialAnalogClock.css";
import ClockImg from "./clock.jpeg";

//https://codesandbox.io/s/opfcb?file=/src/App.js

//https://codesandbox.io/s/immutable-dawn-l695l4?file=/src/App.js.

function SpecialAnalogClock({ label, country, timeZone }) {
  //const [time, setTime] = useState( new Date().toLocaleString( 'en-IN','Asia/Kolkata'));
  const [time, setTime] = useState(new Date());
 
  // const handleDate = () => {
  //   const date = new Date();
  //   date.setHours(date.getHours() + timeDiff.hours);

  //   // date.setMinutes(date.setMinutes() + timeDiff.minutes);
  //   // date.setSeconds(date.setSeconds());
  //   return date;
  // };

  useEffect(() => {
    let timerId = setInterval(() => {
      console.log(111, new Date().toLocaleString(country, {
        timeZone: timeZone
      }))
      const timeZoneDate = new Date().toLocaleString(country, {
        timeZone: timeZone
      })
      setTime(new Date(timeZoneDate));
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "50px"
      }}
    >
      <label
        style={{
          marginBottom: "30px",
          fontSize: "30px",
          fontFamily: "cursive",
          fontWeight: "bold",
          letterSpacing: "0.07em"
        }}
      >
        {label}
      </label>
      <div
        style={{
          height: "250px",
          width: "250px",
          backgroundImage: `url("${ClockImg}")`,
          backgroundPosition: "center",
          backgroundSize: "contain"
        }}
      >
        <div
          className="hours-hand"
          style={{
            transform: `rotateZ(${time?.getHours() * 30}deg)`
          }}
        ></div>
        <div
          className="minutes-hand"
          style={{
            transform: `rotateZ(${time?.getMinutes() * 6}deg)`
          }}
        ></div>
        <div
          className="seconds-hand"
          style={{
            transform: `rotateZ(${time?.getSeconds() * 6}deg)`
          }}
        ></div>
      </div>
    </div>
  );
}

export default SpecialAnalogClock;
