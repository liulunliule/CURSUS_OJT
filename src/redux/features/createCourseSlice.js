import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
  newCourse: {},
  courses: [], // Add a field for storing fetched courses
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Create the async thunk for creating a new course
export const createNewCourse = createAsyncThunk(
  'course/createNewCourse',
  async (newCourse, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://6696231a0312447373c1386e.mockapi.io/course',
        newCourse
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Create the async thunk for fetching courses
export const fetchCourses = createAsyncThunk(
  'course/fetchCourses',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://6696231a0312447373c1386e.mockapi.io/course');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Create the slice
const createCourseSlice = createSlice({
  name: 'createCourse',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNewCourse.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createNewCourse.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.newCourse = action.payload;
      })
      .addCase(createNewCourse.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(fetchCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default createCourseSlice.reducer;
