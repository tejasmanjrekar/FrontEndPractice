import React, { Component } from "react";

class FavColor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "red",
    };
  }
    // static getDerivedStateFromProps(props, state) {
    //   return {
    //     color: props.color,
    //   };
    // }
    shouldComponentUpdate(){
        return true;
    }
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ color: "Green" });
//     }, 2000);
 // }
 getSnapshotBeforeUpdate(prevProps,prevState){
document.getElementById("beforeupdate").innerHTML=`Before update my favorite color was :${prevState.color}`;
 }
 changeColor=()=>{
    this.setState({color:"Blue"});
 }
 componentDidUpdate(){
    document.getElementById("afterupdate").innerHTML=`After update my favorite color was :${this.state.color}`;
 }
  render() {
    const { color } = this.state;
    return (
      <div>
        <h2>My Favorite Color Is</h2>
        <p>
          My Favorite Color is <strong>{color}</strong>
        </p>
        <button type='button' onClick={this.changeColor}>updateColor</button>
        <div id='beforeupdate'></div>
        <div id='afterupdate'></div>
      </div>
    );
  }
}

export default FavColor;