import axios from "axios";

const API_URL = "http://localhost:3001";

const getAllPosts = async () => {
  const res = await axios.get(API_URL + "/posts/getAll");
  return res.data;
};
const getPostById = async (_id) => {
  const res = await axios.get(API_URL + "/posts/getPostsById/" + _id);
  return res.data;
};
const getPostByName = async (name) => {
  const res = await axios.get(API_URL + "/posts/getPostsByName/" + name);
  return res.data;
};

const createPost = async (postData) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.post(API_URL + "/posts/createPost", postData, {
    headers: {
      authorization: user?.token,
    },
  });

  return res.data;
};

const deletePostById = async (id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.delete(API_URL + "/posts/deletePost/" + id, {
    headers: {
      authorization: user?.token,
    },
  });
  return res.data;
};

const like = async (_id) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const res = await axios.put(
    API_URL + "/posts/likes/" + _id,
    {},
    {
      headers: {
        authorization: user?.token,
      },
    }
  );
 
  return res.data;
};
const dislike = async (_id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.put(
    API_URL + "/posts/deleteLike/" + _id,
    {},
    {
      headers: {
        authorization: user?.token,
      },
    }
  );
 
  return res.data;
};
const updatePost = async (post) => {
  const res = await axios.put(API_URL + "/books/updatePost"+ post._id, post);
  return res.data;
};




const postsService = {
  getAllPosts,
  getPostById,
  getPostByName,
  deletePostById,
  createPost,
  like,
  dislike,
  updatePost
  
};

export default postsService;
