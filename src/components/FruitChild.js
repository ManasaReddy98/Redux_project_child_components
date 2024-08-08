import { useDispatch, useSelector } from "react-redux";
import counterSlice from "../store/slices/counterSlice";

const FruitChild = () => {
  const length = useSelector((store) => store.fruitState.fruits.length);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(counterSlice.actions.setCount(length))}>
        Set Counter
      </button>
    </div>
  );
};

export default FruitChild;
