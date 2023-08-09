import React, { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postSlice";
import { selectAllUsers } from "../users/usersSlice";
const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onAuthorChange = (e) => setUserId(e.target.value);

  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}> 
    {user.id}
    </option>
  ))


  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const onSavePostClick = () => {
    if (canSave) {
      dispatch(
        postAdded(title , content , userId)
      );

      setContent("");
      setTitle("");
    }
  };
  return (
    <section className="bg-slate-600 rounded-md ">
      <h2 className="text-3xl font-bold">ADD a new Post </h2>
      <form>
        <label htmlFor="postTitle" className="text-lg font-bold">
          Post Title
        </label>
        <br />
        <input
          className="bg-white rounded-md m-2 "
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChange}
        />
        <br />
        <label className="text-lg font-bold" htmlFor="postAuthor">Author</label>
        <br/>
        <select id="postAuthor" value={userId} onChange={onAuthorChange}>
            <option value=""></option>
            {usersOptions}
        </select>
        <br/>

        <label htmlFor="postContent" className="text-lg font-bold">
          Post Content
        </label>
        <br />
        <input
          className="bg-white rounded-md m-2"
          type="text"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChange}
        />
        <br />
        <button className={` ${canSave ? 'bg-green-500' : 'bg-slate-300'}  rounded  shadow-sm p-2 mb-2`} type="button" disabled={!canSave} onClick={onSavePostClick}>
          save post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
