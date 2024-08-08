import { useDispatch, useSelector } from "react-redux";
import FruitChild from "./FruitChild";

const Fruits = () => {
  const fruits = useSelector((store) => store.fruitState.fruits);
  const getList = () => {
    const res = [];
    for (let i = 0; i < fruits.length; i++) {
      res.push(<li key={i}>{fruits[i]}</li>);
    }
    return res;
  };
  return (
    <div>
      {getList()}
      <div>
        <FruitChild />
      </div>
    </div>
  );
};

export default Fruits;
