import React, { Component } from "react";
import { render } from "@testing-library/react";
import axios from "axios";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      userId: ''
    };
  }
  handleTitleChange = event => {
    this.setState({
      title: event.target.value
    });
  };

  handleBodyChange = event => {
    this.setState({
      body: event.target.value
    });
  };

  handleIdChange = event => {
    this.setState({
      userId: parseInt(event.target.value,10)
    });
  };

  handleSubmit = event => {
      event.preventDefault();
      axios.post('https://jsonplaceholder.typicode.com/posts', {
       ...this.state
     })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
          </label>
          <label>
            Body:
            <input
              type="text"
              value={this.state.body}
              onChange={this.handleBodyChange}
            />
          </label>
          <label>
            Id:
            <input
              type="text"
              value={this.state.userId}
              onChange={this.handleIdChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
