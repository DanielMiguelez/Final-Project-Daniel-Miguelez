import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllPosts } from '../../features/posts/postsSlice'
import PostAdmin from './PostAdmin/PostAdmin'
import "./Admin.scss";

const Admin = () => {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getAllPosts())
    }, [])
    
  return (
    <div>
      <h4>Only you, as Admin, can see this Page</h4>
      <div className='postsCreated'>
        <PostAdmin/>
      </div>
    </div>
  )
}

export default Admin