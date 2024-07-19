import { configureStore } from "@reduxjs/toolkit";
import savedCourseReducer from "./features/savedCourseSlice";
import creditsReducer from "./features/creditsSlice";

export const store = configureStore({
    reducer: {
        savedCourse: savedCourseReducer,
        credits: creditsReducer,
    },
});
