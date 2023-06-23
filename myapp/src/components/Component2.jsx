import React, { PureComponent } from 'react'

export class Component2 extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    console.log("Component 2 is called")
    return (
      <div>
        <h2>This Is Component 2</h2>
        <p>My Name is :{this.props.myName}</p>
        
      </div>
    )
  }
}

export default Component2
