import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createComment } from "../../../features/comments/commentsSlice";
import "./AddComment.scss"

const AddComment = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    body: "",
  });
  const { body } = formData;

  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createComment(formData));
    console.log(formData)
  };

  return (
    <div className="formdiv">
        <form className="formcomment" >
          <h4>Comment here</h4>
          <input type="text" name="body" value={body} onChange={onChange} />
          <button onClick={onSubmit} type="submit">Comment</button>
        </form>
    </div>
  );
};

export default AddComment;