import React,{Component} from 'react'

const Hoc = (WrapperComp) => {

    class HocComp extends Component{
        constructor(props) {
          super(props)
        
          this.state = {
             count:0
          }
        }
        CounterIncrement=()=>{
            this.setState((prevState)=>({count:prevState.count+1}));
        }
        render(){
            //const{count}=this.state;
            return <WrapperComp {...this.props} count={this.state.count} CounterIncrement={this.CounterIncrement}></WrapperComp>
              
        }

    }
  return HocComp;
}

export default Hoc
