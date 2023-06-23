import React, { Component, PureComponent } from 'react'
import Component2 from './Component2'
export class Component1 extends PureComponent{

    constructor(props) {
      super(props)
    
      this.state = {
         myName:"Tejas"
         
      }
    }
    changeName=()=>{
        this.setState((prevState)=>({myName:"Suraj"}));
    }
    
  render() {
   
    const {myName} =this.state;
    return (
      <div>
        <h1>Hello Component 1</h1>
        <p>My name is:<strong>{myName}</strong></p>
        <button className='btn btn-primary' type="button" onClick={this.changeName}>Click Here</button>
     <Component2 myName={myName}/>
      </div>
    )
  }
}

export default Component1
