import React, { useEffect, useState } from "react";

function UseEffect2() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    console.log('====================================');
    console.log("caalled resize");
    console.log('====================================');
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {  // it runs first
        window.removeEventListener("resize", handleResize);
    }
  }, []);
  return <div>{windowWidth}</div>;
}

export default UseEffect2;
