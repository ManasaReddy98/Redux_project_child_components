import { useDispatch, useSelector } from "react-redux";
import fruitsSlice from "../store/slices/fruitsSlice";

const CounterChild = () => {
  const newFruit = useSelector((store) => store.fruitState.newFruit);
  const dispatch = useDispatch();
  return (
    <div>
      <label htmlFor="newFruit">Add new fruit: </label>
      <input
        type="text"
        value={newFruit}
        placeholder="eg: Oranges"
        onChange={(e) =>
          dispatch(fruitsSlice.actions.updateFruit(e.target.value))
        }
      />
      <button
        onClick={() => {
          dispatch(fruitsSlice.actions.addFruit(newFruit));
          dispatch(fruitsSlice.actions.updateFruit(""));
        }}
      >
        Add
      </button>
    </div>
  );
};

export default CounterChild;
