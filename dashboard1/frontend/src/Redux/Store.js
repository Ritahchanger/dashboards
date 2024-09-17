import { configureStore } from "@reduxjs/toolkit";

import navbarSlice from "./Features/NavbarSlice";

import searchModalSlice from "./Features/SearchModalSlice";

import UpdateAccountSlice from "./Features/UpdateAccountSlice";

import FilterTableSlice from "./Features/FilterTableSlice";

export default configureStore({

  reducer: {

    navbar: navbarSlice.reducer,

    searchModal: searchModalSlice.reducer,

    updateModal: UpdateAccountSlice.reducer,

    filterModal:FilterTableSlice.reducer,

  },
});
