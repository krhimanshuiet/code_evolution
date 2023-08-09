import React, { Component } from "react";

export default class ConditionalRendering extends Component {
  constructor(props) {
    super();

    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    return (
      <div>
        <p>Welcome to our website </p>
        {this.state.isLoggedIn ? (
          <p className="bg-red-400">welcome viswas</p>
        ) : (
          <p className="bg-red-400">welcome guest</p>
        )}

        {!this.state.isLoggedIn && (
          <button
            className="bg-green-400 rounded shadow px-12 m-2"
            onClick={() =>
              this.setState({ isLoggedIn: !this.state.isLoggedIn })
            }
          >
            Login
          </button>
        )}
      </div>
    );
  }
}

// ternery operator  - ? :
// short circuit operator - &&
