import axios from "axios";

const API_URL = "http://localhost:3001";

const createComment = async (FormData) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.post(API_URL + "/comments/createComment", FormData, {
      headers: {
        authorization: user?.token,
      },
    });
  
    return res.data;
  };

  const commentsService = {
    createComment,
  };
  
  export default commentsService;