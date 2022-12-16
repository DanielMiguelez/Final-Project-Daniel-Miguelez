import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { createPost } from "../../../features/posts/postSlice";


const AddPost = () => {
  const [formData, setFormData] = useState({
    name: "",
    body: "",
  });
  const { name, body } = formData;

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    navigate("/posts")
  }, [])
  
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(formData))
  };

  return (
    <form onSubmit={onSubmit}>
    <h4>Create your Post</h4>
      <input type="text" name="name" value={name} onChange={onChange} />
      <input type="text" name="body" value={body} onChange={onChange} />
      <button type="submit" >Create Post</button>
    </form>
  );
};

export default AddPost;
