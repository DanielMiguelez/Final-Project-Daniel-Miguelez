import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllPosts } from '../../features/posts/postSlice'
import PostAdmin from './PostAdmin/PostAdmin'

const Admin = () => {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getAllPosts())
    }, [])
    
  return (
    <div>Admin
        <PostAdmin/>
    </div>
  )
}

export default Admin