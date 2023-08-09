import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { selectAllPosts , getPostsStatus , getPostsError , fetchPosts } from './postSlice'
import { useEffect } from 'react'
import PostsExcerpt from './postsExcerpt'

const Posts = () => {
  const dispatch = useDispatch()
    const posts = useSelector(selectAllPosts)
    const postsStatus = useSelector(getPostsStatus)
    const postsError = useSelector(getPostsError)

    useEffect(() => {
      if(postsStatus === 'idle'){
        dispatch(fetchPosts())
      }

    },[postsStatus , dispatch])

    const orderedPosts = posts.slice().sort((a , b) => b.date.localeCompare(a.date));
    const renderedPosts = orderedPosts.map(post => (
      <PostsExcerpt post = {post}/>
    ))
  return (
    <>
    <section>
        <h2>Posts</h2>
        {renderedPosts}
    </section>
      
    </>
  )
}

export default Posts
