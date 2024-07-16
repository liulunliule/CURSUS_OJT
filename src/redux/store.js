import { configureStore } from "@reduxjs/toolkit";
import savedCourseReducer from "./features/savedCourseSlice";
import certificateReducer from "./features/myCertificateSlice";

export const store = configureStore({
    reducer: {
        savedCourse: savedCourseReducer,
        certificate: certificateReducer,
    },
});
