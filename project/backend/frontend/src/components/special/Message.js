import React, { Component } from "react";
import PropTypes from "prop-types";
export default class Message extends Component {
  render() {
    const { name, message } = this.state;
    return (
      <div className="newline">
        <div className="message">
          <div className="message_content">
            <b>{this.props.name}</b>: {this.props.message}
          </div>
          <div className="message_created_at">
            {this.props.created_at}
          </div>
        </div>
      </div>
    );
  }
}