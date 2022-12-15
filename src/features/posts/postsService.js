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

const postsService = {
  getAllPosts,
  getPostById
};

export default postsService;
