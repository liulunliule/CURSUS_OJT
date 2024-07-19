import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStudio = createAsyncThunk(
  "myStudio/fetchStudio",
  async () => {
    const response = await axios.get(
      "https://669515364bd61d8314c9eb78.mockapi.io/studiodashboard"
    );
    return response.data;
  }
);

const myStudioSlice = createSlice({
  name: "myStudio",
  initialState: {
    userStudio: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudio.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchStudio.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userStudio = action.payload;
      })
      .addCase(fetchStudio.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default myStudioSlice.reducer;
