// controlled components

import React, { Component } from "react";

export default class BasicsOfForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      comments:'',
      topic:""
    };
  }

  handleChange = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  handleCommentChange = (event) => {
    this.setState({
      comments: event.target.value
    });
  }

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form className=" mt-5 w-1/2">
          <label>Name</label>
          <input
            type="text"
            value={this.state.userName}
            onChange={this.handleChange}
            className="ml-10"
          />

          <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value="react">react</option>
            <option value="react native">react native</option>
            <option value="react spring">react spring</option>
            <option value="redux">redux</option>
            <option value="react query">react query</option>
          </select>
          
          <label>Comments</label>
          <textarea  value={this.state.comments} onChange={this.handleCommentChange} />
        </form>

        <div className="bg-green-300 rounded shadow mt-10  w-1/2">
          <h1 className="text-lg font-bold">{this.state.userName}</h1>
          <h1 className="text-lg font-bold">{this.state.topic}</h1>
          <h1 className="text-lg font-bold">{this.state.comments}</h1>
        </div>
      </div>
    );
  }
}
