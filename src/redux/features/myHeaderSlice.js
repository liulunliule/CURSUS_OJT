import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch user messages
export const fetchUserMessage = createAsyncThunk(
  "myHeader/fetchUserMessage",
  async (userId) => {
    const response = await axios.get(
      `https://6696231a0312447373c1386e.mockapi.io/user/${userId}/message`
    );
    return response.data;
  }
);

// Fetch user notifications
export const fetchUserNotification = createAsyncThunk(
  "myHeader/fetchUserNotification",
  async (userId) => {
    const response = await axios.get(
      `https://6696231a0312447373c1386e.mockapi.io/user/${userId}/notification`
    );
    return response.data;
  }
);

// Update message seen status
export const fetchUpdateMessage = createAsyncThunk(
  "myHeader/fetchUpdateMessage",
  async ({ userId, messageId }) => {
    const response = await axios.put(
      `https://6696231a0312447373c1386e.mockapi.io/user/${userId}/message/${messageId}`,
      { seen: false }
    );
    return response.data;
  }
);

// Update notification seen status
export const fetchUpdateNotification = createAsyncThunk(
  "myHeader/fetchUpdateNotification",
  async ({ userId, notiId }) => {
    const response = await axios.put(
      `https://6696231a0312447373c1386e.mockapi.io/user/${userId}/notification/${notiId}`,
      { seen: false }
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
  reducers: {
    updateMessage: (state, action) => {
      const index = state.messages.findIndex(
        (mess) => mess.id === action.payload.id
      );
      if (index !== -1) {
        state.messages[index] = action.payload;
      }
    },
    updateNotification: (state, action) => {
      const index = state.notification.findIndex(
        (noti) => noti.id === action.payload.id
      );
      if (index !== -1) {
        state.notification[index] = action.payload;
      }
    },
  },
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
        state.messages = [];
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
        state.notification = [];
      })
      .addCase(fetchUpdateMessage.fulfilled, (state, action) => {
        const index = state.messages.findIndex(
          (message) => message.id === action.payload.id
        );
        if (index !== -1) {
          state.messages[index] = action.payload;
        }
      })
      .addCase(fetchUpdateNotification.fulfilled, (state, action) => {
        const index = state.notification.findIndex(
          (noti) => noti.id === action.payload.id
        );
        if (index !== -1) {
          state.notification[index] = action.payload;
        }
      });
  },
});

export const { updateMessage, updateNotification } = myHeaderSlice.actions;
export default myHeaderSlice.reducer;
