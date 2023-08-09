import React, { useState, useMemo, useEffect } from "react";

function UseMemo() {
  const [number, setNumber] = useState(() => 0);
  const [dark, setDark] = useState(() => true);
  // let doubleNumber = number*2;
  const doubleNumber = useMemo(() => {
    console.log("useMemo called");
    return slowFunction(number);
  }, [number]);


  const themeStyle = useMemo(()=>{
    return {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
      }
  },[dark])
/* 
TODO:due to refrential equality when we are using useEffect and 
it depends upon the themestyle then if we change the number then also useeffect will be called 
due to refrential equality means themestyle object will be created again and again and it will be created
 newely at diffrent memory locations every time so we can put that object in useMemo so it will give memoised value
*/
  useEffect(() => {
    console.log("useEffect called and theme is changed");
  }, [themeStyle]);


  return (
    <div>
      {console.log("component rendered")}
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyle}>{doubleNumber}</div>
    </div>
  );
}

function slowFunction(number) {
  // console.log("calling slow function");
  for (let i = 0; i <= 1000000; i++) {}
  return number * 2;
}

export default UseMemo;

//TODO: the diffrence between useMemo and useEffect is useMemo runs before component renders and useEffect runs after the component render

/*
TODO:Both useState and useMemo will remember a value across renders. The difference is that:
useMemo does not cause a re-render, while useState does
useMemo only runs when its dependencies (if any) have changed, while setSomeState (second array item returned by useState) does not have such a dependency array
TODO:Both useMemo and useEffect only runs when their dependencies change (if any). The difference is that:
useEffect runs after a render happens, while useMemo runs before 

--------------------*--------------*------------------------------*-----------------------*
TODO:useState is causing a re-render on the call of the setState method (second element in the array returned). It does not have any dependencies like useMemo or useEffect.

TODO:useMemo only recalculates a value if the elements in its dependency array change (if there are no dependencies - i.e. the array is empty, it will recalculate only once). If the array is left out, it will recalculate on every render. Calling the function does not cause a re-render. Also it runs during the render of the component and not before.

TODO:useEffect is called after each render, if elements in its dependency array have changed or the array is left out. If the array is empty, it will only be run once on the initial mount (and unmount if you return a cleanup function).
*/



/*
TODO:The return value of useEffect(callback, [dependency]) is void and It executes after render().
The return value of useMemo(callback, [dependency]) is NOT void but memoized value and It executes DURING render().
useEffect() can give same optimization as of useMemo() under the following circumstances:

The state variable used in the expensive computation (i.e., count1) is the only dependency of the useEffect.
When we don't mind storing the expensively computed value in state variable.
const [count1, setCount1] = useState(0);
const [expensiveValue, setExpensiveValue] = useState(null);
useEffect(() => {
    console.log("I am performing expensive computation");
    setExpensiveValue(((count1 * 1000) % 12.4) * 51000 - 4000);
  }, [count1]);   
Only difference is, useEffect() makes the expensively computed value available after render() while useMemo() makes the value available during the render().
Most of the time it does not matter because if that value has been calculated for rendering in the UI, useEffect() and useMemo() both will make the value available before browser finishes painting.
*/