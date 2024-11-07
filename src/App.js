import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/Slices/Counter";
import Mycomp from "./Mycomp";

function App() {
  const count = useSelector((state) => state.counter);
  console.log(count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(increment())}>Increment</button>
      <h1>Counter is {count}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <Mycomp />
    </div>
  );
}

export default App;
