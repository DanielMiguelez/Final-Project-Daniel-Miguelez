import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePostById,
  getAllPosts,
} from "../../../features/posts/postsSlice";
import "./PostAdmin.scss";

const PostAdmin = () => {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const images =
    "https://c4.wallpaperflare.com/wallpaper/671/25/110/australia-paisaje-pueblo-wallpaper-preview.jpg";
  const deletePost = async (id) => {
    await dispatch(deletePostById(id));
    dispatch(getAllPosts());
  };

  const post = posts.map((post) => {
    return (
      <div className="PostAdminDiv">
        <img src={images} width={300} height={150} />
        <p>{post.name}</p>
        <p>{post.body}</p>
        {post.commentIds?.map((comment) => (
          <p>
            Anonymous: <br />
            {comment.comment}
          </p>
        ))}
        <button onClick={() => deletePost(post._id)}>Delete </button>
      </div>
    );
  });
  return <div>{post}</div>;
};

export default PostAdmin;
