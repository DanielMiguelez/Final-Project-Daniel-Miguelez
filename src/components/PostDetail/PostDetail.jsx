import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPostById } from '../../features/posts/postSlice'

const PostDetail = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const { post } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(getPostById(id))
      },
     [])
    
  return (
    <div>PostDetail
      <p> {post.userId}</p>
      <p> User: {post.name}</p>
      <p> Info Post:  {post.body}</p>
     
    </div>
  )
}

export default PostDetail