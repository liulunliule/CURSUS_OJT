import { configureStore } from "@reduxjs/toolkit";
import savedCourseReducer from "./features/savedCourseSlice";

export const store = configureStore({
    reducer: {
        savedCourse: savedCourseReducer,
    },
});
