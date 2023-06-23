import React from 'react'

const ChildComp=({count,incrementCounter,myName})=> {
  const greeting=()=>
  {
    window.alert(`Welcome You ${myName}In YCP`)
  }
  return (
    <div>
      <h2>This is child Function Component</h2>
      <p>My COunter Value is:{count}</p>
      <button type='button' onClick={incrementCounter}>Counter++</button>
      <button type='button' onClick={greeting}>greeting</button>
    </div>
  )
}

export default ChildComp
