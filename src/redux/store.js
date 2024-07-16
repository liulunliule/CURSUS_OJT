import { combineReducers, configureStore } from "@reduxjs/toolkit";
import savedCourseReducer from "./features/savedCourseSlice";
import userSlice from "./features/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
// export const store = configureStore({
//     reducer: {
//         savedCourse: savedCourseReducer,
//         user: userSlice,
//     },
// });

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user", "savedCourse"],
};

const rootReducer = combineReducers({
    user: userSlice,
    savedCourse: savedCourseReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
