import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState((prevState) =>({
      count : prevState.count +1
    }))
  }

  incrementFive(){
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <>
        <div>Counter - {this.state.count}</div>
        <button
          className="bg-red-300 rounded p-2 shadow-md "
          onClick={() => {
            this.incrementFive();
          }}
        >
          Increment
        </button>
      </>
    );
  }
}

/* 
1.setState is asynchronous console.log() runs before the setState function so console value is always less than render value
2.always make use of setState and never use state directly
3.code has to be executed after the state has been updated , ? Place that code in the call back function which is the second argument to the setState method
4.whenever we have to update state based on the previous state value , pass the function as an argumnent instead of the regular object
*/
