import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { createPost } from "../../../features/posts/postsSlice";
import { notification } from "antd";
import "./AddPost.scss";
import { reset } from "../../../features/auth/authSlice";

const AddPost = () => {
  const [formData, setFormData] = useState({
    name: "",
    body: "",
  });

  const { name, body } = formData;
  const dispatch = useDispatch()
  const { isSuccess, message, isError } = useSelector((state) => state.auth);
  const navigate = useNavigate()

  useEffect(() => {
    if (isSuccess) {
      notification.success({message: "Success", description: message,});
      setTimeout(() => {
        navigate("/posts");
      }, 1000);
    }
    if (isError) {
      notification.error({
        message: "There was an error publishing",
        description: message,
      });
    }
    dispatch(reset())
  }, [isSuccess, isError, message]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    dispatch(createPost(formData))
  };

  return (
    <div className="padreCreatePost">
    <form onSubmit={onSubmit} className="postForm">
    <h4>Create your Post</h4>
      <input type="text" name="name" value={name} onChange={onChange} placeholder="Title"/>
      <input type="text" name="body" value={body} onChange={onChange} placeholder="Content"/>
      <button type="submit" className="buttonexplode" >Create Post</button>
    </form>
    </div>
  );
};

export default AddPost;
