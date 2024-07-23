import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCourse = createAsyncThunk(
    "course/fetchCourse",
    async (userId) => {
        const response = await axios.get(
            `https://6696231a0312447373c1386e.mockapi.io/savedCourse?userId=${userId}`
        );
        return response.data;
    }
);

export const fetchCourseDetail = createAsyncThunk(
    "course/fetchCourseDetail",
    async (courseDetailId) => {
        const response = await axios.get(
            `https://6696231a0312447373c1386e.mockapi.io/savedCourse/${courseDetailId}`
        );
        return response.data;
    }
);

export const removeSavedCourse = createAsyncThunk(
    "course/removeSavedCourse",
    async ({ userId, courseId }) => {
        console.log("Check id:", courseId);
        await axios.delete(
            `https://6696231a0312447373c1386e.mockapi.io/user/${userId}/savedCourse/${courseId}`
        );
        return { courseId };
    }
);

const initialState = {
    courses: [],
    isLoading: false,
    isError: false,

    courseDetail: {},
    isLoadingDetail: false,
    isErrorDetail: false,
};

const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {},
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

        // Cook status of fetchCourseDetail
        builder.addCase(fetchCourseDetail.pending, (state, action) => {
            state.isLoadingDetail = true;
            state.isErrorDetail = false;
        });
        builder.addCase(fetchCourseDetail.fulfilled, (state, action) => {
            state.courseDetail = action.payload;
            state.isLoadingDetail = false;
            state.isErrorDetail = false;
        });
        builder.addCase(fetchCourseDetail.rejected, (state, action) => {
            state.isLoadingDetail = false;
            state.isErrorDetail = true;
        });

        //Cook status remove saved courses
        builder.addCase(removeSavedCourse.fulfilled, (state, action) => {
            state.courses = state.courses.filter(
                (course) => course.id !== action.payload
            );
        });
    },
});

export default courseSlice.reducer;
