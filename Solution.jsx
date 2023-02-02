import React, { Fragment, useEffect, useState } from "react";
/*

Your task is to implement a React component that renders a running-clock that will count down time until it reaches 0 minutes and 0 seconds (00:00).

*/
function Solution() {
  const [isTimeStart, setTimeStart] = useState(false);
  const [minuteValue, setMinutes] = useState(0);
  const [secondsValue, setSeconds] = useState(0);

  const [setMin, setInitMin] = useState(0);
  const [setSec, setInitSec] = useState(0);

  const resetTheTimer = () => {
    setInitMin(0);
    setInitSec(0);
    setMinutes(0);
    setSeconds(0);
  };

  const startTheTimer = () => {
    setMinutes(setMin);
    setSeconds(setSec);
    setTimeStart(true);
  };

  useEffect(() => {
    if (isTimeStart) {
      const countdown = setInterval(() => {
        if (parseInt(secondsValue) > 0) {
          setSeconds(parseInt(secondsValue) - 1);
        }
        if (parseInt(secondsValue) === 0) {
          if (parseInt(minuteValue) === 0) {
            clearInterval(countdown);
          } else {
            setMinutes(parseInt(minuteValue) - 1);
            setSeconds(59);
          }
        }
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [isTimeStart, minuteValue, secondsValue]);

  return (
    <Fragment>
      <label>
        <input
          type="number"
          value={setMin}
          onChange={(e) => setInitMin(e.target.value)}
        />
        Minutes
      </label>
      <label>
        <input
          type="number"
          value={setSec}
          onChange={(e) => setInitSec(e.target.value)}
        />
        Seconds
      </label>

      <button onClick={() => startTheTimer()}>START</button>
      <button onClick={() => setTimeStart((check) => !check)}>
        PAUSE / RESUME
      </button>
      <button onClick={() => resetTheTimer()}>RESET</button>

      <h1 className="result" data-testid="running-clock">
        {minuteValue < 10 ? `0${minuteValue}`: `${minuteValue}`}:{secondsValue < 10 ? `0${secondsValue}` : secondsValue}
      </h1>
    </Fragment>
  );
}

export default Solution;
