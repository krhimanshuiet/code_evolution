import React, {useCallback, useState } from 'react'

const Use_Callback = () => {
  const [salary , setSalary] = useState(25)
  const [age , setAge] = useState(50000)
  const incrementSalary = useCallback(() => {
    setSalary(salary+1000)
  },[salary])
  const incrementAge = useCallback(() => {
    setAge(age+1)
  },[age])
  return (
    <>
    <div>use_Callback</div>
    <Title />
    <Count text="Age" count={age}/>
    <Button handleClick={incrementAge}>incrementAge</Button>
    <Count text="Salary" count={salary}/>
    <Button handleClick={incrementSalary}>incrementSalary</Button>
    </>
  )
}

export default Use_Callback



const Title = React.memo(() => {
  console.log("rendering title");
  return (
    <div>Title</div>
  )
})

const Count = React.memo(({text,count}) => {
  console.log("rendering count" , text , count);
  return (
    <div>Count - {text} {count}</div>
  )
})


const Button = React.memo(({handleClick,children}) => {
  console.log("rendering button -" , children);
  return (
    <>
    <button className='bg-red-300 border-4 px-2 py-1 rounded-lg text-3xl font-bold hover:bg-yellow-400' onClick={handleClick}>{children}</button>
    </>
  )
})


