import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount ? parseInt(savedCount) : 0;
  });

  const increment = () => setCount((prev) => (prev < 10 ? prev + 1 : prev));
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : prev));
  const reset = () => setCount(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowUp") increment();
      if (e.key === "ArrowDown") decrement();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  useEffect(() => {
    const savedCount = localStorage.getItem("count");
    if (savedCount) setCount(parseInt(savedCount));
  }, []);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <>
      <div className="container">
        <h1>Counter App</h1>
        <h2>{count}</h2>
        <div className="buttoncontainer">
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
