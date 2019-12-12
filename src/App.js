import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Card from './components/Card'
import Form from './components/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      message:'',
    }
  }

  componentDidMount(){
    this.setState({
      message:'Hellooooo'
    })
  }



  render (){
    return (
       <div className="App">
      <header className="App-header">
     <h2>{this.state.message}</h2>
      </header>
    </div>
    )
  }
}
export default App;
