import React, { Component } from 'react'
import Counter from './Counter.js'
export default class CounterGroup extends Component {
  state = {
      input:0,
      counter: [],
      sum:0,
      counters: new Array(5).fill(0).map(() => {return {number: 0, id: new Date().getTime + Math.random()}})
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

  increaseUpdate = (changedNum, id) => {
    const counters = this.state.counters.map(
      counterItem => {
        if(counterItem.id === id){
          return {number: counterItem.number + changedNum, id: id}
        } else {
          return counterItem
        }
      }
    )
    this.setState({counters: counters})
  }

  decreaseUpdate = (changedNum) => {
    this.setState({number: this.state.number - changedNum})
  }

  render() {
    return (
      <div>
        {this.state.counters.map( counterItem =>(
          <Counter 
          id={counterItem.id}
          onUpdate={this.updateSum} 
          onIncrease={this.increaseUpdate} 
          onDecrease={this.decreaseUpdate} 
          counterNum={counterItem.number}/>
          )
        )}
        <span>sum: {this.state.sum}</span>
        <input onChange={this.updateInput}></input><button onClick={this.changeSize}>generate</button>
      </div>
    )
  }
}

