import { useState } from 'react'

const useCounter = (initialCount = 0 , value = 1) => {
    const [count , setCount] = useState(initialCount);

    const increment = () => {
        setCount(prev => prev + value)
    }

    const decrement = () => {
        setCount(prev => prev - value)
    }

    const reset = () => {
        setCount(0)
    }

    return [count,increment ,decrement,reset]
}





const Counter = () => {
    const [count,increment ,decrement,reset] = useCounter(10,10);
  return (
    <div>
        <p>count is {count}</p>
        <button className='bg-green-300 px-2 py-1 rounded shadow-md' onClick={increment}>increment</button>
        <button className='bg-yellow-300 px-2 py-1 rounded shadow-md' onClick={decrement}>decrement</button>
        <button className='bg-red-300 px-2 py-1 rounded shadow-md' onClick={reset}>reset</button>
    </div>
  )
}

export default Counter
