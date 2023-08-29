// import React, { useReducer } from "react";

// const ADDITION = 'ADD';
// const SUBTRACT = 'SUB'

// function ComplexReducer(state, action) {
//   switch (action.type) {
//     case ADDITION:
//       return { a: state.a + "+", b:state.b + "+", c: state.c + "+" };
//     case SUBTRACT:
//       return { a: state.a + "-", b: state.b + "-", c: state.c + "-" };
//     default:
//       return state;
//   }
// }

// const Use_reducer1 = () => {
//   const [state, dispatch] = useReducer(ComplexReducer, {
//     a: "himanshu",
//     b: "kumar",
//     c: "singh",
//   });
//   return (
//     <>
//       <p>{state.a}</p>
//       <p>{state.b}</p>
//       <p>{state.c}</p>
//       <button className="bg-green-300 border-2 px-2 hover:bg-pink-200 rounded py-1 m-2" onClick={() => dispatch({ type: "ADD" })}>add</button>
//       <button className="bg-red-300 border-2 px-2 hover:bg-orange-200 rounded py-1 m-2" onClick={() => dispatch({ type: "SUB" })}>sub</button>
//     </>
//   );
// };

// export default Use_reducer1;

import React, { useReducer } from "react";
const actionTypes = {
  increment: "Increment",
  increment2: "Increment2",
  decrement: "Decrement",
  decrement2: "Decrement2",
  reset: "Reset",
  reset2: "Reset2",
};
function reducer(counter, action) {
  switch (action.type) {
    case actionTypes.increment:
      return { ...counter, count: counter.count + action.value };

    case actionTypes.decrement:
      return { ...counter, count: Math.max(0,counter.count - action.value) };

    case actionTypes.increment2:
      return { ...counter, count2: counter.count2 + action.value };
    case actionTypes.decrement2:
      return { ...counter, count2: Math.max(0,counter.count2 - action.value) };

    case actionTypes.reset:
      return { ...counter , count: 0 };
    case actionTypes.reset2:
        return { ...counter,count2:0 };

    default:
      return counter;
  }
}

const Use_reducer2 = () => {
  const [counter, dispatch] = useReducer(reducer, { count: 0, count2: 0 });
  return (
    <div>
      <p className="bg-green-300 px-4 py-2 ">Counter 1 - {counter.count}</p>
      <p className="bg-pink-200 px-4 py-2 ">Counter 2 - {counter.count2}</p>
      <button
        className="m-2 border-4"
        onClick={() => dispatch({ type: actionTypes.increment, value: 1 })}
      >
        Increment
      </button>
      <button
        className="m-2 border-4"
        onClick={() => dispatch({ type: actionTypes.increment, value: 5 })}
      >
        Increment 5
      </button>
      <button
        className="m-2 border-4"
        onClick={() => dispatch({ type: actionTypes.decrement, value: 1 })}
      >
        Decrement
      </button>
      <button
        className="m-2 border-4"
        onClick={() => dispatch({ type: actionTypes.decrement, value: 5 })}
      >
        Decrement 5
      </button>
      <button
        className="m-2 border-4"
        onClick={() => dispatch({ type: actionTypes.reset })}
      >
        Reset
      </button>
      <br/>
      <button
        className="m-2 border-4"
        onClick={() => dispatch({ type: actionTypes.increment2, value: 1 })}
      >
        Increment2
      </button>
      <button
        className="m-2 border-4"
        onClick={() => dispatch({ type: actionTypes.increment2, value: 5 })}
      >
        Increment2 5
      </button>
      <button
        className="m-2 border-4"
        onClick={() => dispatch({ type: actionTypes.decrement2, value: 1 })}
      >
        Decrement2
      </button>
      <button
        className="m-2 border-4"
        onClick={() => dispatch({ type: actionTypes.decrement2, value: 5 })}
      >
        Decrement2 5
      </button>
      <button
        className="m-2 border-4"
        onClick={() => dispatch({ type: actionTypes.reset2 })}
      >
        Reset2
      </button>
    </div>
  );
};

export default Use_reducer2;
