import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserMessage = createAsyncThunk(
  "myHeader/fetchUserMessage",
  async () => {
    const response = await axios.get(
      "https://6694e50b4bd61d8314c916af.mockapi.io/Message"
    );
    return response.data;
  }
);

export const fetchUserNotification = createAsyncThunk(
  "myHeader/fetchUserNotification",
  async () => {
    const response = await axios.get(
      "https://66751909a8d2b4d072eeb172.mockapi.io/notification"
    );
    return response.data;
  }
);

const myHeaderSlice = createSlice({
  name: "myHeader",
  initialState: {
    messages: [],
    notification: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserMessage.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUserMessage.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.messages = action.payload;
      })
      .addCase(fetchUserMessage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchUserNotification.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUserNotification.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.notification = action.payload;
      })
      .addCase(fetchUserNotification.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default myHeaderSlice.reducer;
