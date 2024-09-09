import { createSlice } from "@reduxjs/toolkit";

// Initial state of the navbar
const initialState = {
    displayNavbar: false,
};

// Create the slice
const navbarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        // Action to show the navbar
        showNavbar(state) {
            state.displayNavbar = true;
        },
        // Action to hide the navbar
        hideNavbar(state) {
            state.displayNavbar = false;
        },
        // Action to toggle the navbar
        toggleNavbar(state) {
            state.displayNavbar = !state.displayNavbar;
        },
    },
});

// Export actions to be used in components
export const { showNavbar, hideNavbar, toggleNavbar } = navbarSlice.actions;

// Export the reducer to be used in the store
export default navbarSlice;
