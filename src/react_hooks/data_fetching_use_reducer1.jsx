import React, {useState,useEffect} from 'react'
import axios from 'axios'


const Data_fetching_use_reducer1 = () => {
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState('');
    const [post ,setPost] = useState({});

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then((res) => {
            setLoading(false);
            setPost(res.data);
            setError('');
        })
        .catch((error) => {
            setLoading(false)
            setPost({});
            setError("Something went wrong!")
        })
    },[])
  return (
    <>
    <div>Data fetching using use state</div>
    <div>
        {loading ? 'Loading' : post.title}
        {error ? error : null}
    </div>
    </>
  )
}

export default Data_fetching_use_reducer1