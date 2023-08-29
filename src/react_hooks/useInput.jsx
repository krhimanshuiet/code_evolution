import React, { useState } from "react";

const useInput = (initialState = "") => {
  const [value, setValue] = useState(initialState);
  const reset = () => {
    setValue(initialState);
  };
  const bind = {
    value:value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };

  return [value, bind, reset];
};

const Input = () => {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetlastName] = useInput("");
  // const [firstName ,setFirstName] = useState('')
  // const [lastName ,setLastName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert(`${firstName} and ${lastName}`);
    resetFirstName();
    resetlastName();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input {...bindFirstName} type="text" />

        <label>Last Name</label>
        <input {...bindLastName} type="text" />

        <button>submit</button>
      </form>
    </div>
  );
};

export default Input;
