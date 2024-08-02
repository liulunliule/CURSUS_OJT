import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchNotificationsSettingData = createAsyncThunk('notificationsSetting/fetchNotificationsSettingData', async () => {
  const response = await axios.get(
    'https://6696231a0312447373c1386e.mockapi.io/SettingNotificationTab/1'
  );
  return response.data;
});

export const updateNotificationsSettingData = createAsyncThunk('notificationsSetting/updateNotificationsSettingData', async (switchStates) => {
  await axios.put(
    'https://6696231a0312447373c1386e.mockapi.io/SettingNotificationTab/1',
    switchStates
  );
});

const notificationsSettingSlice = createSlice({
  name: 'notificationsSetting',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotificationsSettingData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNotificationsSettingData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchNotificationsSettingData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateNotificationsSettingData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateNotificationsSettingData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.meta.arg;
      })
      .addCase(updateNotificationsSettingData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default notificationsSettingSlice.reducer;
