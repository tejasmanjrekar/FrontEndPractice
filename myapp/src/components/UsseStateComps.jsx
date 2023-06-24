import React, { useState } from 'react'

const  UsseStateComps=()=> {
    const[city,setCity]=useState("Pune")
    const[emp,setEmp]=useState({id:501,name:"tejas",post:"React Devolper"});
    const changeCity=()=>{
        setCity("Mumbai");
    }
  return (
    <div>
      <h2>The  is UseState Function Component</h2>
      <p>I live in <strong>{city}</strong></p>
      <p>{`Id:${emp.id} Name:${emp.name} Post:${emp.post}`}</p>
      <button type="button" className='btn btn-primary ' onClick={changeCity}>Change City</button>
    </div>
  )
}
export default  UsseStateComps;