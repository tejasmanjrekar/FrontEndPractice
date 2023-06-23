import React, { Component } from 'react'

 class RefComp extends Component {

    constructor(props) {
      super(props)
        this.inputref= React.createRef();
      this.state = {
         
      }
    }
    accessInput=()=>{
        this.inputref.current.focus();
        console.log(this.inputref.current.value)
    }
  render() {
    return (
      <div className='container bg-secondary'> 
        <h1>This is Ref Component</h1>
        <input type='text' name='mytxt' ref={this.inputref}/> <br />
        <button type='button' className='btn btn-secondary' onClick={this.accessInput}>Check It</button>
      </div>
    )
  }
}

export default RefComp
