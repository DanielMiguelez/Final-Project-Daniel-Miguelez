import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import commentsService from "./commentsService";

const initialState = {
    comments: {},
  };

export const createComment = createAsyncThunk(
    "comments/createComment",
    async (formData) => {
      try {
        return await commentsService.createComment(formData);
      } catch (error) {
        console.error(error);
      }
    }
  );


  export const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
      reset: (state) => {
        state.isLoading = false;
      },
    },

    });
    
    export const { reset } = commentsSlice.actions;
    export default commentsSlice.reducer;