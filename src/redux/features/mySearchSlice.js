import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSearchResult = createAsyncThunk(
  "mySearch/searchCourse",
  async (query) => {
    const response = await axios.get(
      `https://6696231a0312447373c1386e.mockapi.io/course`,
      {
        params: { search: query },
      }
    );
    return response.data;
  }
);

export const addCourseForUser = createAsyncThunk(
  "mySearch/addCourseForUser",
  async ({ userId, course }) => {
    const response = await axios.post(
      `https://6696231a0312447373c1386e.mockapi.io/user/${userId}/courses`,
      course
    );
    return response.data;
  }
);

export const fetchAddNewCourse = createAsyncThunk(
  "mySearch/fetchAddNewCourse",
  async ({
    video,
    views,
    time,
    date,
    titilecourse,
    typecourse,
    author,
    price,
    ratting,
    level,
    saved,
    purchased,
    id,
    userId,
    shoppingCart,
    Taxes,
  }) => {
    const newCourseData = {
      video,
      views,
      time,
      date,
      titilecourse,
      typecourse,
      author,
      price,
      ratting,
      level,
      saved,
      purchased,
      id,
      userId,
      shoppingCart,
      Taxes,
    };

    const response = await axios.post(
      `https://6696231a0312447373c1386e.mockapi.io/savedCourse`,
      newCourseData
    );
    return response.data;
  }
);

const mySearchSlice = createSlice({
  name: "mySearch",
  initialState: {
    userSearch: [],
    savedCourses: [],
    status: "idle",
    error: null,
  },
  reducers: {
    updateSaved: (state, action) => {
      const index = state.userSearch.findIndex(
        (course) => course.id === action.payload.id
      );
      if (index !== -1) {
        state.userSearch[index] = action.payload;
      }
    },
    addCourse: (state, action) => {
      state.userSearch.push(action.payload);
    },

    addSavedCourse: (state, action) => {
      state.savedCourses.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResult.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchSearchResult.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userSearch = action.payload;
      })
      .addCase(fetchSearchResult.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchAddNewCourse.fulfilled, (state, action) => {
        if (!state.savedCourses) {
          state.savedCourses = [];
        }
        state.savedCourses.push(action.payload);
      });
  },
});

export const { updateSaved, addCourse, addSavedCourse } = mySearchSlice.actions;
export default mySearchSlice.reducer;
