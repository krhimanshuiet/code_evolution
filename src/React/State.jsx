/*
props:
Props get passed to the component 
function parameter
props are imutable
props - function component
this.props - class component
state:
state is managed within the component itself
variable declared in the function body
state can change 
useState Hook - function component 
this.state - class component
*/

import React, { Component } from "react";

export default class State extends Component {
    constructor(){
        super()
        this.state = {
            message:"welcome visitor"
        };
    }

    changeMessage(){
        this.setState(
            {message:"Thank you for subscribing "}
        )
    }
  render() {
    return (
      <>
        <h1 className="bg-red-400 mt-20 h-10">{this.state.message}</h1>
        <button className="bg-green-400" onClick={()=>this.changeMessage()}>Subscribe</button>
      </>
    );
  }
}


