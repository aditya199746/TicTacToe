import React from "react";
import { useState, useEffect } from "react";

const Timer = ({ seconds, setSeconds, winnerMessage }) => {
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0 && winnerMessage == "") {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        setSeconds(30);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div>
      <h1>{seconds}</h1>
    </div>
  );
};

export default Timer;
