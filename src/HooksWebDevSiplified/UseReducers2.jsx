import React, { useReducer, useState , lazy } from "react";
const Todo = lazy(() => import("./Todo"));

// import { Todo } from "./Todo";


export const ACTIONS = {
  ADD: "ADD_TODO",
  TOGGLE: "TOGGLE_TODO",
  REMOVE: "REMOVE_TODO",
};



function reducer(todos, action){
  switch(action.type) {
    case ACTIONS.ADD:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.REMOVE:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
};

function newTodo(name) {
    return { id: Date.now(), name: name, complete: false };
  }

export default function UseReducers2() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    name === "" ? <></> :
    dispatch({ type: ACTIONS.ADD, payload: { name: name } });
    setName("");
  };
  return (
    <>
    <div className="bg-yellow-300 p-4 rounded shadow m-2 font-bold text-2xl ">TODO APPLICATION</div>
      <form onSubmit={handleSubmit}>
        <input
        className="bg-slate-50 py-4 px-10 m-2 border-4 border-indigo-600  shadow-md rounded-sm"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button className="bg-green-500 shadow-md rounded-md p-3 m-2" >Add Your Task</button>
      </form>

      {todos &&
        todos.map((todo) =>  <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
        )}
    </>
  );
}

