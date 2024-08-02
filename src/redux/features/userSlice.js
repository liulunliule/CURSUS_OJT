import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    account: {
        userName: "",
        email: "",
        password: "",
        phone: "",
        gender: false,
        avatar: "",
        role: "",
        enrolledCourses: "",
        major: " ",
        enrollStudents: "",
        aboutme: "",
        subscriptions: "",
        reviews: "",
        purchased: "",
        certificate: "",
        id: "",
    },
    isAuthenticated: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        fetchUserLoginSuccess: (state, action) => {
            // console.log("Check action: ", action.payload);
            state.account = {
                userName: action?.payload?.userName,
                email: action?.payload?.email,
                password: action,
                phone: action?.payload?.phone,
                gender: action?.payload?.gender,
                avatar: action?.payload?.avatar,
                role: action?.payload?.role,
                enrolledCourses: action?.payload?.enrolledCourses,
                major: action?.payload?.major,
                enrollStudents: action?.payload?.enrollStudents,
                aboutme: action?.payload?.aboutme,
                subscriptions: action?.payload?.subscriptions,
                reviews: action?.payload?.reviews,
                purchased: action?.payload?.purchased,
                certificate: action?.payload?.certificate,
                id: action?.payload?.id,
            };
            state.isAuthenticated = true;
        },
        doLogout: (state) => {
            state.account = {
                userName: "",
                email: "",
                password: "",
                phone: "",
                gender: false,
                avatar: "",
                role: "",
                enrolledCourses: "",
                major: " ",
                enrollStudents: "",
                aboutme: "",
                subscriptions: "",
                reviews: "",
                purchased: "",
                certificate: "",
                id: "",
            };
            state.isAuthenticated = false;
        },

        updateUser: (state, action) => {
            state.account = { ...state.account, ...action.payload };
        },
    },
});

export const { fetchUserLoginSuccess, doLogout, updateUser } =
    userSlice.actions;

export default userSlice.reducer;
