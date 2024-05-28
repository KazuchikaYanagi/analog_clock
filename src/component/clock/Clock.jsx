import React from "react";
import "./Clock.css";
import Time from "../time/Time";

const Marks = ({ angle, type }) => {
  return (
    <div
      className={`clock-face-mark clock-face-mark--${type}`}
      style={{ transform: `rotate(${angle}deg)`, height: "500px" }}
    >
      <div
        style={{
          width: type === "hour" ? "8px" : "4px",
          height: type === "hour" ? "40px" : "20px",
          backgroundColor: "#ffd700",
          clipPath: "polygon(0% 0%,30% 100%, 70% 100%, 100% 0%)",
        }}
      />
    </div>
  );
};

const Clock = () => {
  const renderFaceMarks = () => {
    const marks = [];
    for (let i = 1; i <= 60; i++) {
      marks.push(
        <Marks angle={i * 5.975} type={i % 5 === 0 ? "hour" : "minute"} />
      );
    }
    return marks;
  };

  const currentTime = () => {
    const date = new Date();
    const rootStyle = document.documentElement.style;
    const time = {
      hh: date.getHours(),
      mm: date.getMinutes(),
      ss: date.getSeconds(),
    };
    const nowTime = (
      <p style={{ color: "#ffd700" }}>
        {time.hh}:{time.mm}:{time.ss}
      </p>
    );
    const degSec = time.ss * (360 / 60);

    return <div>{rootStyle.setProperty("--degSec", `${degSec}deg`)}</div>;
  };

  setInterval(currentTime, 1000);
  return (
    <div className="App">
      <div className="room"></div>
      <div className="circle">
        <div className="center"></div>
        <div className="circumference"></div>
        <div className="second-hand">
          <span className="triangle-right"></span>
          <span className="triangle-left"></span>
        </div>
        <div className="clock-face">{renderFaceMarks()}</div>

        <div className="circle-text">
          <p>Ⅻ</p>
          <p>Ⅵ</p>
        </div>
      </div>
      <Time />
    </div>
  );
};

export default Clock;
