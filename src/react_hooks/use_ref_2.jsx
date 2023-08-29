import React, { useEffect, useRef, useState } from 'react'

const Use_ref_2 = () => {
  const timerRef = useRef()
  const [timer , setTimer] = useState(0);
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimer(prev => prev+1)
    },1000)

    return () => {
      clearInterval(timerRef.current)
    }
  },[])
  return (
    <div>
      Timer:-{timer}
      <button onClick={() => clearInterval(timerRef.current)}>clear interval</button>
    </div>
  )
}

export default Use_ref_2