import { combineReducers, configureStore } from "@reduxjs/toolkit";
import savedCourseReducer from "./features/savedCourseSlice";
import liveStreamsReducer from './features/liveStreamsSlice';
import chatContentReducer from './features/chatContentSlice';
import instructorNotificationsReducer from './features/instructorNotificationsSlice';
import blogReducer from './features/ourBlogSlice';
import officesReducer from './features/officesSlice';
import pressReducer from './features/pressSlice';
import payoutReducer from './features/payoutSlice';
import creditsReducer from "./features/creditsSlice";
import certificateReducer from "./features/myCertificateSlice";
import myProfileReducer from "./features/myProfileSlice";
import myHeaderReducer from "./features/myHeaderSlice";
import mySearchReducer from "./features/mySearchSlice";
import myStudioReducer from "./features/myStudioSlice";
import allInstructorReducer from "./features/allInstructorSlice";
import reviewFeedbackReducer from "./features/reviewfeedbackSlice";
import feedbackReportReducer from "./features/feedbackvsReportSlice";
import notificationsSettingReducer from "./features/NotificationsSettingSlice";
import privacySettingReducer from "./features/PrivacySettingSlice";
import userSlice from "./features/userSlice";
import certificationTestPageReducer from "./features/certificationTestPageSlice";
import certificationTestResultReducer from "./features/certificationTestResultSlice";
import analyticsReducer from "./features/analyticsSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import courseSlice from "./features/courseSlice";
import checkoutReducer from './features/checkoutSlice';
import earningReducer from './features/earningSlice';
import statementReducer from './features/statementSlice';
import shoppingCartReducer from './features/shoppingCartSlice';
import createCourseReducer from "./features/createCourseSlice";
import liveChatReducer from "./features/liveChatSlice";

const persistConfig = {
    key: "root",
    storage,
    whitelist: [
        "user",
        "savedCourse",
        "certificate",
        "course",
        "myProfile",
        "myHeader",
        "mySearch",
        "myStudio",
        "allInstructor",
        "reviewFeedback",
        "feedbackReport",
        "notificationsSetting",
        "privacySetting",
    ],
};

const rootReducer = combineReducers({
    user: userSlice,
    savedCourse: savedCourseReducer,
    certificate: certificateReducer,
    certificationTestPage: certificationTestPageReducer,
    certificationTestResult: certificationTestResultReducer,
    analytics: analyticsReducer,
    course: courseSlice,
    myProfile: myProfileReducer,
    myHeader: myHeaderReducer,
    mySearch: mySearchReducer,
    myStudio: myStudioReducer,
    allInstructor: allInstructorReducer,
    reviewFeedback: reviewFeedbackReducer,
    feedbackReport: feedbackReportReducer,
    checkout: checkoutReducer,
    earnings: earningReducer,
    statement: statementReducer,
    credits: creditsReducer,
    payout: payoutReducer,
    blogs: blogReducer,
    offices: officesReducer,
    press: pressReducer,
    notificationsSetting: notificationsSettingReducer,
    privacySetting: privacySettingReducer,
    shoppingCart: shoppingCartReducer,
    liveStreams: liveStreamsReducer,
    chatContent: chatContentReducer,
    instructorNotifications: instructorNotificationsReducer,
    createCourse: createCourseReducer,
    liveChat: liveChatReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
