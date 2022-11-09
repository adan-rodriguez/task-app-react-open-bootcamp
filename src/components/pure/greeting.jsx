import PropTypes from "prop-types";
import React, { Component } from "react";

export class Greeting extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      age: 29,
    };
  }

  render() {
    return (
      <div>
        <h1>Hola {this.props.name}</h1>
        <h2>Tu edad es de: {this.state.age}</h2>
      </div>
    );
  }
}

export default Greeting;
