import React, {useEffect,useState} from "react";

const details = [
  { id: "1", name: "ram", age: 90, skill: "react" },
  { id: "2", name: "shyaam", age: 60, skill: "react" },
  { id: "3", name: "mohan", age: 40, skill: "react" },
  { id: "4", name: "krishna", age: 30, skill: "react" },
  { id: "5", name: "mohak", age: 80, skill: "react" },
  { id: "6", name: "ritik", age: 60, skill: "react" },
  { id: "7", name: "rohit", age: 50, skill: "react" },
  { id: "8", name: "mohan ram", age: 20, skill: "react" },
  { id: "9", name: "ram singh", age: 80, skill: "react" },
];
function ListRenderingChild(props) {
  return (
    <div className="bg-orange-300 rounded  shadow-md m-2 p-4 w-1/4 flex flex-col  items-start flex-wrap">
      <h1 className="mx-2 text-sm font-bold">{props.person.name}</h1>
      <h1 className="mx-2 text-sm font-bold">{props.person.age}</h1>
      <h1 className="mx-2 text-sm font-bold">{props.person.skill}</h1>
    </div>
  );
}
function ListRendering() {
  const personList = details?.map((item) => (
    <ListRenderingChild person={item} key={item.id} />
  ));
  return <div>{personList}</div>;
}
export default ListRendering;
// key is not accessible in props

// index as anti-pattern 

// when to use index as key
// the items in your list do not have a unique id
// the list is a static list and will not change
//the list will never be reordered or filtered




