import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { getPostByName } from '../../features/posts/postsSlice'
import Posts from '../Posts/Posts';
import "./Search.scss";

const Search = () => {
  const {postName} = useParams( )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPostByName(postName))
}, [postName]);

  
  return (
    <div className='searchdiv'>
      <Posts/>
      </div>
  )
}

export default Search 