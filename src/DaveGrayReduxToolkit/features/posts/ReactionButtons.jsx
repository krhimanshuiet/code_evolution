import React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAdded } from './postSlice'

const reactionEmoji = {
    thumbsUp:String.fromCodePoint(0x1F44D),
    wow:String.fromCodePoint(0x1F642),
    heart:String.fromCodePoint(0x2665),
    rocket:String.fromCodePoint(0x1F680),
    coffee:String.fromCodePoint(0x1F375)
    
}

const ReactionButtons = ({post}) => {
    const dispatch = useDispatch()

    const reactionButtons = Object.entries(reactionEmoji).map(([name , emoji]) => {
        return (
            <button
            key={name}
            type='button'
            onClick={() => dispatch(reactionAdded({postId:post.id , reaction:name}))}
            >
                {emoji} {post.reactions[name]}

            </button>
        )
    })
  return (
    <>{reactionButtons}</>
  )
}

export default ReactionButtons
