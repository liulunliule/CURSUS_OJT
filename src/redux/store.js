import { configureStore } from "@reduxjs/toolkit";
import savedCourseReducer from "./features/savedCourseSlice";
import liveStreamsReducer from './features/liveStreamsSlice';
import chatContentReducer from './features/chatContentSlice';
import instructorNotificationsReducer from './features/instructorNotificationsSlice';

export const store = configureStore({
    reducer: {
        savedCourse: savedCourseReducer,
        liveStreams: liveStreamsReducer,
        chatContent: chatContentReducer,
        instructorNotifications: instructorNotificationsReducer,
    },
});
