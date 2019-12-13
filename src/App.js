import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Card } from "./components/Card";
import Form from "./components/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      photos: null
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then(albums => {
        this.setState({ photos: albums });
      }).catch(err => {
        console.log(err)
      })
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <h2>{this.state.message}</h2>
        </header>
        <Navbar />
        <div>
        <Card
        photos={this.state.photos}
         />
        </div>
       
        <Form />
      </div>
    );
  }
}
export default App;
