import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { getPostByName } from '../../features/posts/postsSlice'
import Post from '../Posts/Post/Post';
import Posts from '../Posts/Posts';

const Search = () => {
  const {postName} = useParams( )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPostByName(postName))
}, [postName]);

  
  return (
    <div>
      <Posts/>
      </div>
  )
}

export default Search 