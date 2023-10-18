import React, { Component } from "react";
import Button from "react-bootstrap/esm/Button";

export default class Login extends Component {
  username = "Le Tat Dinh";

  state = {
    login: false,
  };

  login = () => {
    this.setState({
      login: true,
    });
  };

  render() {
    return (
      <div className="container text-center">
        {this.state.login ? <h3>Hello {this.username}</h3> : <button onClick={this.login}>Login</button>}
      </div>
    );
  }
}
