import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { like, dislike, updatePostByid } from "../../../features/posts/postSlice";
import { Link } from "react-router-dom";
import "./Post.scss";
import {
  HeartFilled,
  HeartOutlined
} from "@ant-design/icons";


const Post = () => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const {user} = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  if (isLoading) {
    return <h1>Loading data...</h1>;
  }

  const post = posts?.map((post) => {
  const isAlreadyLiked = post.likes?.includes(user?.user._id);


    return (
      <div key={post._id} className="postdiv">
        <Link to={"/post/" + post._id}>
          <p> Created by : {post.userId.name}</p> <p> Post Title {post.name}</p> <p> {post.body}</p>  <p>Likes: {post.likes.length}</p>
        </Link>

      

        {isAlreadyLiked ? (
          <HeartFilled onClick={() => dispatch(dislike(post._id))} />
        ) : (
          <HeartOutlined onClick={() => dispatch(like(post._id))} />
        )}
      </div>
    );
  });
  
  return <div className="postpadre">
    {post}    
    </div>;
};

export default Post;
