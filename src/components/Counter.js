import { useDispatch, useSelector } from "react-redux";
import counterSlice from "../store/slices/counterSlice";
import CounterChild from "./CounterChild";

const Counter = () => {
  const count = useSelector((store) => store.countState.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(counterSlice.actions.increment())}>
        Increment
      </button>
      <button onClick={() => dispatch(counterSlice.actions.decrement())}>
        Decrement
      </button>
      <div>
        <CounterChild />
      </div>
    </div>
  );
};

export default Counter;
