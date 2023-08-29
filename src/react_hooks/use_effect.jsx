import React, { useEffect, useState } from "react";

/*
use effect - side effects
function inside the use effect is executed after every render of component  
*/

export const Use_effect = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    console.log("mouse move");
    setMouse({ x: e.clientX, y: e.clientY });
  }

  useEffect(() => {
    console.log("useeffect function called");
    window.addEventListener("mousemove", handleMouseMove);
    document.title = `you clicked ${counter} times`;
    return () => {
      console.log("component unmounted");
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [counter]);

  return (
    <>
      <div>
        <div>use_effect</div>
        <input
          className="outline-0 border-2 border-blue-300 rounded-xl"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h1 className="text-2xl font-bold text-center">
          counter clicked {counter} times
        </h1>
        <h1 className="text-2xl font-bold text-center">your name is {name}</h1>
        <h1 className="text-2xl font-bold text-center">
          mouse position is x:{mouse.x} , y:{mouse.y}
        </h1>
        <button
          className="bg-blue-300 px-2 py-1 rounded-lg"
          onClick={() => setCounter((prev) => prev + 1)}
        >
          +
        </button>
      </div>
    </>
  );
};

const Use = () => {
  const [display, setDisplay] = useState(false);
  return (
    <>
      {display && <Use_effect />}
      <button
        className="bg-blue-300 px-2 py-1 rounded-lg mt-4"
        onClick={() => setDisplay((prev) => !prev)}
      >
        toggle dispaly
      </button>
    </>
  );
};

export default Use;
