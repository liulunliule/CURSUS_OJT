import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchNews = createAsyncThunk('press/fetchNews', async () => {
  const response = await axios.get('https://6690833cc0a7969efd9c4da4.mockapi.io/api/press_news');
  return response.data;
});

export const fetchReleases = createAsyncThunk('press/fetchReleases', async () => {
  const response = await axios.get('https://6690833cc0a7969efd9c4da4.mockapi.io/api/press_releases');
  return response.data;
});

const pressSlice = createSlice({
  name: 'press',
  initialState: {
    news: [],
    releases: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchReleases.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReleases.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.releases = action.payload;
      })
      .addCase(fetchReleases.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default pressSlice.reducer;