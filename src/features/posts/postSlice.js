import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postsService from "./postsService";

const initialState = {
  posts: [],
  isLoading: false,
  post: {},
};

export const getAllPosts = createAsyncThunk("posts/getAllPosts", async () => {
  try {
    return await postsService.getAllPosts();
  } catch (error) {
    console.error(error);
  }
});

export const getPostById = createAsyncThunk(
  "posts/getPostsById",
  async (id) => {
    try {
      return await postsService.getPostById(id);
    } catch (error) {
      console.error(error);
    }
  }
);
export const getPostByName = createAsyncThunk(
  "posts/getPostsByName",
  async (name) => {
    try {
      return await postsService.getPostByName(name);
    } catch (error) {
      console.error(error);
    }
  }
);
export const deletePostById = createAsyncThunk(
  "posts/deletePost",
  async (id) => {
    try {
      return await postsService.deletePostById(id);
    } catch (error) {
      console.error(error);
    }
  }
);
export const createPost = createAsyncThunk(
  "posts/createPost",
  async (postData) => {
    try {
      return await postsService.createPost(postData);
    } catch (error) {
      console.error(error);
    }
  }
);
export const like = createAsyncThunk("posts/likes", async (_id) => {
  try {
    return await postsService.like(_id);
  } catch (error) {
    console.error(error);
  }
});
export const dislike = createAsyncThunk("posts/deleteLike", async (_id) => {
  try {
    return await postsService.dislike(_id);
  } catch (error) {
    console.error(error);
  }
});

export const getPostsById = createAsyncThunk("books/getPostsById", async (_id) => {
  try {
    return await postsService.getPostById(_id);
  } catch (error) {
    console.error(error);
  }
});

export const updatePost = createAsyncThunk("posts/updatePost/", async (post) => {
  try {
    return await postsService.updatePost(post);
  } catch (error) {
    console.error(error);
  }
});


export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(getAllPosts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getPostById.fulfilled, (state, action) => {
        state.post = action.payload;
      })
      .addCase(getPostByName.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts = [action.payload.post, ...state.posts];
      })
      .addCase(like.fulfilled, (state, action) => {
        const posts = state.posts.map((post) => {
          console.log(typeof action.payload._id);
          if (post._id === action.payload._id) {
            post = action.payload;
          }
          return post;
        });
        state.posts = posts;
      })
      .addCase(dislike.fulfilled, (state, action) => {
        const posts = state.posts.map((post) => {
          console.log(typeof action.payload._id);
          if (post._id === action.payload._id) {
            post = action.payload;
          }
          return post;
        });
        state.posts = posts;
      })
      .addCase(deletePostById.fulfilled, (state, action) => {
        const posts = state.posts.map((post) => {
          console.log(typeof action.payload._id);
          if (post._id === action.payload._id) {
            post = action.payload;
          }
          return post;
        });
        state.posts = posts;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const posts = state.posts.map((post) => {
          if (post._id === action.payload.post._id) {
            post = action.payload.post;
          }
          return post;
        });
        state.posts = posts;
      });

  },
});

export const { reset } = postSlice.actions;
export default postSlice.reducer;
