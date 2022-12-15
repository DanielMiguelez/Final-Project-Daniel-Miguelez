import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "./Post.scss";

const Post = () => {
  const {posts, isLoading} = useSelector(state => state.posts)
  if(isLoading){
    return <h1>Loading data...</h1>
  }
  return (
  
    <div className='postpadre'>Post
      {posts.map((post) => 
      <div key={post._id} className="postdiv">
      <Link to ={"/post/" + post._id}>
      <p> {post.name}</p>
      <p> {post.body}</p>

      </Link>
      </div>
      )}
    </div>
  )
}

export default Post