import React, { useState, useRef, useLayoutEffect } from "react";

function Modal() {
  const [show, setShow] = useState(false);
  const popup = useRef();
  const button = useRef();

  useLayoutEffect(() => {
    console.log("use layout effect")
    if(popup.current == null || button.current == null) return
        const {bottom} = button.current.getBoundingClientRect();
        popup.current.style.top =  `${bottom + 25}px`
    
  }, [show]);
  return (
    <React.Fragment>
        {console.log("inside the dom")}
      <div>
        <button ref={button} onClick={() => setShow((prev) => !prev)}>
          Click here
        </button>
      </div>
      {show && (
        <div style={{ position: "absolute"  }} ref={popup}>
          This is popup
        </div>
      )}
    </React.Fragment>
  );
}

export default Modal;
