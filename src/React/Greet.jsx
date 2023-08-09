// import React from 'react'

// const Greet = () => {
//   return (
//     <React.Fragment>
//         <h1>Hello Himanshu</h1>
//     </React.Fragment>
//   )
// }

// export default Greet

// TODO: There are two types of exports
// Named exports which name can not be changed while importing it and another is default export which name can be changed while importing

import React from "react";

// export default class Greet extends Component {
//   render() {
//     return (
//         <React.Fragment>
//             <h1>Hello Himanshu</h1>
//             <Hello name="shivam" age = "23"/>
//             {HelloWorld}
//         </React.Fragment>
//     )
//   }
// }

// there are two types of components
/* 
1. Stateless functional components - after hooks it has became statefull as well.
2. Statefull class components

after hooks 
1.functional components
2.class components
*/

//TODO: JSX

/* Javascript XML - JSX
JSX makes our react code simpler and elegant

diffrences in jsx
class - className
for - htmlFor
onclick - onClick
tabindex - tabIndex
*/

const Hello = ({ name: myName, age: myAge, children: myChildren }) => (
  <>
    <div className="bg-red-200">
      <p>
        {myName} {myAge}
      </p>
      {myChildren}
    </div>
  </>
);

// children is the reserved key in props object
// props are imutable are readonly
const HelloWorld = (
  <h1 className="bg-pink-200 mt-2 w-1/2 h-20 shadow-lg text-center translate-x-1/2 translate-y-1/2 ">
    Hello every one
  </h1>
);

function Greet() {
  return (
    <div>
      <Hello name="Himanshu" age="12">
        <>
          <h2>Hello mumbai</h2>
          <p>Hello delhi</p>
        </>
      </Hello>
      <Hello name="shivam" age="14" />
      {HelloWorld}
    </div>
  );

  // ) without JSX

  // return React.createElement("div" , {id:"container" , className:"containerClass"} , React.createElement("h1" , {id:"heading" , className:"headingClass"} , "Hello world"))
}

export default Greet;
