import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    account: {
        access_token: "",
        refresh_token: "",
        username: "",
        email: "",
        image: "",
        role: "",
    },
    isAuthenticated: false,
};
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        fetchUserLoginSuccess: (state, action) => {
            console.log("Check action: ", action.payload);
            state.account = {
                access_token: action?.payload?.DT.access_token,
                refresh_token: action?.payload?.DT.refresh_token,
                username: action?.payload?.DT.username,
                email: action?.payload?.DT.email,
                image: action?.payload?.DT.image,
                role: action?.payload?.DT.role,
            };

            state.isAuthenticated = true;
        },
        doLogout: (state) => {
            state.account = {
                access_token: "",
                refresh_token: "",
                username: "",
                email: "",
                image: "",
                role: "",
            };
            state.isAuthenticated = false;
        },
    },
});

export const { fetchUserLoginSuccess, doLogout } = userSlice.actions;

export default userSlice.reducer;