import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    account: {
        access_token: "",
        refresh_token: "",
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
                access_token: action?.payload?.access_token,
                refresh_token: action?.payload?.refresh_token,
            };
            state.isAuthenticated = true;
        },
        doLogout: (state) => {
            state.account = {
                access_token: "",
                refresh_token: "",
            };
            state.isAuthenticated = false;
        },
    },
});

export const { fetchUserLoginSuccess, doLogout } = userSlice.actions;

export default userSlice.reducer;
