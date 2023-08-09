import React from 'react'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'

const PostsExcerpt = ({post}) => {
  return (
    <article className='bg-blue-950 p-4 border rounded-lg shadow m-2' >
    <h3 className='text-lg font-bold text-white'>{post.title}</h3>
    <p className='text-md  text-white'>{post?.content?.substring(0,100)}</p>
    <p>
      <PostAuthor userId={post.userId}/>
      <TimeAgo timeStamp={post.date} />
     
    </p>
    
      <ReactionButtons post={post} />
    
</article>
  )
}

export default PostsExcerpt
