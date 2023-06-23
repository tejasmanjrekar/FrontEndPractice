import { Component } from "react";
import Data from "../shared/constant/constantData";
import {Outlet} from 'react-router-dom';
class ToggleImg extends Component{
    constructor(props){
        super(props)
        this.isCond=false;
        this.state={
            imgPath:Data.samosa,
            imgName:"Samosa"
        }
    }
    chaneImg=()=>{
        this.isCond=!this.isCond;
        if(this.isCond)
        this.setState({imgPath:Data.jalebi,imgName:"jalebi"});
        else
        this.setState({imgPath:Data.samosa,imgName:"Samosa"});
    }  
 render(){
    const{imgPath,imgName}=this.state
    return(
        <div>
            <h2>This is my Toggle Image Component</h2>
            <img src={imgPath} alt={imgName} height="200px"/><br />
            <h2>{imgName}</h2><br />
            <button type='button' onClick={this.chaneImg}>ToggleImg</button>
        <Outlet/>
        </div>
    )
 }
}
export default ToggleImg