import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { createPost } from "../../../features/posts/postsSlice";
import "./AddPost.scss";



const AddPost = () => {
  const [formData, setFormData] = useState({
    name: "",
    body: "",
  });
  const { name, body } = formData;

  const dispatch = useDispatch()
  const navigate = useNavigate()
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
      <input type="text" name="name" value={name} onChange={onChange} />
      <input type="text" name="body" value={body} onChange={onChange} />
      <button type="submit" className="buttonexplode" >Create Post</button>
    </form>
    </div>
  );
};

export default AddPost;
