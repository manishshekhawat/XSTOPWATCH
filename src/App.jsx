import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0); // time in ms
  const intervalRef = useRef(null); // holds setInterval id
  const counter = useRef(0); // in milliseconds

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `Time: ${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const startTime = () => {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      counter.current += 100;
      setTime(counter.current);
    }, 100); // 100ms for stability and test friendliness
  };

  const stopTime = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetTime = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    counter.current = 0;
    setTime(0);
  };

  return (
    <>
      <h1>Stopwatch</h1>
      <p>{formatTime(time)}</p>

      <button onClick={startTime} disabled={intervalRef.current !== null}>
        Start
      </button>
      <button onClick={stopTime} disabled={intervalRef.current === null}>
        Stop
      </button>
      <button onClick={resetTime}>Reset</button>
    </>
  );
}

export default App;
