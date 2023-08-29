import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";
const UserView = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();


  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);
  return (
    <div>
      <h2 className="text-black font-bold text-3xl">List of Users</h2>
      <button className='bg-yellow-300 px-2 py-1 m-1 font-light text-xl rounded-lg' onClick={() => dispatch(fetchUsers())}>fetch users</button>
      {user.loading ? (
        "Loading users..."
      ) : (user.error  === undefined && !user.loading) ? (
        <p>{"something went wrong"}</p>
      ) : (
        <ul>
          {user.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserView;
