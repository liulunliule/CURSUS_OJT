import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchOffices = createAsyncThunk(
  'offices/fetchOffices',
  async () => {
    const response = await axios.get('https://668f4a0880b313ba09178dee.mockapi.io/api/offices');
    return response.data;
  }
);

const officesSlice = createSlice({
  name: 'offices',
  initialState: {
    offices: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffices.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchOffices.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.offices = action.payload;
      })
      .addCase(fetchOffices.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default officesSlice.reducer;