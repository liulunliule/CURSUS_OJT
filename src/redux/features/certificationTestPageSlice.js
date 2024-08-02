import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching questions
export const fetchQuestions = createAsyncThunk(
  'certificationTestPage/fetchQuestions',
  async () => {
    const response = await fetch('https://66753c2ba8d2b4d072ef3683.mockapi.io/Test');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  }
);

const certificationTestPageSlice = createSlice({
  name: 'certificationTestPage',
  initialState: {
    questions: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.status = 'loading'; // Set loading state
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Set succeeded state
        state.questions = action.payload; // Set questions data
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.status = 'failed'; // Set failed state
        state.error = action.error.message; // Set error message
      });
  },
});

export default certificationTestPageSlice.reducer;
