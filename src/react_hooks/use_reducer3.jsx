import React, { useReducer } from "react";
const actionTypes = {
  increment: "Increment",
  decrement: "Decrement",
  reset: "Reset",
};
function reducer(counter, action) {
  switch (action.type) {
    case actionTypes.increment:
      return { count: counter.count + 1 };

    case actionTypes.decrement:
      return { count: counter.count - 1 };

    case actionTypes.reset:
      return { count: 0 };

    default:
      return counter;
  }
}



const Use_reducer3 = () => {
  const [counter1, dispatch1] = useReducer(reducer, { count: 0 });
  const [counter2, dispatch2] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <p className="bg-green-300 px-4 py-2 ">{counter1.count}</p>
      <p className="bg-green-300 px-4 py-2 ">{counter2.count}</p>
      <button
        className="m-2 border-4"
        onClick={() => dispatch1({ type: actionTypes.increment })}
      >
        Increment1
      </button>
      <button
        className="m-2 border-4"
        onClick={() => dispatch1({ type: actionTypes.decrement })}
      >
        Decrement1
      </button>
      <button
        className="m-2 border-4"
        onClick={() => dispatch1({ type: actionTypes.reset })}
      >
        Reset1
      </button>
      <br />
      <button
        className="m-2 border-4"
        onClick={() => dispatch2({ type: actionTypes.increment })}
      >
        Increment2
      </button>
      <button
        className="m-2 border-4"
        onClick={() => dispatch2({ type: actionTypes.decrement })}
      >
        Decrement2
      </button>
      <button
        className="m-2 border-4"
        onClick={() => dispatch2({ type: actionTypes.reset })}
      >
        Reset2
      </button>
    </div>
  );
};

export default Use_reducer3;
