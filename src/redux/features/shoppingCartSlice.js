import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

// Define an async thunk for fetching shopping cart data
export const addCartData = createAsyncThunk(
  'shoppingCart/addCartData', async ({ video, titilecourse, typecourse, author, price ,userId }) => {
      const response = await axios.post('https://6696231a0312447373c1386e.mockapi.io/ShopingCart', {
        video,
        titilecourse,
        typecourse,
        author,
        price,
        userId,
      });
      return response.data;
  }
);

export const fetchShoppingCart = createAsyncThunk(
  'shoppingCart/fetchShoppingCart',
  async (userId) => {
    const response = await axios.get(`https://6696231a0312447373c1386e.mockapi.io/user/${userId}/ShopingCart`);
    return response.data;
  }
);

export const deleteCartItem = createAsyncThunk(
  'shoppingCart/deleteCartItem',
  async ({ userId, itemId }) => {
    const url = `https://6696231a0312447373c1386e.mockapi.io/user/${userId}/ShopingCart/${itemId}`;
    console.log("Deleting item with URL: ", url);
    await axios.delete(url);
    return itemId;
  }
);
  

// Create the slice
const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShoppingCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchShoppingCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchShoppingCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      });
  },
});

// Export the async thunk and the reducer
export default shoppingCartSlice.reducer;
