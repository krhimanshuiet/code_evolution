import React, { useState } from "react";

function UseState() {
  const [counter, setCounter] = useState(()=>{
  console.log("hello")
  return 0}
  );

  const increment = () => {
    setCounter((prevValue) => prevValue + 1);
  };

  const decrement = () => {
    counter > 0 && setCounter((prevValue) => prevValue - 1);
  };

  return (
    <React.Fragment>
      <h1 className="m-2 bg-yellow-200 px-10 py-5 shadow-lg text=6xl font-bold capitalize">
        counter Application
      </h1>
      <div className="absolute m-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex sm:flex-nowrap flex-row justify-center ">
        <button onClick={decrement} className="p-10 bg-red-400 shadow-lg">
          <span className="text-4xl font-bold">-</span>
        </button>
        <span className="m-2 text-6xl font-bold text-center">{counter}</span>
        <button onClick={increment} className="p-10 bg-green-400 shadow-lg">
          <span className="text-4xl font-bold">+</span>
        </button>
      </div>
    </React.Fragment>
  );
}

export default UseState;
