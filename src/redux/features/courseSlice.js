import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCourse } from "../../services/apiService";

export const fetchCourse = createAsyncThunk("course/fetchCourse", async () => {
    const response = await axios.get(
        "https://6677cf6e0bd45250561c9488.mockapi.io/course"
    );
    return response.data;
});

const initialState = {
    courses: [],
    isLoading: false,
    isError: false,
};

const courseSlice = createSlice({
    name: "course",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCourse.pending, (state, action) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(fetchCourse.fulfilled, (state, action) => {
            state.courses = action.payload;
            state.isLoading = false;
            state.isError = false;
        });
        builder.addCase(fetchCourse.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});

export default courseSlice.reducer;
