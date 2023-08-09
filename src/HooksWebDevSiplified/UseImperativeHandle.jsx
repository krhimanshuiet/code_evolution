import React, { useImperativeHandle, useRef, useState , forwardRef } from 'react'

const CustomInput = forwardRef(({...props} , ref) => {

    useImperativeHandle(ref , ()=>{
        return {alertHi:() => alert(props.value)}
    },[props.value])
    return (
        <input
        {...props}
        style={{
            backgroundColor:"red"

        }}
        />
    )
})


function UseImperativeHandle() {
    const [value , setValue] = useState("red");
    const inputref = useRef();
  return (
    <div>
        <CustomInput
        ref={inputref}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />
        <br/>
        <button onClick={() => inputref.current.alertHi()}>focus</button>
      
    </div>
  )
}

export default UseImperativeHandle
