import React, { Component } from 'react'

export default class Counter extends Component {
  increase = () => {
     this.props.onUpdate(1)
     this.props.onIncrease(1)
  }

  decrease = () => {
    this.props.onUpdate(-1)
    this.props.onDecrease(1)
 }
  render() {
    return (
      <div>
        <button onClick= {this.increase}>+</button>{this.props.counterNum}<button onClick= {this.decrease}>-</button>
      </div>
    )
  }
}
