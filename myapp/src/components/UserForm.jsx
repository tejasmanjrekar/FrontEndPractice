import  React, { Component } from 'react'

class UserForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            fname: '',
            pass: ''
        }
    }
    inputChangeHandler = (event) => {
        //    console.log(event.target.type);
        //    console.log(event.target.name);
        //    console.log(event.target.value);
        const { type, name, value } = event.target;
        this.setState({ [name]: value });
    }
    chekData = (event) => {
        event.preventDefault();
        if (this.state.fname === "") {
            window.alert("fname is required");
            return false;
        }
        if (!this.state.fname.match("^[a-zA-Z ]{3,20}$")) {
            window.alert("fname must contain only character min-3 and max-20");
            return false;
        }
    }
    render() {
        const { fname, pass } = this.state;
        return (
            <div className='container text-center pb-2' style={{ width: "400px" }}>
                <h2>This is User Form Component</h2>
                <form onSubmit={this.chekData}>
                    <label className='form-label'>Enter Your FullName:</label>
                    <input type='text' name='fname' className='form-control' onChange={this.inputChangeHandler} value={fname} />
                    <label className='form-label'>Enter Your Password:</label>
                    <input type='text' name='pass' className='form-control' onChange={this.inputChangeHandler} value={pass} />
                    <button type='submit' className='btn btn-primary mt-2'>Submit</button>
                </form>

            </div>
        )
    }
}

export default UserForm
