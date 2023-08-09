// import React from 'react'
// function BindingEventHandlers() {
//   return (
//     <div>
//     </div>
//   )
// }
// export default BindingEventHandlers
import React,{Component} from "react";
export default class BindingEventHandlers extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: "Hello",
    };
  // this.handleClick = this.handleClick.bind(this)
  }
  //   handleClick() {
  //     this.setState({
  //       message: "Goodbye",
  //     });
  //   }
  handleClick = () => {
    this.setState({
      message: "Goodbye",
    });
  };
  render() {
    return (
      <div>
        <p className="m-4">{this.state.message}</p>
        <button
          onClick={this.handleClick}
          //   onClick={this.handleClick.bind(this)}
          // onClick={()=> this.handleClick()}
          className="bg-red-400 rounded-md shadow-lg px-12"
        >
          Click
        </button>
      </div>
    );
  }
}
