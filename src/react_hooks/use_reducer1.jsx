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
    increment:'Increment',
    decrement:'Decrement',
    reset:'Reset'
}
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

const Use_reducer1 = () => {
  const [counter, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <p className="bg-green-300 px-4 py-2 ">{counter.count}</p>  
      <button className="m-2 border-4" onClick={() => dispatch({type:actionTypes.increment})}>Increment</button>
      <button className="m-2 border-4" onClick={() => dispatch({type:actionTypes.decrement})}>Decrement</button>
      <button className="m-2 border-4" onClick={() => dispatch({type:actionTypes.reset})}>Reset</button>
    </div>
  );
};

export default Use_reducer1;
