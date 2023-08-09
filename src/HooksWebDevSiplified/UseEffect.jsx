import React, { useEffect, useState } from "react";


const UserCard = ({users}) => {
    console.log("props" ,users)
    const {id , name , username , email} = users;

    console.log('====================================');
    console.log(id , name , username , email);
    console.log('====================================');
 return (
    <div className="p-10 m-2 shadow-lg bg-pink-300 flex flex-col  ">
    <h1>{id}</h1>
    <h1>{name}</h1>
    <h1>{username}</h1>
    <h1>{email}</h1>
    {/* <h1>Adress: {users?.address}</h1> */}
 
</div>
 )
}




const PostCard = ({id , userId , title ,body  }) => {
    <div className="p-10 shadow-lg bg-pink-300 flex flex-row justify-start items-center">

    </div>
}

const CommnentCard = ({id , userId , title , }) => {
    <div className="p-10 shadow-lg bg-pink-300 flex flex-row justify-start items-center">

    </div>
}


function UseEffect() {
  const [resourseType, setResourseType] = useState("posts");

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourseType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourseType]);
  return (
    <>
      <div>
        <button
          className="border-2 p-5 text-center text-lg font-bold bg-red-300"
          onClick={() => setResourseType("posts")}
        >
          Posts
        </button>
        <button
          className="border-2 p-5 text-center text-lg font-bold bg-red-300"
          onClick={() => setResourseType("users")}
        >
          Users
        </button>
        <button
          className="border-2 p-5 text-center text-lg font-bold bg-red-300"
          onClick={() => setResourseType("comments")}
        >
          Comments
        </button>
      </div>
      <h1>{resourseType}</h1>
      {items.map((item, index) => {
        return (
            resourseType === "users" ? <UserCard users={item} key={item.id}/> : <div key={index}>{JSON.stringify(item)}</div>
        );
      })}
    </>
  );
}

export default UseEffect;
