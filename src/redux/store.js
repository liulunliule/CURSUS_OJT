import { configureStore } from "@reduxjs/toolkit";
import savedCourseReducer from "./features/savedCourseSlice";
import payoutReducer from './features/payoutSlice';

export const store = configureStore({
    reducer: {
        savedCourse: savedCourseReducer,
        payout: payoutReducer,
    },
});
