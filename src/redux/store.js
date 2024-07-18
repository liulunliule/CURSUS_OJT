import { configureStore } from "@reduxjs/toolkit";
import savedCourseReducer from "./features/savedCourseSlice";
import liveStreamsReducer from './features/liveStreamsSlice';
import chatContentReducer from './features/chatContentSlice';

export const store = configureStore({
    reducer: {
        savedCourse: savedCourseReducer,
        liveStreams: liveStreamsReducer,
        chatContent: chatContentReducer,
    },
});
