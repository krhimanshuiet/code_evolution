import React, { useMemo, useState , useDeferredValue, useEffect } from 'react'

function List({input}){
  const LIST_SIZE = 20000;
  const deferedValue = useDeferredValue(input)
  // for small period of time it does not change the value it keeps the old value for good user experience
  // so defered value does not change and in that case useMemo also not runs and our app becoms faster
  const list = useMemo(() => {
    const l = [];
    for(let i = 0 ; i < LIST_SIZE ; i++){
      l.push(<div key={i}>{deferedValue}</div>)
  }
  return l;
},[deferedValue]);

useEffect(()=>{
  console.log("input:" , input , "defred value:", deferedValue)
}, [input , deferedValue]);

return list

}


function UseDeferredValue() {
  const [input , setInput] = useState('')
  return (
    <div>
      <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
      <List input={input}/>
    </div>
  )
}

export default UseDeferredValue
