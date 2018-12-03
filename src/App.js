import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {number: 0}
  upadteAddNumber = () => { this.setState({number: this.state.number+1}) }
  upadteMinusNumber = () => { this.setState({number: this.state.number-1}) }
  render() {
    return (
      <div>
        <button onClick= {this.upadteAddNumber}>+</button>{this.state.number}<button onClick= {this.upadteMinusNumber}>-</button>
      </div>
    );
  }
}
export default App;
