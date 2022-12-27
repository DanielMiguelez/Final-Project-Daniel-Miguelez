import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import commentsService from "./commentsService";

const initialState = {
    comments: {},
  };

export const createComment = createAsyncThunk(
    "comments/createComment",
    async (_id) => {
      try {
        return await commentsService.createComment(_id);
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

    extraReducers: (builder) => {
        builder
          .addCase(createComment.fulfilled, (state, action) => {
            state.comments = [action.payload.comment, ...state.comments];
          })
    
      },
    });
    
    export const { reset } = commentsSlice.actions;
    export default commentsSlice.reducer;