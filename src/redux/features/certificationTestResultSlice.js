import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching results
export const fetchResult = createAsyncThunk(
  'certificationTestResult/fetchResult',
  async () => {
    try {
      const response = await axios.get('https://66753c2ba8d2b4d072ef3683.mockapi.io/Result/1');
      return response.data;
    } catch (error) {
      throw new Error('Network response was not ok');
    }
  }
);

const certificationTestResultSlice = createSlice({
  name: 'certificationTestResult',
  initialState: {
    result: {},
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchResult.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchResult.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.result = action.payload;
      })
      .addCase(fetchResult.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default certificationTestResultSlice.reducer;
