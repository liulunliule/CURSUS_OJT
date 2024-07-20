import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserInfo = createAsyncThunk(
  "myProfile/fetchUserInfo",
  async () => {
    const response = await axios.get(
      "https://66751909a8d2b4d072eeb172.mockapi.io/InstructorProfile"
    );
    return response.data;
  }
);

export const fetchUserPosts = createAsyncThunk(
  "myProfile/fetchUserPosts",
  async () => {
    const response = await axios.get(
      "https://6677cf6e0bd45250561c9488.mockapi.io/course"
    );
    return response.data;
  }
);

export const fetchUserReviews = createAsyncThunk(
  "myProfile/fetchUserReviews",
  async () => {
    const response = await axios.get(
      "https://6677cf6e0bd45250561c9488.mockapi.io/reviews"
    );
    return response.data;
  }
);

export const fetchSubscriptions = createAsyncThunk(
  "myProfile/fetchSubscriptions",
  async () => {
    const response = await axios.get(
      "https://6678f8ae0bd4525056207d59.mockapi.io/subscriptions"
    );
    return response.data;
  }
);
export const fetchUsers = createAsyncThunk("myProfile/fetchUsers", async () => {
  const response = await axios.get(
    "https://6678f8ae0bd4525056207d59.mockapi.io/all_instructor"
  );
  return response.data;
});
const myProfileSlice = createSlice({
  name: "myProfile",
  initialState: {
    userInfo: [],
    userPosts: [],
    userReviews: [],
    subscriptions: [],
    all_instructor: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userInfo = action.payload;
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchUserPosts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUserPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userPosts = action.payload;
      })
      .addCase(fetchUserPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchUserReviews.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUserReviews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userReviews = action.payload;
      })
      .addCase(fetchUserReviews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchSubscriptions.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchSubscriptions.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.subscriptions = action.payload;
      })
      .addCase(fetchSubscriptions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.all_instructor = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default myProfileSlice.reducer;
