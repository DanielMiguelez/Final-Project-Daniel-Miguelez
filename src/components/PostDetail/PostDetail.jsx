import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deletePostById, getPostById } from "../../features/posts/postsSlice";
import {  Modal, Result } from "antd";
import { useState } from "react";
import "./PostDetail.scss";
import AddComment from "../Comments/AddComment/AddComment";

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { post } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);
  const [isModalOpen, setIsModalOpen, ] = useState(false);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false)
  const images = "https://c4.wallpaperflare.com/wallpaper/671/25/110/australia-paisaje-pueblo-wallpaper-preview.jpg"

  const showModal = () => {
    setOpen(true);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const deletePost = () => {
    dispatch(deletePostById(post._id));
    showModal();
    setTimeout(() => {
      navigate("/");
    }, 4000);
  };

  useEffect(() => {
    dispatch(getPostById(id));
    navigate("./");
  }, []);

  return (
    <div className="postdetaildiv">
      
      {" "}
      <h4>Here you can see your Post!</h4>
      <div className="postdetailed">
      <img src={images} width={400} height={200} />
      <p> {post.name}</p>
      <p> {post.body}</p>
      {post.commentIds?.map(comment=> <p>Comments: <br />
      {comment.comment}</p>)}
      </div>

      {visible? <AddComment _id={id}/> : null}

      {user.user?._id === post.userId ?   (
        <>
          <button onClick={() => deletePost(post._id)}>Delete post</button>
          <button onClick={() => setVisible(post._id)}>Comment</button>
        </>
      ) : (
        ""
      )}
      
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
        <Result
          status="success"
          title="Congratulations, your post was deleted."
        />
      </Modal>
    </div>
  );
};

export default PostDetail;
