import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// // Thunks to fetch and update data
// export const fetchOrder = createAsyncThunk(
//   'checkout/fetchOrder',
//   async (userId) => {
//     const response = await axios.get(`https://6696231a0312447373c1386e.mockapi.io/user/${userId}/Order/1`);
//     return response.data;
//   }
// );

export const fetchAddr = createAsyncThunk(
  'checkout/fetchAddr',
  async (userId) => {
    const response = await axios.get(`https://6696231a0312447373c1386e.mockapi.io/user/${userId}/addr/${userId}`);
    return response.data;
  }
);

export const updateAddress = createAsyncThunk(
  'checkout/updateAddress',
  async ({ userId, addrId, addr }) => {
    const response = await axios.put(`https://6696231a0312447373c1386e.mockapi.io/user/${userId}/addr/${addrId}`, addr);
    return response.data;
  }
);

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    order: [],
    addr: {
      AcademyName: "",
      Country: "",
      Address1: "",
      Address2: "",
      City: "",
      State: "",
      ZipCode: "",
      phone: "",
      userName: "",
    },
    status: 'idle',
    error: null,
  },
  reducers: {
    setAddr: (state, action) => {
      state.addr = action.payload;
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddr.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAddr.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.addr = action.payload;
      })
      .addCase(fetchAddr.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateAddress.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateAddress.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.addr = action.payload;
      })
      .addCase(updateAddress.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setAddr, setActiveTab } = checkoutSlice.actions;

export default checkoutSlice.reducer;
