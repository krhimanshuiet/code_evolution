import React, { useCallback, useEffect, useState } from 'react'

function List({getItems}){
    const [items , setItems] = useState([])


    useEffect(()=>{
        console.log("setItems called")
        setItems(getItems())
    },[getItems])

    return items.map(item => <div key={item}>{item}</div>)

}

// useMemo dose not return a function it just returns the value of the function while useCallback return the whole function

function UseCallBack() {
    const [number , setNumber] = useState(1);
    const [dark , setDark] = useState(false);

    const getItems = useCallback(() => {
        return [number , number+1 , number+2];
    },[number])

    const theme = {
        backgroundColor : dark ? '#333' : '#FFF',
        color : dark ? '#FFF' : '#333'
    }
  return (
    <div style={theme}>
        <input
        type='number'
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))}
        />
        <button onClick={()=>setDark(prev => !prev)}>Toggle Theme</button>
        <List getItems={getItems}/>
      
    </div>
  )
}

export default UseCallBack
