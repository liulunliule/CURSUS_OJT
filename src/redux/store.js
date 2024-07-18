import { combineReducers, configureStore } from "@reduxjs/toolkit";
import savedCourseReducer from "./features/savedCourseSlice";
import certificateReducer from "./features/myCertificateSlice";
import myProfileReducer from "./features/myProfileSlice";
import myHeaderReducer from "./features/myHeaderSlice";
import mySearchReducer from "./features/mySearchSlice";
import myStudioReducer from "./features/myStudioSlice";
import userSlice from "./features/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "user",
    "savedCourse",
    "certificate",
    "myProfile",
    "myHeader",
    "mySearch",
    "myStudio",
  ],
};

const rootReducer = combineReducers({
  user: userSlice,
  savedCourse: savedCourseReducer,
  certificate: certificateReducer,
  myProfile: myProfileReducer,
  myHeader: myHeaderReducer,
  mySearch: mySearchReducer,
  myStudio: myStudioReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
