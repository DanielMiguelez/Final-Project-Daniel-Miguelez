import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePostById, getAllPosts } from "../../../features/posts/postSlice";
import "./PostAdmin.scss";

const PostAdmin = () => {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const deletePost = async (id) => {
   await dispatch(deletePostById(id));
   dispatch(getAllPosts())
  };

  const post = posts.map((post) => {
    return (
      <div className="PostAdminDiv">
        <p>{post.name}</p>
        <p>{post.body}</p>
        <button onClick={()=>deletePost(post._id)}>Delete </button>
      </div>
    );
  });
  return <div>{post}</div>;
};

export default PostAdmin;
