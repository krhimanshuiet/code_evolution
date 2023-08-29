import React, {useEffect,useReducer} from "react";
import axios from "axios";

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_SUCCESS':return {post:action.payload,loading:false , error:''};
    case 'FETCH_FAILED':return {error:'Something went wrong!', loading:false , post:{}}
    default:return state;
  }
}
const Data_fetching_use_reducer2 = () => {
  const [postApiData, dispatch] = useReducer(reducer, {
    loading: true,
    error: "",
    post: {},
  });
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        dispatch({type:'FETCH_SUCCESS' ,payload:res.data})
      })
      .catch((error) => {
        dispatch({type:'FETCH_FAILED'})
      });
  }, []);
  return (
    <>
      <div>Data fetching using use state</div>
      <div>
        {postApiData.loading ? "Loading" : postApiData.post.title}
        {postApiData.error ? postApiData.error : null}
      </div>
    </>
  );
};

export default Data_fetching_use_reducer2;
