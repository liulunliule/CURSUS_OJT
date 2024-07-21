import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchNextPayout = createAsyncThunk('payout/fetchNextPayout', async () => {
  const response = await axios.get('https://6691d15226c2a69f6e90c6fa.mockapi.io/api/next_payout');
  return response.data[0];
});

export const fetchTransactions = createAsyncThunk('payout/fetchTransactions', async () => {
  const response = await axios.get('https://6691d15226c2a69f6e90c6fa.mockapi.io/api/transactions');
  return response.data;
});

const payoutSlice = createSlice({
  name: 'payout',
  initialState: {
    nextPayout: {},
    transactions: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNextPayout.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNextPayout.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.nextPayout = action.payload;
      })
      .addCase(fetchNextPayout.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchTransactions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.transactions = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default payoutSlice.reducer;