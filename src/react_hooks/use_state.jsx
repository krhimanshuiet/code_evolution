import React, { useState } from "react";

const Use_state = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>Counter: {count}</div>
      <button
        className="bg-blue-300 px-2 py-1 rounded-md m-2 font-bold text-lg"
        onClick={() => setCount((prev) => Math.min(prev + 1 , 10))}
      >
        +
      </button>
      <button onClick={() => setCount(0)} className="bg-red-600 px-2 py-1 m-2 text-sm rounded-md ">reset</button>
      <button
        className="bg-red-300 px-2 py-1 rounded-md m-2 font-bold text-lg"
        onClick={() => setCount((prev) => Math.max(0, prev - 1))}
      >
        -
      </button>
    </>
  );
};

export default Use_state;

// import React, { Component } from "react";

// export class Use_state extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   incrementCount = () => {
//     this.setState({
//       count: Math.min(this.state.count + 1 , 10),
//     });
//   };

//   decrementCount = () => {
//     this.setState({
//       count: Math.max(0, this.state.count - 1),
//     });
//   };

//   render() {
//     return (
//       <>
//         <div>{this.state.count}</div>
//         <button
//           className="bg-blue-300 px-2 py-1 rounded-md m-2font-bold text-lg"
//           onClick={this.incrementCount}
//         >
//           +
//         </button>
//         <button
//           className="bg-red-300 px-2 py-1 rounded-md m-2 font-bold text-lg"
//           onClick={this.decrementCount}
//         >
//           -
//         </button>
//       </>
//     );
//   }
// }

// export default Use_state;
