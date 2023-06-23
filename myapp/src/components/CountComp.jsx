import React, { Component } from "react";

class CountComp extends Component {

    constructor() {
        super();
        this.state = {
            count: 0,
            city:"Pune"
        }

        setTimeout(()=>{
            // this.setState({count:this.state.count+1,city:"Mumbai"});
            this.setState((prevState)=>({count:prevState.count+1,city:"Mumbai"}));
        },2000);
    }

    render() {
        const {count,city} = this.state; // destructure state
        const {institute} = this.props; // destructuring props
        return <div>
            <h2>This is Count Class Component</h2>
            <p>My Institute Namer is <strong>{institute}</strong></p>
            {/* <p>My City Is : <strong>{this.state.city}</strong></p>
            <p>My Count Value Is : <strong>{this.state.count}</strong></p> */}
        <p>My City Is : <strong>{city}</strong></p>
            <p>My Count Value Is : <strong>{count}</strong></p>
        </div>
    }
}
export default CountComp;