import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchStatementTable = createAsyncThunk(
  'statement/fetchStatementTable',
  async (userId) => {
    const response = await axios.get(`https://6696231a0312447373c1386e.mockapi.io/user/${userId}/Statement_Table`);
    return response.data;
  }
);

export const fetchInstructorStatement = createAsyncThunk(
  'statement/fetchInstructorStatement',
  async (userId) => {
    const response = await axios.get(`https://6696231a0312447373c1386e.mockapi.io/user/${userId}/Instructor_Statement/1`);
    return response.data;
  }
);

const statementSlice = createSlice({
  name: 'statement',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
    instructorData: {
      funds: 0,
      Earnings: 0,
      Fees: 0,
    },
    instructorStatus: 'idle',
    instructorError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStatementTable.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchStatementTable.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchStatementTable.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchInstructorStatement.pending, (state) => {
        state.instructorStatus = 'loading';
      })
      .addCase(fetchInstructorStatement.fulfilled, (state, action) => {
        state.instructorStatus = 'succeeded';
        state.instructorData = action.payload;
      })
      .addCase(fetchInstructorStatement.rejected, (state, action) => {
        state.instructorStatus = 'failed';
        state.instructorError = action.error.message;
      });
  },
});

export default statementSlice.reducer;
