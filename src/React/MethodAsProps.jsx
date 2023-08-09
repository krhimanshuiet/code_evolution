// import React from 'react'

// // we want child component to talk with parent component

// function ChildComponent(){
//   return (
//   <>
//   </>
//   )
// }

// function MethodAsProps() {
//   return (
//     <>
//     <ChildComponent/>
//     </>
//   )
// }

// export default MethodAsProps

import React, { Component } from "react";

function ChildComponent(props) {
  return (
    <div>
      <button
        className="bg-red-300 shadow rounded border-spacing-1 px-8"
        onClick={()=>props.greetHandler("child")}
      >
        GreetParent
      </button>
    </div>
  );
}

export default class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "ParentComponent",
    };
    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(childName) {
    alert(`Hello ${this.state.name} from ${childName}`);
  }

  render() {
    return (
      <>
        <ChildComponent greetHandler={this.greetParent} />
      </>
    );
  }
}
