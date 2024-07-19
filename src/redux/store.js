import { configureStore } from "@reduxjs/toolkit";
import savedCourseReducer from "./features/savedCourseSlice";
import blogReducer from './features/ourBlogSlice';
import officesReducer from './features/officesSlice';
import pressReducer from './features/pressSlice';

export const store = configureStore({
    reducer: {
        savedCourse: savedCourseReducer,
        blogs: blogReducer,
        offices: officesReducer,
        press: pressReducer,
    },
});
