import React, { Component } from 'react'

class CounterComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    greeting = () => {
        window.alert("Good Morning Students");
    }
    greeting1 = (stdName) => {
        window.alert(`Welcome You ${stdName}`);
    }
    counterIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    }
    render() {
        const { count } = this.state;
        return (
            <div>
                <h2>This is my Counter Component</h2>
                <p>Counter value is :<strong>{count}</strong></p>
                <button type='button' onClick={this.greeting}>Greeting</button> &nbsp;

                <button type='button' onClick={() => this.greeting1("Teja")}>Greeting1</button> <br/>

                <button type='button' onClick={this.counterIncrement}>Count ++</button> 
                
                <h2 onMouseOver={this.counterIncrement}>Hover On Me to Increment Counter value</h2>
            </div>
        )
    }
}

export default CounterComponent
