import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllInstructorData = createAsyncThunk('allInstructor/fetchAllInstructorData', async () => {
  const response = await axios.get('https://66908324c0a7969efd9c4d55.mockapi.io/liveInstructor');
  return response.data;
});

const InstructorSlice = createSlice({
  name: 'allInstructor',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllInstructorData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllInstructorData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchAllInstructorData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default InstructorSlice.reducer;
