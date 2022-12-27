import React, {useState } from "react";
import { useDispatch } from 'react-redux'
import { createComment } from "../../../features/comments/commentsSlice";

const AddComment = () => {
  const [formData, setFormData] = useState({
    body: "",
  });
  const {body } = formData;

  const dispatch = useDispatch()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    dispatch(createComment(formData))
  };

  return (
    <div>
    <form onSubmit={onSubmit} >
    <h4>Comment here</h4>
      <input type="text" name="body" value={body} onChange={onChange} />
      <button type="submit" >Comment</button>
    </form>
    </div>
  );
};

export default AddComment;