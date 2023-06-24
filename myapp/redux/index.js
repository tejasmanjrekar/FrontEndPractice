//import { legacy_createStore } from "redux";
const redux=require('redux');
const createStore=redux.legacy_createStore;

//action code
const BUY_CAKE ="BUY_CAKE"
const BUY_ICECREAM="BUY_ICECREAM"
function buy_cake (){
   return{
    
        type:BUY_CAKE,
        
    
   } 
}

function buy_icecream(){
    return{
        type:BUY_ICECREAM
    }
}

//reducer code

const initialState={
    numberOfCake:20,
    numberOfIceCream:30
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:return {
            ...state,
    numberOfCake:state.numberOfCake-1
    
        }  
        case BUY_ICECREAM:return{
            ...state,
            numberOfIceCream:state.numberOfIceCream-3
        }
        default: return state  
    }
}

//store code 
const store=createStore(reducer);
console.log("Intial State is:",store.getState());
const unsubsribe = store.subscribe(()=>console.log("updated state",store.getState()));
store.dispatch(buy_cake());
store.dispatch(buy_cake());
store.dispatch(buy_icecream());
store.dispatch(buy_icecream());
unsubsribe();