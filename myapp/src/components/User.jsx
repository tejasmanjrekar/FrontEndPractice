import React, { Component } from 'react'

class User extends Component {
    render() {
              if(this.props.name==="Tejas"){
                //throw new Error("Not a user");
                 return <h2>Not a User</h2>
              }
        return <p>This is <strong>{this.props.name}</strong></p>
    }
}

export default User
