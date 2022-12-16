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

const deletePostById = async (id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.delete(API_URL + "/posts/deletePost/" + id,
  {
    headers: {
      authorization: user?.token,
    },
  }
  );
  return res.data;
}



const postsService = {
  getAllPosts,
  getPostById,
  getPostByName,
  deletePostById
};

export default postsService;
