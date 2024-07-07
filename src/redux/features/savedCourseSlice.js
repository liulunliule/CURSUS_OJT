import { createSlice } from "@reduxjs/toolkit";

const savedCoursesSlice = createSlice({
    name: "savedCourse",
    initialState: {
        isShowAll: false,
    },
    reducers: {
        toggleShowAll(state) {
            state.isShowAll = !state.isShowAll;
        },
    },
});

export const { toggleShowAll } = savedCoursesSlice.actions;
export default savedCoursesSlice.reducer;
