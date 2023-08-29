import React, { useEffect, useState } from "react";
/*
useeffect -  if you think dependency array is way to specify when you want to re
render the effect you are going to run into problem instaed dependency array should be thought of 
as a way to let react know every thing that the effect must watch for changes
*/
const IntervalCounter = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  //   function increment() {
  //     console.log("function called", timer);
  //     setTimer((prev) => prev + 1);
  //   }

  useEffect(() => {
    // const interval = setInterval(() => setTimer((prev) => prev + 1), 1000);
    // const interval = setInterval(increment, 1000);
    let interval;
    if (isRunning) {
      interval = setInterval(() => setTimer((prev) => prev + 1), 1000);
    }

    return () => {
      console.log("unmount");
      clearInterval(interval);
    };
  }, [isRunning]);
  return (
    <>
      <div>my timer is {timer}</div>
      {
        <button
          className="px-2 py-1 bg-blue-300 m-2 rounded outline-2"
          onClick={() => setIsRunning((prev) => !prev)}
        >
          {isRunning ? "stop" : "start"}
        </button>
      }
    </>
  );
};

export default IntervalCounter;
