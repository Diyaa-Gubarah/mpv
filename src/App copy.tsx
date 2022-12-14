import {
  decrement,
  increment,
  selectCount,
} from "./store/reducers/counterSlice";

import { useAppShallowSelector } from "./hooks";
import { useDispatch } from "react-redux";

const App = () => {
  const count = useAppShallowSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default App;
