import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext.jsx";

function CounterPanel() {
  const { count, increment, decrement } = useContext(GlobalContext);

  return (
    <div style={{ padding: "16px", margin: "8px 0", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>Counter Panel</h2>
      <p>Count: {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment} style={{ marginLeft: "8px" }}>+</button>
    </div>
  );
}

export default CounterPanel;