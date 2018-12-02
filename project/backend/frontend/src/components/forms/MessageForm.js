import React, { Component } from "react";
import PropTypes from "prop-types";
export default class MessageForm extends Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired
  };
  state = {
    name: "",
    message: ""
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { name, message } = this.state;
    const flood = { name, message };
    const conf = {
      method: "post",
      body: JSON.stringify(flood),
      headers: new Headers({ "Content-Type": "application/json" })
    };
    fetch(this.props.endpoint, conf)
    .then(response => console.log(response))
    .then(() => this.setState({ name: this.state.name, message: "" }));
  };
  render() {
    const { name, message } = this.state;
    return (
      <div className="newline">
      <div className="form">

        <form onSubmit={this.handleSubmit}>
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Enter your nickname"
                onChange={this.handleChange}
                value={name}
                required
              />
              <input
                className="input"
                type="text"
                name="message"
                placeholder="Enter new message here"
                onChange={this.handleChange}
                value={message}
                required
              />
              <input
                className="submit"
                type="submit"
                name="submit"
                value="Send"
              />
        </form>
      </div>
      </div>
    );
  }
}