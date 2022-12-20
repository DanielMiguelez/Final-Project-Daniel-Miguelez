import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllPosts } from '../../features/posts/postSlice'
import PostAdmin from './PostAdmin/PostAdmin'
import "./Admin.scss";

const Admin = () => {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getAllPosts())
    }, [])
    
  return (
    <div className='adminDiv'>Only you, as Admin, can see this Page
      <div className='postsCreated'>
        <PostAdmin/>
      </div>
    </div>
  )
}

export default Admin