import React, { useLayoutEffect, useState } from 'react'
import Modal from './Modal'

function UseLayoutEffect() {
    const [count , setCount] = useState(0)
    useLayoutEffect(()=>{
        console.log("outside",count)
    },[count])
  return (
    <div>
      <button onClick={()=>{setCount(c=>c+1)}}>Increment</button>
      {console.log("inside",count)}
      <div>{count}</div>
      <Modal/>
    </div>
  )
}

export default UseLayoutEffect
