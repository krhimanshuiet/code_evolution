import React from 'react'
import { useSelector , useDispatch } from 'react-redux';
import {increment , decrement , reset , incementByAmount} from "./counterSlice";
import { useState } from 'react';


const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const [incrementAmount , setIncrementAmount]= useState(0)
    const addValue = Number(incrementAmount) || 0;
    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset())
    }
  return (
    <section className='mt-20'>
        <p className='text-3xl  font-extrabold '>{count}</p>
        <div className='mt-5'>
            <button className='p-5 mr-2 bg-green-400' onClick={() => dispatch(increment())}>+</button>
            <button className='p-5 mr-2 bg-green-200' onClick={() => dispatch(incementByAmount(5))}>increment by 5</button>
            <button className='p-5 mr-2 bg-slate-400' onClick={() => dispatch(reset())}>reset</button>
            <button className='p-5 bg-red-400' onClick={() => dispatch(decrement())}>-</button>
        </div>
        <input type='text' value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
        <div>
        <button className='p-5 mr-2' onClick={() => dispatch(incementByAmount(addValue))}>addAmount</button>
        <button className='p-5 ' onClick={() => resetAll()}>reset</button>
        </div>
    </section>
  )
}

export default Counter
