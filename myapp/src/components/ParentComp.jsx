import React, { Component } from 'react'
import ChildComp from './ChildComp'

class ParentComp extends Component {
        constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
      incrementCounter=()=>{
        this.setState((prevState)=>({count:prevState.count+1}));
      }
    render() {
        const {count}=this.state;
    return (
      <div>
        <h2>This is parent Component</h2>
        <p>The counter value is {count}</p>
        <button type='button' onClick={this.incrementCounter}>Counter++</button>
        <hr />
        <ChildComp count={count} incrementCounter={this.incrementCounter} myName={"Teja"}/>
      </div>
    )
  }
 
  
}

export default ParentComp
