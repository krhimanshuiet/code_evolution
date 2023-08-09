import React, { useState, useReducer } from "react";

export const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};


function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };

    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };

    default:
      return { count: state.count };
  }
}

function UseReducers() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  //   const [count, setCount] = useState(0);

  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };

  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT});
  };
  return (
    <div>
      <button onClick={decrement}>-</button>
      <h1>{state.count}</h1>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default UseReducers;
