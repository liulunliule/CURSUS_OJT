import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchReviewFeedbackData = createAsyncThunk('reviewFeedback/fetchReviewFeedbackData', async () => {
  const response = await axios.get('https://6690897fc0a7969efd9c6a33.mockapi.io/Feedback');
  return response.data;
});

const ReviewFeedbackSlice = createSlice({
  name: 'reviewFeedback',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviewFeedbackData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReviewFeedbackData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchReviewFeedbackData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default ReviewFeedbackSlice.reducer;
