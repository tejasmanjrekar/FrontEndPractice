import React, { Component } from 'react'
import Hoc from './Hoc'

export class HoverCounterInc extends Component {

    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count:0
    //   }
    // }
    // CounterIncrement=()=>{
    //     this.setState((prevState)=>({count:prevState.count+1}));
    // }
  render() {
    //const{count}=this.state;
    const{count,CounterIncrement}=this.props
    return (
      <div>
        <h1>This is Hover Increment </h1>
        <h3>{count}</h3>
        <h2 onMouseOver={CounterIncrement}>Please Touch Me</h2>
      </div>
    )
  }
}

export default Hoc(HoverCounterInc)
