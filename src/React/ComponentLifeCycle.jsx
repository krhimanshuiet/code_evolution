import React, { Component } from "react";

export class ComponentLifeCycleChild extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name: "himanshu",
        };
        console.log("lifecycle child constructor");
      }
    
      static getDerivedStateFromProps() {
        console.log(" lifecycle child getDerivedStateFromProps");
        return null;
      }

      shouldComponentUpdate(){
        console.log(" lifecycle child shouldComponentUpdate");
        return true;
      }
    
      getSnapshotBeforeUpdate(prevProps, nextState){
        console.log(" lifecycle child getSnapshotBeforeUpdate");
        return null
      }
    
      componentDidUpdate(){
        console.log(" lifecycle child componentDidUpdate");
      }
    
      componentDidMount() {
        console.log("lifecycle child componentDidMount");
      }
  render() {
    console.log(" lifecycle child render");
    return <div>ComponentLifeCycleChild</div>;
  }
}

export default class ComponentLifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "himanshu",
    };
    console.log("lifecycle constructor");
  }

  static getDerivedStateFromProps() {
    console.log(" lifecycle getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(){
    console.log(" lifecycle shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, nextState){
    console.log(" lifecycle getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(){
    console.log(" lifecycle componentDidUpdate");
  }

  componentDidMount() {
    console.log("lifecycle componentDidMount");
  }

  changeState = () =>  {
    this.setState({
        name:"himanshu singh"
    })

  }

  componentWillUnmount(){
    console.log("componentWillUnmount")
  }

  render() {
    console.log("lifecycle render");
    return(
        <>
        <div>ComponentLifeCycle</div>
        <button onClick={this.changeState}>change state</button>
        <ComponentLifeCycleChild/>
      </>
    )
  }
}

/*
mounting lifecycle methods
constructor(props)
static getDerivedStateFromProps(props , state)
render()
componentDidMount() 

updating lifecycle methods
static getDerivedStateFromProps(props , state)
shouldComponentUpdate(nextProps, nextState)
render()
getSnapshotBeforeUpdate(props , nextState)
componentDidUpdate(nextProps, nextState , snapshot)
*/
