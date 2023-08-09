import React, { useState, useTransition } from "react";

export default function UseTransition() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const LIST_SIZE = 20000;

  function handleChange(e) {
    setInput(e.target.value);
    startTransition(() => {
      let l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  }

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      {isPending ? (
        <div>Loading...</div>
      ) : (
        list.map((item, index) => {
          return (
            <div style={{ backgroundColor: "red" }} key={index}>
              {item}
            </div>
          );
        })
      )}
    </div>
  );
}
