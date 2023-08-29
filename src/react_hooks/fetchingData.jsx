import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchingData = () => {
  const [posts, setPosts] = useState({});
  const [post, setPost] = useState(null);
  const [idFromButtonClick , setIdFromButtonClick] = useState(1)
  const [id ,setId] = useState(1)

  function handleClick(){
    setIdFromButtonClick(id);
  }

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => setPost(res.data))
      .catch((error) => {
        console.log("error", error);
      });
  },[idFromButtonClick]);
  return(
    <>
    <input type="text" value={id} onChange={(e) => setId(e.target.value)}/>
    <button onClick={handleClick}>fetch post</button>
    <div>
      <h1><span>{post?.id}</span>{post?.title}</h1>
      <p>{post?.body}</p>
    </div>
    {/* <ul>
      {posts.length > 0 && posts.map(post => <li key={post.id}>{post.title}</li>)}
    </ul> */}
    </>
  )
};

export default FetchingData;
