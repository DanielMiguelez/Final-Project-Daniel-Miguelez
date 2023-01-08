import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { createComment } from "../../../features/comments/commentsSlice";
import "./AddComment.scss"

const AddComment = () => {
  const {_id} = useParams()
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    comment: "",
    postIds:_id
  });
  const { comment, postIds  } = formData;

  const clearState = () => {
    setFormData({
      comment: "",
      postIds:""
    });
  };

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
    clearState()
  };

  return (
    <div className="formdiv">
        <form className="formcomment" >
          <h4>Comment here</h4>
          <input type="text" name="comment" value={comment} onChange={onChange} />
          <button onClick={onSubmit} type="submit">Comment</button>
        </form>
    </div>
  );
};

export default AddComment;
