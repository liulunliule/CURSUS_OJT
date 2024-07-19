import { combineReducers, configureStore } from "@reduxjs/toolkit";
import savedCourseReducer from "./features/savedCourseSlice";
import certificateReducer from "./features/myCertificateSlice";
import myProfileReducer from "./features/myProfileSlice";
import myHeaderReducer from "./features/myHeaderSlice";
import mySearchReducer from "./features/mySearchSlice";
import myStudioReducer from "./features/myStudioSlice";
import allInstructorReducer from "./features/allInstructorSlice";
import userSlice from "./features/userSlice";
import certificationTestPageReducer from "./features/certificationTestPageSlice";
import certificationTestResultReducer from "./features/certificationTestResultSlice";
import analyticsReducer from "./features/analyticsSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import courseSlice from "./features/courseSlice";
// export const store = configureStore({
//     reducer: {
//         savedCourse: savedCourseReducer,
//         user: userSlice,
//     },
// });

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
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
