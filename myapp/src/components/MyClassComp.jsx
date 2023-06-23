import { Component } from "react";

class MyClassComp extends Component{
    render(){
        return<React.Fragment>
        <div>

            <h1>This is My Class Component</h1>   
            <p>My Name is <strong>{this.props.name}</strong>, I am <strong>{this.props.post}</strong></p>
        </div>
        </React.Fragment>
        
    }
}
export default MyClassComp;