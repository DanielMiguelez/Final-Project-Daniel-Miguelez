import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { like, dislike, updatePost, getPostById } from "../../../features/posts/postsSlice";
import { Link } from "react-router-dom";
import "./Post.scss";
import { HeartFilled, HeartOutlined, EditOutlined } from "@ant-design/icons";
import EditModal from "./EditModal/EditModal";

const Post = () => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (_id) => {

    dispatch(getPostById(_id));
    setIsModalVisible(true);
  };

  if (isLoading) {
    return <h1>Loading data...</h1>;
  }

  const post = posts?.map((post) => {
    const isAlreadyLiked = post.likes?.includes(user?.user._id);
    return (
      <div key={post._id} className="postdiv">

        <Link to={"/post/" + post._id}>
          <p> Created by : {post.userId.name}</p> <p> Post Title {post.name}</p>{" "}
          <p> {post.body}</p> <p>Likes: {post.likes.length}</p>
        </Link>

        {isAlreadyLiked ? (
          <HeartFilled onClick={() => dispatch(dislike(post._id))} />
        ) : (
          <HeartOutlined onClick={() => dispatch(like(post._id))} />
        )}

        <EditOutlined onClick={() => showModal(post._id)} />
        

      </div>
      
    );
  });

  return (
    <div>
      {post}
      <EditModal visible={isModalVisible} setVisible={setIsModalVisible} />
    </div>
  );
};

export default Post;
