import React, { useEffect, useRef, useState } from 'react'

function UseRef() {

    const [name , setName] = useState();
    const myInputRef = useRef(null)
    const prevName = useRef(null)

    const focus = () => {
        myInputRef.current.focus();
        myInputRef.current.style.backgroundColor ="red"
        myInputRef.current.value = "himanshu"
    }

    useEffect(()=> {
        prevName.current = name
    }, [name])


  return (
    <div>
      <input ref={myInputRef} value={name} onChange={e => setName(e.target.value)}/>
      <div>My Name is {name} and used to be {prevName.current}</div>
      <button onClick={focus}>Focus</button>
    </div>
  )
}

export default UseRef
