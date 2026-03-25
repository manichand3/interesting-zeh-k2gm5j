import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  function handleDecrement() {
    setCount((prev) => Math.max(prev - 1, 0));
  }
  function handleIncrement() {
    setCount((prev) => prev + 1);
  }
  return (
    <div className="App">
      <h1>react counter</h1>
      <p>counter {count}</p>
      <button onClick={handleIncrement}>increment</button>
      {count > 0 && <button onClick={handleDecrement}>decrement </button>}
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        reset{" "}
      </button>
    </div>
  );
}
