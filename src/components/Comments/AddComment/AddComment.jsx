import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createComment } from "../../../features/comments/commentsSlice";
import { getPostById } from "../../../features/posts/postsSlice";
import "./AddComment.scss";

const AddComment = (props) => {
  const [formData, setFormData] = useState({
    comment: "",
    postIds: props._id,
  });
  const { comment } = formData;

  const clearState = () => {
    setFormData({
      comment: "",
      postIds: "",
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
    setTimeout(() => {
      dispatch(getPostById(props._id));
    }, 1000);
    clearState();
  };

  return (
    <div className="formdiv">
      <form className="formcomment">
        <h4>Comment here</h4>
        <input type="text" name="comment" value={comment} onChange={onChange} />
        <button onClick={onSubmit} type="submit">
          Comment
        </button>
      </form>
    </div>
  );
};

export default AddComment;
