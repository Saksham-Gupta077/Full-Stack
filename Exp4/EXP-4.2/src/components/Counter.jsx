import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../store/counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <div className="counter-value">{count}</div>
      <div className="counter-actions">
        <button
          className="btn-decrement"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <button
          className="btn-increment"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button className="btn-reset" onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
