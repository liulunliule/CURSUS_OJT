// features/certificate/certificateSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk để lấy dữ liệu từ API
export const fetchCertificates = createAsyncThunk(
  'certificate/fetchCertificates',
  async () => {
    const response = await axios.get('https://6690897fc0a7969efd9c6a33.mockapi.io/MyCertificate');
    return response.data;
  }
);

// Thunk để xóa phần tử từ API
export const fetchDeleteMyCertificate = createAsyncThunk(
  'certificate/fetchDeleteMyCertificate',
  async (id, { dispatch }) => {
    await axios.delete(`https://6690897fc0a7969efd9c6a33.mockapi.io/MyCertificate/${id}`);
    dispatch(deleteCertificate(id));
  }
);

const certificateSlice = createSlice({
  name: 'certificate',
  initialState: {
    mycertificate: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    deleteCertificate: (state, action) => {
      state.mycertificate = state.mycertificate.filter(
        (certificate) => certificate.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCertificates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCertificates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.mycertificate = action.payload;
      })
      .addCase(fetchCertificates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { deleteCertificate } = certificateSlice.actions;

export default certificateSlice.reducer;
