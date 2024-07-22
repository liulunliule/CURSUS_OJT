// src/features/instructorNotifications/instructorNotificationsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchInstructorNotifications = createAsyncThunk(
  'instructorNotifications/fetchInstructorNotifications',
  async () => {
    const response = await fetch('https://6696231a0312447373c1386e.mockapi.io/instructorNotifications');
    return response.json();
  }
);

const instructorNotificationsSlice = createSlice({
  name: 'instructorNotifications',
  initialState: {
    instructorNotifications: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInstructorNotifications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInstructorNotifications.fulfilled, (state, action) => {
        state.loading = false;
        state.instructorNotifications = action.payload;
      })
      .addCase(fetchInstructorNotifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default instructorNotificationsSlice.reducer;