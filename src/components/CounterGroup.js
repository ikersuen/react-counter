import React, { Component } from 'react'
import Counter from './Counter.js'
export default class CounterGroup extends Component {
  state = {
      input:0,
      counter: [],
      sum:0,
      number: 0
  }

  updateInput = (event) => {
    this.setState({
      input: event.target.value
    })
  }
  
  changeSize = (event) => {
    this.setState({
      sum: 0,
      counter: new Array(parseInt(this.state.input)).fill(0)
    })
  }

  updateSum=(delta) => {
      this.setState({sum: this.state.sum+delta})
  }

  increaseUpdate = (changedNum) => {
    this.setState({number: this.state.number + changedNum})
  }

  decreaseUpdate = (changedNum) => {
    this.setState({number: this.state.number - changedNum})
  }

  render() {
    return (
      <div>
        {this.state.counter.map(()=>(<Counter onUpdate={this.updateSum} onIncrease={this.increaseUpdate} onDecrease={this.decreaseUpdate} counterNum={this.state.number}/>))}
        <span>sum: {this.state.sum}</span>
        <input onChange={this.updateInput}></input><button onClick={this.changeSize}>generate</button>
      </div>
    )
  }
}

