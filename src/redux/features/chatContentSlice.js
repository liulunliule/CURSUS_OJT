import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchChatContent = createAsyncThunk(
  'chatContent/fetchChatContent',
  async () => {
    const response = await fetch('https://66908324c0a7969efd9c4d55.mockapi.io/chatContent');
    return response.json();
  }
);

const chatContentSlice = createSlice({
  name: 'chatContent',
  initialState: {
    chatContent: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChatContent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchChatContent.fulfilled, (state, action) => {
        state.loading = false;
        state.chatContent = action.payload;
      })
      .addCase(fetchChatContent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default chatContentSlice.reducer;