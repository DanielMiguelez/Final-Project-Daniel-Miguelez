import React, { useEffect } from 'react'
import Post from './Post/Post'
import {useDispatch} from 'react-redux'
import { getAllPosts, reset } from '../../features/posts/postSlice'
import AddPost from './AddPost/AddPost'


const Posts = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllPosts());
    dispatch(reset())
    
    }, []);

  return (
    <div><h4><AddPost/></h4>
      <h1>Posts</h1> 
      <Post/>
    </div>
    
  )
}

export default Posts