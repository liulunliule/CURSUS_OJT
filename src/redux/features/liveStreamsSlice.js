import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchLiveStreams = createAsyncThunk(
  'liveStreams/fetchLiveStreams',
  async () => {
    const response = await fetch('https://66908324c0a7969efd9c4d55.mockapi.io/liveInstructor');
    return response.json();
  }
);

const liveStreamsSlice = createSlice({
  name: 'liveStreams',
  initialState: {
    liveStreams: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLiveStreams.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLiveStreams.fulfilled, (state, action) => {
        state.loading = false;
        state.liveStreams = action.payload;
      })
      .addCase(fetchLiveStreams.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default liveStreamsSlice.reducer;