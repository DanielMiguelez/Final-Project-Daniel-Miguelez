import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { like } from "../../../features/posts/postSlice";
import { Link, useNavigate } from "react-router-dom";
import "./Post.scss";
import { HeartOutlined } from "@ant-design/icons";

const Post = () => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  if (isLoading) {
    return <h1>Loading data...</h1>;
  }
  const post = posts.map((post) => {
    return (
      <div key={post._id} className="postdiv">
        <Link to={"/post/" + post._id}>
          <p> Created by : {post.userId.name}</p>
          <p> Post Title {post.name}</p>
          <p> {post.body}</p>
          <p>Likes: {post.likes.length}</p>
        </Link>
        <button onClick={() => dispatch(like(post._id))} className="likeButton">
          +1
        </button>
        <HeartOutlined />
      </div>
    );
  });
  return <div className="postpadre">
    {post}    
    </div>;
};

export default Post;
