import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0); 
  const intervalRef = useRef(null); 
  const counter = useRef(0); 

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `Time: ${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const [isRunning, setIsRunning] = useState(false);

const startTime = () => {
  if (intervalRef.current !== null) return;

  intervalRef.current = setInterval(() => {
    counter.current += 100;
    setTime(counter.current);
  }, 100);
  setIsRunning(true);
};

const stopTime = () => {
  clearInterval(intervalRef.current);
  intervalRef.current = null;
  setIsRunning(false);
};


  const resetTime = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    counter.current = 0;
    setTime(0);
    setIsRunning(false);
  };

  return (
    <>
      <h1>Stopwatch</h1>
      <p>{formatTime(time)}</p>

    
        {isRunning ? (
  <button type="button" onClick={stopTime}>Stop</button>
) : (
  <button type="button" onClick={startTime}>Start</button>
)}

      
      <button onClick={resetTime}>Reset</button>
    </>
  );
}

export default App;
