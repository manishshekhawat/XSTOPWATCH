import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0.00);
  const counter = useRef(0);

  let resetInterval = useRef(null);
  const startTime = () => {

    if(resetInterval.current) return;
    resetInterval.current = setInterval(() => {
      setTime(counter.current);
      counter.current += 0.01;
    }, 10);
  };

  const resetTime = () => {
    clearInterval(resetInterval.current);
    resetInterval.current=null;
    setTime(0.00);
    counter.current = 0;

  };

  const stopTime = () => {
    clearInterval(resetInterval.current);
    resetInterval.current=null;

  };

  

  return (
    <>
      <h1>Stopwatch</h1>
      <p>Time: {time.toFixed(2)}</p>

      {
        resetInterval.current ? (<button type="button" onClick={stopTime}>
        Stop
      </button>):(<button type="button" onClick={startTime}>
        Start
      </button>)
      }
      
      

      <button type="button" onClick={resetTime}>
        Reset
      </button>
    </>
  );
}

export default App;
