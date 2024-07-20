import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCourse = createAsyncThunk(
  "mySearch/fetchCourse",
  async () => {
    const response = await axios.get(
      "https://6677cf6e0bd45250561c9488.mockapi.io/course"
    );
    return response.data;
  }
);

const mySearchSlice = createSlice({
  name: "mySearch",
  initialState: {
    userSearch: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchCourse.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCourse.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userSearch = action.payload;
      })
      .addCase(fetchCourse.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default mySearchSlice.reducer;
