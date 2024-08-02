import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchLiveChat = createAsyncThunk(
  'liveChat/fetchLiveChat',
  async () => {
    const response = await fetch('https://6696231a0312447373c1386e.mockapi.io/liveChat');
    const data = await response.json();
    return data;
  }
);

export const addChatMessage = createAsyncThunk(
    'liveChat/addChatMessage',
    async (newMessage) => {
      const response = await fetch('https://6696231a0312447373c1386e.mockapi.io/liveChat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMessage),
      });
      const data = await response.json();
      return data;
    }
  );

const liveChatSlice = createSlice({
  name: 'liveChat',
  initialState: {
    chatContent: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLiveChat.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLiveChat.fulfilled, (state, action) => {
        state.loading = false;
        state.chatContent = action.payload;
      })
      .addCase(fetchLiveChat.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addChatMessage.fulfilled, (state, action) => {
        state.chatContent.push(action.payload);
      });
  },
});

export default liveChatSlice.reducer;
