import React from "react";
import { ACTIONS } from "./UseReducers2";

export default function Todo({ todo, dispatch }) {
  return (
    <div className="border-spacing-2 bg-blue-400 px-8  m-2 shadow-lg rounded ">
      <div className="flex flex-row justify-between items-center flex-wrap">
      <div className="flex flex-col items-start">
        <p className="text-xl font-bold">Task: {todo.name}</p>
        <p className="text-lg font-bold">Id: {todo.id}</p>
      </div>
      <div>
        {todo.complete ? <p className="p-2 bg-green-300 shadow-lg rounded-full text-center text-sm font-bold m-1">Completed</p> : <p className="p-2 bg-red-300 shadow-lg text-center m-1 rounded-3xl text-sm font-bold">Remaining</p>}
      </div>
      </div>
      <div className="flex flex-row justify-center items-center">
        <button
          className="bg-orange-400 shadow-md rounded p-2 m-2"
          onClick={() =>
            dispatch({ type: ACTIONS.TOGGLE, payload: { id: todo.id } })
          }
        >
          {todo.complete ? "Not Done" : "Done"}
        </button>
        <button
          className="bg-red-400 shadow-md rounded p-2 m-2"
          onClick={() =>
            dispatch({ type: ACTIONS.REMOVE, payload: { id: todo.id } })
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
}
