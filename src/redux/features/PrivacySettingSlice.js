import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPrivacySettingData = createAsyncThunk('privacySetting/fetchPrivacySettingData', async () => {
  const response = await axios.get(
    'https://6696231a0312447373c1386e.mockapi.io/SettingPrivacyTab/1'
  );
  return response.data;
});

export const updatePrivacySettingData = createAsyncThunk('privacySetting/updatePrivacySettingData', async (switchStates) => {
  await axios.put(
    'https://6696231a0312447373c1386e.mockapi.io/SettingPrivacyTab/1',
    switchStates
  );
});

const privacySettingSlice = createSlice({
  name: 'privacySetting',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPrivacySettingData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPrivacySettingData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchPrivacySettingData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updatePrivacySettingData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updatePrivacySettingData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.meta.arg;
      })
      .addCase(updatePrivacySettingData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default privacySettingSlice.reducer;
