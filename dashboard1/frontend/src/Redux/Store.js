import { configureStore } from "@reduxjs/toolkit";

import navbarSlice from "./Features/NavbarSlice";

import searchModalSlice from "./Features/SearchModalSlice";

export default configureStore({
  reducer: {
    navbar: navbarSlice.reducer,

    searchModal: searchModalSlice.reducer,
  },
});
