import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  
  const [pause, setPause] = useState(false);

  function toggle() {
    setPause(!pause);
  }

  function reset() {
    setSeconds(0);
    setPause(false);
  }

  useEffect(() => {
    let interval = null;
    if (!pause) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
     } 
    //  else if (!pause && seconds !== 0) {
    //   clearInterval(interval);
    //  }
    return () => clearInterval(interval);
  }, [pause, seconds]);

  return (
    <div className="app">
      <div className="time">
        {seconds}s
      </div>
      <div className="row">
        <button className={`button button-primary button-primary-${pause ? 'active' : 'inactive'}`} onClick={toggle}>
          {pause ? 'Pause' : 'Start'}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;