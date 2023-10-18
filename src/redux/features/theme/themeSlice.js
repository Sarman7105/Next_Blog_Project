"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

const theme = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload;
        },
    }
})
export const { setTheme} = theme.actions;
export default theme.reducer;