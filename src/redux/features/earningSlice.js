import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch top countries data
export const fetchTopCountries = createAsyncThunk('earnings/fetchTopCountries', async () => {
  const response = await axios.get('https://6696231a0312447373c1386e.mockapi.io/TopCountry');
  return response.data;
});

export const fetchEarningTable = createAsyncThunk(
    'earnings/fetchEarningTable',
    async () => {
      const response = await axios.get('https://6696231a0312447373c1386e.mockapi.io/earningTable');
      return response.data;
    }
  );

const earningSlice = createSlice({
  name: 'earnings',
  initialState: {
    topCountries: [],
    earningTable: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(fetchTopCountries.fulfilled, (state, action) => {
        state.topCountries = action.payload;
      })
        .addCase(fetchEarningTable.fulfilled, (state, action) => {
        state.earningTable = action.payload;
        // console.log("earningTable");
      });
  },
});

export default earningSlice.reducer;
