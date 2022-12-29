import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deletePostById, getPostById } from "../../features/posts/postsSlice";
import {  Modal, Result } from "antd";
import { useState } from "react";
import "./PostDetail.scss";
import { createComment } from "../../features/comments/commentsSlice";

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { post } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
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
      <p> {post.userId}</p>
      <p> {post.name}</p>
      <p> {post.body}</p>
      </div>
      {user.user?._id === post.userId ? (
        <>
          <button onClick={() => deletePost(post._id)}>Delete post</button>
          <button onClick={() => createComment(id)}>Comment</button>
        </>
      ) : (
        ""
      )}
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Result
          status="success"
          title="Enhorabuena, tu post ha sido eliminado."
        />
      </Modal>
    </div>
  );
};

export default PostDetail;
