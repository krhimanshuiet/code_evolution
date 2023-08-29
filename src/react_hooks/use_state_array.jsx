import React, { useState } from "react";

const Use_state_array = () => {
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems([
      ...items,
      { id: items.length, value: Math.floor(Math.random() * 10) + 1 },
    ]);
  };
  return (
    <div>
      <button className="bg-yellow-200 rounded-md px-2 py-1 my-4" onClick={addItem}>add a number</button>
      <ul>
        {items.map((item) => (
          <li
            className="bg-pink-300 rounded-md p-2 my-2 mx-auto w-1/2"
            key={item.id}
          >
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Use_state_array;
