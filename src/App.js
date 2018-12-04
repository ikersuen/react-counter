import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterGroup from './components/CounterGroup.js'

class App extends Component {
  render() {
    return (
      <div>
        <CounterGroup size={5}/>
      </div>
    );
  }
}
export default App;
