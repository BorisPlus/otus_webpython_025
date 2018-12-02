import React, { Component } from "react";
import PropTypes from "prop-types";
import Message from "./Message";
export default class MessageList extends Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired
  };
  state = {
      messages: [],
      loaded: false,
      placeholder: "Loading..."
  };
  loadDataFromServer(component) {
        fetch(component.props.endpoint)
        .then(response => {
            if (response.status !== 200) {
              return component.setState({ placeholder: "Something went wrong" });
            }
            return response.json();
        })
      .then(data => component.setState({ messages: messages, loaded: true }));
    }
    componentDidMount() {
        this.loadDataFromServer(this);
        setInterval(this.loadDataFromServer.bind(null, this), 5000);
    }
  render() {
    const { messages, loaded, placeholder } = this.state;
    if (!loaded) {
        return <p>{placeholder}</p>;
    }
    if (loaded && messages.length === 0) {
        return <p>Nothing to show</p>;
    }
    const messages_obj = this.props.messages.map((message) =>
         <Message name={message.name}
                message={message.message}
                created_at={message.created_at} />
      );
    return
        <div>
            {messages_obj}
        </div>;
  }
}