import React, { useEffect } from 'react'
import Post from './Post/Post'
import {useDispatch} from 'react-redux'
import { getAllPosts, reset } from '../../features/posts/postSlice'


const Posts = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllPosts());
    dispatch(reset())
    
    }, []);

  return (
    <div>
      <h1>Posts</h1>
      <Post/>
      
    </div>
  )
}

export default Posts