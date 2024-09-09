import { configureStore } from "@reduxjs/toolkit";

import navbarSlice from "./Features/NavbarSlice";

export default configureStore({
  reducer: {
    navbar: navbarSlice.reducer,
  },
});
