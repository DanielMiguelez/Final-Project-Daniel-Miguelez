import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { like, dislike, getPostById } from "../../../features/posts/postsSlice";
import { Link } from "react-router-dom";
import "./Post.scss";
import { HeartFilled, HeartOutlined, EditOutlined } from "@ant-design/icons";
import EditModal from "./EditModal/EditModal";

const Post = () => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
 
  const images = "https://c4.wallpaperflare.com/wallpaper/671/25/110/australia-paisaje-pueblo-wallpaper-preview.jpg"

  const showModal = (_id) => {
    dispatch(getPostById(_id));
    setIsModalVisible(true);
  };

  if (isLoading) {
    return <h1>Loading data...</h1>;
  }

  const post = posts?.map((post) => {
    const isAlreadyLiked = post?.likes?.includes(user?.user._id);
    if(!post){
      return <h1>Loading post</h1>
    }
    return (
      <div key={post._id} className="postdiv">
        <img src={images} width={400} height={200} />
        <Link to={"/post/" + post._id}>
          <p> <br /> {post.name}</p>
          <p> {post.body}</p> <p> <HeartFilled/> {post?.likes?.length}</p>
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
