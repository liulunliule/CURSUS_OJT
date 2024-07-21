import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFeedbackReportData = createAsyncThunk('feedbackReport/fetchFeedbackReportData', async () => {
  const response = await axios.get('https://6696231a0312447373c1386e.mockapi.io/FeedbackvsReport');
  return response.data;
});

export const addFeedbackReportData = createAsyncThunk(
  'feedbackReport/addFeedbackReportData', async ({ Email, Desribe }) => {
      const response = await axios.post('https://6696231a0312447373c1386e.mockapi.io/FeedbackvsReport', {
        Email,
        Desribe,
      });
      return response.data;
  }
);

const FeedbackReportSlice = createSlice({
  name: 'feedbackReport',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeedbackReportData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFeedbackReportData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchFeedbackReportData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addFeedbackReportData.pending, (state) => {
        state.addStatus = 'loading';
      })
      .addCase(addFeedbackReportData.fulfilled, (state, action) => {
        state.addStatus = 'succeeded';
        state.data.push(action.payload);
      })
      .addCase(addFeedbackReportData.rejected, (state, action) => {
        state.addStatus = 'failed';
        state.addError = action.payload || action.error.message;
      });
  },
});

export default FeedbackReportSlice.reducer;
