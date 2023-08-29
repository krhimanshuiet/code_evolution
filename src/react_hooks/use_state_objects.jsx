import React, { useState } from "react";

const Use_state_objects = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <form>
      <input
        className="rounded-lg m-2 outline-0 border-blue-500 border-2"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
        type="text"
      />
      <input
        className="rounded-lg m-2 outline-0 border-blue-500 border-2"
        value={name.lastName}
        type="text"
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h2 className="bg-green-200 p-2 text-2xl font-bold">{name.firstName}</h2>
      <h2 className="bg-green-200 p-2 text-2xl font-bold">{name.lastName}</h2>
    </form>
  );
};

export default Use_state_objects;
