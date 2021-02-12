import React, { useState, useEffect } from "react";
import Clock from "./Clock";

const Countdown = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [buttonName, setbuttonName] = useState("Start");
  const [assigTime, setAssigTime] = useState(Number(localStorage.getItem("MySameTime")));

  
  const handleInput = (event) => {
    const value = event.target.value;
    setAssigTime(value);
    localStorage.setItem("MySameTime",assigTime-1)
    console.log("LLEGUE");
  };

  const toggleIsRunning = () => {
    setIsRunning(!isRunning);
    isRunning ? setbuttonName("Pause") : setbuttonName("Start");
  };

  const time = () => {
    setAssigTime((assigTime) => assigTime - 1);
    localStorage.setItem("MySameTime",assigTime-1)
    
  };
  
  const TimerCero = () => {
    setAssigTime(0);
    setIsRunning(false);
  };

  
  useEffect(() => {
    let intervalID;
    if (isRunning) intervalID = setInterval(time, 10);
    if (assigTime<0){
        TimerCero ()
        clearInterval(intervalID)  
    } 

    return () => clearInterval(intervalID);

  }, [isRunning,assigTime]);
  

  return (
    <div>
      <Clock time={assigTime} />
      {/* <button className="status-button" onClick={time}>TIME</button> */}
      <input type="number" onChange={handleInput} value={assigTime} ></input>
      <button className="status-button" onClick={toggleIsRunning}>{buttonName}</button>
      <button className="status-button" onClick={TimerCero}>Reset</button>
    </div>
  );
};

export default Countdown;



