import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPosts, reset } from "../../features/posts/postsSlice";
import AddPost from "./AddPost/AddPost";
import Post from "./Post/Post";
import "./Posts.scss";

const Posts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
    dispatch(reset());
  }, []);

  return (
    <div>
      <h4>
        <AddPost />
      </h4>
      <h1>Posts</h1>
      <div className="posts">
      <Post />
      </div>
    </div>
  );
};

export default Posts;
