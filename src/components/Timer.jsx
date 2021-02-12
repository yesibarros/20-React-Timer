import React, { useState, useEffect } from "react";
import Clock from "./Clock";

const Timer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [buttonName, setbuttonName] = useState("Start");
  const [assigTime, setAssigTime] = useState(0);

  

  const toggleIsRunning = () => {
    setIsRunning(!isRunning);
    isRunning ? setbuttonName("Pause") : setbuttonName("Start");
  };

  const time = () => {
    setAssigTime((assigTime) => assigTime + 1);
  };

  const TimerCero = () => {
    setAssigTime(0);
    setIsRunning(false);
  };

  
  useEffect(() => {
    let intervalID;
    if (isRunning) intervalID = setInterval(time, 10);
    return () => clearInterval(intervalID);

  }, [isRunning]);
  

  return (
    <div>
      <Clock time={assigTime} />
      {/* <button className="status-button" onClick={time}>TIME</button> */}
      <button className="status-button" onClick={toggleIsRunning}>{buttonName}</button>
      <button className="status-button" onClick={TimerCero}>Reset</button>
    </div>
  );
};

export default Timer;
