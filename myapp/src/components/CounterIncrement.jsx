import React, { Component } from 'react'
import Hoc from './Hoc'
export class CounterIncrement extends Component {

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
        <h1>This is count increment</h1>
        <h3>{count}</h3>
        <button type='button' className='btn btn-outline-primary' onClick={CounterIncrement}>Increment </button>
      </div>
    )
  }
}

export default Hoc(CounterIncrement)
