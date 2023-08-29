import React, { createContext, useContext, useReducer } from "react";
const actionTypes = {
  increment:"Increment",
  decrement:"Decrement",
  reset:"Reset",
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
const CounterContext = createContext(null);

export const useCounter = () => {
  const {counter, dispatch} = useContext(CounterContext);

  const Increment = () => {
    dispatch({ type: actionTypes.increment });
  };

  const Decrement = () => {
    dispatch({ type: actionTypes.decrement });
  };
  const Reset = () => {
    dispatch({ type: actionTypes.reset });
  };

  return { counter, Increment, Decrement, Reset};
};

const Use_reducer_use_context = () => {
  const [counter, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <CounterContext.Provider value={{counter, dispatch}}>
      <Component1 />
      <Component2 />
      <Component3 />
    </CounterContext.Provider>
  );
};

const Component1 = () => {
    const { counter, Increment, Decrement, Reset} = useCounter()
  return (
    <>
    <div>
        <p>Component 1</p>
      <p className="bg-green-300 px-4 py-2 ">{counter.count}</p>  
      <button className="m-2 border-4" onClick={Increment}>Increment</button>
      <button className="m-2 border-4" onClick={Decrement}>Decrement</button>
      <button className="m-2 border-4" onClick={Reset}>Reset</button>
    </div>
    </>
  )
};

const Component2 = () => {
    const { counter, Increment, Decrement, Reset} = useCounter()
    return (
      <>
      <div>
      <p>Component 2</p>
        <p className="bg-orange-300 px-4 py-2 ">{counter.count}</p>  
        <button className="m-2 border-4" onClick={Increment}>Increment</button>
        <button className="m-2 border-4" onClick={Decrement}>Decrement</button>
        <button className="m-2 border-4" onClick={Reset}>Reset</button>
      </div>
      </>
    )
};

const Component3 = () => {
    const { counter, Increment, Decrement, Reset} = useCounter()
    return (
      <>
      <div>
      <p>Component 3</p>
        <p className="bg-pink-300 px-4 py-2 ">{counter.count}</p>  
        <button className="m-2 border-4" onClick={Increment}>Increment</button>
        <button className="m-2 border-4" onClick={Decrement}>Decrement</button>
        <button className="m-2 border-4" onClick={Reset}>Reset</button>
      </div>
      </>
    )
};

export default Use_reducer_use_context;


