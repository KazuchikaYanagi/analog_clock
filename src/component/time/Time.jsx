import React from "react";
import { useState } from "react";
import "./Time.css";

const Time = () => {
  // let time = new Date().toLocaleString();
  let date = new Date();
  let time = `${date.getHours()} : ${date.getMinutes()}`;

  const [ctime, setTime] = useState(time);
  const UpdateTime = () => {
    time = new Date().getHours() + " : " + new Date().getMinutes();
    setTime(time);
  };
  setInterval(UpdateTime);
  return <div className="time">{ctime}</div>;
};

export default Time;
