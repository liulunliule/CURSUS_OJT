import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAddedCredits = createAsyncThunk('credits/fetchAddedCredits', async () => {
  const response = await axios.get('https://6691ca7d26c2a69f6e90b0fd.mockapi.io/api/added_credits');
  return response.data[0];
});

export const fetchTransactions = createAsyncThunk('credits/fetchTransactions', async () => {
  const response = await axios.get('https://6691ca7d26c2a69f6e90b0fd.mockapi.io/api/transactions');
  return response.data;
});

const creditsSlice = createSlice({
  name: 'credits',
  initialState: {
    addedCredits: {},
    transactions: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddedCredits.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAddedCredits.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.addedCredits = action.payload;
      })
      .addCase(fetchAddedCredits.rejected, (state, action) => {
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

export default creditsSlice.reducer;